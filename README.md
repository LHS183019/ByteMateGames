# ByteMate Studio Website

GitHub Pages-ready static site for the ByteMate indie game studio (Peking University).

## Structure

```
.
├── index.html                # entry point, contains all 4 tab sections
├── assets/
│   ├── banner.png            # studio banner
│   ├── icon.png              # studio logo / favicon
│   ├── gameCover.png         # game cover artwork
│   ├── gameicon.png          # game icon
│   ├── magicianCN.zip        # game build (download)
│   ├── xiaohongshu-qr.svg    # QR placeholder (replace with real QR)
│   ├── css/styles.css        # black + dark gold theme
│   └── js/main.js            # tab switching
├── .nojekyll                 # tell GitHub Pages to skip Jekyll
└── README.md
```

The `.nojekyll` file is required for GitHub Pages to serve files beginning with `_` (none in this project) and to disable Jekyll processing — the site uses only plain HTML/CSS/JS so we don't need it.

## Sections (single-page tabs)

- **工作室簡介** — About the studio
- **作品集** — Portfolio (game cards, tags, download button)
- **工作室成員** — Team (3 members)
- **聯絡我們** — Contact (email, Xiaohongshu, QR)

Tabs are switched in-page via `history.replaceState`, so URLs remain bookmarkable (`/#works`, `/#team`, ...).

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `bytemate-page`).
2. Push this directory to the default branch:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:<your-org>/<repo>.git
   git push -u origin main
   ```

3. In the GitHub repository, go to **Settings → Pages**:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main` / `(root)`
4. After ~1 minute, the site will be live at `https://<your-org>.github.io/<repo>/`.

> If you want the site served at a custom domain or a project page vs. user page, configure GitHub Pages accordingly.

## Local preview

Any static server works. Easiest options:

```bash
# Python 3
python -m http.server 8080

# Node
npx serve .
```

Then open `http://localhost:8080`.

## Customising before deploying

| Item                                | Where to edit                                      |
| ----------------------------------- | -------------------------------------------------- |
| Team member names, bios, portraits  | `index.html` (`.member-card` blocks)               |
| Real Xiaohongshu account / email    | `index.html` (`#contact` section)                  |
| Replace QR placeholder              | swap `assets/xiaohongshu-qr.svg` (or `.png`)       |
| More games                          | duplicate the `.game-card` in `#works`             |

Built with vanilla HTML/CSS/JS so GitHub Pages can serve it as-is — no build step.
