import projectController from './project-controller';

export default function projectView(allProjects) {
	// const projectHandler = projectController();

	const projectsDisplay = document.querySelector('.displayProjects');


	// rendering function
	const renderProjects = () => {
		projectsDisplay.innerHTML = '';
		for (let i = 0; i < allProjects.length; i++) {
			const projectItemDisplay = document.createElement('div');
			const deleteProjectButton = document.createElement('button');
			deleteProjectButton.innerText = 'Delete Project';
			deleteProjectButton.className = 'deleteProject';
			projectItemDisplay.innerText = allProjects[i].title;
			projectItemDisplay.dataset.id = `${i}`;
			projectItemDisplay.className = 'projectListItem';
			// delete projects
			deleteProjectButton.addEventListener('click', (e) => {
				e.preventDefault();
				const projectElement = e.target.closest('[data-id]');
				projectHandler.deleteProject(projectElement);
				renderProjects();
			});
			projectItemDisplay.addEventListener('click', (e) => {
				e.preventDefault();
				const projectId = e.target.dataset.id;
				projectHandler.setCurrentProject(projectId);
                renderProjects()
			});
			projectItemDisplay.appendChild(deleteProjectButton);
			projectsDisplay.appendChild(projectItemDisplay);
		}
	};

	//add projects
	const showAddForm = document.querySelector('.addProjects > button');
	const addForm = document.querySelector('.addProjects > div');
	showAddForm.addEventListener('click', () => {
		addForm.style.display = addForm.style.display === 'none' ? '' : 'none';
	});
	const addFormButton = document.querySelector('.addProjects > div > button');
	const project = document.querySelector('#projectInput');
	addFormButton.addEventListener('click', (e) => {
		e.preventDefault();
		projectHandler.createNewProject(project);
		project.value = '';
		renderProjects();
	});

	// Display projects on initial load
	// renderProjects();
	return {
		renderProjects,
	}
}
