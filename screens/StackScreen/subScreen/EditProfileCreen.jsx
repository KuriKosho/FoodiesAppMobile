import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import EditProfile from '@/components/Profile/EditProfile'
import Menu from '@/components/UI/Menu'
import UserImage from '@/components/Profile/User'

export default function EditProfileScreen() {

    return (
        <View style={styles.containerback}>
            <View style={styles.container}>
                <Menu />
                <View style={{}}>
                    <UserImage />
                </View>
                <EditProfile />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerback: {
        backgroundColor: "#F7F8F9",
        flex: 1,

    },
    container: {
        marginTop: 15,
        marginHorizontal: 10,
    }
})