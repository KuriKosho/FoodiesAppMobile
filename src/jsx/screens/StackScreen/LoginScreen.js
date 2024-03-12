import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../layouts/body/Layout';
import DynamicIcon from '../../components/Icon/DynamicIcon';

const LoginScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.containerStart}>
            <DynamicIcon 
              library={"AntDesign"}
              color={"black"}
              name={"arrowleft"}
              size={26}
            />
        </View>
        <View style={styles.containerStart}>
          <Text style={styles.textHeader}>Welcome back !</Text>
        </View>
        <View style={styles.containerStart}>
          <Text style={styles.textBody}>We are happy to see you again. Let's go get you back in.</Text>
        </View>
        
      </View>
    </Layout>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "space-between",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#F7F9FC",
        padding: 15
    },
    containerStart: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      width: "100%",
    },
    textHeader: {
      color: "#EB4F30",
      fontWeight: "600",
      fontSize: 20,
      lineHeight: 24
    },
    textBody: {
      fontSize: 12,
      fontWeight: "400",
      lineHeight: 20
    }
})