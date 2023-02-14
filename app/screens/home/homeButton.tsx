import React from "react"
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native"
// import { WIDTH } from "../../utils/defaultValues"

type Props = {
  onPress: () => void
  buttonImage: any
  buttonLabel: string
}
const HomeButton = ({ onPress, buttonImage, buttonLabel }: Props) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
        <Image source={buttonImage} style={styles.btnImageStyle} />
        <Text style={styles.btnTextStyle}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnStyle: {
    width: "90%",
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android
  },
  btnTextStyle: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 15,
    fontFamily: "Arial",
    fontStyle: "normal",
    color: "#131200",
  },
  btnImageStyle: {
    width: 70,
    height: 70,
    position: "relative",
    marginBottom: 12,
  },
})

export default HomeButton
