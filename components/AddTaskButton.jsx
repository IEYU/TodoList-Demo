import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import uuid from "react-native-uuid";
import AddTaskModal from "./AddTaskModal";
import styles from "../styles/addTaskButtonStyle";

/**
 * @brief Button component for adding a new task
 */

const AddTaskButton = ({ modalVisible, setModalVisible, setTask, addTask }) => {
	// State for managing the new task title and description input
	const [taskTitle, setTaskTitle] = useState("");
	const [taskDescription, setTaskDescription] = useState("");

	// Close the modal and clear input values
	const closeModal = () => {
		setTaskTitle("");
		setTaskDescription("");
		setModalVisible(false);
	};

	const handleModalPress = (e) => {
		// Check if the press was outside of the modal content
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	// Handle adding a new task
	const handleAddTask = () => {
		// Create a new task object with a unique ID
		const newTask = {
			id: uuid.v4(),
			title: taskTitle,
			description: taskDescription,
			isComplete: false,
		};
		setTask(newTask); // Set the task with the title and description
		addTask(newTask); // Call the addTask function from parent
		closeModal(); // Close the modal
	};

	return (
		<View style={styles.container}>
			{/* Render the AddTaskModal component */}
			<AddTaskModal
				modalVisible={modalVisible}
				closeModal={closeModal}
				handleModalPress={handleModalPress}
				taskTitle={taskTitle}
				setTaskTitle={setTaskTitle}
				taskDescription={taskDescription}
				setTaskDescription={setTaskDescription}
				handleAddTask={handleAddTask}
			/>

			{/* Render the button to open the modal */}
			{!modalVisible && (
				<Pressable
					style={styles.buttonOpen}
					onPress={() => setModalVisible(true)}
				>
					<View style={styles.buttonComponent}>
						<AntDesign name="plus" size={24} color="#fff" />
						<Text style={styles.textStyle}>Add Task</Text>
					</View>
				</Pressable>
			)}
		</View>
	);
};

export default AddTaskButton;
