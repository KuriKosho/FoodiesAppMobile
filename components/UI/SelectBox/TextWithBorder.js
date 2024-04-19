import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const TextWithBorder = ({text,action,focus,id}) => {
    const [isFocus, setFocus] = useState(focus);

    useEffect(()=>{
        action(id,isFocus);
    },[isFocus])
    const pressHandler =()=> {
        setFocus(!isFocus);
    }
  return (
    <TouchableOpacity style={[{backgroundColor: isFocus ? "#EB4F30" :"#fff"},styles.container]} onPress={()=> pressHandler()}>
      <Text style={[styles.textSt, {color: isFocus ? "#FFFFFF" : "#161616"}]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default TextWithBorder

const styles = StyleSheet.create({
    textSt: {
        textAlign:"center",
        fontSize: 15,
        lineHeight: 20,
        fontWeight:"500",
        paddingHorizontal: 15,
    },
    container:{
        borderWidth: 1,
        borderRadius: 50,
        height: 40,
        justifyContent:"center",
        alignItems:"center",
        borderColor: "#EB4F30",
    }
})