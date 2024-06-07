import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const CircleImageWithLabel = ({size, source, label,action, id, focus}) => {
    const [isFocus, setFocus] = useState(focus);

    useEffect(()=>{
        action(id,isFocus);
    },[isFocus])
    const pressHandler =()=> {
        setFocus(!isFocus);
        console.log(source)
    }
  return (
    <TouchableOpacity onPress={()=> pressHandler()} style={styles.container}>
        <Image 
            source={{uri: source}} 
            style={{ width: size, height: size, objectFit: "cover", borderRadius: (size / 2), borderWidth:isFocus ? 2:0, borderColor: isFocus ? "#EB4F30": "#ffffff00" } } />
        <Text style={styles.textSt}>{label}</Text>
    </TouchableOpacity>
  )
}

export default CircleImageWithLabel

const styles = StyleSheet.create({
    container:{
        textAlign:"center"
    },
    textSt: {
        textAlign:"center",
        fontSize: 12,
        lineHeight: 20,
        marginTop: "10%",
        color:"#161616",
        fontWeight:"500"
    }
})