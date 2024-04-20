import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { launchCamera } from 'react-native-image-picker';

export default function UserImage() {
    const [followers, setFollowers] = useState(24);
    const [iconVisible, setIconVisible] = useState(true);

    const handleIconPress = () => {
        setIconVisible(false);
        setFollowers(prevCount => prevCount + 1);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIconVisible(true);
        }, 5000); // 5 seconds
        return () => clearTimeout(timeout);
    }, []);

    const requestCameraPermission = async () => {
        try {
            const checkPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
            if (checkPermission === true || checkPermission === PermissionsAndroid.RESULTS.GRANTED) {
                const result = await launchCamera({ mediaType: 'photo', cameraType: 'front' });
                console.log(result);
            } else {
                console.log("Permission denied");
            }
        } catch (error) {
            console.log("Error requesting camera permission:", error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={{ position: "relative" }}>
                <TouchableOpacity onPress={requestCameraPermission}>
                    <Image style={styles.imgStyles} source={require('@/assets/images/homepage/user.jpeg')} />
                </TouchableOpacity>
                {iconVisible && (
                    <TouchableOpacity onPress={handleIconPress}>
                        <Entypo style={{ position: "absolute", bottom: -4, right: 5, zIndex: 1 }} name="circle-with-plus" size={25} color="#e50000" />
                    </TouchableOpacity>
                )}
                {!iconVisible && (
                    <MaterialIcons style={{ position: "absolute", bottom: -4, right: 5, zIndex: 1 }} name="done" size={24} color="black" />
                )}
            </View>
            <Text style={styles.name}>Rose</Text>
            <Text style={styles.address}>lasi, Romania</Text>
            <Text style={styles.followers}>{followers} Followers</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    imgStyles: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    address: {
        fontSize: 13
    },
    followers: {
        fontSize: 15,
        marginTop: 10
    }
});
