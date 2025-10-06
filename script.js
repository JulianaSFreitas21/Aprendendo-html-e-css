var btnToggleTheme = document.getElementById("toggle-theme");
var moonIcon = document.getElementById("moon");
var sunIcon = document.getElementById("sun");
var root = document.documentElement

btnToggleTheme.addEventListener("click", () => {
    if (root.getAttribute("data-theme") === "dark") {
        root.setAttribute("data-theme", "light")
        moonIcon.setAttribute("class", "material-symbols-outlined hidden")
        sunIcon.setAttribute("class", "material-symbols-outlined visible")
    }else{
        root.setAttribute("data-theme", "dark")
        moonIcon.setAttribute("class", "material-symbols-outlined visible")
        sunIcon.setAttribute("class", "material-symbols-outlined hidden")
    }
})