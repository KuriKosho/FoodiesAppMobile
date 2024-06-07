import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

import ItemFoodSave from './ItemFoodSave'


export default function ListFoodSave() {
    let [data, setData] = useState(
        [
            {
                "id": 1,
                "name": "Avocado",
                "description": "500 g",
                "image": "https://product.hstatic.net/200000325223/product/z2448801510183_2263357c23ba80c433204bcdc0cb2d19_056f2c250f0d4ab699b11e67dc809b48.jpg"
            },
            {
                "id": 2,
                "name": "Lemon",
                "description": " 25 g",
                "image": "https://dictionary.cambridge.org/vi/images/thumb/lemon_noun_002_20971.jpg?version=5.0.389"
            },
            {
                "id": 3,
                "name": "StrawBerry",
                "description": "150 g",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg/1200px-Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg"
            },
            {
                "id": 4,
                "name": "Dolli",
                "description": 47,
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg/1200px-Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg"
            },
            {
                "id": 5,
                "name": "Alister",
                "description": 41,
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg/1200px-Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg"
            },
            {
                "id": 6,
                "name": "Alister",
                "description": 41,
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg/1200px-Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg"
            },
            {
                "id": 7,
                "name": "Alister",
                "description": 41,
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg/1200px-Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg"
            },
            {
                "id": 8,
                "name": "Alister",
                "description": 41,
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg/1200px-Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg"
            },
        ]);

    const deleteItem = (id) => {
        setData(prevData => prevData.filter(item => item.id !== id));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <ItemFoodSave {...item} deleteItem={deleteItem} />}
                keyExtractor={item => item.id.toString()}
                style={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: '#F68F91',
        borderWidth: 0.5,
    },
    listContainer: {
        flex: 1,
        marginBottom: 45,
    },

});
