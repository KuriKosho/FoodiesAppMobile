import React from "react";
import { View,StyleSheet } from "react-native";
import DynamicIcon from "../Icon/DynamicIcon";

const TabScreen = ({ icon , focused}) => {
    return (
        <View style={styles.tabContainer}>
            {/* {focused && <View style={styles.focusTab}></View>} */}
            <DynamicIcon 
                library={icon.library}  
                color={focused ? "#FF3535" : "black"} 
                name={icon.name} 
                size={icon.size}/>
        </View>
    )
}
const styles = StyleSheet.create({
    tabContainer: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    focusTab: {
        width: 60,
        height: 2,
        borderRadius: 100,
        backgroundColor: "#FF3535",
        position: "absolute",
        top: -11,
    },
});
export default TabScreen;