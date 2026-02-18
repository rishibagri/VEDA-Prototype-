import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TriggerButton } from './src/components/TriggerButton';
import { PanicFlow } from './src/components/PanicFlow';
import { theme } from './src/constants/colors';

export default function App() {
  const [isPanicMode, setIsPanicMode] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        {isPanicMode ? (
          <PanicFlow onExit={() => setIsPanicMode(false)} />
        ) : (
          <TriggerButton onTrigger={() => setIsPanicMode(true)} />
        )}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
