import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CircleLogo = ({ size, source }) => {
  return (
    <Image 
      source={source} 
      style={{ width: size, height: size, objectFit: "cover", borderRadius: (size / 2) }} />
  )
}

export default CircleLogo

const styles = StyleSheet.create({})