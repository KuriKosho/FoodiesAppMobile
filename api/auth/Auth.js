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
    console.log("Username : ", username, "Password : ", password);
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
        checkSignUp = true;
        AsyncStorage.setItem("email",result.data.email)
      }
      Alert.alert(result.data.message);
    }
  } catch (error) {
    console.error('Register failed:', error);
    Alert.alert('Register Failed', 'Please check your fields');
    checkSignUp = false;
  }
  return checkSignUp;
}

const verifyAcccount = async(email, otp)=>{
  email = FormatText(email);
  try{
    let params = "?email=" + email + "&otp=" + otp ;
    const result = await managerApi(API_VERIFY_URL+params, {
      headers: {
        'Content-Type': "application/json"
      },
      method: "PUT"
    })
    if (result.status===200) {
      const token = result.data.token ; 
      AsyncStorage.setItem("token", token);
      Alert.alert(result.data.message);
    }
  } catch (e) {
    console.log(e);
    Alert.alert('Verify Account Failed', 'Please check your otp');
  }
}