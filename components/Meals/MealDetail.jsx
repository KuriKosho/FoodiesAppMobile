import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DUMMY_DATA } from './ListMeals';
import YoutubePlayer from 'react-native-youtube-iframe';
import managerApi from '@/api/managerApi';
import DynamicIcon from '../UI/Icon/DynamicIcon';

const detailPath = "/api/v2/food/details?id=";
export default function MealDetail() {
    const route = useRoute();

    const { mealID } = route.params;
    const [data, setData] = useState({});
    const [video, setVideo] = useState("");
    const meal = DUMMY_DATA.find(item => item.id === "01HST7Z4GH9X0GXV7P4VG1CM3D");
    const fixVideoLink = (str) => {
        return str.replace("https://www.youtube.com/watch?v=", "");
    }
    const fetchMealDetail = async () => {
        try {
            const response = await managerApi.get(detailPath + mealID);
            const data1 = response.data;
            setData(data1);
            setVideo(fixVideoLink(data1.video));
        } catch (error) {
            console.error("Fetch data failed: ", error);
        }
    }
    useEffect(() => {
        fetchMealDetail();
        console.log("Time", data.time);
    }, [mealID]);
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
                videoId={video}
            />
            <View style={styles.containerContent}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{data.title}</Text>
                    {/* <Text>Vote: {vote}</Text> */}
                    <Text style={{ fontWeight: '700', fontSize: 15 }}>{data.time} minis</Text>
                </View>
                <View>
                    <Text>{data.vote} / 5 <DynamicIcon name={"star"} color={"#ff4800"} library={"AntDesign"}  size={20}/></Text>
                </View>
                <View style={{ padding: 5, }}>
                    <View>
                        <Text style={{ fontWeight: "600", fontSize: 14, padding: 5 }}>INGREDIENTS</Text>
                        {/* <Text style={{ padding: 5, fontWeight: meal.ingredientfontWeight, fontSize: meal.ingredientFontSize }}>{ingredient}</Text> */}
                        { data.ingredient ? data.ingredient.map((item, index) => {
                            return (
                                <Text key={index} style={{ padding: 5, fontWeight: meal.fontWeight, fontSize: meal.fontSize }}>{item}</Text>
                            )
                        }) : ""}
                    </View>
                    {/* <Text>Level: {level}</Text> */}
                    <View >
                        <Text style={{ fontWeight: "600", fontSize: 17, padding: 5 }}>Instructions</Text>
                        <Text  > {data.description}</Text>
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
