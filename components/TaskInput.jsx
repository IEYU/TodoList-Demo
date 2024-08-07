import React from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import styles from "../styles/addTaskButtonStyle";

const TaskInput = ({
	taskTitle,
	setTaskTitle,
	taskDescription,
	setTaskDescription,
	handleAddTask,
}) => {
	return (
		<View style={styles.modalContent}>
			<TextInput
				style={styles.textInput}
				onChangeText={setTaskTitle} //set the task title
				value={taskTitle}
				placeholder="e.g., Chapter One team meeting at 3PM"
			/>
			<TextInput
				style={[styles.textInput, styles.textArea]}
				//set the task description
				onChangeText={setTaskDescription}
				value={taskDescription}
				placeholder="Description"
				multiline
			/>
			<Pressable onPress={handleAddTask} style={styles.addButton}>
				<Text style={styles.addButtonText}>Add</Text>
			</Pressable>
		</View>
	);
};

export default TaskInput;
