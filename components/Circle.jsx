import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Circle = () => {
	const [isComplete, setIsComplete] = useState(false);
	const handlePress = () => {
		setIsComplete((prevState) => !prevState); //toggle the state
	};

	return (
		<View>
			<Pressable onPress={handlePress}>
				<FontAwesome
					// click to toggle the look of the circle
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
		flexWrap: "wrap",
		color: "#555",
		// width: 18,
		// height: 18,
		// borderRadius: 9,
		// borderWidth: 1, // a lightweight look
		marginRight: 15,
	},
});
