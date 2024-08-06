import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Star = () => {
	const [isImportant, setIsImportant] = useState(false);
	const handlePress = () => {
		setIsImportant((prevState) => !prevState); //toggle the state
	};

	return (
		<View>
			<Pressable onPress={handlePress}>
				<FontAwesome
					// click to toggle the look of the star
					name={isImportant ? "star" : "star-o"}
					size={20}
					style={styles.star}
				/>
			</Pressable>
		</View>
	);
};
export default Star;
const styles = StyleSheet.create({
	star: {
		color: "#FFC000",
		marginRight: 5,
		backgroundColor: "transparent", // Transparent background
		justifyContent: "center",
		alignItems: "center",
	},
});
