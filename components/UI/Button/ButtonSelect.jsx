import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ButtonSelect = ({name,isFocus, action}) => {
    const [selected, setSelected] = useState(isFocus || false);
    const onPressHandler = () => {
        setSelected(!selected);
        action();
    }
  return (
    <TouchableOpacity style={styles.btnTextSelect} onPress={onPressHandler}>
        <Text>{name}</Text>
        <View style={[styles.selectCircle, {backgroundColor: selected ? "#ff574b":"#fff"}]}></View>
    </TouchableOpacity>
  )
}

export default ButtonSelect

const styles = StyleSheet.create({
    btnTextSelect: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: "white",
    },
    selectCircle: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ff0000",
    }
})