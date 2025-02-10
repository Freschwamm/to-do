class ToDo {
	constructor(title, description, dueDate, priority = false, notes) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.notes = notes;
	}

	getPriority() {
		return this.priority;
	}

	updatePriority(newPriority) {
		this.priority = newPriority;
	}
}

module.exports = ToDo;
