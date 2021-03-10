const openers = document.getElementById("burgerMenuSmartphone");
const closers = document.getElementById("closenavSmartphone");
const nav = document.getElementById("smartphoneNav");

export function navSmartphone() {
    openEvent();
    closeEvent();
}

function openEvent() {
    openers.addEventListener("click", openNav);
}

function closeEvent() {
    closers.addEventListener("click", closeNav);
}

function openNav() {
    nav.style.width = "100%";
}

function closeNav() {
    nav.style.width = "0%";
}