import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from "../../layouts/body/Layout"
import SearchTool from '@/components/UI/SearchTool'
import ListLoveItems from '@/components/ProductLove/ListLoveItems'
import Category from '@/components/UI/Category'
const FavoriteScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Category title={"Favorite recipes"} style={styles.title} />
        <SearchTool />
        <ListLoveItems />
      </View>
    </Layout>

  )
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##fff',
    marginHorizontal: 15,
    marginBottom: 50
  },
  title: {
    color: '#cd6163',
    fontWeight: '800',
    fontSize: 25
  }
})