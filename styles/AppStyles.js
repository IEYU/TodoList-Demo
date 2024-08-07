import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 20,
	},
	scrollViewContent: {
		flexGrow: 1,
	},
	tasksWrapper: {
		paddingTop: 80,
		paddingHorizontal: 20,
	},
	sectionTitle: {
		fontSize: 30,
		fontWeight: "bold",
	},
	items: {},
	dateWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 7,
	},
	date: {
		fontSize: 18,
		fontWeight: "300",
	},
	taskCount: {
		fontSize: 14,
		fontWeight: "300",
	},
});

export default styles;
