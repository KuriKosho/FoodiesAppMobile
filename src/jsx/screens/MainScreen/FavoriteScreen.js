import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../layouts/body/Layout';

const FavoriteScreen = () => {
  return (
    <Layout>
      <View style= {styles.container}>
      <Text>FavoriteScreen</Text>
    </View>  
    </Layout>
    
  )
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})