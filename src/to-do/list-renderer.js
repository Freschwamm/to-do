import toDoList from './list.js';
import renderListForm from './list-form-renderer.js';
import itemRenderer from './item-renderer.js';

export default function toDolistRender() {
	const list = toDoList();
	renderListForm(list.addItem);
    const toDoListElement = document.getElementById('toDoList');
	const renderList = (items) => {
		toDoListElement.innerHTML = ''; 
		items.forEach((item, index) => {
            itemRenderer(item, toDoListElement, list)
		});
	};
	list.subscribe(renderList);
	renderList(list.getToDoList());
}
