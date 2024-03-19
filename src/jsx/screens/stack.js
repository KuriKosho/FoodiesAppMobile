import IntroScreen from "./StackScreen/IntroScreen";
import LoginScreen from "./StackScreen/LoginScreen";
import RegisterScreen from "./StackScreen/RegisterScreen";

export {IntroScreen, LoginScreen, RegisterScreen} ;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginAndRegisterScreen from "./StackScreen/LoginAndRegisterScreen";
import ConfirmOTPScreen from "./StackScreen/ConfirmOTPScreen";

const StackScreens = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="IntroScreen" component={IntroScreen} />
            <Stack.Screen name="LoginAndRegisterScreen" component={LoginAndRegisterScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ConfirmOTPScreen" component={ConfirmOTPScreen} />
        </Stack.Navigator>
    )
}

export default StackScreens

const styles = StyleSheet.create({})