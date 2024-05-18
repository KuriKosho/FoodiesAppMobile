import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NotiItem({ name, describe, image, time }) {
    return (
        <View>
            <View style={styles.imgContainer}>
                <View style={{ flexDirection: 'row', }}>
                    <Image style={{ marginRight: 10, height: 60, width: 60, resizeMode: 'cover' }} source={image} />
                    <View style={{ flexDirection: 'column', gap: 8 }}>
                        <Text style={{ fontSize: 15, fontWeight: '600' }}>{name}</Text>
                        <Text style={{ fontSize: 13 }}>{describe}</Text>
                    </View>
                </View>
                <View >
                    <Text style={{ fontSize: 13 }}>{time}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'



    },

})