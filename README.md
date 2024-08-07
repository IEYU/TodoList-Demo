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
- [Node.js](https://nodejs.org/) (version 20.x or higher)
  - to download: https://nodejs.org/en/download/package-manager
  - to upgrade: 
    ```
    sudo npm install -g n
    sudo n stable
    sudo n latest
    sudo n lts 
    ```
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (installed globally) 
  - `npm install -g expo-cli`

#### Installation
1. **Clone the Repository:**

   ```
   git clone https://github.com/IEYU/TodoList-Demo.git
   cd todolist
   ```
2. **Install Dependencies:**
    ```npm install```
    <br>
3. **Running the App**
    Start the Expo Development Server:
   `npx expo start -c` or `npm start -c`
   - Download **Expo Go** from app store and scan the displayed QR code, or
   - Running on Android: `a`, or
   - Running on iOS simulator: `i`, or
   - Running on Web: `w`, or
   - other listed options in the terminal
   <br>
4. **Third-Party Libraries**
- `@expo/vector-icons`: Provides a collection of customizable vector icons.
- `expo`: A framework and platform for universal React applications.
- `react-native-gesture-handler`: Enables gesture handling for React Native.
- `react-native-reanimated`: Provides animations and gesture handling.
- `react-native-uuid`: Generates unique identifiers for tasks.
- `react-native-safe-area-context`: Manages safe area insets for handling notches and status bars.
- `react-native-screens`: Improves performance for handling screens in React Navigation.
