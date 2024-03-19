import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const OneNumberBox = ({value, setValue, character}) => {
  return (
    <View style={styles.container}>
       <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
        maxLength={1}
        keyboardType="numeric"
        // placeholder={character.toUpperCase()}
      />
    </View>
  )
}

export default OneNumberBox

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    //   paddingHorizontal: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#000',
      width: 50,
      height: 56,
      borderRadius: 12,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });