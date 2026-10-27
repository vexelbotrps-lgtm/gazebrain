# GazeBrain website

This is a dependency-free static download page for the EyeSync Windows
accessibility app. It does not access a visitor's camera, microphone, or mouse.

The download button links to the complete EyeSync setup ZIP. A browser cannot
install or run a Windows app directly from a click. After extracting the ZIP,
Windows users double-click `EyeSync.bat` once. It automatically installs Python
3.12.10 (64-bit) if Python 3.12 is not already present, installs Handy from its
official GitHub release, sets up all EyeSync requirements, creates a Desktop
shortcut, and starts the app. No separate Python or Handy installer is needed;
first-time setup requires an internet connection. Set Handy's push-to-talk
shortcut to Tab once in its preferences. Handy is the offline speech-to-text
app at [handy.computer](https://handy.computer/).

The app has two main actions:

- **Calibrate** runs gaze, smile-sample, wink-sample, and both-eyes-closed Tab
  gesture calibration in sequence. Each step must return successfully and pass
  validation before the next step starts. The downloaded ZIP also contains
  `GETTING_STARTED.txt` with Python 3.12.10 and Handy setup notes. Running
  `EyeSync.bat` installs Python and Handy as needed, creates a Desktop shortcut,
  and starts EyeSync.
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
