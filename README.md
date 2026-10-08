# JOHESSA E-Library

Static site (plain HTML, CSS and JavaScript, no build step) giving JOHESSA students access to textbooks, past questions and lecture notes for each department and level.

## Structure

```
index.html              Home page
pages/
  about-us.html         About JOHESSA and the executives
  general-100.html      100 level (shared by all departments)
  optometry/            200.html … 600.html
  nursing/              200.html … 500.html
  public-health/        200.html … 400.html

css/
  home.css              index.html
  about.css             about-us.html
  library.css           all level pages
js/
  home.js               index.html (navbar, dropdowns)
  about.js              about-us.html
  library.js            all level pages (tabs, sidebar)
images/
  logos/                JOHESSA and department logos
  staff/                Dean and staff adviser
  executives/           Executive council portraits
  about/                Images used on the About page
  backgrounds/          Background images
```

Medical Laboratory Science materials are hosted separately at https://medicallaboratoryscience.vercel.app/.

## Adding material to a level page

Each level page has three tabs (`#first`, `#second`, `#notes`). To add a file, copy an existing `.card` inside the right tab and update the title and the two Google Drive links:

- Preview: `https://drive.google.com/file/d/<FILE_ID>/view`
- Download: `https://drive.google.com/uc?export=download&id=<FILE_ID>`

The file must be shared as "Anyone with the link" in Google Drive.

## Running locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server
```

Links are relative to the page they're in, so a department page reaches shared files with `../../` (for example `../../css/library.css`) and other departments with `../` (for example `../nursing/300.html`). Use forward slashes in all paths; backslashes break on the live server.
