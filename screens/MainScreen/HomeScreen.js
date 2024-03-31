import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useCustomNavigation } from '../../utils/method/useCustomNavigation'

const HomeScreen = () => {
  const navi = useCustomNavigation();
  return (
    <View style= {styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navi.goToScreen("SC1")}>
        <Text>Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})