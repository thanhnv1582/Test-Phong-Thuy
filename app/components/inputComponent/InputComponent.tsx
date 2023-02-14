import React from "react"
import { TextInput, View, StyleSheet, Dimensions, Text } from "react-native"

type Props = {
  style?: any
  inputLabel: string
  placeHolder: string
  onChange?: any
  value: any
  maxLength?: number
  keyboardType?: any
  editable?: boolean
  handleOnBlur?: any
}

const WIDTH = Dimensions.get("screen").width

const InputComponent = ({
  style,
  inputLabel,
  placeHolder,
  onChange,
  value,
  maxLength,
  keyboardType,
  editable,
  handleOnBlur,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{inputLabel}</Text>
      <TextInput
        style={style ? style : styles.formInput}
        placeholder={placeHolder}
        placeholderTextColor="#A0A0A0"
        onChangeText={onChange}
        value={value}
        maxLength={maxLength}
        keyboardType={keyboardType}
        disableFullscreenUI
        editable={editable}
        onBlur={handleOnBlur}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  inputLabel: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
    color: "#585A5C",
    marginBottom: 8,
    marginLeft: 12,
  },
  formInput: {
    width: WIDTH - 40,
    height: 48,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: "#DCDDDE",
    padding: 12,
    backgroundColor: "#FFFFFF",
    color: "#131200",
  },
  errorText: {
    fontFamily: "Arial",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 15,
    color: "#FF5151",
    marginHorizontal: 15,
    marginVertical: 8,
  },
})

export default InputComponent
