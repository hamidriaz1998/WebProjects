function setTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  localStorage.setItem("darkMode", isDark);
}

function toggleTheme() {
  setTheme(!document.body.classList.contains("dark-mode"));
}

const savedTheme = localStorage.getItem("darkMode");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === null) {
  setTheme(prefersDark);
} else {
  setTheme(savedTheme === "true");
}

document.querySelector("button").addEventListener("click", toggleTheme);

window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
  if (localStorage.getItem("darkMode") === null) setTheme(e.matches);
});
