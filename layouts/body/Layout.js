import React from "react";
import {  Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={[styles.container]}>
        {children}
    </SafeAreaView>
  )
};
export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
})
