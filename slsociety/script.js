// Coded by @oekoff, community owned by @hannie.tulips
document.getElementById("current-year").textContent = new Date().getFullYear();
const root = document.documentElement;
const lever = document.getElementById("theme-switch");
const label = document.getElementById("theme-label");

function setTheme(theme) {
    root.dataset.theme = theme;

    const isLight = theme === "light";

    lever.setAttribute("aria-checked", String(isLight));
    label.textContent = isLight ? "LIGHT" : "DARK";

    document.querySelector('meta[name="theme-color"]')
        .setAttribute(
            "content",
            isLight ? "#FFF0F2" : "#330D11"
        );

    localStorage.setItem("starlight-theme", theme);
}

// Restore saved theme
const savedTheme = localStorage.getItem("starlight-theme");

if (savedTheme === "light" || savedTheme === "dark") {
    setTheme(savedTheme);
}

// Toggle lever
lever.addEventListener("click", () => {
    const current = root.dataset.theme;
    setTheme(current === "dark" ? "light" : "dark");
});
