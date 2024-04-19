import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { managerApi } from "../managerApi";
import { FormatText } from "../../utils/method/formatText";

const API_LOGIN_URL = "/api/v1/authenticate";
const API_REGISTER_URL = "/api/v1/register";
const API_VERIFY_URL = "/api/v1/verify-account";

export const LoginApi = async(username, password) => {
  let checkLogin = false;
  try {
    console.log("Username : ", username, "-Password : ", password);
    username = FormatText(username);
    const result = await managerApi(API_LOGIN_URL, {
      headers: {
        'Content-Type': "application/json"
      },
      method: "POST",
      data: {
        username,
        password
      }
    })
    if (result.status === 200) {
      if (result.data.login===true) {
        checkLogin = true;
        const token = result.data.token ;
        AsyncStorage.setItem("token", token);
      } else 
      Alert.alert(result.data.message);
    }
  } catch (error) {
    console.error('Login failed:', error);
    checkLogin(false);
    Alert.alert('Login Failed', 'Please check your username and password');
  }
  return checkLogin;
}

export const SignUpApi = async(firstname, lastname , username,email, password) => {
  let checkSignUp = false;
  firstname = FormatText(firstname);
  lastname = FormatText(lastname);
  username = FormatText(username);
  email = FormatText(email);

  try {
    const result = await managerApi(API_REGISTER_URL, {
      headers: {
        'Content-Type': "application/json"
      },
      method: "POST",
      data: {
        firstname,
        lastname,
        email,
        username,
        password
      }
    })
    if (result.status === 200) {
      if (result.data) {
        if (result.data.register!=null || result.data.register != undefined){
          checkSignUp = result.data.register; 
          AsyncStorage.setItem("email",result.data.email)
        } else {
          Alert.alert(result.data.message)
        }
      }
    }
  } catch (error) {
    console.error('Register failed:', error);
    Alert.alert('Register Failed', 'Please check your fields');
    checkSignUp = false;
  }
  return checkSignUp;
}

export const verifyAcccount = async(email, otp)=>{
  let checkVerify = false;
  email = FormatText(email);
  console.log("Email: ",email,"| Otp: ",otp)
  try{
    let params = "?email=" + email + "&otp=" + otp ;
    const result = await managerApi(API_VERIFY_URL+params, {
      headers: {
        'Content-Type': "application/json"
      },
      method: "PUT"
    })
    if (result.status===200) {
      if (result.data) {
        if (result.data.verify!=null || result.data.verify != undefined){
          console.log(result.data)
          checkVerify = result.data.verify; 
          const token = result.data.token ; 
          AsyncStorage.setItem("token", token);
        } else {
          Alert.alert(result.data.message)
        }
      }
    }
  } catch (e) {
    console.log(e);
    Alert.alert('Verify Account Failed', 'Please check your otp');
  }
  return checkVerify;
}