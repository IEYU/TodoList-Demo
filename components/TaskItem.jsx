import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Circle from "./Circle";
import Star from "./Star";
import styles from "../styles/taskStyles";

const TaskItem = ({ task, onPress, onComplete }) => {
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.5}>
			<View style={styles.task}>
				<View style={styles.taskLeft}>
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
						{task.description ? (
							<Text style={styles.taskDescription}>
								{task.description.length > 30
									? `${task.description.slice(0, 30)}...`
									: task.description}
							</Text>
						) : null}
					</View>
				</View>
				<View style={styles.taskRight}>
					<Star />
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default TaskItem;
