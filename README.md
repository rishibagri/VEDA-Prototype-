# Veda - Panic Response App (MVP)

An app that automatically detects panic attacks based on data retrieved from your smart wearables and helps you through the panic attack through box breathing and grounding techniques.

This is a functional MVP of **Veda**, designed to run on **Expo (iOS/Android/Web)**. 
It simulates the Apple Watch experience of a panic response flow.

## 🚀 How to Run (Presentation Mode)

1.  **Install Dependencies** (if you haven't already):
    ```bash
    npm install
    ```

2.  **Start the App**:
    ```bash
    npx expo start
    ```

3.  **Scan the QR Code**:
    *   Use the **Expo Go** app on your iPhone or Android.
    *   Scan the QR code displayed in the terminal.

4.  **Web Version** (Alternative for Projector Presentation):
    ```bash
    npx expo start --web
    ```
    *   This will open the app in your browser, perfect for screen sharing or presenting on a large screen.

## 📱 Features Implemented (MVP)

*   **Trigger Mechanism**: Large "SOS" button (Simulated Fall Detection/Manual Press).
*   **Panic Mode Flow** (Phases):
    1.  **Grounding**: Guided breathing animation (4s/6s) with haptic feedback.
    2.  **Body Awareness**: "Name 3 things" grounding exercise.
    3.  **Cognitive Reassurance**: Calming affirmations ("This will pass").
    4.  **Completion**: Exit or Repeat options.

## 🎨 Design System

*   **Dark Mode First**: Uses `Slate-900` (#0F172A) background for eye comfort.
*   **Haptics**: Integrated tactility for grounding.
*   **Smooth Animations**: powered by `react-native-reanimated`.

## 🛠 Tech Stack

*   React Native + Expo
*   React Native Reanimated (Animations)
*   Expo Haptics (Feedback)
*   Lucide React Native (Icons)
