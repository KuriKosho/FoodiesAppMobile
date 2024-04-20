import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { logOutHandle } from "../../api/auth/HandleApi"
import { useCustomNavigation } from '../../utils/method/useCustomNavigation';
import { MaterialIcons } from '@expo/vector-icons';

import React from 'react'
import Menu from '@/components/UI/Menu';
import UserImage from '@/components/Profile/User';
import Analysis from '@/components/Profile/Analysis';
import ButtonCategory from '@/components/UI/Button/ButtonCategory';
import Category from '@/components/UI/Category';
import ListProduct from '@/components/Meals/ListMeals';
import Post from '@/components/Home/Post/Post';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navi = useCustomNavigation();
  const navigation = useNavigation();
  const EditProfileHandler = () => {
    navigation.navigate("Edit Profile");
  };
  const LogOut = () => {
    const checkLogout = logOutHandle();
    if (checkLogout) {
      navi.goToScreenWithReplace("Welcome")
    }
  }

  return (
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
      {/* <TouchableOpacity onPress={() => LogOut()}>
          <Text>Log out</Text>
        </TouchableOpacity> */}
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
  }
})