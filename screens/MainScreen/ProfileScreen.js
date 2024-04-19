import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { logOutHandle } from "../../api/auth/HandleApi"
import { useCustomNavigation } from '../../utils/method/useCustomNavigation';
import Layout from '@/layouts/body/Layout';
import Header from '@/components/Header/Header';
import IconHead from '@/components/UI/Icon/IconHead';
import MainProfileFrag from '@/components/ProfileScreen/fragment/MainProfileFrag';
import SettingProfileFrag from '@/components/ProfileScreen/fragment/SettingProfileFrag';
import { profileData } from '@/Data/ProfileData';

const ProfileScreen = () => {
  const navi = useCustomNavigation();
  const [main, setMain] = useState(true);
  
  const LogOut =  () => {
    const checkLogout = logOutHandle();
    if (checkLogout) {
      navi.goToScreenWithReplace("Welcome")
    }
  }
  return (
    <Layout style= {styles.container}>
      {/* <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={()=> navi.goToScreen("SC5")}>
        <Text>Screen 5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> LogOut()}>
        <Text>Log out</Text>
      </TouchableOpacity> */}
      {/* <Header title={"Account"} type={} */}
      <View style={styles.containerHeader}>
        <Header action={()=>console.log("Press handler")} bgIcon={"#E4E9F2"} title={"Account"} type={"threeline"} />
        <View>
          <IconHead action={()=>console.log("Notification")} bgColor={"#fff"} lib={"Ionicons"} name={"notifications-outline"} />
        </View>
      </View>
      <ScrollView style={styles.containerBody}>
        {main==true ? <MainProfileFrag fullname={profileData.fullname} 
                                       numberFollower={profileData.number_follower}
                                       numberLike={profileData.number_like}
                                       numberRecipe={profileData.number_recipe}
                                       recipeList={profileData.my_recipe} 
                                       avtUrl={profileData.avt_url}
                                       username={profileData.username}
        /> : <SettingProfileFrag/>}
      </ScrollView>
    </Layout>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F8F9',
    },
    containerHeader: {
      display:"flex",
      width:"100%",
      padding: 16,
      flexDirection:"row",
      justifyContent:"space-between"
    },
    containerBody:{
      display:"flex",
      flexDirection:"column",
      // alignItems:"center",
      width:"100%",
      paddingTop:"2%",
      backgroundColor:"yellow"
    }
})