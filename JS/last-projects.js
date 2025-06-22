fetch('../data/projects.json')
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById('projects_container');

        const lastProjects = projects.slice(-3)
        lastProjects.forEach(projects => {
            const div = document.createElement('div');
            div.classList.add('project_card');
            div.innerHTML = `
            <a href="#">
                <img src="${projects.image}" alt="${projects.name}">
                <h3>${projects.name}</h3>
                <p class="project_desc">${projects.desc}</p>
                <p class="project_technos">${projects.techno}</p>
            </a>
            `;
            container.appendChild(div);
        });
    });