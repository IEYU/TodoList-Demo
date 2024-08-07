/**
 * @brief Deletes a specified task from the list of tasks.
 * @param {Object} taskToDelete - The task object to be deleted.
 * @param {Array} tasks - The current list of tasks.
 * @param {Function} setTasks - Function to update the task list state.
 */

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
