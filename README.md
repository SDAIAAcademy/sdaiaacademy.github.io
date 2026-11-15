# SDAIA Academy course catalog: public site

This folder is the built public site of the SDAIA Academy course catalog, in English (`en/`) and Arabic (`ar/`).

**It is generated. Do not edit it by hand.** Every file here is written by a build tool from the Academy's private catalog data, and the next build overwrites any manual change and removes any file it did not write. To change a page, change the catalog data or the tool, then build again.

- `index.html` opens the language used last; `en/` and `ar/` hold the same pages at the same paths.
- All links are relative, nothing is loaded from another host, and the pages work from disk or from a web server.
- `404.html` is the page shown for an unknown address, and `.nojekyll` makes the host serve the files as they are.
