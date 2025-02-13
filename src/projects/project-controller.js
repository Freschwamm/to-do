import projectsModel from './projects-model';
import projectView from './projects-view.js';

export default function projectController() {
	let currentProjectId = 0;
	//this instantiates a with data storage in the controller as we don't need multiple
	const projectStorage = projectsModel();
    const view = projectView() 
    view.renderProjects(getProjectList())
    // const view = projectView();

	// function to createNew project can be passed to view
	const createNewProject = (project) => {
		const newProject = {
			title: project?.value?.toLowerCase() || project.title,
		};
		projectStorage.createProject(newProject);
	};
	// fucntion to get projects can be passed to view
	const getProjectList = () => projectStorage.getProjects();

	const deleteProject = (projectElement) => {
		const projectIndex = projectElement.dataset.id;
		projectStorage.deleteProject(projectIndex);
	};

	const setCurrentProject = (projectId) => {
		currentProjectId = projectId;
	};

	const getCurrentProject = () => {
		return currentProjectId;
	};

	if (!getProjectList().length) {
		createNewProject({ title: 'default' });
	}

	return {
		createNewProject,
		getProjectList,
		deleteProject,
		setCurrentProject,
		getCurrentProject,
	};
}
