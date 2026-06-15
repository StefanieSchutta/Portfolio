# Images — Echoes of Adventures Portfolio

All images go in this `/images/` folder.  
Placeholders (coloured backgrounds) are shown automatically until a real image is added.

---

## HOW TO UPDATE GALLERY IMAGES

1. Drop your `.jpg` file here
2. Open `js/main.js` and find the `GALLERY` array at the top
3. Update the `file`, `titleEN`, `titleDE` for the matching item
4. To change the aspect ratio: update `format` to `landscape`, `portrait`, or `square`
5. To change which filters it appears in: update `categories` (any combo of `landscape`, `people`, `urban`, `animals`)
6. To add a new image: copy any existing block and add it to the array

**Gallery placeholder colours** are set via the `placeholder` field — shown as background until the image loads.

---

## HOW TO UPDATE HERO SLIDES

1. Drop your `.jpg` file here
2. Open `js/main.js` and find the `HERO_SLIDES` array at the top
3. Update `file` and `titleEN`/`titleDE`

---

## IMAGE SPECS

| Slot | Filename pattern | Recommended size | Max size |
|------|-----------------|-----------------|----------|
| **Hero** (16:9) | `hero-*.jpg` | 1920 × 1080 px | ~800 KB |
| **Gallery landscape** (4:3) | `gallery-*.jpg` | 1200 × 900 px | ~400 KB |
| **Gallery portrait** (3:4) | `gallery-*.jpg` | 900 × 1200 px | ~400 KB |
| **Gallery square** (1:1) | `gallery-*.jpg` | 1000 × 1000 px | ~400 KB |
| **About portrait** (4:5) | `about.jpg` | 800 × 1000 px | ~400 KB |

---

## DEFAULT FILE LIST (match these names exactly, or update main.js)

### Hero slides
- `hero-bali.jpg`
- `hero-morocco.jpg`
- `hero-galapagos.jpg`
- `hero-iceland.jpg`
- `hero-fuerteventura.jpg`

### Gallery
- `gallery-bali.jpg`
- `gallery-morocco.jpg`
- `gallery-copenhagen.jpg`
- `gallery-croatia.jpg`
- `gallery-fuerteventura.jpg`
- `gallery-portugal.jpg`
- `gallery-thailand.jpg`
- `gallery-galapagos.jpg`
- `gallery-denmark.jpg`
- `gallery-newzealand.jpg`
- `gallery-iceland.jpg`
- `gallery-spain.jpg`

### About
- `about.jpg` ← Steffi portrait, 4:5 ratio

---

## TIPS

- **WebP** also works — just change the extension in `main.js`
- Run images through [Squoosh](https://squoosh.app) or [TinyJPG](https://tinyjpg.com) before uploading
- Keep hero images under 800 KB — they load on page open
- Rename files freely, just keep `main.js` in sync
