import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextWithBorder from '@/components/UI/SelectBox/TextWithBorder'

const AllergiesFrag = ({data,action}) => {
  return (
    <View style={styles.container}>
    {(data != null || data.length != 0) ?
      data.map((item, index) => {
        return (
          <TextWithBorder key={index} text={item.name} action={action} focus={item.focus} id={item.id}/>
        )
      })
      : ""}
  </View>
  )
}

export default AllergiesFrag

const styles = StyleSheet.create({
  container: {
      display: "flex",
      flexDirection:"row",
      flexWrap:"wrap",
      flex: 1,
      justifyContent:"flex-start",
      columnGap: 15,
      rowGap: 10
  },  
  textSt: {
      color: "#000",
  },

})