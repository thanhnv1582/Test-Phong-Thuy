import React from "react"
import Slider from "@react-native-community/slider"
import SliderProp from "./slider.props"

export function SliderComponent(props: SliderProp) {
  const {
    maximumValue,
    minimumValue,
    value,
    onValueChange,
    style,
    minimumTrackTintColor,
    maximumTrackTintColor,
    thumbTintColor,
  } = props

  const max = maximumValue ? maximumValue : 100
  const min = minimumValue ? minimumValue : 0
  const val = value ? value : 50
  const minTrackColor = minimumTrackTintColor ? minimumTrackTintColor : "#d4190a"
  const maxTrackColor = maximumTrackTintColor ? maximumTrackTintColor : "#ef1a09"
  const thumbColor = thumbTintColor ? thumbTintColor : "#d4190a"

  return (
    <Slider
      maximumValue={max}
      minimumValue={min}
      value={val}
      onValueChange={onValueChange}
      minimumTrackTintColor={minTrackColor}
      maximumTrackTintColor={maxTrackColor}
      thumbTintColor={thumbColor}
      style={[style, { height: 36 }]}
    />
  )
}
