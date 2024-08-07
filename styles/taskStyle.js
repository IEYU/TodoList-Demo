import { StyleSheet } from "react-native";

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

export default styles;
