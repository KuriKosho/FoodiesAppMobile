import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';

export default function ItemFoodSave({ id, image, name, weight, quantity, deleteItem }) {
    const [numberFood, setNumberFood] = useState(quantity);

    function plusHandler() {
        setNumberFood(prev => prev + 1);
    }

    function minusHandler() {
        if (numberFood === 0) {
            deleteHandler();
        } else {
            setNumberFood(prev => prev - 1);
        }
    }


    function deleteHandler() {
        deleteItem(id);
    }

    return (
        <View style={styles.containerOutter}>
            <View style={styles.containerInner}>
                <View style={styles.imgContainer}>
                    <Image
                        source={{ uri: image }}
                        style={styles.imgStyles}
                    />
                </View>
                <View style={styles.info}>
                    <Text>{name}</Text>
                    <Text>{weight}</Text>
                </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
                <TouchableOpacity onPress={deleteHandler}>
                    <EvilIcons name="trash" size={24} color="#EB4F30" />
                </TouchableOpacity>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={minusHandler}>
                        <AntDesign name="minus" size={15} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.text}>{numberFood}</Text>
                    <TouchableOpacity onPress={plusHandler}>
                        <AntDesign name="plus" size={15} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerOutter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginRight: 8,
        padding: 15,
    },
    containerInner: {
        flexDirection: 'row',
    },
    imgStyles: {
        width: 70,
        height: 70,
        resizeMode: 'cover',
    },
    imgContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        overflow: 'hidden',
        marginRight: 15,
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 23,
        width: 70,
        borderColor: 'black',
    },
    text: {
        paddingHorizontal: 10,
    },
});
