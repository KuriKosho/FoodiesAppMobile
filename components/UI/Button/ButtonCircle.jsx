import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DynamicIcon from '../Icon/DynamicIcon';

const ButtonCircle = ({action, position}) => {
    const pressHandler = () => {
        if (action) {
            action();
        }
    }
  return (
    <Pressable style={[position, styles.container]} onPress={pressHandler}>
      <View>
        <DynamicIcon name={"plus"} size={25} color={"#FFFFFF"} library={"AntDesign"}/>
      </View>
    </Pressable>
  )
}

export default ButtonCircle

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})