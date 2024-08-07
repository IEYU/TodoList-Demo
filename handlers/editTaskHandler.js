export const editTask = (updatedTask, tasks, setTasks) => {
	console.log(updatedTask.title);
	const updatedTasks = tasks.map((task) =>
		task.id === updatedTask.id ? updatedTask : task
	);
	setTasks(updatedTasks);
};
