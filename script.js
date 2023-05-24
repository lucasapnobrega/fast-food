const menu = document.querySelector("#menu-icon")
const navbar = document.querySelector(".header-navbar")

menu.addEventListener("click", function() {
    navbar.classList.toggle("active")
})

// quando scrollar a página o menu é retraído
window.onscroll = function() {
    navbar.classList.remove("active")
}
