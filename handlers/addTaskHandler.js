export const addTask = (newTask, tasks, setTasks, setTask, setModalVisible) => {
	console.log("Task added:", newTask.id, newTask.title, newTask.description);
	if (newTask.title) {
		setTasks([newTask, ...tasks]); // Prepend the new task
		setTask({ id: "", title: "", description: "", isComplete: false }); // Clear the task state
		setModalVisible(false); // Close the modal
	}
};
