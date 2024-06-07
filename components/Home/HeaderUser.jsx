import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Filter from '../UI/Filter'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function HeaderUser({ nameUser,profileImg }) {
    const navigation = useNavigation();
    const NotificationHandler = () => {
        navigation.navigate("Notification");
    };
    return (
        <View style={styles.container} >
            <View style={styles.containerUser}>
                <View>
                    <Image style={styles.imgStyles}
                        // source={require('@/assets/images/homepage/user.jpeg')} 
                        source={{uri: profileImg}}
                        />
                </View>
                <View style={styles.nameUserContainer}>
                    <Text style={styles.nameStyles} >{nameUser}</Text>
                </View>
            </View>
            {/* <Filter /> */}
            <View>
                <TouchableOpacity style={styles.containerMenu} onPress={NotificationHandler}>
                    <Ionicons name="notifications-outline" size={23} color="#fa8486" />
                </TouchableOpacity>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,

    },
    containerUser: {
        flexDirection: 'row',
        marginTop: 15,
        marginVertical: 15
    },
    imgStyles: {
        height: 50,
        width: 50,
        borderRadius: 25,
        // marginHorizontal: 20
    },
    nameUserContainer: {
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'column'
    },
    nameStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },



})