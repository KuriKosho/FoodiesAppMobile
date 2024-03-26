import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { logOutHandle } from "../../api/auth/HandleApi"
import { useCustomNavigation } from '../../utils/method';

const ProfileScreen = () => {
  const navi = useCustomNavigation();
  
  const LogOut =  () => {
    const checkLogout = logOutHandle();
    if (checkLogout) {
      navi.goToScreenWithReplace("Welcome")
    }
  }
  return (
    <View style= {styles.container}>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={()=> LogOut()}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})