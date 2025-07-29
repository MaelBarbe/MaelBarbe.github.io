document.addEventListener('DOMContentLoaded', loadFooter);

async function loadFooter() {
    try {
        const footer = document.getElementById('footer');
        const reponse = await fetch('/components/footer/footer.html');

        if (!reponse.ok) {
            throw new Error('Erreur lors du chargement du footer');
        }

        const html = await reponse.text();
        footer.innerHTML = html;

    } catch (erreur) {
        console.error('Erreur :', erreur);
    }
}
