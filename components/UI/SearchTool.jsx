import { StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from 'react'

export default function SearchTool({ style }) {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (text) => {
        setSearchValue(text);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.containerSearch, style]}>
                <View style={styles.click}>
                    {searchValue.length > 1 ? (
                        <TouchableOpacity>
                            <Feather
                                name="arrow-left"
                                size={23}
                                color="black"
                                style={{ paddingHorizontal: 10 }}
                            />
                        </TouchableOpacity>
                    ) : (
                        <Feather
                            name="search"
                            size={23}
                            color="black"
                            style={{ paddingHorizontal: 10 }}
                        />
                    )}
                    <TextInput
                        value={searchValue}
                        onChangeText={handleInputChange}
                        style={styles.input}
                        placeholder="Search recipes..."
                        placeholderTextColor="#161616"
                    />
                </View>
                {searchValue.length > 1 && <TouchableOpacity >
                    <Text style={{ color: '#fa8486', fontWeight: "700", fontSize: 14, textAlign: "center" }}>Done</Text>
                </TouchableOpacity>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    containerSearch: {
        flex: 1,
        gap: 10,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row",
        paddingHorizontal: 10
    },
    click: {
        flex: 8.5,
        height: 40,
        flexDirection: "row",
        backgroundColor: "#E4E9F2",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 5
    },
    input: {
        fontSize: 15,
        marginLeft: 10,
        width: "90%",
    },
})