import { StyleSheet, View } from 'react-native'
import React from 'react'
import TextWithBorder from '@/components/UI/SelectBox/TextWithBorder'

const RecipeFrag = ({data,action}) => {
  return (
    <View style={styles.container}>
      {(data != null || data.length != 0) ?
        data.map((item, index) => {
        return (
          <View style={styles.btnContainer} key={index}>
            <TextWithBorder  text={item.name} action={action} focus={item.focus} id={item.id}/>
          </View>
        )
      })
      : ""}
    </View>
  )
}

export default RecipeFrag

const styles = StyleSheet.create({
  container: {
      display: "flex",
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent:"space-between",
      // columnGap: 15,
      rowGap: 10,
  },  
  textSt: {
      color: "#000",
  },
  btnContainer: {
    width: "48%",
  }

})