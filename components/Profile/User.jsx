import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, PermissionsAndroid, Pressable } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { launchCamera } from 'react-native-image-picker';
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import domtoimage from "dom-to-image";
import * as ImagePicker from "expo-image-picker";


export default function UserImage({ onPress }
) {
    const imageRef = useRef();
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const [pickedEmoji, setPickedEmoji] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showAppOptions, setShowAppOptions] = useState(false);
    // const [iconVisible, setIconVisible] = useState(true);

    if (status === null) {
        requestPermission();
    }

    const onReset = () => {
        setShowAppOptions(false);
    };

    const onAddSticker = () => {
        setIsModalVisible(true);
    };

    const onModalClose = () => {
        setIsModalVisible(false);
    };

    const onSaveImageAsync = async () => {
        if (Platform.OS !== "web") {
            try {
                const localUri = await captureRef(imageRef, {
                    height: 440,
                    quality: 1,
                });
                await MediaLibrary.saveToLibraryAsync(localUri);
                if (localUri) {
                    alert("Saved!");
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                const dataUrl = await domtoimage.toJpeg(imageRef.current, {
                    quality: 0.95,
                    width: 320,
                    height: 440,
                });

                let link = document.createElement("a");
                link.download = "sticker-smash.jpeg";
                link.href = dataUrl;
                link.click();
            } catch (e) {
                console.log(e);
            }
        }
    };
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        } else {
            alert("You did not select any image.");
        }
    };



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

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setIconVisible(true);
    //     }, 5000); // 5 seconds
    //     return () => clearTimeout(timeout);
    // }, []);

    // const [followers, setFollowers] = useState(24);

    // const handleIconPress = () => {
    //     setIconVisible(false);
    //     setFollowers(prevCount => prevCount + 1);
    // };

    return (
        <View style={styles.container}>
            <View style={{ position: "relative" }}>
                <TouchableOpacity onPress={pickImageAsync}>
                    <Image style={styles.imgStyles} source={require('@/assets/images/homepage/user.jpeg')} />
                </TouchableOpacity>
                {/* {iconVisible && (
                    <TouchableOpacity onPress={handleIconPress}>
                        <Entypo style={{ position: "absolute", bottom: -4, right: 5, zIndex: 1 }} name="circle-with-plus" size={25} color="#e50000" />
                    </TouchableOpacity>
                )}
                {!iconVisible && (
                    <MaterialIcons style={{ position: "absolute", bottom: -4, right: 5, zIndex: 1 }} name="done" size={24} color="black" />
                )} */}
            </View>
            <Text style={styles.name}>Rose</Text>
            <Text style={styles.address}>lasi, Romania</Text>
            {showAppOptions ? (
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <TouchableOpacity onPress={onReset} >
                            <Text>Reset</Text>
                        </TouchableOpacity>
                        <Pressable onPress={onAddSticker} ><Text>ADDD</Text></Pressable>
                        <TouchableOpacity
                            onPress={onSaveImageAsync}>
                            <Text>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.footerContainer}>
                    {/* <Pressable
                        onPress={pickImageAsync}
                    >
                        <Text>Chooose</Text>
                    </Pressable> */}
                    <Pressable
                        onPress={() => setShowAppOptions(true)}
                    ><Text>Choo</Text></Pressable>
                </View>
            )}
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