import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import EditProfile from '@/components/Profile/EditProfile'
import Menu from '@/components/UI/Menu'
import UserImage from '@/components/Profile/User'
import clientService from '@/service/client.service'
import managerApi from '@/api/managerApi'


const updatePath = "/api/v2/user/update-profile"
export default function EditProfileScreen() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const fetchProfile  = async () => {
        try {
            const profile = await clientService.getUserProfile();
            setUsername(profile.username);
            setEmail(profile.email);
            setImage(profile.profileImg);
            setFirstName(profile.firstName);
            setLastName(profile.lastName);
            setName(profile.name);
            setId(profile.id);
            console.log(profile.image)
        } catch (error) {
            console.error("Fetch data failed: ", error);
        }
    }
    useEffect(() => {
        fetchProfile();
        console.log("fetchProfile img", image)
    }, []);
    const updateProfileHandler = async () => {
        if (password == "" && confirmPassword == "" && email == "" && username == "") {
            alert("Please fill all fields");
            return;
        }
        if (password!="" && confirmPassword!="" && password != confirmPassword) {
            alert("Password and confirm password are not match");
            return;
        }
        try {
            const response = await managerApi.put(updatePath, {id,username, email, password});
            if (response) {
                if (response.success) {
                    ToastAndroid.show("Update profile success", ToastAndroid.SHORT);
                    const profile = await clientService.getUserProfile();
                    profile.username = username;
                    profile.email = email;
                    setConfirmPassword("");
                    setPassword("");
                    setUsername(username);
                    setEmail(email);
                } else {
                    ToastAndroid.show("Update profile failed", ToastAndroid.SHORT);
                }
            } else {
                ToastAndroid.show("Update profile failed", ToastAndroid.SHORT);
            }
        } catch (error) {
            console.error("Update profile failed: ", error);
            ToastAndroid.show("Update profile failed", ToastAndroid.SHORT);
        }

    }
    return (
        <View style={styles.containerback}>
            <View style={styles.container}>
                <Menu />
                <View style={{}}>
                    <UserImage profileImg={image} firstName={firstName} lastName={lastName} name={name} />
                </View>
                <EditProfile saveHandle={updateProfileHandler} email={email} setEmail={setEmail} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} setUsername={setUsername} username={username}   />
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