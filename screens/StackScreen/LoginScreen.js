import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Layout from "../../layouts/body/Layout"
import DynamicIcon from '../../components/UI/Icon/DynamicIcon'
import InputBox from '../../components/UI/input/inputBox'
import ButtonNormal from '../../components/UI/Button/ButtonNormal'
import fbLogo from "../../assets/images/LogoSocialNetwork/fbLogo.png"
import apLogo from "../../assets/images/LogoSocialNetwork/apLogo.png"
import ggLogo from "../../assets/images/LogoSocialNetwork/ggLogo.png"
import {isValidUsername } from '../../utils/regex/index';
import { LoginApi } from '../../api/auth/Auth';
import { useCustomNavigation } from '../../utils/method/useCustomNavigation';
import Loader from '@/components/UI/Loading/Loader'
import { accountContext } from '@/context/AccountContext'
import showToast from '@/utils/method/showToast'


const LoginScreen = () => {
  const navi = useCustomNavigation()
  const {username, setUsername} = useContext(accountContext);
  const {password, setPassword} = useContext(accountContext);
  const [loading, setLoading] = useState(false);
  const loginHandle = async () => {
    try{
      setLoading(true);
      if (isValidUsername(username)) {
        console.log("Valid Username ");
        const loginData = await LoginApi(username, password);
        if (loginData==true) {
          setLoading(false);
          showToast("Login successfully !");
          navi.goToScreenWithReplace("MainScreen");
        }
      } else {
        Alert.alert("Please fill all the fields");
      }
    } catch(e){
      setLoading(true);
      console.error("Error in system !")
    }
  }

  return (
    <Layout>
      {loading ? <Loader/> : null}
      <View style={styles.container}>
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
            <Text style={styles.textCenter}>Sign In</Text>
          </View>
        </View>
        <View style={styles.containerStart}>
          <Text style={styles.textHeader}>Welcome back !</Text>
        </View>
        <View style={styles.containerStart}>
          <Text style={styles.textBody}>We are happy to see you again. Let's go get you back in.</Text>
        </View>
        <View style={styles.containerStart}>
          <View style={styles.containerColumns}>
              <InputBox label={"Username"} type={"text"} placeHolder={"account123"} value={username} setValue={setUsername}/> 
              <InputBox label={"Password"} type={"password"} placeHolder={"****"} value={password} setValue={setPassword}/> 
          </View>
        </View>
        <View style={styles.containerEnd}>
          <TouchableOpacity >
            <Text style={styles.textForgot}>Forgot password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerStart}>
          <ButtonNormal
            action={() => loginHandle()}
            backgroundColor={"#EB4F30"}
            textColor={"white"}
            textBold={500}
            height={50}
            width={"100%"}
            letterSpacing={0}
            radius={16}
            text={"Login"}
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
        <View style={[styles.containerCenter, styles.bottom]}>
          <Text style={styles.textBottom}>Not have an account ?</Text>
          <TouchableOpacity onPress={() => navi.goToScreen("RegisterScreen")}>
            <Text style={[styles.textBottom, styles.textBottomColor]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* {loading ?? <Lo} */}
    </Layout>
  )
}

export default LoginScreen;

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
    containerStart: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
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
      // alignItems: "center",
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