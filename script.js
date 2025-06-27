// import-menu.js

// Sélectionne l'élément où insérer le menu
const header = document.getElementById("header");

// Charge le fichier header.html
fetch("/components/header/header.html")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du menu");
        }
        return response.text();
    })
    .then((data) => {
        header.innerHTML = data;
    })
    .catch((error) => {
        console.error("Erreur :", error);
    });


// import du footer 

const footer = document.getElementById('footer');
fetch('/components/footer/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors du chargement du menu');
        }
        return response.text();
    })
    .then(data => {
        footer.innerHTML = data;
    })
    .catch(error => {
        console.error('Erreur :', error);
    });
