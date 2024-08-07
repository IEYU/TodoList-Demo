import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Pressable,
	Modal,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import uuid from "react-native-uuid";

const AddTaskButton = ({ modalVisible, setModalVisible, setTask, addTask }) => {
	const [taskId, setTaskId] = useState("");
	const [taskTitle, setTaskTitle] = useState("");
	const [taskDescription, setTaskDescription] = useState("");

	const closeModal = () => {
		setTaskId("");
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
							<Pressable
								onPress={handleAddTask}
								style={styles.addButton}
							>
								<Text style={styles.addButtonText}>Add</Text>
							</Pressable>
						</View>
					</KeyboardAvoidingView>
				</TouchableOpacity>
			</Modal>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttonOpen: {
		position: "absolute",
		bottom: 30,
		right: 20,
		padding: 15,
		borderRadius: 30,
		flexDirection: "row",
		backgroundColor: "#cd5343",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.4,
		shadowRadius: 6,
	},
	textStyle: {
		color: "#fff",
		fontWeight: "bold",
		marginLeft: 10,
	},
	modalContainer: {
		flex: 1,
		justifyContent: "flex-end",
		backgroundColor: "rgba(0, 0, 0, 0.2)",
	},
	modalView: {
		width: "100%",
		backgroundColor: "white",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	modalContent: {
		padding: 20,
	},
	textInput: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 10,
	},
	textArea: {
		height: 100, // Adjust height as needed for description field
	},
	addButton: {
		backgroundColor: "#cd5343",
		marginBottom: 10,
		padding: 13,
		borderRadius: 5,
		alignItems: "center",
	},
	addButtonText: {
		color: "#fff",
		fontWeight: "bold",
	},
	buttonComponent: {
		flexDirection: "row",
		alignItems: "center",
	},
});

export default AddTaskButton;
