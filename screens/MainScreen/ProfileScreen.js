import { logOutHandle } from "../../api/auth/HandleApi"
import { useCustomNavigation } from '../../utils/method/useCustomNavigation';
import Menu from '@/components/UI/Menu';
import UserImage from '@/components/Profile/User';
import Analysis from '@/components/Profile/Analysis';
import ButtonCategory from '@/components/UI/Button/ButtonCategory';
import Category from '@/components/UI/Category';
import ListProduct from '@/components/Meals/ListMeals';
import Post from '@/components/Home/Post/Post';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from '@/layouts/body/Layout';
import Header from '@/components/Header/Header';
import IconHead from '@/components/UI/Icon/IconHead';
import MainProfileFrag from '@/components/ProfileScreen/fragment/MainProfileFrag';
import SettingProfileFrag from '@/components/ProfileScreen/fragment/SettingProfileFrag';
import { profileData } from '@/Data/ProfileData';




const ProfileScreen = () => {
  const navigation = useNavigation();
  const EditProfileHandler = () => {
    navigation.navigate("Edit Profile");
  }


  // const navi = useCustomNavigation();
  // const [main, setMain] = useState(true);

  // const LogOut = () => {
  //   const checkLogout = logOutHandle();
  //   if (checkLogout) {
  //     navi.goToScreenWithReplace("Welcome")
  //   }
  // }

  return (

    // <Layout style={styles.container}>
    //   <View style={styles.containerHeader}>
    //     <Header action={() => console.log("Press handler")} bgIcon={"#E4E9F2"} title={"Account"} type={"threeline"} />
    //     <View>
    //       <IconHead action={() => console.log("Notification")} bgColor={"#fff"} lib={"Ionicons"} name={"notifications-outline"} />
    //     </View>
    //   </View>
    //   <ScrollView style={styles.containerBody}>
    //     {main == true ? <MainProfileFrag fullname={profileData.fullname}
    //       numberFollower={profileData.number_follower}
    //       numberLike={profileData.number_like}
    //       numberRecipe={profileData.number_recipe}
    //       recipeList={profileData.my_recipe}
    //       avtUrl={profileData.avt_url}
    //       username={profileData.username}
    //     /> : <SettingProfileFrag />}
    //   </ScrollView>
    // </Layout>


    <View style={styles.container} >
      <Menu />
      <UserImage />
      <Analysis />
      <View style={styles.buttonContainerOutter} >
        <ButtonCategory styleTouch={{ flex: 1 }} style={styles.buttonContainer} onPress={EditProfileHandler} content={"Edit Profile"} />
        <ButtonCategory styleTouch={{ flex: 1 }} style={styles.buttonContainer} content={"My recipes"} />
      </View>
      <Category showAll={"All"} />
      <View style={styles.meal}>
        <ListProduct />
      </View>
      <Category showAll={"All"} />
      <Post />
    </View >
  )
}



export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 10
  },
  buttonContainerOutter: {
    gap: 15,
    flexDirection: "row",
  },
  meal: {
    marginBottom: 15
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
