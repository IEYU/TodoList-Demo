export const deleteTask = (taskToDelete, tasks, setTasks) => {
	console.log(
		"Task deleted:",
		taskToDelete.id,
		taskToDelete.title,
		taskToDelete.description
	);
	const newTasks = tasks.filter((task) => task.id !== taskToDelete.id);
	setTasks(newTasks); // Updates the state with the new array
};
