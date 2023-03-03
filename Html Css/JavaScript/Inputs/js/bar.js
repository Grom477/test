const menuIcon = document.querySelector(".fa-bars")
const nav = document.querySelector(".nav")
const menuBg = document.querySelector(".menu-bg")
const menuIcon2 = document.querySelector(".fa-x")
const overlay = document.querySelector(".overlay")
const body = document.querySelector("body")


menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("hidden")
    nav.classList.toggle("change")
    menuBg.classList.toggle("change-bg")
    menuIcon2.classList.toggle("change")
    overlay.classList.remove("hidden")
})
menuIcon2.addEventListener("click", () => {
    nav.classList.toggle("change")
    menuBg.classList.toggle("change-bg")
    menuIcon.classList.toggle("hidden")
    menuIcon2.classList.toggle("change")
})
overlay.addEventListener("click", () => {
    nav.classList.toggle("change")
    menuBg.classList.toggle("change-bg")
    menuIcon.classList.toggle("hidden")
    menuIcon2.classList.toggle("change")
    overlay.classList.add("hidden")
})

