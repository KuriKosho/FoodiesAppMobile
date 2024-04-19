import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import CircleImageWithLabel from '@/components/UI/SelectBox/CircleImageWithLabel'

const IngredientFrag = ({data, action}) => {
  return (
    <View style={styles.container}>
      {(data != null || data.length != 0) ?
        data.map((item, index) => {
          return (
              <CircleImageWithLabel key={index} size={72}  source={item.imgUrl} label={item.name} action={action} id={item.id} focus={item.focus}/>
          )
        })
        : ""}
    </View>
  )
}

export default IngredientFrag;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection:"row",
        flexWrap:"wrap",
        flex: 1,
        justifyContent:"space-between",
        columnGap: 10,
        rowGap: 10
    },  
    textSt: {
        color: "#000",
    },

})