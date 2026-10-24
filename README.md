# EyeSync project website

This is a dependency-free static guide for the EyeSync Windows accessibility
project. It documents the gestures and setup that exist in the parent
repository; it does not access a visitor's camera, microphone, or mouse.

## Preview locally

From the repository root, start a static file server:

```powershell
python -m http.server 8000 --directory website
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

The repository workflow at `.github/workflows/pages.yml` deploys this folder
when changes are pushed to `main`. In the repository's **Settings → Pages**,
choose **GitHub Actions** as the build and deployment source. The site is
published at the repository's GitHub Pages URL.

The site is plain HTML, CSS, JavaScript, and a local SVG icon. It has no build
step, package install, external font, analytics, or third-party runtime.
Browser local storage is used only to remember the visitor's theme choice.
