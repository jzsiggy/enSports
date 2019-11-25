let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector("#hamburger-menu-items");
let menuItems = document.querySelectorAll(".menu-item");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("is-active");

    menuItems.forEach(item => {
        item.classList.toggle("is-active");
    });
});

let scrollToDivOnBtnClick = (btn, div) => {
    btn.addEventListener("click", () => {
        document.querySelector(`${div}`).scrollIntoView();

        hamburger.classList.toggle("is-active");
        menu.classList.toggle("is-active");

        menuItems.forEach(item => {
            item.classList.toggle("is-active");
        });
    });
};