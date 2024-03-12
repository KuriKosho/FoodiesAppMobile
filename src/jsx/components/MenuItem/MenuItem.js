import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  FontAwesome6,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import DynamicIcon from "../Icon/DynamicIcon";

const MenuItem = ({ library, name, size, color }) => {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.focusTab}></View>
      <DynamicIcon library={library} name={name} size={size} color={color} />
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});
