import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TitleHeader from './TitleHeader'

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
            {/* <TitleHeader /> */}
            <View style={styles.filterContainer} >
                <Pressable
                    android_ripple={{ color: '#ccc' }}
                    style={({ pressed }) => [
                        styles.pressedContainer,
                        { opacity: pressed ? 0.5 : 1 },
                    ]}>
                    <View style={styles.filterImage} >
                        <Image
                            source={require('@/assets/images/homepage/filter.png')}
                            resizeMode="cover"
                        />
                    </View>
                </Pressable>
            </View>
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
    filterContainer: {
        width: 35,
        height: 35,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 0.75,
        backgroundColor: '#fff',
        overflow: 'hidden',
        marginRight: 15
    },

    pressedContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }


})