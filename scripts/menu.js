 function toggleMenu() {
    var menu = document.getElementById("menu");
    var btn = document.querySelector(".menu-btn");
    if (menu.style.width === "350px") {
        menu.style.width = "0";
        btn.classList.remove("menu-open");
    } else {
        menu.style.width = "350px";
        btn.classList.add("menu-open");
    }
}