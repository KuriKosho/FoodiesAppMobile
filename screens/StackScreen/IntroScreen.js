import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCustomNavigation } from '../../utils/method/useCustomNavigation';
import ButtonNormal from '@components/UI/Button/ButtonNormal'




const IntroScreen = () => {
  const navigation = useCustomNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text_main}>
          Foodies{'\n'}App
        </Text>
      </View>

      <ButtonNormal 
          // action={()=>navigation.goToScreen("LoginAndRegisterScreen")}  
          action={()=>navigation.goToScreen("MainScreen")}  
          // action={()=>navigation.goToScreen("StepScreen")}  
          backgroundColor={"white"}
          textColor={"black"}
          textBold={500}
          height={50}
          width={"100%"}
          letterSpacing={0}
          radius={16}
          text={"Get started"}
          textSize={16}
          lineHeight={20}
          />
    </View>
  )
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EB4F30",
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  text_main: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "900",
    fontSize: 60,
  },

})