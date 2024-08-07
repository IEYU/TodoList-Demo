/**
 * @brief Updates a task in the list with new details.
 * @param {Object} updatedTask - The task object with updated details.
 * @param {Array} tasks - The current list of tasks.
 * @param {Function} setTasks - Function to update the task list state.
 */

export const editTask = (updatedTask, tasks, setTasks) => {
	console.log(updatedTask.title);
	const updatedTasks = tasks.map((task) =>
		task.id === updatedTask.id ? updatedTask : task
	);
	setTasks(updatedTasks);
};
