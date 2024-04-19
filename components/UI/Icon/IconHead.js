import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DynamicIcon from './DynamicIcon'

const IconHead = ({name, lib, bgColor, action}) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: bgColor}]} onPress={()=>action()}>
      <DynamicIcon size={25} color={"#EB3830"} name={name} library={lib}  />
    </TouchableOpacity>
  )
}

export default IconHead

const styles = StyleSheet.create({
    container: {
        padding: 2,
        borderRadius: 50,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center"
    }
})