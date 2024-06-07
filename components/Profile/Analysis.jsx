import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Analysis({ numberFollowers, numberRecipes, numberLikes}) {

    return (
        <View style={styles.container}>
            <View style={styles.followContainer}>
                <Text style={styles.TextNum}>{numberFollowers}</Text>
                <Text style={styles.Text}>FOLLOWERS</Text>
            </View>
            <View style={styles.followContainer}>
                <Text style={styles.TextNum}>{numberRecipes}</Text>
                <Text style={styles.Text}>RECIPES</Text>
            </View>
            <View style={styles.likeContainer}>
                <Text style={styles.TextNum}>{numberLikes}</Text>
                <Text style={styles.Text}>LIKES</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#e65f58",
        height: 60,
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    followContainer: {
        flex: 1,
        borderRightColor: '#fff',
        borderRightWidth: 1,
        borderStyle: "solid",
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    likeContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        gap: 5,
        fontSize: 15,
        color: '#fff'
    }, TextNum: {
        fontSize: 14,
        color: '#fff'
    }
});
