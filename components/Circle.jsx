import { StyleSheet, View, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Circle = ({ task, onComplete }) => {
	const [isComplete, setIsComplete] = useState(task.isComplete);

	useEffect(() => {
		setIsComplete(task.isComplete);
	}, [task.isComplete]);

	const handlePress = () => {
		const newState = !isComplete;
		setIsComplete(newState);
		onComplete(newState);
		setIsComplete((prevState) => !prevState); // Toggle the state
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
