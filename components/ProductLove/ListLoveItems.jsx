import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ProductLoveItem from './ProductLoveItem';


const imageMap = {
    samon: require('@/assets/images/samon.png'),
    pizza: require('@/assets/images/pizza.png'),
    cake: require('@/assets/images/cake.png'),
    egg: require('@/assets/images/homepage/egg.webp'),


};

const DUMMY_DATA = [{
    "id": "01HST7Z4GF9DB07QPN9TN1FP9J",
    "title": "Salmon with vegetables",
    "image": "samon",
    "vote": "4.0",
    "time": "30 min",
    "level": "Easy"
}, {
    "id": "01HST7Z4GH9X0GXV7P4VG1CM3D",
    "title": "Pizza alla Diavola",
    "image": "pizza",
    "vote": "3.5",
    "time": "60 min",
    "level": "Midle"
}, {
    "id": "01HST7Z4GJARA8Y7AHR1MFMD81",
    "title": "Cheesecake raspberry",
    "image": "cake",
    "vote": "4.0",
    "time": "50 min",
    "level": "Hard"
}, {
    "id": "01HST7Z4GK5T8V9WP720WVFM2J",
    "title": "Administrative Assistant IV",
    "image": "pizza",
    "vote": 4,
    "time": "15 min",
    "level": "Easy"
}, {
    "id": "01HST7Z4GMHDBAT3W2R978V5M9",
    "title": "Pharmacist",
    "image": "egg",
    "vote": 1,
    "time": "15 min",
    "level": "Easy"
}]
export default function ListLoveItems({data}) {
    return (
        <FlatList
            style={{ marginTop: 20 }}
            data={data}
            renderItem={({ item,index }) => <ProductLoveItem id={item.id} key={index} time={item.time} image={item.image} level={item.level} title={item.title} vote={item.vote} />}
            keyExtractor={item => item.id} >
        </FlatList>

    )
}

const styles = StyleSheet.create({

})