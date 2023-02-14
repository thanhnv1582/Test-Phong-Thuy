import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import { images } from "../../../assets/images"

type Props = {
  labelText: string
  customStyle?: any
}

const LabelWithIconComponent = ({ labelText, customStyle }: Props) => {
  return (
    <View style={customStyle ? customStyle : styles.labelContainer}>
      <Image source={images.iconYinYang} style={styles.labelIcStyle} />
      <Text style={styles.labelStyle}>{labelText}</Text>
    </View>
  )
}
export default LabelWithIconComponent

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: "row",
    paddingLeft: 20,
  },
  labelIcStyle: {
    width: 15,
    height: 15,
  },
  labelStyle: {
    color: "#131200",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "bold",
    fontFamily: "Arial",
    fontStyle: "normal",
    marginLeft: 8,
  },
})
