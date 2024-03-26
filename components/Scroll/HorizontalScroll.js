import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import CircleLogo from "../UI/logo/CircleLogo"

const HorizontalScroll = ({ data }) => {
  return (
    <ScrollView horizontal style={styles.container}  >
      {(data !== null || data.length !== 0) ?
        data.map((item, index) => {
          return (
            <View style={styles.item} key={index}>
              <CircleLogo key={index} size={item.size} source={item.source} />
            </View>
          )
        })
        : ""}
    </ScrollView>
  )
}

export default HorizontalScroll

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: "hidden",
  },
  item: {
    margin: 8
  }
})