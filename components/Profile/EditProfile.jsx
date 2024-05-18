import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InputBox from '../UI/input/inputBox';
import ButtonCategory from '../UI/Button/ButtonCategory';
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onCancelPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <InputBox value={username} setValue={setUsername} style={styles.inputStyle} label={"Username"} type={"text"} placeHolder={"account123"} />
            <InputBox value={email} setValue={setEmail} style={styles.inputStyle} label={"Email"} type={"text"} placeHolder={"email"} />
            <InputBox value={password} setValue={setPassword} style={styles.inputStyle} label={"Password"} type={"text"} placeHolder={"*****"} />
            <InputBox value={confirmPassword} setValue={setConfirmPassword} style={styles.inputStyle} label={"Confirm Password"} type={"text"} placeHolder={"*****"} />

            <View style={styles.buttonContainerOutter} >
                <ButtonCategory styleTouch={{ flex: 1 }} style={styles.buttonContainer} onPress={onCancelPress} content={"Cancel"} />
                <ButtonCategory styleTouch={{ flex: 1 }} style={styles.buttonContainer} content={"Save"} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    buttonContainerOutter: {
        gap: 15,
        flexDirection: "row",
        backgroundColor: "#ffffff"

    },
    inputStyle: {
        backgroundColor: "#ffffff"
    }
});
