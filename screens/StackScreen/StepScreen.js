import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from "../../layouts/body/Layout"
import { startUpData } from "../../Data/afterRegisterData"
import { useCustomNavigation } from '@/utils/method/useCustomNavigation'
import QuestionHeader from '@/components/GetStartedScreen/head/QuestionHeader'
import StepDescription from '@/components/GetStartedScreen/description/StepDescription'
import ButtonSmall from '@/components/UI/Button/ButtonSmall'
import IngredientFrag from '@/components/GetStartedScreen/fragment/IngredientFrag'
import RecipeFrag from '@/components/GetStartedScreen/fragment/RecipeFrag'
import AllergiesFrag from '@/components/GetStartedScreen/fragment/AllergiesFrag'
import managerApi from '@/api/managerApi'

const StepScreen = () => {
    const [index, setIndex] = useState(0);
    const [listIngredients, setListIngredients] = useState(startUpData[0].list.map(item => ({ ...item, focus: false })));
    const [listAllergies, setLisAllergies] = useState(startUpData[1].list.map(item => ({ ...item, focus: false })));
    const [listRecipes, setListRecipes] = useState(startUpData[2].list.map(item => ({ ...item, focus: false })));
    const fetchData = async () => {
        try {
            const response = await managerApi.get("/api/v2/user/question");
            const data = response.data;
            console.log("Data: ", data);
            setListIngredients(data[0].list.map(item => ({ ...item, focus: false })));
            setLisAllergies(data[1].list.map(item => ({ ...item, focus: false })));
            setListRecipes(data[2].list.map(item => ({ ...item, focus: false })));
        } catch (error) {
            console.error("Fetch data failed: ", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    // Method update ingredient list
    const updateIngredientList = (id, isFocus) => {
        setListIngredients(prevList => prevList.map(item => {
            if (item.id === id) {
                return { ...item, focus: isFocus };
            }
            return item;
        }));
    };
    // Method update allergies list   
    const updateAllergieList = (id, isFocus) => {
        setLisAllergies(prevList => prevList.map(item => {
            if (item.id === id) {
                return { ...item, focus: isFocus };
            }
            return item;
        }));
    }
    // Method update recipes list   
    const updateRecipeList = (id, isFocus) => {
        setListRecipes(prevList => prevList.map(item => {
            if (item.id === id) {
                return { ...item, focus: isFocus };
            }
            return item;
        }));
    }
    const navi = useCustomNavigation();
    const increIndex = () => {
        if (index < 2) {
            setIndex(index + 1);
        } else {
            navi.goToScreenWithReplace("MainScreen");
        }
    }
    const degreIndex = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }
    return (
        <Layout>
            <View style={styles.container}>
                <View>
                    <View style={styles.statusContainer}>
                        <View style={styles.skipContainer}>
                            {index == 0 ? <>
                                <View style={[styles.skipBtn, { backgroundColor: "#ff6464" }]}></View>
                            </> :
                                index == 1 ? <>
                                    <View style={[styles.skipBtn, { backgroundColor: "#ff6464" }]}></View>
                                    <View style={[styles.skipBtn, { backgroundColor: "#ff6464" }]}></View>
                                </> :
                                    index == 2 ? <>
                                        <View style={[styles.skipBtn, { backgroundColor: "#ff6464" }]}></View>
                                        <View style={[styles.skipBtn, { backgroundColor: "#ff6464" }]}></View>
                                        <View style={[styles.skipBtn, { backgroundColor: "#ff6464" }]}></View>
                                    </> : ""}

                        </View>
                        <TouchableOpacity onPress={() => increIndex()}>
                            <Text style={styles.skipText}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                    <QuestionHeader question={startUpData[index].question} />
                    <StepDescription description={startUpData[index].description} />
                </View>

                {/* Fragment */}
                <ScrollView style={styles.fragContainer}>
                    {index == 0 ? <IngredientFrag data={listIngredients} action={updateIngredientList} /> : null}
                    {index == 1 ? <AllergiesFrag data={listAllergies} action={updateAllergieList} /> : null}
                    {index == 2 ? <RecipeFrag data={listRecipes} action={updateRecipeList} /> : null}
                </ScrollView>
                <View style={styles.btnContainer}>
                    {
                        index == 0 ?
                            <ButtonSmall action={increIndex} boder={false} text={"Next Step"} /> :
                            index == 1 ?
                                <>
                                    <ButtonSmall action={degreIndex} boder={true} text={"Previous Step"} />
                                    <ButtonSmall action={increIndex} boder={false} text={"Next Step"} />
                                </> :
                                <ButtonSmall action={increIndex} boder={false} text={"Finish"} />
                    }
                </View>
            </View>
        </Layout>
    )
}

export default StepScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 16,
        justifyContent: "space-between"
    },
    statusContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        paddingBottom: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },
    btnContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'nowrap',
        columnGap: 10
    },
    fragContainer: {
        paddingVertical: 20
    },
    skipContainer: {
        display: "flex",
        flexDirection: "row",
        columnGap: 10
    },
    skipBtn: {
        width: 50,
        height: 6,
        borderRadius: 50,
    },
    skipText: {
        fontSize: 12,
        fontWeight: "500",
        textDecorationLine: "underline",
        color: "#ff6464",
    }
})