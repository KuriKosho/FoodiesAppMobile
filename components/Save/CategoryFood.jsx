import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonCategory from '../UI/Button/ButtonCategory'

export default function CategoryFood() {
    return (
        <View style={styles.container} >
            <ButtonCategory textStyle={styles.text} content={"All"} />
            <ButtonCategory textStyle={styles.text} content={"Vegetables & Greens"} />
            <ButtonCategory textStyle={styles.text} content={"Cheeses"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
        // marginHorizontal: 20,
    },
    text: {
        fontSize: 15
    }
})