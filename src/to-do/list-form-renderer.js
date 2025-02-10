export default function toDolistFormRender(addItem) {
	const submitForm = document.getElementById('toDoForm');
	// setup modal
	const dialog = document.querySelector('dialog');
	const showButton = document.querySelector('#addNewItem > button');
	const closeButton = document.querySelector('dialog button');
	showButton.addEventListener('click', () => {
		dialog.showModal();
	});
	closeButton.addEventListener('click', (event) => {
		event.preventDefault();
		dialog.close();
	});

	// Event listener for submitting the form
	submitForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const data = new FormData(event.target);
		const itemData = Object.fromEntries(data.entries());
		addItem(itemData);  
		submitForm.reset();
		dialog.close();
	});
}
