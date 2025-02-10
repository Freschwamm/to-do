import createToDo from './create-to-do.js';
import findItem from './find-item.js';

export default function () {
	const toDoList = [];
	const observers = [];

	return {
		getToDoList: () => [...toDoList],
		addItem: (item) => {
			const newToDo = createToDo(item);
			toDoList.push(newToDo);
			observers.forEach((observer) => observer([...toDoList])); // Notify observers
		},
		deleteItem: (item) => {
			const { itemPosition, nextPosition } = findItem(item, toDoList);
			toDoList.splice(itemPosition, nextPosition);
			observers.forEach((observer) => observer([...toDoList])); // Notify observers
		},
		subscribe: (callback) => {
			observers.push(callback);
		},
	};
}
