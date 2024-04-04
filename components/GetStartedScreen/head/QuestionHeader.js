import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuestionHeader = ({question}) => {
  return (
    <View>
      <Text style={styles}>{question}</Text>
    </View>
  )
}

export default QuestionHeader

const styles = StyleSheet.create({})