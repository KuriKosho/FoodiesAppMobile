import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Category from '@/components/UI/Category';
import NotiList from '@/components/Noti/NotiList';

export default function NotificationScreen() {
    const [categories, setCategories] = useState([
        { title: "Today", items: [1] },
        { title: "History", items: [1, 2, 3] }
    ]);

    const clearAllItems = (index) => {
        setCategories(prevCategories => {
            const updatedCategories = [...prevCategories];
            updatedCategories.splice(index, 1);
            return updatedCategories;
        });
    };

    return (
        <FlatList
            style={styles.container}
            data={categories}
            renderItem={({ item, index }) => (
                <View>
                    <Category
                        title={item.title}
                        showAll={"Clear All"}
                        onPress={() => clearAllItems(index)}
                    />
                    <FlatList
                        data={item.items}
                        renderItem={({ item }) => <NotiList />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    }
});
