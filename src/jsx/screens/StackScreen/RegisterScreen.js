import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import Layout from '../../layouts/body/Layout'
import DynamicIcon from '../../components/Icon/DynamicIcon'
import InputBox from '../../components/input/inputBox'
import ButtonNormal from '../../components/Button/ButtonNormal'
import fbLogo from "../../../images/LogoSocialNetwork/fbLogo.png"
import apLogo from "../../../images/LogoSocialNetwork/apLogo.png"
import ggLogo from "../../../images/LogoSocialNetwork/ggLogo.png"
import { createUsername, useCustomNavigation } from '../../../public/method'
import { isValidEmail, isValidPassword } from '../../../public/regex'


const RegisterScreen = () => {
  const navi = useCustomNavigation();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const checkInfo = () => {
    if (isValidPassword(password) && isValidEmail(email)){
      return true;
    }
    return false;
  }
  const signUpHandle = () => {
    if (checkInfo()){
      // goToScreen("ConfirmOTPScreen");
      console.log(createUsername(firstname,lastname));
    }
  }

  return (
    <Layout>
    <View style={styles.container} >
      <View style={styles.containerStart}>
        <TouchableOpacity onPress={()=> navi.goToScreen("LoginAndRegisterScreen")}> 
          <DynamicIcon 
            library={"AntDesign"}
            color={"black"}
            name={"arrowleft"}
            size={26}
          />
        </TouchableOpacity> 
        <View style={styles.containerFixCenter}>
          <Text style={styles.textCenter}>Create Account</Text>
        </View>
      </View>
      <View style={styles.containerStart}>
        <Text style={styles.textHeader}>Welcome to Foodies !</Text>
      </View>
      <View style={styles.containerStart}>
        <Text style={styles.textBody}>We are happy to see you . Let's go !</Text>
      </View>
      <ScrollView style={styles.containerScroll}>
      <View style={styles.containerStart}>
        <View style={styles.containerColumns}>
            <InputBox label={"First name"} type={"text"} placeHolder={"John"} value={firstname} setValue={setFirstname}/> 
            <InputBox label={"Last name"} type={"text"} placeHolder={"William"} value={lastname} setValue={setLastname}/> 
            <InputBox label={"Email"} type={"email"} placeHolder={"example@gmail.com"} value={email} setValue={setEmail}/> 
            <InputBox label={"Password"} type={"password"} placeHolder={"****"} value={password} setValue={setPassword}/> 
        </View>
      </View>

      <View style={styles.containerStart}>
        <ButtonNormal
          action={() => signUpHandle()}
          backgroundColor={"#EB4F30"}
          textColor={"white"}
          textBold={500}
          height={50}
          width={"100%"}
          letterSpacing={0}
          radius={16}
          text={"Create Account"}
          textSize={16}
          lineHeight={20}
        />
      </View>
      <View style={styles.containerCenter}>
        <Text style={styles.textOr}>OR</Text>
      </View>
      <View style={styles.containerCenter}>
        <Image  source={fbLogo} style={styles.logoSocial}/>
        <Image  source={ggLogo} style={styles.logoSocial}/>
        <Image  source={apLogo} style={styles.logoSocial}/>
      </View>
      </ScrollView>
    </View>
  </Layout>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      // justifyContent: "space-between",
      flexDirection: "column",
      width: "100%",
      backgroundColor: "#F7F9FC",
      padding: 16,
      paddingTop: 40,
      rowGap: 20
  },
  containerScroll: {
    display: "flex",
    // justifyContent: "space-between"
  },
  containerStart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  containerEnd: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  containerColumns: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    // marginTop: 20
  },
  containerCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  containerFixCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  textCenter: {
    color: "#161616",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 28,
    textAlign: "center",
  },
  textForgot: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 14,
    color: "#EB4F30"
  },
  textHeader: {
    color: "#EB4F30",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24
  },
  textOr: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  textBody: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20
  },
  textBottom: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20
  },
  textBottomColor: {
    color: "#EB4F30",
    marginStart: 5
  },
  logoSocial: {
    width: 24,
    height: 24,
    objectFit: "cover",
    marginHorizontal: 8
  },
  bottom: {
    flex: 1,
    alignItems: "flex-end"
  }
})