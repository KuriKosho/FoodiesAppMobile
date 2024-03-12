import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ButtonNormal from '../../components/Button/ButtonNormal';




const IntroScreen = () => {
  const navigation = useNavigation();
  const goToScreen = (name) => {
    navigation.navigate(name);
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text_main}>
          Foodies{'\n'}App          
        </Text>
      </View>
      <ButtonNormal 
          action={()=>goToScreen("LoginAndRegisterScreen")}  
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