import { StyleSheet,  View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
const Loader = () => {
  return (
    <View style={styles.container}>
        <LottieView source={require('../../../assets/json/loading.json')} autoPlay loop style={styles.lottieImg}/> 
    </View>
  )
}

export default Loader;

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom:0,
        start: 0,
        end: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        zIndex:1,
        backgroundColor: "#a9a9a97d"
    },
    lottieImg: {
      width: 300,
      height: 300
    }
})