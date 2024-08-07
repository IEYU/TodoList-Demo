import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Circle from "./Circle";
import Star from "./Star";
import styles from "../styles/taskStyle";

/**
 * @brief Component to display an individual task item
 * @description renders a task item with a circle for marking completion,
 * the task title and description, and a star icon for marking importance.
 *
 * @param {Object} props
 * @param {Object} props.task - task object to be displayed
 * @param {Function} props.onPress - handle task press events
 * @param {Function} props.onComplete - handle task completion status change
 */

const TaskItem = ({ task, onPress, onComplete }) => {
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.5}>
			<View style={styles.task}>
				{/* left side of the task item that includes circle + title */}
				<View style={styles.taskLeft}>
					{/* Circle component for toggling task completion */}
					<Circle task={task} onComplete={onComplete} />
					<View style={styles.text}>
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

						{/*Task description (only first 30 chars in display)*/}
						{task.description ? (
							<Text style={styles.taskDescription}>
								{task.description.length > 30
									? `${task.description.slice(0, 30)}...`
									: task.description}
							</Text>
						) : null}
					</View>
				</View>

				{/* Star component on the right for marking task importance */}
				<View style={styles.taskRight}>
					<Star />
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default TaskItem;
