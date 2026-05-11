const menuBtn = document.getElementById("menuBtn");
const menuBtnClose = document.getElementById("menuBtnClose");
const menu = document.getElementById("menuli");

menuBtnClose.style.display = "none";

menuBtn.addEventListener("click", () => {
    menu.classList.add("open");
    menuBtn.style.display = "none";
    menuBtnClose.style.display = "flex";
    console.log("working");
});

menuBtnClose.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtnClose.style.display = "none";
    menuBtn.style.display = "flex";
    console.log("close");
});

menu.querySelectorAll("li a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
        menuBtnClose.style.display = "none";
        menuBtn.style.display = "flex";
    });
});

 
