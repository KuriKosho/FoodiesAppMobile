import { StyleSheet, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useCustomNavigation } from '../../utils/method/useCustomNavigation'
import Layout from "../../layouts/body/Layout"
import HeaderUser from '@/components/Home/HeaderUser';
import Trending from '@/components/Home/Trending';
import ListProduct from '@/components/Meals/ListMeals';
import Banner from '@/components/Home/Banner';
import Post from '@/components/Home/Post/Post';
import {  useSafeAreaInsets } from 'react-native-safe-area-context';
import CreatePost from '@/components/UI/CreatePost';
import { useNavigation, useRoute } from '@react-navigation/native';
import clientService from '@/service/client.service';
import managerApi from '@/api/managerApi';

const trendingPath = "/api/v2/food/trending";
const foodsPath = "/api/v2/food/posts";
function SafeArea() {
  const insets = useSafeAreaInsets();
  const paddingTop = Math.max(insets.top, 40);
  const [profile, setProfile] = React.useState(null);
  const [firstName, setFirstName] = React.useState(null);
  const [profileImg, setProfileImg] = React.useState(null);
  const [recipeData, setRecipeData] = React.useState(null);
  const [foodsData, setFoodsData] = React.useState(null);

  // Post

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await managerApi.get(trendingPath);
        setRecipeData(response.data);
      } catch (error) {
        console.error("Fetch data failed: ", error);
      }
    }
    fetchRecipeData();
  },[])
  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await clientService.getUserProfile();
      setProfile(profile);
      setFirstName(profile.firstName);
      setProfileImg(profile.profileImg);
    };
    fetchProfile();
  }, []);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchFoodsData = async () => {
      try {
          const response = await managerApi.get(foodsPath);
          setFoodsData(response.data);
      } catch (error) {
          console.error("Fetch data failed: ", error);
      }
  }
    const interval = setInterval(() => {
      // console.log('This will run every 4 seconds');
      fetchFoodsData();
      setCount(prevCount => prevCount + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  const components = [
    { key: 'HeaderUser', component: <HeaderUser nameUser={`Hi, ${firstName || "Jessica"}`} profileImg={profileImg} /> },
    { key: 'Banner', component: <Banner /> },
    { key: 'CreatePost', component: <CreatePost/>},
    { key: 'Trending', component: <Trending /> },
    { key: 'ListProduct', component: <ListProduct recipeData={recipeData}/> },
    { key: 'Post', component: <Post data={foodsData} /> },
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