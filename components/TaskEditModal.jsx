import React, { useState, useEffect } from "react";
import {
	Modal,
	TextInput,
	Button,
	View,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import styles from "../styles/taskStyle";

/**
 * @brief A modal component for editing task details.
 * @description provides an interface for users to edit the title
 * and description of a task.
 *
 * @param {Object} props
 * @param {boolean} props.visible - control the visibility of the modal
 * @param {Function} props.onClose - close the modal
 * @param {Function} props.onSave - save the updated task details
 * @param {string} props.initialTitle - prefilled title of the task
 * @param {string} props.initialDescription - prefilled description of the task
 */

const TaskEditModal = ({
	visible,
	onClose,
	onSave,
	initialTitle,
	initialDescription,
}) => {
	const [editTitle, setEditTitle] = useState(initialTitle);
	const [editDescription, setEditDescription] = useState(initialDescription);

	// updates the input fields when the modal
	useEffect(() => {
		if (visible) {
			setEditTitle(initialTitle);
			setEditDescription(initialDescription);
		}
	}, [visible, initialTitle, initialDescription]);

	// save updated title and description
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
