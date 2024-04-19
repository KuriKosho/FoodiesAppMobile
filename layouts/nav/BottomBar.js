import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabScreen from "../../components/MenuItem/TabScreen";
import { createStackNavigator } from "@react-navigation/stack";


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

// Tạo bottom tab navigation
const Tab = createBottomTabNavigator();

// Hàm tạo Stack Navigator cho mỗi tabScreen
const createStack = (component, childComponents) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name={component.name} component={component.component} options={{ headerShown: false }} />
            {childComponents.map((child, index) => (
                <Stack.Screen key={index} name={child.childName} component={child.childComponent} options={{ headerShown: false }} />
            ))}
        </Stack.Navigator>
    );
};  
const BottomBar = ({ tabScreens }) => {
  const Tab = createBottomTabNavigator();
  return (
        <Tab.Navigator screenOptions={screenOptions}>
          {tabScreens.map((screen, index) => (
            <Tab.Screen
              key={index}
              name={screen.tabName}
              options={({route}) => ({
                tabBarIcon: ({focused})=> (
                  <TabScreen 
                    focused={focused}
                    icon={screen.icon}
                  /> 
                )
              })}
              >
                {() => createStack(screen, screen.childComponent)}
              </Tab.Screen>
          ))}
        </Tab.Navigator>
  )
};

export default BottomBar;
