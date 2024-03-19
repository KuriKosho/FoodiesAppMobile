import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import TabScreen from "../../components/MenuItem/TabScreen";
import Layout from "../body/Layout";


  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 50,
    },
  };
const BottomBar = ({ tabScreens }) => {
  const Tab = createBottomTabNavigator();
  return (
        <Tab.Navigator screenOptions={screenOptions}>
          {tabScreens.map((screen, index) => (
            <Tab.Screen
              key={index}
              name={screen.name}
              component={screen.component}
              options={({route}) => ({
                tabBarIcon: ({focused})=> (
                  <TabScreen 
                    focused={focused}
                    icon={screen.icon}
                  />
                )
              })}
            />
          ))}
        </Tab.Navigator>
  )
};

export default BottomBar;
