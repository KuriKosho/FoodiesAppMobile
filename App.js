import { StyleSheet, View } from "react-native";
import Screens from "../FoodieApp/screens/full";

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
