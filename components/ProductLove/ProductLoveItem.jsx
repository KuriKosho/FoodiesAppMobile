import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

import React from 'react'

const ProductLoveItem = ({ title, vote, time, level, image }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <Image source={image} style={styles.imgStyles} />
            </View>
            <View style={styles.iconContainer} >
                <Text>{vote}</Text>
                <FontAwesome style={styles.icon} name="star" size={14} color="orange" ></FontAwesome>
            </View>
            <View style={{ padding: 10 }}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={1}> {title}</Text>
                </View>

                <View style={styles.rateContainer}>
                    <View style={styles.time}>
                        <Ionicons name="time-outline" size={18} color="black" />
                        <Text>{time}</Text>
                    </View>
                    <View>
                        <Text>{level}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductLoveItem

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        flex: 1,
        borderColor: "black",
        width: "100%",
        overflow: 'hidden',
        backgroundColor: '#E4E9F2',
        position: "relative",
        marginBottom: 20
    },
    imgStyles: {
        padding: 10,
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    titleContainer: {
        paddingTop: 10
    },
    title: {
        fontSize: 15,
        fontWeight: '500',

    },
    iconContainer: {
        flexDirection: 'row',
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: "white",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 100
    },
    icon: {
        padding: 3,
    },
    rateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    }
})