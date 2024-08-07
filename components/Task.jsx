import React, { useRef, useState } from "react";
import { View, TouchableOpacity, Modal } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import TaskItem from "./TaskItem";
import TaskEditModal from "./TaskEditModal";
import styles from "../styles/taskStyle";
import { FontAwesome6 } from "@expo/vector-icons";

/**
 * @brief Component for displaying and managing a single task.
 * @description This component handles the display of a task item,
 * allowing the user to swipe to delete, tap to view details,
 * and mark the task as complete. It also provides functionality to edit
 * the task through a modal.
 *
 * @param {Object} props
 * @param {Object} props.task - task object
 * @param {Function} props.onComplete - function to mark the task completion
 * @param {Function} props.onDelete - function to delete the task
 * @param {Function} props.updateTask - function to update the task details
 */

const Task = ({ task, onComplete, onDelete, updateTask }) => {
	const [showTrashCan, setShowTrashCan] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	const swipeableRef = useRef(null);

	// open the task details modal
	const handleTaskPress = () => {
		setShowDetails(true);
	};

	// close the task details modal
	const closeDetails = () => {
		setShowDetails(false);
	};

	// saves changes to the task and closes the modal
	const saveChanges = (title, description) => {
		updateTask({ ...task, title, description });
		closeDetails();
	};

	// Delete task and closes the swipeable component
	const handleDelete = () => {
		if (swipeableRef.current) {
			swipeableRef.current.close();
		}
		setShowTrashCan(false);
		onDelete(task);
	};

	// toggles the completion state of the task
	const handleComplete = () => {
		onComplete(!task.isComplete);
	};

	// updates the visibility of the trash can icon during swipe
	const handleSwipeableChange = (isSwiping) => {
		setShowTrashCan(isSwiping);
	};

	// renders the swipe-to-delete action
	const swipeToDelete = () => (
		<TouchableOpacity onPress={handleDelete}>
			<View style={styles.deleteButtonContainer}>
				<FontAwesome6
					name="trash"
					size={24}
					color={showTrashCan ? "#ff5252" : "transparent"}
				/>
			</View>
		</TouchableOpacity>
	);

	return (
		<>
			<ReanimatedSwipeable
				renderRightActions={swipeToDelete}
				ref={swipeableRef}
				onSwipeableWillOpen={() => handleSwipeableChange(true)}
				onSwipeableWillClose={() => handleSwipeableChange(false)}
			>
				<TaskItem
					task={task}
					onPress={handleTaskPress}
					onComplete={handleComplete}
				/>
			</ReanimatedSwipeable>
			<TaskEditModal
				visible={showDetails}
				onClose={closeDetails}
				onSave={saveChanges}
				initialTitle={task.title}
				initialDescription={task.description}
			/>
		</>
	);
};

export default Task;
