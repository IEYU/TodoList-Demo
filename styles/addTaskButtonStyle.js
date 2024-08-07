import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttonOpen: {
		position: "absolute",
		bottom: 30,
		right: 20,
		padding: 15,
		borderRadius: 30,
		flexDirection: "row",
		backgroundColor: "#cd5343",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.4,
		shadowRadius: 6,
	},
	textStyle: {
		color: "#fff",
		fontWeight: "bold",
		marginLeft: 10,
	},
	modalContainer: {
		flex: 1,
		justifyContent: "flex-end",
		backgroundColor: "rgba(0, 0, 0, 0.2)",
	},
	modalView: {
		width: "100%",
		backgroundColor: "white",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
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
		height: 100,
	},
	addButton: {
		backgroundColor: "#cd5343",
		marginBottom: 10,
		padding: 13,
		borderRadius: 5,
		alignItems: "center",
	},
	addButtonText: {
		color: "#fff",
		fontWeight: "bold",
	},
	buttonComponent: {
		flexDirection: "row",
		alignItems: "center",
	},
});

export default styles;
