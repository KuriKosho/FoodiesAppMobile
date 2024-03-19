import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AnyScreen from "./src/test/anyscreen";
import MainScreen from "./src/jsx/screens/main";
import Screens from "./src/jsx/screens/full";

export default function App() {
  return (
    <View style={styles.container}>
      <Screens />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
