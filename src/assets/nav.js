const openers = document.getElementById("navOpening");
const closers = document.getElementById("closenav");
const body = document.getElementById("body");
const sidenav = document.getElementById("sidenav");

export function nav() {
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
    sidenav.style.width = "250px";
    body.style.marginRight = "250px";
}

function closeNav() {
    sidenav.style.width = "0";
    body.style.marginRight = "0";
}