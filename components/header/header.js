document.addEventListener('DOMContentLoaded', chargerMenu);

async function chargerMenu() {
    try {
        const header = document.getElementById('header');
        const reponse = await fetch('/components/header/header.html');

        if (!reponse.ok) {
            throw new Error('Erreur lors du chargement du menu');
        }

        const html = await reponse.text();
        header.innerHTML = html;

    } catch (erreur) {
        console.error('Erreur :', erreur);
    }
    const navlinks = document.getElementById("nav-links");
    const burgerbtn = document.getElementById("burger_btn");
    const navHeader = document.getElementById("nav-header");

    burgerbtn.addEventListener("click", () => {
        navlinks.classList.toggle("hidden");
        navlinks.classList.toggle("flex");
        navlinks.classList.toggle("flex-col");
    })
}