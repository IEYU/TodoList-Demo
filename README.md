# Task Manager App (Chapter One Tech Screen)

## Overview
This is a task management application built with React Native and Expo. It allows users to manage tasks with functionalities such as adding, editing, deleting, and marking tasks as complete.

## Features
- **Add Tasks**: Create new tasks with a title and description.
- **Edit Tasks**: Modify the title and description of existing tasks.
- **Delete Tasks**: Remove tasks from the display list.
- **Mark Tasks as Complete**: Toggle tasks between complete and incomplete states.
- **Swipe to Delete**: Swipe gestures to delete tasks.
- **Star Important Tasks**: Mark tasks as important with a star icon.

## Setup and Running the App
#### Prerequisites
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (installed globally)

#### Installation
1. **Clone the Repository:**

   `git clone https://github.com/yourusername/todolist.git`
   `cd todolist`
   Replace the placeholder text `yourusername` with your github username
   <br>
2. **Install Dependencies:**
    ```npm install```
    <br>
3. **Running the App**
    Start the Expo Development Server:
   ```npx expo start -c```
   Running on Android: `a`
   Running on iOS simulator: `i`
   Running on Web: `w`
   <br>
4. **Third-Party Libraries**
`@expo/vector-icons`: Provides a collection of customizable vector icons.
`expo`: A framework and platform for universal React applications.
`react-native-gesture-handler`: Enables gesture handling for React Native.
`react-native-reanimated`: Provides animations and gesture handling.
`react-native-uuid`: Generates unique identifiers for tasks.
`react-native-safe-area-context`: Manages safe area insets for handling notches and status bars.
`react-native-screens`: Improves performance for handling screens in React Navigation.
