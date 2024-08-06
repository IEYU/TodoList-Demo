import { StyleSheet, View, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Circle = ({ task, onDelete }) => {
	const [isComplete, setIsComplete] = useState(false);

	// Handle task deletion only when marking as complete
	useEffect(() => {
		if (isComplete) {
			onDelete(task);
			setIsComplete((prevState) => !prevState); // Toggle the state
		}
	}, [isComplete]); // watch for changes in isComplete state

	const handlePress = () => {
		setIsComplete((prevState) => !prevState); // Toggle the state
	};

	return (
		<View>
			<Pressable onPress={handlePress}>
				<FontAwesome
					// Click to toggle the circle icon depending on the state
					name={isComplete ? "check-circle" : "circle-thin"}
					size={25}
					style={styles.circle}
				/>
			</Pressable>
		</View>
	);
};

export default Circle;

const styles = StyleSheet.create({
	circle: {
		color: "#555",
		marginRight: 15,
	},
});
