import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DUMMY_DATA } from './ListMeals';
import YoutubePlayer from 'react-native-youtube-iframe';


export default function MealDetail() {
    const route = useRoute();
    const { mealID } = route.params;
    const meal = DUMMY_DATA.find(item => item.id === mealID);

    const title = meal.title;
    const vote = meal.vote;
    const time = meal.time;
    const level = meal.level;
    const image = meal.image
    const ingredient = meal.ingredient


    return (
        <ScrollView style={styles.container}>
            <YoutubePlayer
                height={250}
                width={"100%"}
                play={true}
                videoId={meal.video}
            />
            <View style={styles.containerContent}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{title}</Text>
                    {/* <Text>Vote: {vote}</Text> */}
                    <Text style={{ fontWeight: '700', fontSize: 15 }}>{time}</Text>
                </View>
                <View style={{ padding: 5, }}>
                    <View>
                        <Text style={{ fontWeight: "600", fontSize: 14, padding: 5 }}>INGREDIENTS</Text>
                        <Text style={{ padding: 5, fontWeight: meal.ingredientfontWeight, fontSize: meal.ingredientFontSize }}>{ingredient}</Text>
                    </View>
                    {/* <Text>Level: {level}</Text> */}
                    <View >
                        <Text style={{ fontWeight: "600", fontSize: 17, padding: 5 }}>Instructions</Text>
                        <Text  > {meal.cook}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerContent: {
        padding: 10,
        gap: 10,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        overflow: 'hidden',
        height: '100%'

    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: 'cover',
    }
});
