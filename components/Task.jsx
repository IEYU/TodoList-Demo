import { StyleSheet, Text, View } from "react-native";
import Circle from "./Circle";
import Star from "./Star";

const Task = ({ task, onComplete, onUncomplete, onDelete }) => {
	const handleDelete = () => {
		onDelete(task);
	};

	const handleComplete = (isComplete) => {
		onComplete(isComplete);
	};

	return (
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
	},
	taskText: {
		fontSize: 15,
		fontWeight: "light",
	},
});
