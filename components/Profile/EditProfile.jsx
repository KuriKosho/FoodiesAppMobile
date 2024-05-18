import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputBox from '../UI/input/inputBox';
import ButtonCategory from '../UI/Button/ButtonCategory';
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
    const navigation = useNavigation();

    const onCancelPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <InputBox style={styles.inputStyle} label={"Username"} type={"text"} placeHolder={"account123"} />
            <InputBox style={styles.inputStyle} label={"Email"} type={"text"} placeHolder={"email"} />
            <InputBox style={styles.inputStyle} label={"Password"} type={"text"} placeHolder={"*****"} />
            <InputBox style={styles.inputStyle} label={"Confirm Password"} type={"text"} placeHolder={"*****"} />

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
