fetch('../data/projects.json')
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById('projects-cards-container');

        const lastProjects = projects.slice(-4)
        lastProjects.forEach(projects => {
            const div = document.createElement('div');
            div.classList.add('projet-card');
            div.innerHTML = `
            <a href="#">
                <h3 class="projet-card_title">${projects.name}</h3>
                <p class="projet-card_desc">${projects.desc}</p>
                <p class="projet-card_technos">${projects.techno}</p>
            </a>
            `;
            container.appendChild(div);
        });
    });