import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { FormatText } from "../../utils/method/formatText";
import clientService from "@/service/client.service";
import managerApi from "../managerApi";
import tokenService, { setToken } from "@/service/token.service";

const API_LOGIN_URL = "/api/v1/authenticate";
const API_REGISTER_URL = "/api/v1/register";
const API_VERIFY_URL = "/api/v1/verify-account";

export const LoginApi = async(username, password) => {
  let checkLogin = false;
  try {
    console.log("Username : ", username, "-Password : ", password);
    username = FormatText(username);
    const result = await managerApi.post(API_LOGIN_URL, {username,password});
    if (result) {
      checkLogin = result.login;
      if (result.login){
        const token = result.token;
        tokenService.setToken(token);
        clientService.setUserProfile(result);
        console.log("Login successfully");
      } else {
        Alert.alert(result.message);
      }
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
    const result = await managerApi.post(API_REGISTER_URL, {
        firstname,
        lastname,
        email,
        username,
        password
    })
    if (result) {
      checkSignUp = result.register; 
      if (result.register) {
          AsyncStorage.setItem("email",result.email)
      } else {
          Alert.alert(result.message)
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
    const result = await managerApi.put(API_VERIFY_URL+params)
    if (result) {
        checkVerify = result.verify; 
        tokenService.setToken(result.token);
        if (checkVerify){
          clientService.setUserProfile(result);
          console.log("Verify successfully");
        } else {
          Alert.alert(result.message)
        }
    }
    
  } catch (e) {
    console.log(e);
    Alert.alert('Verify Account Failed', 'Please check your otp');
  }
  return checkVerify;
}