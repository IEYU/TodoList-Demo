import React, { useRef, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	TouchableOpacity,
	Modal,
	TextInput,
	Button,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Circle from "./Circle";
import Star from "./Star";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Task = ({ task, onComplete, onDelete, updateTask }) => {
	const [showTrashCan, setShowTrashCan] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	const [editTitle, setEditTitle] = useState(task.title);
	const [editDescription, setEditDescription] = useState(task.description);
	const swipeableRef = useRef(null);

	const handleTaskPress = () => {
		setEditTitle(task.title);
		setEditDescription(task.description);
		setShowDetails(true);
	};

	const closeDetails = () => {
		setShowDetails(false);
	};

	const saveChanges = () => {
		// Call updateTask with new values to update the task
		updateTask({ ...task, title: editTitle, description: editDescription });
		closeDetails();
	};

	const handleDelete = () => {
		if (swipeableRef.current) {
			swipeableRef.current.close();
		}
		setShowTrashCan(false);
		onDelete(task);
	};

	const handleComplete = () => {
		onComplete(!task.isComplete);
	};

	const swipeToDelete = () => (
		<Pressable onPress={handleDelete}>
			<View style={styles.deleteButtonContainer}>
				<FontAwesome6
					name="trash"
					size={24}
					color={showTrashCan ? "#ff5252" : "transparent"}
				/>
			</View>
		</Pressable>
	);

	const handleSwipeableChange = (isSwiping) => {
		setShowTrashCan(isSwiping);
	};

	return (
		<>
			<ReanimatedSwipeable
				renderRightActions={swipeToDelete}
				ref={swipeableRef}
				onSwipeableWillOpen={() => handleSwipeableChange(true)}
				onSwipeableWillClose={() => handleSwipeableChange(false)}
			>
				<TouchableOpacity onPress={handleTaskPress} activeOpacity={0.5}>
					<View style={styles.task}>
						<View style={styles.taskLeft}>
							<Circle task={task} onComplete={handleComplete} />
							<View style={styles.text}>
								<Text
									style={[
										styles.taskText,
										{
											textDecorationLine: task.isComplete
												? "line-through"
												: "none",
										},
									]}
								>
									{task.title}
								</Text>
								{task.description ? (
									<Text style={styles.taskDescription}>
										{task.description.length > 40
											? `${task.description.slice(
													0,
													40
											  )}...`
											: task.description}
									</Text>
								) : null}
							</View>
						</View>
						<View style={styles.taskRight}>
							<Star />
						</View>
					</View>
				</TouchableOpacity>
			</ReanimatedSwipeable>
			<Modal
				transparent={true}
				visible={showDetails}
				onRequestClose={closeDetails}
				animationType="fade"
			>
				<View style={styles.modalContainer}>
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={styles.modalView}
					>
						<View style={styles.modalContent}>
							<TextInput
								style={styles.textInput}
								value={editTitle}
								onChangeText={setEditTitle}
								placeholder="Title"
							/>
							<TextInput
								style={[styles.textInput, styles.textArea]}
								value={editDescription}
								onChangeText={setEditDescription}
								placeholder="Description"
								multiline
							/>
							<View style={styles.buttonContainer}>
								<Button
									title="Cancel"
									onPress={closeDetails}
									color="#ccc"
								/>
								<Button
									title="Save"
									onPress={saveChanges}
									color="#cd5343"
								/>
							</View>
						</View>
					</KeyboardAvoidingView>
				</View>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	task: {
		backgroundColor: "#fff",
		margin: 5,
		padding: 10,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.15,
		shadowRadius: 4,
		height: 53,
	},
	taskLeft: {
		flexDirection: "row",
		alignItems: "center",
	},
	taskText: {
		fontSize: 15,
		fontWeight: "light",
	},
	taskDescription: {
		fontSize: 12,
		color: "#939291",
	},
	deleteButtonContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		marginVertical: 5,
		padding: 15,
		borderRadius: 10,
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalView: {
		width: "80%",
		backgroundColor: "white",
		borderRadius: 10,
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
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

export default Task;
