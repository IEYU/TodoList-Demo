import { StyleSheet, Text, View } from "react-native";
const Task = ({ task }) => {
	return (
		<View>
			<Text>{task}</Text>
		</View>
	);
};
export default Task;
const styles = StyleSheet.create({});
