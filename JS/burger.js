const navlinks = document.getElementById("navlinks");
const burgerbtn = document.getElementById("burger_btn");

burgerbtn.addEventListener("click", () => {
    navlinks.classList.toggle("active");
})