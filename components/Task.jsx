import { StyleSheet, Text, View } from "react-native";
import Star from "./Star";
import Circle from "./Circle";

/* Each task item is composed of 3 components:
   circle to mark completion | task name | star to mark as important task
*/
const Task = ({ task, onDelete }) => {
	// Create a function that will be passed to Circle
	const handleDelete = () => {
		onDelete(task);
	};

	return (
		<View style={styles.task}>
			{/* leftmost components: the completion circle and task name */}
			<View style={styles.taskLeft}>
				<Circle onDelete={handleDelete} />
				{/* Pass the function reference */}
				<Text style={styles.taskText}>{task.title}</Text>
			</View>

			{/* rightmost component: the star for marking importance */}
			<View style={styles.taskRight}>
				<Star />
			</View>
		</View>
	);
};

export default Task;

const styles = StyleSheet.create({
	task: {
		backgroundColor: "#fff",
		marginVertical: 5,
		padding: 15,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	taskLeft: {
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
	},
	taskText: {
		fontSize: 15,
		fontWeight: "light",
	},
});
