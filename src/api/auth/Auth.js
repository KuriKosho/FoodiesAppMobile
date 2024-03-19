import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { managerApi } from "../managerApi";

const API_LOGIN_URL = "/api/v1/authenticate";
const API_REGISTER_URL = "/api/v1/register";

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

const SignUpApi = async(firstname, lastname , username, password) => {

}