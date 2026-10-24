"use strict";

const themeButton = document.querySelector(".theme-toggle");
const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  siteNav.classList.toggle("is-open", open);
});
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    siteNav.classList.remove("is-open");
  });
});

const savedTheme = localStorage.getItem("gazebrain-theme");
if (savedTheme === "dark") {
  document.body.dataset.theme = "dark";
  themeButton.setAttribute("aria-pressed", "true");
  themeButton.setAttribute("aria-label", "Switch to light theme");
}

themeButton.addEventListener("click", () => {
  const dark = document.body.dataset.theme !== "dark";
  if (dark) {
    document.body.dataset.theme = "dark";
  } else {
    delete document.body.dataset.theme;
  }
  localStorage.setItem("gazebrain-theme", dark ? "dark" : "light");
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
});

const filters = [...document.querySelectorAll(".filter-button")];
const cards = [...document.querySelectorAll(".gesture-card")];
const filterStatus = document.querySelector(".filter-status");
filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visible = 0;
    filters.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    cards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.hidden = !show;
      if (show) visible += 1;
    });
    filterStatus.textContent = `${visible} ${visible === 1 ? "gesture" : "gestures"} shown`;
  });
});

const toast = document.querySelector(".toast");
const copyStatus = document.querySelector(".copy-status");
let toastTimer;
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast.textContent = "Copied to clipboard";
    if (copyStatus) copyStatus.textContent = "Copied. Paste the command into your project terminal.";
  } catch {
    toast.textContent = "Clipboard access is unavailable. Select and copy the text instead.";
    if (copyStatus) copyStatus.textContent = "Clipboard access unavailable. Select the command and copy it manually.";
  }
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2800);
}
document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", () => copyText(button.dataset.copy));
});

document.querySelector("#year").textContent = String(new Date().getFullYear());
