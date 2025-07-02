const navlinks = document.getElementById("nav-links");
const burgerbtn = document.getElementById("burger_btn");

navlinks.addEventListener("click", () => {
    navlinks.classList.toggle("active");
})