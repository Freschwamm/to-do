export default function projectView() {
    const projectsDisplay = document.querySelector('.displayProjects');

    const initialize = (projectList, createProject, setCurrentProject, deleteProject) => {
        const showAddForm = document.querySelector('.addProjects > button');
        const addForm = document.querySelector('.addProjects > div');
        showAddForm.addEventListener('click', () => {
            addForm.style.display = addForm.style.display === 'none' ? '' : 'none';
        });
        // Create project button
        const addFormButton = document.querySelector('.addProjects > div > button');
        const projectInput = document.querySelector('#projectInput');
        addFormButton.addEventListener('click', (e) => {
            e.preventDefault();
            createProject(projectInput);
            projectInput.value = '';
        });
        // Render projects initially
        renderProjects(projectList, setCurrentProject, deleteProject);
    };

    const renderProjects = (projects, setCurrentProject, deleteProject) => {
        projectsDisplay.innerHTML = '';
        projects.forEach((project, index) => {
            const projectItemDisplay = document.createElement('div');
            projectItemDisplay.innerText = project.title;
            projectItemDisplay.dataset.id = index;
            projectItemDisplay.className = 'projectListItem';
            // Delete project button
            const deleteProjectButton = document.createElement('button');
            deleteProjectButton.innerText = 'Delete Project';
            deleteProjectButton.className = 'deleteProject';
            deleteProjectButton.addEventListener('click', (e) => {
                e.preventDefault();
                deleteProject(projectItemDisplay);
            });
            // Select project
            projectItemDisplay.addEventListener('click', (e) => {
                e.preventDefault();
                setCurrentProject(index);
            });
            projectItemDisplay.appendChild(deleteProjectButton);
            projectsDisplay.appendChild(projectItemDisplay);
        });
    };

    return { initialize, renderProjects };
}
