/* SDAIA Academy course catalog: the script of the public site.
 *
 * Loaded in <head> so the saved theme applies before the first paint; everything else starts when
 * the document is ready. It makes no request of any kind: the course data comes from
 * assets/catalog.<lang>.js (window.CATALOG), the explorer's index from assets/courses.<lang>.js and
 * the outcomes from assets/outcomes.<lang>.js, plain scripts that assign a global. Ask AI uses
 * assets/ai.js (window.AcademyAI). Pages read as plain documents when scripts are off.
 *
 * Browser storage (the plan, the theme, the language, the explorer view) is read and written inside
 * try/catch: every page works when storage is blocked, and the plan then lives in the address.
 *
 *   1. storage, language and theme       6. My plan
 *   2. shared helpers                    7. Find my path
 *   3. the plan, its count, Add buttons  8. Ask AI
 *   4. the "/" shortcut                  9. small aids
 *   5. the course explorer
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var KEY_LANG = "sdaia-academy-catalog.lang";
  var KEY_THEME = "sdaia-academy-catalog.theme";
  var KEY_PLAN = "sdaia-academy-catalog.plan";
  var KEY_VIEW = "sdaia-academy-catalog.view";
  var KEY_TOOL = "sdaia-academy-catalog.assistant";

  /* ---------------------------------------------------------------- 1. storage, language, theme */
  var storageOk = true;
  function load(key) {
    try { return window.localStorage.getItem(key); } catch (err) { storageOk = false; return null; }
  }
  function save(key, value) {
    try { window.localStorage.setItem(key, value); return true; } catch (err) { storageOk = false; return false; }
  }

  var savedTheme = load(KEY_THEME);
  if (savedTheme === "light" || savedTheme === "dark") {
    root.setAttribute("data-theme", savedTheme);
  }
  if (root.hasAttribute("data-redirect")) {            /* the root index.html */
    var saved = load(KEY_LANG);
    if (saved !== "ar" && saved !== "en") {
      var first = String((window.navigator.languages && window.navigator.languages[0]) || window.navigator.language || "").toLowerCase();
      saved = first.indexOf("ar") === 0 ? "ar" : "en";
    }
    window.location.replace(saved + "/index.html");
    return;
  }
  if (root.lang === "en" || root.lang === "ar") {
    save(KEY_LANG, root.lang);
  }

  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) { return set; }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function initTheme() {
    var button = document.querySelector(".theme-toggle");
    if (!button) { return; }
    function label() {
      var text = currentTheme() === "dark" ? button.getAttribute("data-to-light") : button.getAttribute("data-to-dark");
      button.setAttribute("aria-label", text);
      button.title = text;
    }
    button.hidden = false;
    label();
    button.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      save(KEY_THEME, next);
      label();
    });
    if (window.matchMedia) {
      var query = window.matchMedia("(prefers-color-scheme: dark)");
      if (query.addEventListener) { query.addEventListener("change", label); }
    }
  }

  function initLanguageSwitch() {
    var link = document.querySelector(".site-header .lang-switch");
    if (!link) { return; }
    link.addEventListener("click", function () {     /* keep the fragment: the explorer's filters, a shared plan */
      link.href = link.getAttribute("href").split("#")[0] + window.location.hash;
    });
  }

  /* ---------------------------------------------------------------- 2. shared helpers */
  var C = null;                    /* window.CATALOG */
  var byCode = {};
  var lang = root.lang === "ar" ? "ar" : "en";

  function ui(key, vars) {
    var s = (C && C.ui && C.ui[key]) || key;
    if (vars) {
      Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(String(vars[k])); });
    }
    return s;
  }
  function num(n) {                                  /* 26 -> "26", 2.5 -> "2.5" */
    return String(Math.round(n * 10) / 10);
  }
  function count(kind, n) {
    var form = n === 1 ? "one" : n === 2 ? "two" : (Math.floor(n) === n && n % 100 >= 3 && n % 100 <= 10) ? "few" : "many";
    return ui("count." + kind + "." + form, { n: num(n) });
  }
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") { node.textContent = attrs[k]; } else if (k === "cls") { node.className = attrs[k]; } else { node.setAttribute(k, attrs[k]); }
    });
    (children || []).forEach(function (child) { if (child) { node.appendChild(typeof child === "string" ? document.createTextNode(child) : child); } });
    return node;
  }
  function siteRoot() {                              /* the site root, relative to this page ("../../") */
    var s = document.querySelector('script[src$="assets/site.js"]');
    return s ? s.getAttribute("src").replace(/assets\/site\.js$/, "") : "";
  }
  function langRoot() { return siteRoot() + lang + "/"; }
  function absolute(rel) {
    try { return new URL(rel, window.location.href).href; } catch (err) { return rel; }
  }
  function linked() {                                /* published Markdown can be read by an assistant only from the web */
    return /^https?:$/.test(window.location.protocol);
  }
  function llmsUrl() { return absolute(siteRoot() + (lang === "ar" ? "ar/llms.txt" : "llms.txt")); }
  function courseHref(code) { return langRoot() + "courses/" + code + ".html"; }
  function estimatedDays(c) { return c.d || Math.max(1, Math.ceil(c.h / 6)); }
  function lengthText(c) { return c.d ? count("day", c.d) + " · " + count("hour", c.h) : count("hour", c.h); }

  /* prerequisites first, ties in level and given order (as the paths on the pages) */
  function pathOrder(codes) {
    var set = {}, pos = {};
    codes.forEach(function (c, i) { set[c] = true; pos[c] = i; });
    var done = {}, out = [];
    while (out.length < codes.length) {
      var ready = codes.filter(function (c) {
        return !done[c] && (byCode[c].p || []).every(function (p) { return !set[p] || done[p]; });
      });
      if (!ready.length) { ready = codes.filter(function (c) { return !done[c]; }); }
      ready.sort(function (a, b) { return (byCode[a].l - byCode[b].l) || (pos[a] - pos[b]); });
      done[ready[0]] = true;
      out.push(ready[0]);
    }
    return out;
  }

  var toastTimer = null;
  function toast(message) {
    var box = document.getElementById("toast");
    if (!box) { return; }
    box.textContent = message;
    box.classList.add("on");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { box.classList.remove("on"); }, 6000);
  }

  /* ---------------------------------------------------------------- 3. the plan */
  function cleanCodes(list) {
    var seen = {};
    return (list || []).filter(function (c) {
      if (typeof c !== "string" || !byCode[c] || seen[c]) { return false; }
      seen[c] = true;
      return true;
    });
  }
  var memoryPlan = [];                               /* used when storage is blocked */
  function getPlan() {
    var raw = load(KEY_PLAN);
    if (raw === null) { return cleanCodes(memoryPlan); }
    try { return cleanCodes(JSON.parse(raw)); } catch (err) { return []; }
  }
  function setPlan(list) {
    memoryPlan = cleanCodes(list);
    save(KEY_PLAN, JSON.stringify(memoryPlan));
    refreshPlanUi();
  }
  function inPlan(code) { return getPlan().indexOf(code) !== -1; }
  function addToPlan(codes) {
    setPlan(getPlan().concat(codes));
  }
  function removeFromPlan(code) {
    setPlan(getPlan().filter(function (c) { return c !== code; }));
  }

  var planListeners = [];
  function refreshPlanUi() {
    var plan = getPlan();
    Array.prototype.forEach.call(document.querySelectorAll(".plan-count"), function (span) {
      span.hidden = false;
      span.textContent = " (" + plan.length + ")";
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-add]"), function (button) {
      var on = plan.indexOf(button.getAttribute("data-add")) !== -1;
      button.hidden = false;
      button.setAttribute("aria-pressed", on ? "true" : "false");
      button.textContent = on ? ui("plan.added") : ui("plan.add");
    });
    planListeners.forEach(function (f) { f(plan); });
  }

  function initPlanButtons() {
    document.addEventListener("click", function (event) {
      var add = event.target.closest ? event.target.closest("[data-add]") : null;
      if (add) {
        var code = add.getAttribute("data-add");
        if (inPlan(code)) { removeFromPlan(code); } else { addToPlan([code]); }
        return;
      }
      var all = event.target.closest ? event.target.closest("[data-add-all]") : null;
      if (all) {
        var codes = all.getAttribute("data-add-all").split(" ");
        addToPlan(codes);
        toast(ui("plan.count_aria", { n: count("course", getPlan().length) }));
      }
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-add-all]"), function (b) { b.hidden = false; });
    window.addEventListener("storage", function (event) { if (event.key === KEY_PLAN) { refreshPlanUi(); } });
    refreshPlanUi();
  }

  /* ---------------------------------------------------------------- 4. the "/" shortcut */
  function initSlash() {
    document.addEventListener("keydown", function (event) {
      if (event.key !== "/" || event.ctrlKey || event.metaKey || event.altKey) { return; }
      var t = event.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) { return; }
      var box = document.querySelector("input[data-slash]");
      event.preventDefault();
      if (box && box.offsetParent !== null) { box.focus(); box.select(); } else { window.location.href = langRoot() + "courses/index.html"; }
    });
  }

  /* ---------------------------------------------------------------- 5. explorer */
  /* Must stay in step with the normaliser that builds the course index */
  var FOLD = { "أ": "ا", "إ": "ا", "آ": "ا", "ٱ": "ا", "ى": "ي", "ة": "ه", "ؤ": "و", "ئ": "ي" };
  function normalise(text) {
    var s = String(text);
    if (s.normalize) { s = s.normalize("NFKC"); }
    return s.toLowerCase()
      .replace(/[ً-ٰٟـ]/g, "")
      .replace(/[أإآٱىةؤئ]/g, function (ch) { return FOLD[ch]; })
      .replace(/\s+/g, " ")
      .trim();
  }

  function initExplorer() {
    var form = document.getElementById("explorer");
    var index = window.CATALOG_INDEX;
    if (!form || !index || !index.courses || !C) { return; }

    var FIELDS = ["q", "track", "stream", "level", "format", "length", "language", "site", "sort"];
    var controls = {};
    FIELDS.forEach(function (name) { controls[name] = form.querySelector("[name=\"" + name + "\"]"); });
    var list = document.getElementById("results");
    var countBox = document.getElementById("result-count");
    var empty = document.getElementById("no-results");
    var template = form.getAttribute("data-count");
    var total = index.courses.length;
    var rows = {}, order = [];
    Array.prototype.forEach.call(list.querySelectorAll(":scope > li[data-code]"), function (li) {
      rows[li.getAttribute("data-code")] = li;
      order.push(li.getAttribute("data-code"));
    });
    var lengths = {};
    C.lengths.forEach(function (x) { lengths[x[0]] = [x[1], x[2]]; });

    function value(name) {
      var control = controls[name];
      if (control.type === "checkbox") { return control.checked ? "1" : ""; }
      return control.value.trim();
    }
    function setValue(name, text) {
      var control = controls[name];
      if (control.type === "checkbox") { control.checked = text === "1"; return; }
      control.value = text || "";
      if (control.tagName === "SELECT" && control.selectedIndex === -1) { control.selectedIndex = 0; }
    }

    function readUrl() {
      var state = {};
      [window.location.search.replace(/^\?/, ""), window.location.hash.replace(/^#/, "")].forEach(function (source) {
        source.split("&").forEach(function (pair) {
          var at = pair.indexOf("=");
          if (at < 1) { return; }
          var key = pair.slice(0, at);
          if (FIELDS.indexOf(key) === -1) { return; }
          try { state[key] = decodeURIComponent(pair.slice(at + 1).replace(/\+/g, " ")); } catch (err) { /* ignore a broken value */ }
        });
      });
      return state;
    }

    function writeUrl() {
      var parts = [];
      FIELDS.forEach(function (name) {
        var text = value(name);
        if (text && !(name === "sort" && text === "default")) { parts.push(name + "=" + encodeURIComponent(text)); }
      });
      var target = window.location.pathname + (parts.length ? "#" + parts.join("&") : "");
      try {
        window.history.replaceState(null, "", target);
      } catch (err) {                                   /* some browsers refuse replaceState on file:// */
        if (parts.length || window.location.hash) { window.location.hash = parts.join("&"); }
      }
    }

    function limitStreams() {                            /* a track narrows the stream list */
      var track = controls.track.value;
      Array.prototype.forEach.call(controls.stream.options, function (option) {
        var of = option.getAttribute("data-track");
        var off = Boolean(track && of && of !== track);
        option.hidden = off;
        option.disabled = off;
      });
      var chosen = controls.stream.options[controls.stream.selectedIndex];
      if (chosen && chosen.disabled) { controls.stream.value = ""; }
    }

    function sorted() {
      var how = value("sort") || "default";
      var codes = order.slice();
      var cmp = {
        code: function (a, b) { return a < b ? -1 : a > b ? 1 : 0; },
        title: function (a, b) { return byCode[a].n.localeCompare(byCode[b].n, lang); },
        level: function (a, b) { return byCode[a].l - byCode[b].l || order.indexOf(a) - order.indexOf(b); },
        "short": function (a, b) { return byCode[a].h - byCode[b].h || order.indexOf(a) - order.indexOf(b); }
      }[how];
      if (cmp) { codes.sort(cmp); }
      return codes;
    }

    var lastSort = "default";
    function apply() {
      limitStreams();
      var words = normalise(controls.q.value).split(" ").filter(Boolean);
      var track = value("track"), stream = value("stream"), level = value("level"), format = value("format"),
          length = value("length"), language = value("language"), site = value("site");
      var shown = 0;
      index.courses.forEach(function (course) {
        var c = byCode[course.c];
        var span = lengths[length];
        var ok = (!track || course.t === track) && (!stream || course.s === stream) &&
                 (!level || String(course.l) === level) && (!format || course.k === format) && (!site || course.w === 1) &&
                 (!span || (c.h >= span[0] && c.h <= span[1])) && (!language || c.g === language);
        for (var i = 0; ok && i < words.length; i += 1) {
          ok = course.x.indexOf(words[i]) !== -1;
        }
        var row = rows[course.c];
        if (row) { row.hidden = !ok; }
        if (ok) { shown += 1; }
      });
      var how = value("sort") || "default";
      if (how !== lastSort) {
        sorted().forEach(function (code) { list.appendChild(rows[code]); });
        lastSort = how;
      }
      countBox.textContent = template.replace("{n}", shown).replace("{total}", total);
      empty.hidden = shown !== 0;
    }

    function setFromUrl() {
      var state = readUrl();
      FIELDS.forEach(function (name) { setValue(name, state[name]); });
      if (!controls.sort.value) { controls.sort.value = "default"; }
      if (controls.stream.value && !controls.track.value) {       /* a stream implies its track */
        var option = controls.stream.options[controls.stream.selectedIndex];
        controls.track.value = option.getAttribute("data-track") || "";
      }
      apply();
    }

    /* grid or list: a preference of this browser */
    var buttons = form.querySelectorAll("[data-view]");
    function setView(view) {
      list.classList.toggle("view-grid", view !== "list");
      list.classList.toggle("view-list", view === "list");
      Array.prototype.forEach.call(buttons, function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-view") === view ? "true" : "false"); });
    }
    Array.prototype.forEach.call(buttons, function (b) {
      b.addEventListener("click", function () { setView(b.getAttribute("data-view")); save(KEY_VIEW, b.getAttribute("data-view")); });
    });
    setView(load(KEY_VIEW) === "list" ? "list" : "grid");

    form.hidden = false;
    form.addEventListener("submit", function (event) { event.preventDefault(); });
    form.addEventListener("input", function () { apply(); writeUrl(); });
    form.addEventListener("change", function () { apply(); writeUrl(); });
    form.addEventListener("reset", function () {
      window.setTimeout(function () { controls.sort.value = "default"; apply(); writeUrl(); controls.q.focus(); }, 0);
    });
    window.addEventListener("hashchange", setFromUrl);
    setFromUrl();
  }

  /* ---------------------------------------------------------------- 6. My plan */
  function courseItem(code, extra) {
    var c = byCode[code];
    var li = el("li", { cls: "row acc-" + c.t, "data-code": code });
    li.appendChild(el("a", { cls: "row-main", href: courseHref(code) }, [
      el("span", { cls: "code", dir: "ltr", text: code }), el("span", { cls: "row-title", text: c.n })
    ]));
    (extra || []).forEach(function (x) { if (x) { li.appendChild(x); } });
    li.appendChild(el("span", { cls: "row-meta" }, [
      el("span", { cls: "chip chip-level", text: ui("label.level_n", { n: c.l }) }),
      el("span", { cls: "chip chip-plain", text: C.formats[c.k] || c.k }),
      el("span", { cls: "chip chip-plain", text: lengthText(c) }),
      el("span", { cls: c.w ? "chip chip-ok" : "chip chip-dev", text: ui(c.w ? "status.available" : "status.dev") })
    ]));
    return li;
  }

  function totals(codes) {
    var hours = 0, days = 0, estimated = false;
    codes.forEach(function (code) {
      var c = byCode[code];
      hours += c.h;
      days += estimatedDays(c);
      if (!c.d) { estimated = true; }
    });
    var d = count("day", days);
    return ui("plan.total", { courses: count("course", codes.length), days: estimated ? ui("plan.days_about", { days: d }) : d, hours: count("hour", hours) });
  }

  function missingOf(code, codes) {
    return (byCode[code].p || []).filter(function (p) { return byCode[p] && codes.indexOf(p) === -1; });
  }

  function initPlan() {
    var box = document.getElementById("plan");
    if (!box || !C) { return; }
    var listBox = document.getElementById("plan-list");
    var totalBox = document.getElementById("plan-total");
    var emptyBox = document.getElementById("plan-empty");
    var tools = document.getElementById("plan-tools");
    var shareInput = document.getElementById("plan-link");
    var sharedBox = document.getElementById("plan-shared");
    var shared = null;

    function readShared() {
      var hash = window.location.hash.replace(/^#/, "");
      if (!hash) { return null; }
      var codes;
      try { codes = decodeURIComponent(hash).split(/[,\s]+/); } catch (err) { return null; }
      codes = cleanCodes(codes.map(function (c) { return c.toUpperCase(); }));
      return codes.length ? codes : null;
    }

    function shareLink(codes) {
      return window.location.href.split("#")[0] + (codes.length ? "#" + codes.join(",") : "");
    }

    function render() {
      var own = getPlan();
      var codes = pathOrder(shared || own);
      sharedBox.hidden = !shared;
      document.getElementById("plan-nostore").hidden = storageOk;
      listBox.textContent = "";
      codes.forEach(function (code) {
        var missing = missingOf(code, codes);
        var extra = [];
        if (missing.length) {
          var warn = el("span", { cls: "row-sub missing" }, [ui("plan.missing") + ": "]);
          missing.forEach(function (p, i) {
            if (i) { warn.appendChild(document.createTextNode(" ")); }
            warn.appendChild(el("a", { href: courseHref(p) }, [el("span", { cls: "code", dir: "ltr", text: p })]));
            if (!shared) {
              warn.appendChild(document.createTextNode(" "));
              warn.appendChild(el("button", { type: "button", cls: "btn-link", "data-plan-add": p, "aria-label": ui("plan.add_aria", { code: p }), text: ui("plan.add_missing") }));
            }
          });
          extra.push(warn);
        }
        var li = courseItem(code, extra);
        if (!shared) {
          li.appendChild(el("span", { cls: "row-end" }, [
            el("button", { type: "button", cls: "btn-add", "data-plan-remove": code, "aria-label": ui("plan.remove_aria", { code: code }), text: ui("plan.remove") })
          ]));
        }
        listBox.appendChild(li);
      });
      emptyBox.hidden = codes.length !== 0;
      tools.hidden = codes.length === 0;
      totalBox.textContent = codes.length ? totals(codes) : "";
      totalBox.title = ui("plan.days_note");
      shareInput.value = shareLink(codes);
    }

    listBox.addEventListener("click", function (event) {
      var add = event.target.closest("[data-plan-add]");
      var rem = event.target.closest("[data-plan-remove]");
      if (add) { addToPlan([add.getAttribute("data-plan-add")]); }
      if (rem) {
        var code = rem.getAttribute("data-plan-remove");
        removeFromPlan(code);
        toast(ui("plan.count_aria", { n: count("course", getPlan().length) }));
      }
    });
    document.getElementById("plan-use").addEventListener("click", function () {
      setPlan(shared); shared = null; history.replaceState(null, "", window.location.pathname); render();
    });
    document.getElementById("plan-merge").addEventListener("click", function () {
      addToPlan(shared); shared = null; history.replaceState(null, "", window.location.pathname); render();
    });
    document.getElementById("plan-copy").addEventListener("click", function () {
      window.AcademyAI.copy(shareInput.value).then(function (ok) { toast(ok ? ui("plan.copied") : ui("ai.copy_failed")); });
    });
    shareInput.addEventListener("focus", function () { shareInput.select(); });
    document.getElementById("plan-print").addEventListener("click", function () { window.print(); });
    document.getElementById("plan-clear").addEventListener("click", function () {
      if (window.confirm(ui("plan.clear_confirm"))) { setPlan([]); }
    });
    window.addEventListener("hashchange", function () { shared = readShared(); render(); });
    planListeners.push(render);
    shared = readShared();
    box.hidden = false;
    render();
  }

  /* the plan as the Ask AI material: one block per course */
  function planMaterial(codes) {
    return pathOrder(codes).map(function (code) {
      var c = byCode[code];
      var pre = (c.p || []).length ? ui("path.needs") + ": " + c.p.join(", ") : "";
      return ["## " + code + " · " + c.n, [C.levels[c.l] ? ui("label.level_n", { n: c.l }) + " " + C.levels[c.l] : "", C.formats[c.k], lengthText(c),
        ui(c.w ? "status.available" : "status.dev"), pre].filter(Boolean).join(" · ")].join("\n");
    }).join("\n\n");
  }

  /* the whole catalog as one line per course */
  function catalogMaterial(codes) {
    return (codes || C.courses.map(function (c) { return c.c; })).map(function (code) {
      var c = byCode[code];
      return "- " + code + " · " + c.n + " · " + ui("label.level_n", { n: c.l }) + " · " + count("hour", c.h) +
        " · " + C.streams[c.s].n + ((c.p || []).length ? " · " + ui("path.needs") + ": " + c.p.join(", ") : "");
    }).join("\n");
  }

  /* ---------------------------------------------------------------- 7. Find my path */
  var PASTE_BUDGET = 24000;      /* tokens of material that leave room for the request in a free plan */

  function renderTools(container, handler) {
    container.textContent = "";
    window.AcademyAI.TOOLS.forEach(function (tool) {
      var prefill = linked() && tool.url;
      var b = el("button", { type: "button", cls: "tool", "data-tool": tool.id }, [tool.name]);
      if (!prefill) { b.appendChild(el("span", { cls: "tag-paste", text: ui("ai.paste") })); }
      if (load(KEY_TOOL) === tool.id) { b.classList.add("last"); }
      b.addEventListener("click", function () { handler(tool); });
      container.appendChild(b);
    });
  }

  function useTool(tool, prompt, link) {
    save(KEY_TOOL, tool.id);
    window.AcademyAI.openTool(tool, prompt, link).then(function (r) {
      toast(!r.ok ? ui("ai.copy_failed") : r.long ? ui("ai.copied_long") : ui("ai.copied"));
    });
  }

  function renderPath(target, take, skip, ignored) {
    target.textContent = "";
    if (!take.length) { target.appendChild(el("p", { cls: "notice", text: ui("finder.none_take") })); }
    var ordered = pathOrder(take);
    if (ordered.length) {
      target.appendChild(el("h3", { text: ui("finder.take") }));
      target.appendChild(el("p", { cls: "plan-total", text: totals(ordered) }));
      var ol = el("ol", { cls: "rows view-list" });
      ordered.forEach(function (code) {
        var missing = missingOf(code, ordered).filter(function (p) { return skip.indexOf(p) === -1; });
        var extra = missing.length ? el("span", { cls: "row-sub missing", text: ui("finder.needs_also", { codes: missing.join(", ") }) }) : null;
        var li = courseItem(code, [extra]);
        ol.appendChild(li);
      });
      target.appendChild(ol);
      target.appendChild(el("p", {}, [el("button", { type: "button", cls: "btn btn-primary", "data-add-all": ordered.join(" "), text: ui("path.add_all") })]));
    }
    if (skip.length) {
      target.appendChild(el("h3", { text: ui("finder.skip") }));
      var ul = el("ul", { cls: "rows view-list" });
      skip.forEach(function (code) { ul.appendChild(courseItem(code)); });
      target.appendChild(ul);
    }
    if (ignored && ignored.length) {
      target.appendChild(el("p", { cls: "muted", text: ui("finder.ignored", { codes: ignored.join(", ") }) }));
    }
  }

  function initFinder() {
    var box = document.getElementById("finder");
    if (!box || !C || !window.AcademyAI) { return; }
    var AI = window.AcademyAI;
    var trackSel = document.getElementById("pf-track");
    var streamSel = document.getElementById("pf-stream");
    var goal = document.getElementById("pf-goal");
    var info = document.getElementById("pf-candidates");
    var rate = document.getElementById("pf-rate");
    var resultBox = document.getElementById("pf-result-box");
    var result = document.getElementById("pf-result");
    var outcomes = window.CATALOG_OUTCOMES || {};

    function candidates() {
      var track = trackSel.value, stream = streamSel.value;
      var codes = C.courses.filter(function (c) { return stream ? c.s === stream : track ? c.t === track : true; }).map(function (c) { return c.c; });
      return pathOrder(codes);
    }
    function scopeInfo() {
      var track = trackSel.value, stream = streamSel.value;
      if (stream) { return { title: C.streams[stream].n, brief: stream, urls: [absolute(langRoot() + "paths/" + stream + ".md")] }; }
      if (track) { return { title: C.tracks[track].n, brief: track, urls: [absolute(langRoot() + "paths/" + C.tracks[track].slug + ".md")] }; }
      return { title: ui("scope.catalog"), urls: [llmsUrl()] };
    }
    function material(codes) {
      var withOutcomes = codes.map(function (code) {
        var c = byCode[code];
        var lines = ["## " + code + " · " + c.n, ui("label.level_n", { n: c.l }) + " · " + lengthText(c) +
          ((c.p || []).length ? " · " + ui("path.needs") + ": " + c.p.join(", ") : "")];
        (outcomes[code] || []).forEach(function (o) { lines.push("- " + o); });
        return lines.join("\n");
      }).join("\n\n");
      if (AI.estimateTokens(withOutcomes) <= PASTE_BUDGET) { return { text: withOutcomes, pasted: true }; }
      return { text: catalogMaterial(codes), pasted: false };
    }
    function prompt() {
      var codes = candidates();
      var m = material(codes);
      var s = scopeInfo();
      var p = AI.buildPrompt({ task: "placement", lang: lang, scopeTitle: s.title, shortScope: s.brief, question: goal.value, inputLabel: ui("finder.goal"),
        content: m.text, urls: linked() ? s.urls : [], cite: codes[0] });
      p.count = codes.length;
      p.pasted = m.pasted;
      return p;
    }
    function describe() {
      var p = prompt();
      info.textContent = ui(p.pasted ? "finder.candidates" : "finder.candidates_links", { n: p.count, t: AI.estimateTokens(p.full).toLocaleString(lang === "ar" ? "ar-SA-u-nu-latn" : "en") });
    }
    function limitStreams() {
      var track = trackSel.value;
      Array.prototype.forEach.call(streamSel.options, function (o) {
        var off = Boolean(track && o.getAttribute("data-track") && o.getAttribute("data-track") !== track);
        o.hidden = off;
        o.disabled = off;
      });
      if (streamSel.selectedOptions[0] && streamSel.selectedOptions[0].disabled) { streamSel.value = ""; }
      if (streamSel.value && !track) { trackSel.value = streamSel.selectedOptions[0].getAttribute("data-track"); }
    }

    /* the self-rating form: one fieldset per course of the chosen stream */
    function renderRating() {
      rate.textContent = "";
      if (!streamSel.value) { rate.appendChild(el("p", { cls: "muted", text: ui("finder.noai_need") })); return; }
      candidates().forEach(function (code, ci) {
        var c = byCode[code];
        var fs = el("fieldset", { cls: "rate-course", "data-code": code }, [el("legend", {}, [el("span", { cls: "code", dir: "ltr", text: code }), " " + c.n])]);
        (outcomes[code] || []).forEach(function (o, oi) {
          var id = "pf-r-" + ci + "-" + oi;
          var sel = el("select", { id: id, "data-outcome": "1" });
          [0, 1, 2].forEach(function (v) { sel.appendChild(el("option", { value: String(v), text: ui("rate." + v) })); });
          fs.appendChild(el("div", { cls: "rate-row" }, [el("label", { "for": id, text: o }), sel]));
        });
        rate.appendChild(fs);
      });
    }

    function show(take, skip, ignored) {
      renderPath(result, take, skip, ignored);
      resultBox.hidden = false;
      var h = document.getElementById("h-result");
      if (h) { h.focus(); }
    }

    trackSel.addEventListener("change", function () { limitStreams(); describe(); renderRating(); });
    streamSel.addEventListener("change", function () { limitStreams(); describe(); renderRating(); });
    goal.addEventListener("input", describe);
    renderTools(box.querySelector('[data-tools="finder"]'), function (tool) { useTool(tool, prompt(), linked()); });
    document.getElementById("pf-copy").addEventListener("click", function () {
      AI.copy(prompt().full).then(function (ok) { toast(ok ? ui("ai.copied_prompt") : ui("ai.copy_failed")); });
    });
    document.getElementById("pf-show").addEventListener("click", function () {
      var parsed = AI.parsePath(document.getElementById("pf-paste").value, byCode);
      if (!parsed) {
        result.textContent = "";
        result.appendChild(el("p", { cls: "notice", text: ui("finder.bad") }));
        resultBox.hidden = false;
        return;
      }
      show(parsed.take, parsed.skip, parsed.ignored);
    });
    document.getElementById("pf-build").addEventListener("click", function () {
      if (!streamSel.value) { renderRating(); return; }
      var take = [], skip = [];
      Array.prototype.forEach.call(rate.querySelectorAll("fieldset[data-code]"), function (fs) {
        var all = Array.prototype.every.call(fs.querySelectorAll("select[data-outcome]"), function (s) { return s.value === "2"; });
        (all ? skip : take).push(fs.getAttribute("data-code"));
      });
      show(take, skip, []);
    });
    box.hidden = false;
    limitStreams();
    describe();
    renderRating();
  }

  /* ---------------------------------------------------------------- 8. Ask AI */
  /* The visible text of an element as Markdown: headings, paragraphs, list items; controls left out. */
  function domMarkdown(node) {
    var out = [];
    var SKIP = /^(BUTTON|SCRIPT|STYLE|NAV|DIALOG|FORM|SELECT|TEXTAREA|INPUT|NOSCRIPT)$/;
    function clean(s) { return String(s).replace(/\s+/g, " ").trim(); }
    function walk(n, depth) {
      Array.prototype.forEach.call(n.children, function (child) {
        if (SKIP.test(child.tagName) || child.hidden || child.classList.contains("actions") || child.classList.contains("crumbs")) { return; }
        var tag = child.tagName;
        if (/^H[1-4]$/.test(tag)) { out.push("", "#".repeat(Number(tag[1])) + " " + clean(child.textContent)); return; }
        if (tag === "LI") {
          if (child.querySelector("ol, ul, p")) { walk(child, depth + 1); return; }
          out.push("  ".repeat(Math.max(0, depth)) + "- " + clean(child.textContent));
          return;
        }
        if (/^(P|DT|DD|SUMMARY)$/.test(tag)) { var t = clean(child.textContent); if (t) { out.push(t); } return; }
        if (tag === "OL" || tag === "UL") { walk(child, depth); return; }
        walk(child, depth);
      });
    }
    walk(node, 0);
    return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  }

  function initAsk() {
    var dialog = document.getElementById("ai-dialog");
    var AI = window.AcademyAI;
    if (!dialog || !AI || !C || typeof dialog.showModal !== "function") { return; }
    var body = document.body;
    var pageCode = body.getAttribute("data-code");
    var pagePath = body.getAttribute("data-path");
    var kind = body.getAttribute("data-page");
    var taskSel = document.getElementById("ai-task");
    var q = document.getElementById("ai-q");
    var qLabel = document.getElementById("ai-q-label");
    var size = document.getElementById("ai-size");
    var scopes = {
      course: Boolean(pageCode && kind === "course"),
      path: Boolean(pagePath),
      plan: true,
      catalog: true
    };
    Array.prototype.forEach.call(dialog.querySelectorAll("[data-scope]"), function (li) {
      li.hidden = !scopes[li.getAttribute("data-scope")];
    });

    function scope() {
      var on = dialog.querySelector('input[name="ai-scope"]:checked');
      return on ? on.value : "catalog";
    }
    function setScope(value) {
      if (!scopes[value]) { value = scopes.course ? "course" : scopes.path ? "path" : "catalog"; }
      var radio = document.getElementById("ai-scope-" + value);
      if (radio) { radio.checked = true; }
    }
    function limitTasks() {
      var s = scope();
      Array.prototype.forEach.call(taskSel.options, function (o) {
        var off = o.value === "review" && s !== "plan";
        o.hidden = off;
        o.disabled = off;
      });
      if (taskSel.selectedOptions[0] && taskSel.selectedOptions[0].disabled) { taskSel.value = "ask"; }
      qLabel.textContent = taskSel.selectedOptions[0].getAttribute("data-input");
    }

    function material() {
      var s = scope();
      var main = document.getElementById("main");
      if (s === "course") {
        var c = byCode[pageCode];
        var urls = [absolute(langRoot() + "courses/" + pageCode + ".md")];
        if (c.w && c.f) { urls.push(c.w + c.f); }
        return { title: pageCode + " · " + c.n, brief: pageCode, content: domMarkdown(main), urls: urls, cite: pageCode };
      }
      if (s === "path") {
        var codes = pathOrder(C.courses.filter(function (x) { return x.s === pagePath; }).map(function (x) { return x.c; }));
        var content = kind === "path" ? domMarkdown(main) : "# " + C.streams[pagePath].n + "\n\n" + catalogMaterial(codes);
        return { title: C.streams[pagePath].n, brief: pagePath, content: content, urls: [absolute(langRoot() + "paths/" + pagePath + ".md")], cite: codes[0] };
      }
      if (s === "plan") {
        var plan = pathOrder(getPlan());
        var planUrls = plan.length <= 4 ? plan.map(function (code) { return absolute(langRoot() + "courses/" + code + ".md"); }) : [llmsUrl()];
        return { title: ui("scope.plan") + " (" + plan.join(", ") + ")", brief: ui("scope.plan") + ": " + plan.join(", "), content: planMaterial(plan),
          urls: planUrls, cite: plan[0], empty: !plan.length };
      }
      return { title: ui("scope.catalog"), content: catalogMaterial(), urls: [llmsUrl()], cite: "AE-201" };
    }

    function prompt() {
      var m = material();
      var p = AI.buildPrompt({ task: taskSel.value, lang: lang, scopeTitle: m.title, shortScope: m.brief, question: q.value, inputLabel: qLabel.textContent,
        content: m.content, urls: linked() ? m.urls : [], cite: m.cite });
      p.empty = m.empty;
      return p;
    }
    function refresh() {
      limitTasks();
      var p = prompt();
      var t = AI.estimateTokens(p.full);
      size.textContent = ui("ai.size", { t: t.toLocaleString(lang === "ar" ? "ar-SA-u-nu-latn" : "en") }) + (t > AI.TOKEN_LIMIT ? " " + ui("ai.size_warn") : "");
      size.classList.toggle("warn", t > AI.TOKEN_LIMIT);
    }
    function ready(p) {
      if (p.empty) { toast(ui("ai.empty_plan")); return false; }
      if (AI.TASKS[taskSel.value].required && !q.value.trim()) { toast(ui("ai.need_input")); q.focus(); return false; }
      return true;
    }

    renderTools(dialog.querySelector('[data-tools="dialog"]'), function (tool) {
      var p = prompt();
      if (ready(p)) { useTool(tool, p, linked()); }
    });
    dialog.querySelector("[data-ai-copy]").addEventListener("click", function () {
      var p = prompt();
      if (ready(p)) { AI.copy(p.full).then(function (ok) { toast(ok ? ui("ai.copied_prompt") : ui("ai.copy_failed")); }); }
    });
    dialog.addEventListener("change", refresh);
    q.addEventListener("input", refresh);
    document.addEventListener("click", function (event) {
      var opener = event.target.closest ? event.target.closest(".ask-ai-open") : null;
      if (!opener) { return; }
      setScope(opener.getAttribute("data-scope") || "");
      if (opener.getAttribute("data-task")) { taskSel.value = opener.getAttribute("data-task"); }
      refresh();
      dialog.showModal();
      taskSel.focus();
    });
    Array.prototype.forEach.call(document.querySelectorAll(".ask-ai-open, .door-ai"), function (b) { b.hidden = false; });
    setScope("");
  }

  /* ---------------------------------------------------------------- 9. small aids */
  function initTables() {                                /* a table that scrolls sideways must be reachable by keyboard */
    function check() {
      Array.prototype.forEach.call(document.querySelectorAll(".table-wrap"), function (wrap) {
        if (wrap.scrollWidth > wrap.clientWidth + 1) {
          wrap.setAttribute("tabindex", "0");
          wrap.setAttribute("role", "group");
        } else {
          wrap.removeAttribute("tabindex");
          wrap.removeAttribute("role");
        }
      });
    }
    var timer = null;
    window.addEventListener("resize", function () {
      window.clearTimeout(timer);
      timer = window.setTimeout(check, 150);
    });
    check();
  }

  function init() {
    C = window.CATALOG || null;
    if (C) {
      C.courses.forEach(function (c) { byCode[c.c] = c; });
    }
    function run(f) {                                   /* one part that fails leaves the others working */
      try { f(); } catch (err) { if (window.console) { window.console.error(err); } }
    }
    [initTheme, initLanguageSwitch, initSlash].forEach(run);
    if (C) {
      [initPlanButtons, initExplorer, initPlan, initFinder, initAsk].forEach(run);
    }
    run(initTables);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  /* for the tests: the pure helpers */
  window.AcademyCatalog = { pathOrder: function (codes) { return pathOrder(codes); }, totals: function (codes) { return totals(codes); }, getPlan: getPlan };
}());
