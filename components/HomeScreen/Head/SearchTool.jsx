import { StyleSheet, TextInput, View, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import DynamicIcon from '../../UI/Icon/DynamicIcon'

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
                        style={{ paddingHorizontal: 10 }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Search recipes..."
                        placeholderTextColor="#161616"

                    />
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: "space-between",

    },
    containerSearch: {
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10


    },
    click: {
        height: 40,
        flexDirection: "row",
        backgroundColor: "#ccb0b0",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 15,
        marginLeft: 10,
        width: "90%",
    },

})