import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorBar from './CalculatorBar';

export default function App() {
  return (
    <View style={styles.container}>
      <CalculatorBar />
      <Text> Example Test </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
