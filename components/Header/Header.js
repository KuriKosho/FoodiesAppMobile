import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconHead from '../UI/Icon/IconHead'

const Header = ({type, title, action,bgIcon}) => {
    let lib;
    let name;
    switch (type) {
        case "back":
            lib="AntDesign";
            name="arrowleft";
            break;
        case "threeline":
            lib="Ionicons";
            name="reorder-three-outline";
            break;
        default:
            lib="AntDesign";
            name="arrowleft";
            break;
    }
  return (
    <View style={styles.container}>
      <IconHead action={action} bgColor={bgIcon} lib={lib} name={name}/>
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection:"row",
        columnGap: 10
    },
    textHeader: {
        color:"#EB303F",
        lineHeight: 28,
        fontWeight:"600",
        fontSize: 20,
    },
    iconSt: {
        backgroundColor: "#E4E9F2",
        borderRadius: 100,
        padding: 2
    }
})