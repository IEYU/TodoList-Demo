import React, { useState, useEffect } from "react";
import {
	Modal,
	TextInput,
	Button,
	View,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import styles from "../styles/taskStyles";

const TaskEditModal = ({
	visible,
	onClose,
	onSave,
	initialTitle,
	initialDescription,
}) => {
	const [editTitle, setEditTitle] = useState(initialTitle);
	const [editDescription, setEditDescription] = useState(initialDescription);

	useEffect(() => {
		if (visible) {
			setEditTitle(initialTitle);
			setEditDescription(initialDescription);
		}
	}, [visible, initialTitle, initialDescription]);

	const handleSave = () => {
		onSave(editTitle, editDescription);
	};

	return (
		<Modal
			transparent={true}
			visible={visible}
			onRequestClose={onClose}
			animationType="fade"
		>
			<View style={styles.modalContainer}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.modalView}
				>
					<View style={styles.modalContent}>
						<TextInput
							style={styles.textInput}
							value={editTitle}
							onChangeText={setEditTitle}
							placeholder="Title"
						/>
						<TextInput
							style={[styles.textInput, styles.textArea]}
							value={editDescription}
							onChangeText={setEditDescription}
							placeholder="Description"
							multiline
						/>
						<View style={styles.buttonContainer}>
							<Button
								title="Cancel"
								onPress={onClose}
								color="#ccc"
							/>
							<Button
								title="Save"
								onPress={handleSave}
								color="#cd5343"
							/>
						</View>
					</View>
				</KeyboardAvoidingView>
			</View>
		</Modal>
	);
};

export default TaskEditModal;
