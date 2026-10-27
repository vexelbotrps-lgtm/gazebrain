"use strict";

const themeButton = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

function setTheme(dark, persist = false) {
  if (dark) {
    document.body.dataset.theme = "dark";
  } else {
    delete document.body.dataset.theme;
  }
  themeButton.querySelector(".theme-symbol").textContent = dark ? "☾" : "☀";
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.setAttribute(
    "aria-label",
    `Switch to ${dark ? "light" : "dark"} theme`,
  );
  themeColor.content = dark ? "#172320" : "#f4f3ed";
  if (persist) {
    try {
      localStorage.setItem("gazebrain-theme", dark ? "dark" : "light");
    } catch {
      // Theme still changes for this page view when storage is unavailable.
    }
  }
}

let darkThemeSaved = false;
try {
  darkThemeSaved = localStorage.getItem("gazebrain-theme") === "dark";
} catch {
  // Use the light theme if browser storage is disabled.
}
setTheme(darkThemeSaved);

themeButton.addEventListener("click", () => {
  setTheme(document.body.dataset.theme !== "dark", true);
});
