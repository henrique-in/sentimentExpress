import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomStatusBar from './components/CustomStatusBar';
import {HomeScreen} from './screens/HomeScreen/HomeScreen';
import {colors} from './theme';

export function AppContent() {
  return (
    <SafeAreaProvider>
      <CustomStatusBar
        barStyle="light-content"
        backgroundColor={colors.patina}
      />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <HomeScreen />
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
