import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../layouts/body/Layout';
import DynamicIcon from '../../components/UI/Icon/DynamicIcon';
import ButtonNormal from '../../components/UI/Button/ButtonNormal';
import OneNumberBox from '../../components/UI/input/oneNumberBox';
import { useCustomNavigation } from '../../utils/method/useCustomNavigation';
import { accountContext } from '../../context/AccountContext';
import { maskEmail } from '../../utils/method/maskEmail';

const ConfirmOTPScreen = () => {
  const navi = useCustomNavigation();
  const {email, setEmail} = useContext(accountContext);
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [number4, setNumber4] = useState('');
    const confirmHandle = () => {
        return true;
    }
    const emailMask = maskEmail(email);
  return (
    <Layout>
    <View style={styles.container}>
      <View style={styles.containerStart}>
        <TouchableOpacity onPress={()=> goToScreen("RegisterScreen")}>
          <DynamicIcon 
            library={"AntDesign"}
            color={"black"}
            name={"arrowleft"}
            size={26}
          />
        </TouchableOpacity>
        <View style={styles.containerFixCenter}>
          <Text style={styles.textCenter}>Confirm OTP</Text>
        </View>
      </View>
      <View style={styles.containerStart}>
        <Text style={styles.textHeader}>Last Step !</Text>
      </View>
      <View style={styles.containerStart}>
        <Text style={styles.textBody}>Read the OTP code carefully before filling it out !</Text>
      </View>
      <View style={[styles.containerFixCenter, styles.center]}>
        <Text style={styles.textConfirm}>Confirm OTP was sent to your email {emailMask} </Text>
      </View>
     <View style={styles.containerConfirm}>
        <OneNumberBox value={number1} setValue={setNumber1} character={"*"} />
        <OneNumberBox value={number2} setValue={setNumber2} character={"*"} />
        <OneNumberBox value={number3} setValue={setNumber3} character={"*"} />
        <OneNumberBox value={number4} setValue={setNumber4} character={"*"} />
     </View>
     <View style={styles.containerCenter}>
        <TouchableOpacity>
            <Text style={styles.textResend}>
                Resend
            </Text>
        </TouchableOpacity>
     </View>
      <View style={[styles.containerCenter, styles.bottom]}>
        <ButtonNormal
          action={() => confirmHandle()}
          backgroundColor={"#EB4F30"}
          textColor={"white"}
          textBold={500}
          height={50}
          width={"100%"}
          letterSpacing={0}
          radius={16}
          text={"Confirm"}
          textSize={16}
          lineHeight={20}
        />
      </View>

    </View>
  </Layout>
  )
}

export default ConfirmOTPScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
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
    containerConfirm: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "blue"
        columnGap: 14
    },
    textCenter: {
      color: "#161616",
      fontWeight: "600",
      fontSize: 20,
      lineHeight: 28,
      textAlign: "center",
    },
   
    textHeader: {
      color: "#EB4F30",
      fontWeight: "600",
      fontSize: 20,
      lineHeight: 24
    },
    textResend: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 15,
        color: "#EB4F30"
    },
    textConfirm: {
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 15,
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
    bottom: {
      flex: 1,
      alignItems: "flex-end",
      marginBottom: 30
    },
    center: {
        marginTop: "10%"
    }
})