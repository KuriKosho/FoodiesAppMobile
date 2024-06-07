import { logOutHandle } from "../../api/auth/HandleApi"
import Menu from '@/components/UI/Menu';
import UserImage from '@/components/Profile/User';
import Analysis from '@/components/Profile/Analysis';
import ButtonCategory from '@/components/UI/Button/ButtonCategory';
import Category from '@/components/UI/Category';
import ListProduct from '@/components/Meals/ListMeals';
import Post from '@/components/Home/Post/Post';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Layout from '@/layouts/body/Layout';
import Header from '@/components/Header/Header';
import IconHead from '@/components/UI/Icon/IconHead';
import MainProfileFrag from '@/components/ProfileScreen/fragment/MainProfileFrag';
import SettingProfileFrag from '@/components/ProfileScreen/fragment/SettingProfileFrag';
import { profileData } from '@/Data/ProfileData';
import clientService from "@/service/client.service";
import managerApi from "@/api/managerApi";



const recipePath = "/api/v2/user/recipe?id="
const ProfileScreen = () => {
  const [firstName, setFirstName] = useState(null);
  const [profileImg, setProfileImg] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [name, setName] = useState(null);
  const [numberFollowers, setNumberFollowers] = useState(0);
  const [numberRecipes, setNumberRecipes] = useState(0);
  const [numberLikes, setNumberLikes] = useState(0);
  const [recipeData, setRecipeData] = useState([]);

  const navigation = useNavigation();
  const EditProfileHandler = () => {
    navigation.navigate("Edit Profile");
  }
  const fetchRepice = async () => {
    const fetchId = await clientService.getUserProfile();
    console.log(fetchId.id +"fetchId");
    const recipesData = await managerApi.get(recipePath + fetchId.id);
    setRecipeData(recipesData.data);
  }
  const fetchProfile = async () => {
    const profileData = await clientService.getUserProfile();
    setFirstName(profileData.firstName);
    setProfileImg(profileData.profileImg);
    setLastName(profileData.lastName);
    setName(profileData.name);
    setNumberFollowers(profileData.numberFollowers);
    setNumberRecipes(profileData.numberRecipes);
    setNumberLikes(profileData.numberLikes);
  };
  useEffect(() => {
    fetchRepice();
    fetchProfile();
  }, []);

  // const [main, setMain] = useState(true);


  return (

    <View style={styles.containerbackground}>
      <ScrollView style={styles.container}  >
        <Menu />
        <UserImage firstName={firstName} lastName={lastName} name={name} profileImg={profileImg} />
        <Analysis numberFollowers={numberFollowers} numberLikes={numberLikes} numberRecipes={numberRecipes} />
        <View style={styles.buttonContainerOutter} >
          <ButtonCategory styleTouch={{ flex: 1 }} style={styles.buttonContainer} onPress={EditProfileHandler} content={"Edit Profile"} />
          <ButtonCategory styleTouch={{ flex: 1 }} style={styles.buttonContainer} content={"My recipes"} isFocused={true} />
        </View>
        <View style={styles.meal}>
          {recipeData.length!=0 ? <ListProduct recipeData={recipeData}/> : ""}
        </View>
      </ScrollView >
    </View>
  )
}



export default ProfileScreen;

const styles = StyleSheet.create({
  containerbackground: {
    flex: 1,
    backgroundColor: "#F7F8F9",
  },
  container: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 10,
  },
  buttonContainerOutter: {
    gap: 15,
    flexDirection: "row",
  },
  meal: {
    marginTop: 40,
  },


  // container: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F7F8F9',
  // },
  // containerHeader: {
  //   display: "flex",
  //   width: "100%",
  //   padding: 16,
  //   flexDirection: "row",
  //   justifyContent: "space-between"
  // },
  // containerBody: {
  //   display: "flex",
  //   flexDirection: "column",
  //   // alignItems:"center",
  //   width: "100%",
  //   paddingTop: "2%",
  //   backgroundColor: "yellow"
  // }

})
