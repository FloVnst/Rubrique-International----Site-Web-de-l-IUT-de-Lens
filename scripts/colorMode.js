if (document.cookie.indexOf("theme=light") !== -1) {
    document.documentElement.setAttribute('data-theme', 'light');
}

function changeTheme() {
    if (document.cookie.indexOf("theme=light") !== -1) {
        document.cookie = "theme=dark; path=/;";
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.cookie = "theme=light; path=/;";
        document.documentElement.setAttribute('data-theme', 'light');
    }
}