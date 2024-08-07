import { StyleSheet, View, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

/**
 * @brief A component that displays a circle icon representing the
 * completion status of a task.
 */

const Circle = ({ task, onComplete }) => {
	const [isComplete, setIsComplete] = useState(task.isComplete);

	// Update local state when task completion status changes
	useEffect(() => {
		setIsComplete(task.isComplete);
	}, [task.isComplete]);

	// Toggle completion state when the circle is pressed
	const handlePress = () => {
		const newState = !isComplete;
		setIsComplete(newState);
		onComplete(newState);
		setIsComplete((prevState) => !prevState);
	};

	return (
		<View>
			<Pressable onPress={handlePress}>
				<FontAwesome
					name={isComplete ? "check-circle" : "circle-thin"}
					size={25}
					style={styles.circle}
				/>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	circle: {
		color: "#4D4D4D",
		marginRight: 15,
	},
});

export default Circle;
