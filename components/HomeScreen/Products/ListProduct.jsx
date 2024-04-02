import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemProduct from './ItemProduct'


const imageMap = {
    pancake: require('@/assets/images/homepage/pancake.jpeg'),
    ber: require('@/assets/images/homepage/ber.jpeg'),
    chip: require('@/assets/images/homepage/chip.jpeg'),
    egg: require('@/assets/images/homepage/egg.webp'),


};

const DUMMY_DATA = [{
    "id": "01HST7Z4GF9DB07QPN9TN1FP9J",
    "title": "Fried egg is easy.",
    "image": "egg",
    "vote": "(4.0)",
    "time ": "15 min",
    "level": "Easy"
}, {
    "id": "01HST7Z4GH9X0GXV7P4VG1CM3D",
    "title": "Hamburger with cheese ...",
    "image": "ber",
    "vote": "(3.5)",
    "time ": "15 min",
    "level": "Midle"
}, {
    "id": "01HST7Z4GJARA8Y7AHR1MFMD81",
    "title": "Honey pancakes with...",
    "image": "pancake",
    "vote": ("4.0"),
    "time ": "15 min",
    "level": "Hard"
}, {
    "id": "01HST7Z4GK5T8V9WP720WVFM2J",
    "title": "Administrative Assistant IV",
    "image": "chip",
    "vote": 4,
    "time ": "15 min",
    "level": "Easy"
}, {
    "id": "01HST7Z4GMHDBAT3W2R978V5M9",
    "title": "Pharmacist",
    "image": "egg",
    "vote": 1,
    "time ": "15 min",
    "level": "Easy"
}]
export default function ListProduct() {
    return (
        <FlatList horizontal={true}
            data={DUMMY_DATA}
            renderItem={({ item }) => <ItemProduct {...item} time={item['time ']} image={imageMap[item.image]} />}
            keyExtractor={item => item.id} >
        </FlatList>

    )
}

const styles = StyleSheet.create({})