# GazeBrain website

This is a dependency-free static download page for the EyeSync Windows
accessibility app. It does not access a visitor's camera, microphone, or mouse.

The download button links to the complete EyeSync source ZIP. A browser cannot
install or run a Windows app directly from a click. After extracting the ZIP,
Windows users double-click `EyeSync.bat`; it creates a local virtual environment,
installs all packages from `requirements.txt`, and opens `eyesync_app.py`.
The bootstrap selects the newest installed Python 3.10–3.12 interpreter.
Install Python 3.12.10 (64-bit) from the official
[Windows installer](https://www.python.org/ftp/python/3.12.10/python-3.12.10-amd64.exe)
first, and check **Add python.exe to PATH** in its installer. EyeSync's current
MediaPipe dependency does not support newer Python minor versions. First-time
setup requires an internet connection.

The app has two main actions:

- **Calibrate** runs gaze calibration, smile sample calibration, and wink
  sample calibration in sequence. Each step must return successfully and pass
  validation before the next step starts.
- **Start EyeSync** starts the tracker and command panel without forcing
  calibration. Cursor movement remains unavailable until gaze calibration is
  complete; optional smile/wink sample archives do not block startup.

Calibration is optional to start the app. The page keeps
the selected light/dark theme in local browser storage when available.

## Preview locally

From the repository root, start a static file server:

```powershell
python -m http.server 8000 --directory website
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

The repository workflow at `.github/workflows/pages.yml` deploys this website
when changes are pushed to `main`. In the repository's **Settings → Pages**,
choose **GitHub Actions** as the build and deployment source. The site is
published at the repository's GitHub Pages URL.

The site is plain HTML, CSS, JavaScript, and a local SVG icon. It has no build
step, external font, analytics, or third-party runtime.
