import React, { useRef, useState } from "react";
import { View, TouchableOpacity, Modal } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Circle from "./Circle";
import Star from "./Star";
import TaskItem from "./TaskItem";
import TaskEditModal from "./TaskEditModal";
import styles from "../styles/taskStyles";
import { FontAwesome6 } from "@expo/vector-icons";

const Task = ({ task, onComplete, onDelete, updateTask }) => {
	const [showTrashCan, setShowTrashCan] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	const swipeableRef = useRef(null);

	const handleTaskPress = () => {
		setShowDetails(true);
	};

	const closeDetails = () => {
		setShowDetails(false);
	};

	const saveChanges = (title, description) => {
		updateTask({ ...task, title, description });
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

	const handleSwipeableChange = (isSwiping) => {
		setShowTrashCan(isSwiping);
	};

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
