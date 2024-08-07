/**
 * @brief Marks a specified task as complete or incomplete and updates the task list.
 * @param {Object} taskToComplete - The task object to be updated.
 * @param {boolean} isComplete - The new completion status of the task.
 * @param {Array} tasks - The current list of tasks.
 * @param {Function} setTasks - Function to update the task list state.
 */

export const markTaskComplete = (
	taskToComplete,
	isComplete,
	tasks,
	setTasks
) => {
	const updatedTasks = tasks.map((task) =>
		task.id === taskToComplete.id
			? { ...task, isComplete: isComplete }
			: task
	);

	// Sort tasks to ensure completed tasks are at the bottom
	const sortedTasks = updatedTasks.sort(
		(a, b) => a.isComplete - b.isComplete
	);
	setTasks(sortedTasks);
};
