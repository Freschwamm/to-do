export default function findProject(project, projectList) {
    const currentPosition = projectList.findIndex(projects => projects.id === project.id)
    const nextPosition = currentPosition + 1
    return { currentPosition, nextPosition}
}   