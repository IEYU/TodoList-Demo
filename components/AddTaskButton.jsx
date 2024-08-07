import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import uuid from "react-native-uuid";
import AddTaskModal from "./AddTaskModal";
import styles from "../styles/addTaskButtonStyle";

const AddTaskButton = ({ modalVisible, setModalVisible, setTask, addTask }) => {
	const [taskTitle, setTaskTitle] = useState("");
	const [taskDescription, setTaskDescription] = useState("");

	const closeModal = () => {
		setTaskTitle(""); // Clear the input value
		setTaskDescription(""); // Clear the description value
		setModalVisible(false);
	};

	const handleModalPress = (e) => {
		// Check if the press was outside of the modal content
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	const handleAddTask = () => {
		const newTask = {
			id: uuid.v4(), //give each task an unique id
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
