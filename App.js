import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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

	// Task state
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState({
		title: "",
		description: "",
		isComplete: false,
	});
	const [modalVisible, setModalVisible] = useState(false);

	// Add Task
	const addTask = (newTask) => {
		console.log("Task added:", newTask.title, newTask.description);
		if (newTask.title) {
			setTasks([newTask, ...tasks]); // Prepend the new task
			setTask({ title: "", description: "", isComplete: false }); // Clear the task state
			setModalVisible(false); // Close the modal
		}
	};

	// Delete Task
	const deleteTask = (taskToDelete) => {
		console.log(
			"Task deleted:",
			taskToDelete.title,
			taskToDelete.description
		);
		const newTasks = tasks.filter((task) => task !== taskToDelete);
		setTasks(newTasks); // Updates the state with the new array
	};

	// Complete Task
	const markTaskComplete = (taskToComplete, isComplete) => {
		const updatedTasks = tasks.map((task) =>
			task === taskToComplete ? { ...task, isComplete: isComplete } : task
		);
		// Sort tasks to ensure completed tasks are at the bottom
		const sortedTasks = updatedTasks.sort(
			(a, b) => a.isComplete - b.isComplete
		);

		// Set the sorted tasks
		setTasks(sortedTasks);
	};

	// Calculate the total number of tasks
	const totalTasks = tasks.filter((task) => !task.isComplete).length;
	tasks.forEach((task) => {
		console.log(task.title, task.isComplete);
	});
	return (
		//wrap entry point with
		<GestureHandlerRootView style={({ flex: 1 }, styles.container)}>
			{/* <View style={styles.container}> */}
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
					<View style={styles.items}>
						{tasks.map((task, index) => (
							<Task
								key={index}
								task={task}
								onComplete={(isComplete) =>
									markTaskComplete(task, isComplete)
								}
								onDelete={() => deleteTask(task)}
							/>
						))}
					</View>
				</View>
			</ScrollView>
			<AddTaskButton
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				task={task}
				setTask={setTask}
				addTask={addTask}
			/>
			<StatusBar style="auto" />
			{/* </View> */}
		</GestureHandlerRootView>
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
