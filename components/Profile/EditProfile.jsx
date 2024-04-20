import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputBox from '../UI/input/inputBox'

export default function EditProfile() {
    return (
        <View>
            <InputBox label={"Username"} type={"text"} placeHolder={"account123"} />
        </View>
    )
}

const styles = StyleSheet.create({})
