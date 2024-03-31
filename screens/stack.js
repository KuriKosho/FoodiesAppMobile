import IntroScreen from "./StackScreen/IntroScreen";
import LoginScreen from "./StackScreen/LoginScreen";
import RegisterScreen from "./StackScreen/RegisterScreen";

export {IntroScreen, LoginScreen, RegisterScreen} ;

import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginAndRegisterScreen from "./StackScreen/LoginAndRegisterScreen";
import ConfirmOTPScreen from "./StackScreen/ConfirmOTPScreen";
import AccountContext from "../context/AccountContext";

const StackScreens = () => {
    const Stack = createNativeStackNavigator();
    return (
        <AccountContext>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="IntroScreen" component={IntroScreen} />
                <Stack.Screen name="LoginAndRegisterScreen" component={LoginAndRegisterScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="ConfirmOTPScreen" component={ConfirmOTPScreen} />
            </Stack.Navigator>
        </AccountContext>
       
    )
}

export default StackScreens

const styles = StyleSheet.create({})