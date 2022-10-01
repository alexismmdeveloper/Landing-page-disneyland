const navbar = document.querySelector(".navbar");
const navbar_img = document.querySelector("#navbar_logo_img");
const iconBar = document.querySelector(".fa-bars");
const navbar_link = document.querySelectorAll(".list_a");
const list = document.getElementById("list");
const checkbox = document.getElementById("toggler");
const link_logo = document.getElementById("navbar_logo");

const colorWhite = "#fff";
const colorBlack = "#232330";

const NavActive = () => {
    navbar.style.backgroundColor = colorWhite;
    navbar.style.color = colorBlack;
    iconBar.style.color = colorBlack;
    navbar_link.forEach(e => {
        e.style.color = colorBlack;
    });
    navbar_img.setAttribute("src", "img/disney-logo-black.png");
}

const NavDesactive = () => {
    navbar.style.color = colorWhite;
    iconBar.style.color = colorWhite;
    navbar.style.backgroundColor = "transparent";
    navbar_link.forEach(e => {
        e.style.color = colorWhite;
    });
    navbar_img.setAttribute("src", "img/disney-logo-white.png");
}

checkbox.addEventListener("click", () => {
    if(checkbox.checked) NavActive();
    else NavDesactive();
    if(scrollY >= 20 && checkbox.checked == false) NavActive();
});

window.addEventListener("scroll", function() {
    if (scrollY >= 20) NavActive();
    else NavDesactive();
    if(checkbox.checked) NavActive();
});

link_logo.addEventListener("click", (e) => {
    if(checkbox.checked) checkbox.checked = false;
});

list.addEventListener("click", (e) => {
    if(checkbox.checked) checkbox.checked = false;
});