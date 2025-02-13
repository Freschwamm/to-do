import createTask from './createTask.js';

export default function taskController() {
	const createNewTask = (task) => {
		return createTask(task);
	};

    // const deleteTask = () => {

    // }

	return { createNewTask };
}
