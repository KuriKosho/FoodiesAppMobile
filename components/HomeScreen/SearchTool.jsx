import { StyleSheet, TextInput, View, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import React from 'react'

export default function SearchTool() {
    return (
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <View style={styles.click}>
                    <Feather
                        name="search"
                        size={23}
                        color="black"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor="black"
                    />
                </View>
            </View>
            <View style={styles.filterContainer}>
                <Pressable>
                    <Image style={styles.filterImage} source={require('@/assets/images/user/filter.png')} />
                </Pressable>
            </View >

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 35,
        flexDirection: 'row',
        justifyContent: "space-between"

    },
    containerSearch: {
        alignItems: "center",
        flexDirection: "row",

    },
    click: {
        height: 45,
        flexDirection: "row",
        backgroundColor: "#ff8284",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "80%",
    },
    filterContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterImage: {


    }
})