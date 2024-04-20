import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EditProfile from '@/components/Profile/EditProfile'
import Menu from '@/components/UI/Menu'
import UserImage from '@/components/Profile/User'

export default function EditProfileScreen() {
    return (
        <View style={styles.container}>
            <Menu />
            <View style={{}}>
                <UserImage />
            </View>
            <EditProfile />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginHorizontal: 10
    }
})