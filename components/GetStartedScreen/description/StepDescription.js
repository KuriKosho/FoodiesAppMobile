import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StepDescription = ({description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSt}>{description}</Text>
    </View>
  )
}

export default StepDescription

const styles = StyleSheet.create({
    container: {
        paddingBottom: 5
    },
    textSt: {
        fontSize: 15,
        lineHeight:20
    }
})