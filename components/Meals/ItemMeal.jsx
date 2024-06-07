import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ItemProduct({ id, title, vote, time, level, image }) {
    const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.navigate("Meal Detail", { mealID: id });
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPressHandler}>
            <View>
                {/* <Image source={image} style={styles.imgStyles} /> */}
                <Image source={{uri:image}} style={styles.imgStyles} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}> {title}</Text>
            </View>
            <View style={styles.iconContainer} >
                <FontAwesome style={styles.icon} name="star" size={14} color="orange" ></FontAwesome>
                <FontAwesome style={styles.icon} name="star" size={14} color="orange" />
                <FontAwesome style={styles.icon} name="star" size={14} color="orange" />
                <FontAwesome5 style={styles.icon} name="star-half-alt" color="orange" size={13} />
                <Text>{vote}</Text>
            </View>
            <View style={styles.rateContainer}>
                <View style={styles.time}>
                    <Ionicons name="time-outline" size={18} color="black" />
                    <Text>{time} min</Text>
                </View>
                <View>
                    <Text>{level}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        flex: 1,
        marginHorizontal: 5,
        borderColor: "black",
        height: 230,
        width: 180,
        overflow: 'hidden',
        backgroundColor: '#E4E9F2'
    },
    imgStyles: {
        padding: 10,
        width: '100%',
        height: 130,
        resizeMode: 'cover',
    },
    titleContainer: {
        paddingTop: 10
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center'
    },
    iconContainer: {
        flexDirection: 'row',
        marginLeft: 5,
        marginTop: 5
    },
    icon: {
        padding: 3,
    },
    rateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    }
});
