import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealDetail from '@/components/Meals/MealDetail';

export default function MealDetailScreen() {
    const mealData = {};

    return (
        <View style={styles.container}>

            <MealDetail
                title={mealData.title}
                vote={mealData.vote}
                time={mealData.time}
                level={mealData.level}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
