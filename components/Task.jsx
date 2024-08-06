import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Circle from "./Circle";
import Star from "./Star";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Task = ({ task, onComplete, onDelete }) => {
	const swipeableRef = useRef(null);

	const handleDelete = () => {
		if (swipeableRef.current) {
			swipeableRef.current.close();
		}
		onDelete(task);
	};

	const handleComplete = (isComplete) => {
		onComplete(!task.isComplete);
	};

	const swipeToDelete = () => (
		<Pressable onPress={handleDelete}>
			<View style={styles.deleteButtonContainer}>
				<FontAwesome6 name="trash" size={24} color="#ff5252" />
			</View>
		</Pressable>
	);

	return (
		<ReanimatedSwipeable
			renderRightActions={swipeToDelete}
			ref={swipeableRef}
		>
			<View style={styles.task}>
				<View style={styles.taskLeft}>
					<Circle task={task} onComplete={handleComplete} />
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
				</View>
				<View style={styles.taskRight}>
					<Star />
				</View>
			</View>
		</ReanimatedSwipeable>
	);
};
const styles = StyleSheet.create({
	task: {
		backgroundColor: "#fff",
		margin: 5,

		padding: 15,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.15,
		shadowRadius: 4,
	},
	taskLeft: {
		flexDirection: "row",
		alignItems: "center",
	},
	taskText: {
		fontSize: 15,
		fontWeight: "light",
	},
	deleteButtonContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		marginVertical: 5,
		padding: 15,
		borderRadius: 10,
	},
});

export default Task;
