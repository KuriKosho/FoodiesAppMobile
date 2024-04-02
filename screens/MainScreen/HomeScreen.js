import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react'
import { useCustomNavigation } from '../../utils/method/useCustomNavigation'
import Layout from "../../layouts/body/Layout"
import HeaderUser from '@/components/HomeScreen/Head/HeaderUser';
import SearchTool from '@/components/HomeScreen/Head/SearchTool';
import Trending from '@/components/HomeScreen/Head/Trending';
import ListProduct from '@/components/HomeScreen/Products/ListProduct';
import Ingredients from '@/components/HomeScreen/Ingredient/Category';
import ListItemSingle from '@/components/HomeScreen/Ingredient/ListItemSingle';
import Banner from '@/components/HomeScreen/Head/Banner';
import Post from '@/components/HomeScreen/Post/Post';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


function SafeArea() {
  const insets = useSafeAreaInsets();
  const paddingTop = Math.max(insets.top, 40);

  const components = [
    { key: 'HeaderUser', component: <HeaderUser nameUser={'Hi, Jessica'} /> },
    { key: 'Banner', component: <Banner /> },
    { key: 'SearchTool', component: <SearchTool /> },
    { key: 'Trending', component: <Trending /> },
    { key: 'ListProduct', component: <ListProduct /> },
    { key: 'Ingredients', component: <Ingredients title='Your Ingredients' showAll={'See all'} /> },
    { key: 'ListItemSingle', component: <ListItemSingle /> },
    { key: 'Post', component: <Post /> },
  ];

  const renderItem = ({ item }) => <View>{item.component}</View>;

  return (
    <View style={{ flex: 1, paddingBottom: 50 }}>
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
    // <View style= {styles.container}>
    //   <Text>HomeScreen</Text>
    //   <TouchableOpacity onPress={() => navi.goToScreen("SC1")}>
    //     <Text>Go</Text>
    //   </TouchableOpacity>
    // </View>
    <Layout>
      <SafeArea/>
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
    },
})