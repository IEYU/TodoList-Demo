import React from "react";
import {
	Modal,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import TaskInput from "./TaskInput";
import styles from "../styles/addTaskButtonStyle";

/**
 * @brief Modal component for adding a new task
 */

const AddTaskModal = ({
	modalVisible, //Boolean to control the visibility of the modal
	closeModal, //Function to close the modal
	handleModalPress, //Function to handle presses outside the modal content.
	taskTitle, //The current title of the task being added
	setTaskTitle, //Function to update the task title state
	taskDescription, //The current description of the task being added
	setTaskDescription, //Function to update the task description state
	handleAddTask, //Function to handle the task addition logic
}) => {
	return (
		<Modal
			transparent={true}
			visible={modalVisible}
			onRequestClose={closeModal}
			animationType="slide"
		>
			<TouchableOpacity
				style={styles.modalContainer}
				activeOpacity={1}
				onPress={handleModalPress}
			>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.modalView}
				>
					{/* TaskInput component for entering task details */}
					<TaskInput
						taskTitle={taskTitle}
						setTaskTitle={setTaskTitle}
						taskDescription={taskDescription}
						setTaskDescription={setTaskDescription}
						handleAddTask={handleAddTask}
					/>
				</KeyboardAvoidingView>
			</TouchableOpacity>
		</Modal>
	);
};

export default AddTaskModal;
