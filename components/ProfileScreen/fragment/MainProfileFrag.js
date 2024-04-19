import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '@/layouts/body/Layout'
import { profileData } from '@/Data/ProfileData'

const MainProfileFrag = ({fullname, username,avtUrl,numberLike, numberRecipe, numberFollower, recipeList}) => {
    
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.avtContainer}>
          <Image style={styles.avtSt} source={{uri:avtUrl}} />
        </View>
        <Text style={styles.txtFullname}>{fullname}</Text>
        <Text style={styles.txtUsername}>{username}</Text>
      </View>
    </View>
  )
}

export default MainProfileFrag

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  avtContainer: {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
  },
  avtSt:{
    width: 120,
    height: 120,
    objectFit:"cover",
    borderRadius: 100,
  },
  txtFullname: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "500",
    paddingTop: "3%",
    paddingBottom: "2%"
  },
  txtUsername: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400"
  }
})