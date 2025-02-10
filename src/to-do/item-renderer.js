import renderListForm from './list-form-renderer.js';

export default function itemRenderer(item, toDoListElement, list) {
	const listItem = document.createElement('div');
	listItem.className = 'listItem';
	listItem.innerHTML = `<div class="itemContents">
		<div>
			<h3>${item.title}</h3> ${item?.description} <br> ${item.dueDate} <br> ${item.notes}
		</div>
		<button id="deleteItem">Delete item</button>
		<button id="togglePriority">Priority</button>
		<button id="editItem">Edit</button>
	</div>`;
	listItem.id = item.priority ? 'priorityItem' : 'nonPriorityItem';
	toDoListElement.appendChild(listItem);
	const deleteButton = document.getElementById('deleteItem');
	deleteButton.addEventListener('click', () => {
		list.deleteItem(item);
	});
	const togglePriority = document.getElementById('togglePriority');
	togglePriority.addEventListener('click', () => {
		item.updatePriority(item.priority ? false : true);
		listItem.id = item.getPriority() ? 'priorityItem' : 'nonPriorityItem';
	});
	const editButton = document.getElementById('editItem');
	// editButton.addEventListener('click', () => {
	// 	console.log('hello')
	// 	renderListForm(list.addItem, list.updateItem, item);
	// });
}
