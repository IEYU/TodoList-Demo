import React from "react";
import {
	View,
	Modal,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import TaskInput from "./TaskInput";
import styles from "../styles/addTaskButtonStyle";

const AddTaskModal = ({
	modalVisible,
	closeModal,
	handleModalPress,
	taskTitle,
	setTaskTitle,
	taskDescription,
	setTaskDescription,
	handleAddTask,
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
