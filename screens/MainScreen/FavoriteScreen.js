import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from "../../layouts/body/Layout"
import SearchTool from '@/components/UI/SearchTool'
import ListLoveItems from '@/components/ProductLove/ListLoveItems'
import Category from '@/components/UI/Category'
import { useNavigation } from '@react-navigation/core'
const FavoriteScreen = () => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate("Meal Detail", { mealID: id });
  };
  return (
    <View style={styles.container}>
      <Category title={"Favorite recipes"} onPress={onPressHandler} style={styles.title} />
      <SearchTool />
      <ListLoveItems />
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