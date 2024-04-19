import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonSmall = ({text, action, boder}) => {
  return (
    <TouchableOpacity onPress={() => action()} style={[{flex: 1, height: 40, backgroundColor: boder ? "#fff":"#EB4F30", borderWidth: boder ? 1: 0, borderColor:  "#EB4F30", borderRadius: 50}, styles.container]}>
        <Text style={[{color: boder ? "#000" : "#fff"}, styles.textSt]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonSmall

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        textAlign:"center",
        justifyContent:"center"
    },
    textSt: {
        fontSize:15,
        fontWeight: "500",
        lineHeight: 24,
        letterSpacing: 0.1
    }
})