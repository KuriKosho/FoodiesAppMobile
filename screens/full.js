import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import StackScreens from './stack';
import MainScreen from './main';
import { isLogin } from "../api/auth/HandleApi"
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyTheme = {
    dark: false,
    colors: {
      primary: "#DED0B6",
      background: "#fff",
      card: "#fff",
      text: "#F8FAE5",
      notification: "rgb(255, 69, 58)",
    },
  };
const Screens = () => {
    const Stack = createNativeStackNavigator();
    const [check, setCheck] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const checkLogin = async() =>{
        const tokenExists = await isLogin();
        if (tokenExists) {
          setCheck(true);
          const token = await AsyncStorage.getItem("token");
          console.log("Token exists",token);
        } else {
          setCheck(false);
          console.log("No exits")
        }
        setLoading(false);
    }
    useEffect(() => {
      checkLogin();
    },[])
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } 
    return (
            <NavigationContainer theme={MyTheme} >
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={(check) ? "MainScreen" : "Welcome"}>
                        <Stack.Screen name='Welcome' component={StackScreens}/>
                        <Stack.Screen name='MainScreen' component={MainScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default Screens

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  }
})