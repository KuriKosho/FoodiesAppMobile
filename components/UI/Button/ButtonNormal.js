import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ButtonNormal = ({
  text,
  width,
  height,
  textColor,
  textBold,
  textSize,
  letterSpacing,
  backgroundColor,
  radius,
  lineHeight,
  action,
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={[
        styles.defaultStyle,
        {
          backgroundColor: backgroundColor,
          borderRadius: radius,
          width: width,
          height: height,
        },
      ]}
    >
      <Text
        style={[
          styles.defaultStyle,
          {
            color: textColor,
            fontWeight: textBold,
            fontSize: textSize,
            letterSpacing: letterSpacing,
            lineHeight: lineHeight,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonNormal;

const styles = StyleSheet.create({
  defaultStyle: {
    minWidth: 75,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
