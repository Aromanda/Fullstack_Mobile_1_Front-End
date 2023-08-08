import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './components/screen/login'; // Import the Login component from the new file

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Login /> {/* Use the Login component here */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <Login />
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
