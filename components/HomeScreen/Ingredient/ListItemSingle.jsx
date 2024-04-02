import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ItemSingle from './ItemSingle'
const DUMMY_DATA =
    [{
        "id": 1,
        "name": "Avocado",
        "image": "https://product.hstatic.net/200000325223/product/z2448801510183_2263357c23ba80c433204bcdc0cb2d19_056f2c250f0d4ab699b11e67dc809b48.jpg"
    }, {
        "id": 2,
        "name": "Lemon",
        "image": "https://dictionary.cambridge.org/vi/images/thumb/lemon_noun_002_20971.jpg?version=5.0.389"
    }, {
        "id": 3,
        "name": "Strawberry",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg/1200px-Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg"
    }, {
        "id": 4,
        "name": "Broccoli",
        "image": "https://c8.alamy.com/comp/2JKXETM/inflorescence-and-trunk-of-broccoli-vegetable-cut-in-half-isolated-on-white-green-organic-superfood-and-a-healthy-ingredient-for-a-healthy-diet-2JKXETM.jpg"
    }, {
        "id": 5,
        "name": "Broccoli",
        "image": "https://c8.alamy.com/comp/2JKXETM/inflorescence-and-trunk-of-broccoli-vegetable-cut-in-half-isolated-on-white-green-organic-superfood-and-a-healthy-ingredient-for-a-healthy-diet-2JKXETM.jpg"
    }]
export default function ListItemSingle() {
    return (
        <FlatList
            horizontal={true}
            data={DUMMY_DATA}
            renderItem={({ item }) => <ItemSingle {...item} />}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({

})