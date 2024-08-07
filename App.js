import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Component Imports
import Task from "./components/Task";
import AddTaskButton from "./components/AddTaskButton";

// Handler Imports
import { addTask } from "./handlers/addTaskHandler";
import { deleteTask } from "./handlers/deleteTaskHandler";
import { editTask } from "./handlers/editTaskHandler";
import { markTaskComplete } from "./handlers/markTaskCompleteHandler";

// Styles
import styles from "./styles/appStyle";

/**
 * @brief A simple task management app built with React Native.
 *
 * @description It provides users with the ability to create, edit, and delete
 * tasks with functionalities such as marking tasks as complete or important.
 */

export default function App() {
	// display today's date
	const date = new Date();
	const options = { weekday: "long", month: "long", day: "numeric" };
	const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
		date
	);

	// task item initialization
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState({
		id: "",
		title: "",
		description: "",
		isComplete: false,
	});
	const [modalVisible, setModalVisible] = useState(false);

	// functino for counting the total number of active tasks
	const totalTasks = tasks.filter((task) => !task.isComplete).length;
	tasks.forEach((task) => {
		console.log(task.id, task.title, task.isComplete);
	});

	return (
		// GestureHandlerRootView for swiping
		<GestureHandlerRootView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<View style={styles.tasksWrapper}>
					{/* Header: Today */}
					<Text style={styles.sectionTitle}>Today</Text>

					{/* Display date and task counts */}
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

					{/* Display all tasks */}
					<View style={styles.items}>
						{tasks.map((task, index) => (
							<Task
								key={index}
								task={task}
								onComplete={(isComplete) =>
									markTaskComplete(
										task,
										isComplete,
										tasks,
										setTasks
									)
								}
								onDelete={() =>
									deleteTask(task, tasks, setTasks)
								}
								updateTask={(updatedTask) =>
									editTask(updatedTask, tasks, setTasks)
								}
							/>
						))}
					</View>
				</View>
			</ScrollView>

			{/* Button at bottom right corner of screen for adding a task */}
			<AddTaskButton
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				task={task}
				setTask={setTask}
				addTask={(newTask) =>
					addTask(newTask, tasks, setTasks, setTask, setModalVisible)
				}
			/>
			<StatusBar style="auto" />
		</GestureHandlerRootView>
	);
}
