import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react'
import { useCustomNavigation } from '../../utils/method/useCustomNavigation'
import Layout from "../../layouts/body/Layout"
import HeaderUser from '@/components/Home/HeaderUser';
import SearchTool from '@/components/UI/SearchTool';
import Trending from '@/components/Home/Trending';
import ListProduct from '@/components/Meals/ListMeals';
import Ingredients from '@/components/UI/Category';
import ListItemSingle from '@/components/Home/Ingredient/ListItemSingle';
import Banner from '@/components/Home/Banner';
import Post from '@/components/Home/Post/Post';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import CreatePost from '@/components/UI/CreatePost';


function SafeArea() {
  const insets = useSafeAreaInsets();
  const paddingTop = Math.max(insets.top, 40);

  const components = [
    { key: 'HeaderUser', component: <HeaderUser nameUser={'Hi, Jessica'} /> },
    { key: 'Banner', component: <Banner /> },
    { key: 'SearchTool', component: <SearchTool /> },
    { key: 'CreatePost', component: <CreatePost />},
    { key: 'Trending', component: <Trending /> },
    { key: 'ListProduct', component: <ListProduct /> },
    { key: 'Ingredients', component: <Ingredients title='Your Ingredients' showAll={'See all'} /> },
    { key: 'ListItemSingle', component: <ListItemSingle /> },
    { key: 'Post', component: <Post /> },
  ];

  const renderItem = ({ item }) => <View>{item.component}</View>;

  return (
    <View style={{ flex: 1, paddingBottom: 50, }}>
      <FlatList
        data={components}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        ListHeaderComponent={<View style={styles.container}></View>}
      />
    </View>
  );
}


const HomeScreen = () => {
  const navi = useCustomNavigation();
  return (
    <Layout>
      <SafeArea />
    </Layout>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginHorizontal: 10,
  },
})