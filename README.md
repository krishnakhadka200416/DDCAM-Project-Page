# DD-CAM: Project Page

Project page for **DD-CAM: Minimal Sufficient Explanations for Vision Models Using Delta Debugging** (NeurIPS 2026).

Krishna Khadka, Yu Lei (University of Texas at Arlington) · Raghu Kacker, D. Richard Kuhn (NIST)

**Live site:** https://krishnakhadka200416.github.io/DDCAM-Project-Page/

DD-CAM uses delta debugging to find a 1-minimal sufficient set of feature maps and builds the saliency map from those maps only.

## Editing the page

Everything is static HTML and CSS; there is no build step.

| File | What it holds |
|---|---|
| `index.html` | All page content, in the same order as the poster: Motivation, Related Work, Approach, Experimental Setup, Faithfulness, Localization, Stability, Takeaways, BibTeX |
| `static/css/index.css` | Styles. The colour variables at the top follow the poster |
| `static/js/index.js` | Copy-BibTeX button, scroll-to-top button, scroll hints |
| `static/images/` | Figures, favicon, and the social preview card |

Things still to fill in, all in `index.html`:

- **Paper and Poster buttons.** They sit in commented-out blocks inside the header (`<nav class="publication-links">`), on either side of the Code button. Uncomment each one and replace its link when it is public.
- **Author homepages.** Wrap a name in a link, as described in the comment above the author list.
- **BibTeX.** Check the entry against the final proceedings details.
- **`citation_pdf_url`.** Add it in the `<head>` once the PDF is public, so Google Scholar can index it.

## Preview locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

GitHub Pages serves the root of the `master` branch. Pushing to `master` updates the live site within a minute or two.

## Acknowledgments

Built with the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), which was adopted from the [Nerfies](https://nerfies.github.io/) project page. The template's carousel, slider and Font Awesome files are still under `static/` but are not loaded by the page.

## Website License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This website is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
