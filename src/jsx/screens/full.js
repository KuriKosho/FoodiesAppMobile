import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import StackScreens from './stack';
import MainScreen, { tabScreens } from './main';
import { isLogin } from '../../api/auth/HandleApi';

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
    const checkLogin = async() =>{
        return await isLogin();
    }
    useEffect(() => {
      checkLogin();
    },[])
    return (
      
            <NavigationContainer theme={MyTheme} >
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={checkLogin ? "MainScreen" : "Welcome"}>
                        <Stack.Screen name='Welcome' component={StackScreens}/>
                        <Stack.Screen name='MainScreen' component={MainScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default Screens

const styles = StyleSheet.create({})