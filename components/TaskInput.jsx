import React from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import styles from "../styles/addTaskButtonStyle";

/**
 * @brief Component for task input fields and add button.
 * @description provides text input area for the task title and description,
 *              as well as a button to submit the task.
 *
 * @param {Object} props
 * @param {string} props.taskTitle - title of the task being edited
 * @param {Function} props.setTaskTitle - update the task title state
 * @param {string} props.taskDescription - description of the task being edited
 * @param {Function} props.setTaskDescription - update the task description
 * @param {Function} props.handleAddTask - add the task
 */

const TaskInput = ({
	taskTitle,
	setTaskTitle,
	taskDescription,
	setTaskDescription,
	handleAddTask,
}) => {
	return (
		<View style={styles.modalContent}>
			{/* set the task title */}
			<TextInput
				style={styles.textInput}
				onChangeText={setTaskTitle}
				value={taskTitle}
				placeholder="e.g., Chapter One team meeting at 3PM"
			/>

			{/* set the task description */}
			<TextInput
				style={[styles.textInput, styles.textArea]}
				onChangeText={setTaskDescription}
				value={taskDescription}
				placeholder="Description"
				multiline
			/>

			{/* button for adding the task */}
			<Pressable onPress={handleAddTask} style={styles.addButton}>
				<Text style={styles.addButtonText}>Add</Text>
			</Pressable>
		</View>
	);
};

export default TaskInput;
