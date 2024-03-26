// Layout.js
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* You can add common elements like headers, footers here */}
      {/* <Text> Hello </Text> */}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Example background color
    // You can add more styling here as needed
    // marginTop: 100,
  },
});

export default Layout;
