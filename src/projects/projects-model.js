import createProject from './create-project';
import findProject from './find-project';

export default function projectsModel() {
	//this holds all out data
	const projectList = JSON.parse(localStorage.getItem('projects')) || [];

	//saves projects to project list
	const saveProjects = () => {
		localStorage.setItem('projects', JSON.stringify(projectList));
	};

	const deleteProject = (projectIndex) => {
		projectList.splice(projectIndex, (projectIndex + 1));
		saveProjects();
	};

	return {
		getProjects: () => projectList,
		createProject: (project) => {
			const newProject = createProject(project);
			projectList.push(newProject);
			saveProjects();
		},
		deleteProject: (projectIndex) => {
			deleteProject(projectIndex);
		},
		updateProject: (project) => {},
	};
}
