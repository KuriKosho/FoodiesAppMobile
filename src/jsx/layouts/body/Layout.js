import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
  )
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
})
