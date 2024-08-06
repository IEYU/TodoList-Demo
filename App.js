import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

// Component Imports
import Task from "./components/Task";
import AddTaskButton from "./components/AddTaskButton";

export default function App() {
	// Get the current date in the format of "Weekday, MM D"
	const date = new Date();
	const options = { weekday: "long", month: "long", day: "numeric" };
	const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
		date
	);

	// Define tasks
	const tasks = [
		"Task 1",
		"Task 2",
		"Task 3",
		"Task 4",
		"Task 5",
		"Task 1",
		"Task 2",
		"Task 3",
		"Task 4",
		"Task 5",
		"Task 1",
		"Task 2",
		"Task 3",
		"Task 4",
		"Task 5",
	];

	// Calculate the total number of tasks
	const totalTasks = tasks.length;

	return (
		<View style={styles.container}>
			{/* Scrollable task list */}
			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<View style={styles.tasksWrapper}>
					<Text style={styles.sectionTitle}>Today's Tasks</Text>
					<View style={styles.dateWrapper}>
						<Text style={styles.date}>{formattedDate}</Text>
						<Text style={styles.taskCount}>
							<FontAwesome
								name="list-ul"
								size={14}
								color="black"
							/>{" "}
							{totalTasks}
						</Text>
					</View>

					{/* Tasks */}
					<View style={styles.items}>
						{tasks.map((task, index) => (
							<Task key={index} task={task} />
						))}
					</View>
				</View>
			</ScrollView>

			{/* Bottom button to add a task */}
			<AddTaskButton />
			<StatusBar style="auto" />
		</View>
	);
}

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
