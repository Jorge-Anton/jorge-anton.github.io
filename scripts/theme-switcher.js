let darkMode = sessionStorage.getItem('darkMode');
const themeToggle = document.querySelector("#theme-toggle");

if (darkMode === "enabled") {
    enableDarkMode();
}

themeToggle.addEventListener("click", () => {
    darkMode = sessionStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});


function enableDarkMode() {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    sessionStorage.setItem('darkMode', 'enabled');
};

function enableLightMode() {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    sessionStorage.setItem('darkMode', 'disabled');
};

function setThemePreference() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        enableDarkMode();

        return;
    }

    enableLightMode();
}

if (darkMode === null) {
    setThemePreference();
}