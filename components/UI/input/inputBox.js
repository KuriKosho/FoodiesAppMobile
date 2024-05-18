import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const InputBox = ({ label, type, placeHolder, value, setValue, style }) => {
  const getInputKeyboardType = (type) => {
    switch (type) {
      case 'email':
        return 'email-address';
      case 'password':
        return 'default';
      case 'phone':
        return 'phone-pad';
      default:
        return 'default';
    }
  };
  const checkSecureTextEntry = (type) => {
    if (type.toUpperCase() === "PASSWORD") {
      return true;
    } else return false;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        style={[styles.inputStyle, styles.labelStyle, style]}
        placeholder={placeHolder}
        onChangeText={text => setValue(text)}
        value={value}
        keyboardType={getInputKeyboardType(type)}
        autoCapitalize={"none"}
        secureTextEntry={checkSecureTextEntry(type)}
      />
    </View>
  )
}

export default InputBox;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // backgroundColor: '#ffffff',
    width: "100%",
  },
  inputStyle: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    // marginVertical: 16,
    marginTop: 10,
    marginBottom: 16,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 8,
    fontSize: 14,
    lineHeight: 20,
  },
  labelStyle: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    color: "#000"
  }
})