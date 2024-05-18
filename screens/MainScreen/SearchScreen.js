import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Category from '@/components/UI/Category';
import SearchTool from '@/components/UI/SearchTool';
import Filter from '@/components/UI/Filter';
import ListProduct from '@/components/Meals/ListMeals';
import ButtonCategory from '@/components/UI/Button/ButtonCategory';
import ListItemSingle from '@/components/Home/Ingredient/ListItemSingle';

const ListButton = ["Pasta", "Cookies", "BBQ", "Steak", "Pumpkin Spice", "Cake", "Smoothies", "Appetizer"]

const SearchScreen = () => {
  return (
    <ScrollView>
      <View style={styles.containerOutter}>
        <View style={styles.container}>
          <Category style={styles.title} title={"Discover recipes"} />
          <Filter />
        </View>
        <SearchTool />
        <Category title={"Most liked"} showAll={"View all"} />
        <ListProduct />
        <Category title={"Popular Searches"} showAll={"View all"} />
        <View style={styles.category}  >
          {ListButton.map((button) => <ButtonCategory key={button} textStyle={styles.text} content={button} />)}
        </View>
        <Category title={"Search by ingredient"} showAll={"View all"} />
        <ListItemSingle />
      </View >
    </ScrollView >
  )
}

export default SearchScreen;

const styles = StyleSheet.create({
  containerOutter: {
    flex: 1,
    backgroundColor: '##fff',
    marginTop: 10,
    marginBottom: 50,
    marginHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#cd6163',
    fontWeight: '800',
    fontSize: 20
  },
  category: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  text: {
    fontSize: 15,

  }
})