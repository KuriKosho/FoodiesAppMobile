import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuestionHeader = ({question}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSt}>{question}</Text>
    </View>
  )
}

export default QuestionHeader

const styles = StyleSheet.create({
  textSt: {
    fontSize: 20,
    lineHeight:28,
    color: "#161616"
  },
  container: {
    paddingBottom: 5
  }
})