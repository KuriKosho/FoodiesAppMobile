import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Filter from '../UI/Filter'


export default function HeaderUser({ nameUser }) {
    return (
        <View style={styles.container} >
            <View style={styles.containerUser}>
                <View>
                    <Image style={styles.imgStyles}
                        source={require('@/assets/images/homepage/user.jpeg')} />
                </View>
                <View style={styles.nameUserContainer}>
                    <Text style={styles.nameStyles} >{nameUser}</Text>
                </View>
            </View>
            <Filter />

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

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
        marginHorizontal: 20
    },
    nameUserContainer: {
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'column'
    },
    nameStyles: {
        fontSize: 20,
        fontWeight: 'bold'
    },



})