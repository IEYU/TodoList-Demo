/**
 * @brief Adds a new task to the task list.
 * @param {Object} newTask - The new task to be added.
 * @param {Array} tasks - The current list of tasks.
 * @param {Function} setTasks - Function to update the task list state.
 * @param {Function} setTask - Function to reset the task input state.
 * @param {Function} setModalVisible - Function to set the modal visibility state.
 */

export const addTask = (newTask, tasks, setTasks, setTask, setModalVisible) => {
	console.log("Task added:", newTask.id, newTask.title, newTask.description);
	if (newTask.title) {
		setTasks([newTask, ...tasks]); // Prepend the new task
		setTask({ id: "", title: "", description: "", isComplete: false }); // Clear the task state
		setModalVisible(false); // Close the modal
	}
};
