import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
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
	const markTaskComplete = (taskToComplete) => {
		const updatedTasks = tasks.map((task) =>
			task === taskToComplete ? { ...task, isComplete: true } : task
		);
		setTasks(updatedTasks);
	};

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
							{/* show the counts of total tasks left */}
							<FontAwesome
								name="list-ul"
								size={14}
								color="black"
							/>
							{totalTasks}
						</Text>
					</View>

					{/* Tasks */}
					<View style={styles.items}>
						{tasks.map((task, index) => (
							<Task
								key={index}
								task={task}
								onDelete={() => deleteTask(task)} // Pass a function reference
							/>
						))}
					</View>
				</View>
			</ScrollView>

			{/* Bottom button to add a task */}
			<AddTaskButton
				style={styles.addButton}
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				task={task}
				setTask={setTask}
				addTask={addTask}
			/>
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
