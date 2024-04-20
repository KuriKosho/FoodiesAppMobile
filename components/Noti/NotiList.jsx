import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotiItem from './NotiItem'


const imageMap = {
    ema: require('@/assets/images/ema.png'),
    mai: require('@/assets/images/mai.png')
};
const Dummy_data = [{
    "id": 1,
    "name": "Enrika",
    "describe": "liked your “Honey pancakes”",
    "image": "ema",
    "time": "5m ago"
},
{
    "id": 2,
    "name": "Latisha",
    "describe": "liked your “Honey pancakes”",
    "image": "mai",
    "time": "5m ago"
}
]
export default function NotiList() {
    return (
        <FlatList
            data={Dummy_data}
            renderItem={({ item }) => <NotiItem {...item} image={imageMap[item.image]} />}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({})