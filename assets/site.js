/* SDAIA Academy course catalog: the one script of the public site.
 *
 * Loaded in <head> so the saved theme applies before the first paint. It makes no request of
 * any kind: the explorer's data comes from assets/courses.<lang>.js, a plain script that assigns
 * window.CATALOG_INDEX. Everything degrades to plain pages when scripts are off.
 *
 *   1. remembered language (the root index.html opens it) and theme
 *   2. theme toggle and language switch
 *   3. course explorer: search and filters, state kept in the URL fragment
 *   4. keyboard access to tables that scroll sideways
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var KEY_LANG = "sdaia-academy-catalog.lang";
  var KEY_THEME = "sdaia-academy-catalog.theme";

  /* localStorage can throw (file:// in some browsers, private mode, blocked storage) */
  function load(key) {
    try { return window.localStorage.getItem(key); } catch (err) { return null; }
  }
  function save(key, value) {
    try { window.localStorage.setItem(key, value); } catch (err) { /* not remembered, nothing else to do */ }
  }

  /* ---------------------------------------------------------------- 1. language and theme */
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

  /* ---------------------------------------------------------------- 2. theme toggle, language switch */
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
    var link = document.querySelector(".lang-switch");
    if (!link) { return; }
    link.addEventListener("click", function () {     /* keep the fragment: the explorer's filters */
      link.href = link.getAttribute("href").split("#")[0] + window.location.hash;
    });
  }

  /* ---------------------------------------------------------------- 3. explorer */
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
    if (!form || !index || !index.courses) { return; }

    var FIELDS = ["q", "track", "stream", "level", "format", "site"];
    var controls = {};
    FIELDS.forEach(function (name) { controls[name] = form.elements[name]; });
    var count = document.getElementById("result-count");
    var empty = document.getElementById("no-results");
    var template = form.getAttribute("data-count");
    var total = index.courses.length;
    var rows = {};
    Array.prototype.forEach.call(document.querySelectorAll("#results > li[data-code]"), function (li) {
      rows[li.getAttribute("data-code")] = li;
    });

    function value(name) {
      var control = controls[name];
      if (control.type === "checkbox") { return control.checked ? "1" : ""; }
      return control.value.trim();
    }
    function setValue(name, text) {
      var control = controls[name];
      if (control.type === "checkbox") { control.checked = text === "1"; } else { control.value = text || ""; }
    }

    function readUrl() {
      var state = {};
      var sources = [window.location.search.replace(/^\?/, ""), window.location.hash.replace(/^#/, "")];
      sources.forEach(function (source) {
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
        if (text) { parts.push(name + "=" + encodeURIComponent(text)); }
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

    function apply() {
      limitStreams();
      var words = normalise(controls.q.value).split(" ").filter(Boolean);
      var track = value("track"), stream = value("stream"), level = value("level"), format = value("format"), site = value("site");
      var shown = 0;
      index.courses.forEach(function (course) {
        var ok = (!track || course.t === track) && (!stream || course.s === stream) &&
                 (!level || String(course.l) === level) && (!format || course.k === format) && (!site || course.w === 1);
        for (var i = 0; ok && i < words.length; i += 1) {
          ok = course.x.indexOf(words[i]) !== -1;
        }
        var row = rows[course.c];
        if (row) { row.hidden = !ok; }
        if (ok) { shown += 1; }
      });
      count.textContent = template.replace("{n}", shown).replace("{total}", total);
      empty.hidden = shown !== 0;
    }

    function setFromUrl() {
      var state = readUrl();
      FIELDS.forEach(function (name) { setValue(name, state[name]); });
      if (controls.stream.value && !controls.track.value) {       /* a stream implies its track */
        var option = controls.stream.options[controls.stream.selectedIndex];
        controls.track.value = option.getAttribute("data-track") || "";
      }
      apply();
    }

    form.hidden = false;
    form.addEventListener("submit", function (event) { event.preventDefault(); });
    form.addEventListener("input", function () { apply(); writeUrl(); });
    form.addEventListener("change", function () { apply(); writeUrl(); });
    form.addEventListener("reset", function () {
      window.setTimeout(function () { apply(); writeUrl(); controls.q.focus(); }, 0);
    });
    window.addEventListener("hashchange", setFromUrl);
    setFromUrl();
  }

  /* ---------------------------------------------------------------- 4. small aids */
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
    initTheme();
    initLanguageSwitch();
    initExplorer();
    initTables();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}());
