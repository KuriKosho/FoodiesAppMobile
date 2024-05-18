import { StyleSheet, Pressable, View, Image } from 'react-native'
import React from 'react'

export default function Filter() {
    return (
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
    )
}

const styles = StyleSheet.create({
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