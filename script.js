// // import du footer 

// const footer = document.getElementById('footer');
// fetch('/components/footer/footer.html')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Erreur lors du chargement du menu');
//         }
//         return response.text();
//     })
//     .then(data => {
//         footer.innerHTML = data;
//     })
//     .catch(error => {
//         console.error('Erreur :', error);
//     });

// document.addEventListener('DOMContentLoaded', chargerMenu);

// async function chargerMenu() {
//     try {
//         const header = document.getElementById('header');
//         const reponse = await fetch('components/header/header.html');

//         if (!reponse.ok) {
//             throw new Error('Erreur lors du chargement du menu');
//         }

//         const html = await reponse.text();
//         header.innerHTML = html;

//     } catch (erreur) {
//         console.error('Erreur :', erreur);
//     }
//     const navlinks = document.getElementById("nav-links");
//     const burgerbtn = document.getElementById("burger_btn");

//     burgerbtn.addEventListener("click", () => {
//         navlinks.classList.toggle("active");
//         burgerbtn.classList.toggle("open");
//     })
// }
