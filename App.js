import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

// Component Imports
import Task from "./components/Task";

export default function App() {
	return (
		<View style={styles.container}>
			{/* Today's task list */}
			<View style={styles.tasksWrapper}>
				<Text style={styles.sectionTitle}>Today's Tasks</Text>

				{/* tasks */}
				<View style={styles.items}>
					{/* pass in props as task names */}
					<Task task={"Task 1"} />
					<Task task={"Task 2"} />
					<Task task={"Task 3"} />
					<Task task={"Task 4"} />
					<Task task={"Task 5"} />
				</View>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#a0b682",
	},
	tasksWrapper: {
		paddingTop: 80,
		paddingHorizontal: 20,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	items: {},
});
