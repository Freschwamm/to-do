import projectsModel from './projects-model.js';
import projectView from './projects-view.js';

export default function projectController() {
    let currentProjectId = 0;
    const projectStorage = projectsModel();
    const view = projectView();

    // Create a new project and update the view
    const createNewProject = (project) => {
        const newProject = {
            title: project?.value?.toLowerCase() || project.title,
        };
        projectStorage.createProject(newProject);
        view.renderProjects(getProjectList(), setCurrentProject, deleteProject);
    };

    // Get the list of projects
    const getProjectList = () => projectStorage.getProjects();

    // Delete a project and update the view
    const deleteProject = (projectElement) => {
        const projectIndex = projectElement.dataset.id;
        projectStorage.deleteProject(projectIndex);
        view.renderProjects(getProjectList(), setCurrentProject, deleteProject);
    };

    // Set the current project
    const setCurrentProject = (projectId) => {
        currentProjectId = projectId;
    };

    // Get the current project ID
    const getCurrentProject = () => currentProjectId;

    // Ensure there is at least one default project
    if (!getProjectList().length) {
        createNewProject({ title: 'default' });
    }

    view.initialize(getProjectList(), createNewProject, setCurrentProject, deleteProject);
}
