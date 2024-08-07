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
