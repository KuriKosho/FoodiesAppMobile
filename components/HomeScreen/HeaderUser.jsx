import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TitleHeader from './TitleHeader'

export default function HeaderUser({ nameUser }) {
    return (
        <View>
            <View style={styles.container}>
                <View>
                    <Image style={styles.imgStyles}
                        source={require('@/assets/images/user/user.jpeg')} />
                </View>
                <View style={styles.nameUserContainer}>
                    <Text style={styles.nameStyles} >{nameUser}</Text>
                </View>
            </View>
            <TitleHeader />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
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
    }


})