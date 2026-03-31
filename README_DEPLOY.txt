Shaolin Path V7 - Full Static Rebuild

Files to deploy to the GitHub Pages repo root:
- index.html
- style.css
- app.js
- assets/

Why this version is safer:
- Single-page static app
- No route dependency
- GitHub Pages friendly
- Uses browser localStorage for progress

Suggested deployment:
1. Back up the current repo first.
2. Delete the stripped-down V7 files from the repo root.
3. Upload all files from this rebuild to the repo root.
4. Commit changes.
5. In GitHub Pages settings, confirm the correct branch/folder is being served.
6. Hard refresh the site after deploy.

Note:
Progress is stored per browser/device. Replacing files does not move progress between devices.
