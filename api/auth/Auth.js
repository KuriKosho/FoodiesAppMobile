import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { managerApi } from "../managerApi";

const API_LOGIN_URL = "/api/v1/authenticate";
const API_REGISTER_URL = "/api/v1/register";
const API_VERIFY_URL = "/api/v1/verify-account";

export const LoginApi = async(username, password) => {
  try {
    console.log("Username : ", username, "Password : ", password);
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
        const token = result.data.token ;
        AsyncStorage.setItem("token", token);
      }
      Alert.alert(result.data.message);
    }
  } catch (error) {
    console.error('Login failed:', error);
    Alert.alert('Login Failed', 'Please check your username and password');
  }
}

export const SignUpApi = async(firstname, lastname , username,email, password) => {
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
      Alert.alert(result.data.message);
    }
  } catch (error) {
    console.error('Register failed:', error);
    Alert.alert('Register Failed', 'Please check your fields');
  }
}

const verifyAcccount = async(email, otp)=>{
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