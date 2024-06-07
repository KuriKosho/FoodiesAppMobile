import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useCustomNavigation } from '../../utils/method/useCustomNavigation';
import { logOutHandle } from "@/api/auth/HandleApi"

import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
    const navigation = useNavigation();
    const NotificationHandler = () => {
        navigation.navigate("Notification");
    };
    const navi = useCustomNavigation();

    const LogOut = () => {
        const checkLogout = logOutHandle();
        console.log(checkLogout);
        if (checkLogout) {
            navi.goToScreenWithReplace("Welcome");
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerMenu}
             onPress={()=> console.log("Setting")}>
                <Ionicons name="menu" size={23} color="#fa8486" />
            </TouchableOpacity>
            <Text style={styles.textStyles}>Account</Text>
            <View>
                <TouchableOpacity style={styles.containerMenu} onPress={()=> LogOut()}>
                    <Ionicons name="notifications-outline" size={23} color="#fa8486" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    containerMenu: {
        height: 32,
        width: 32,
        borderRadius: 16,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E4E9F2'
    },
    textStyles: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
        color: "#EB303F"
    }
})