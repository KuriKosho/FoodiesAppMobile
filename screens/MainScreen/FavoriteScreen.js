import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from "../../layouts/body/Layout"
import SearchTool from '@/components/UI/SearchTool'
import ListLoveItems from '@/components/ProductLove/ListLoveItems'
import Category from '@/components/UI/Category'
import { useNavigation } from '@react-navigation/core'
import clientService from '@/service/client.service'
import managerApi from '@/api/managerApi'

const favoritePath = "/api/v2/user/favorite?id="
const FavoriteScreen = () => {
  const navigation = useNavigation();
  const [recipeData, setRecipeData] = useState([]);

  const onPressHandler = () => {
    navigation.navigate("Meal Detail", { mealID: id });
  };
  const fetchFavourite = async () => {
    const fetchId = await clientService.getUserProfile();
    const recipesDatas = await managerApi.get(favoritePath + fetchId.id);
    setRecipeData(recipesDatas.data);
  }
  useEffect(() => {
    fetchFavourite();
    console.log(recipeData);
  }, []);
  return (
    <View style={styles.container}>
      <Category title={"Favorite recipes"} onPress={onPressHandler} style={styles.title} />
      <SearchTool />
      <ListLoveItems data={recipeData} />
    </View>

  )
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##fff',
    marginHorizontal: 15,
    marginBottom: 50,

  },
  title: {
    color: '#cd6163',
    fontWeight: '800',
    fontSize: 20,
    marginTop: 10
  }
})