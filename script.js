// import-menu.js

// // Sélectionne l'élément où insérer le menu
// const header = document.getElementById("header");

// // Charge le fichier header.html
// fetch("/components/header/header.html")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Erreur lors du chargement du menu");
//         }
//         return response.text();
//     })
//     .then((data) => {
//         header.innerHTML = data;
//     })
//     .catch((error) => {
//         console.error("Erreur :", error);
//     });

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

        // 👉 le DOM contient désormais le menu, on peut sélectionner les éléments
        const burger = document.getElementById('burger_btn');
        const navLinks = document.getElementById('nav-links');

        if (burger_btn && navLinks) {
            burger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                burger_btn.classList.toggle('open');
            });
        } else {
            console.error("Les éléments burger ou nav-links ne sont pas trouvés.");
        }
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
