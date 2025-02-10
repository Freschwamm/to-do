import ToDo from './item.js';

export default function createToDo(item) { 
    const toDoItem = new ToDo(
		item.title,
		item.description,
		item.dueDate,
		item.priority,
		item.notes
	);
	return toDoItem;
 }
