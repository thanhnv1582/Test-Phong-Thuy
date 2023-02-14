import React from "react"
import { PinchGestureHandler } from "react-native-gesture-handler"
import Animated, {
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
} from "react-native-reanimated"
import commonStyle from "../../theme/styles"
import { GestureImageProps } from "./gesture-image.props"

export function PinchToZoomImage(props: GestureImageProps) {
  const { imageSource } = props

  const focalX = useSharedValue(0)
  const focalY = useSharedValue(0)
  const xCurrent = useSharedValue(0)
  const yCurrent = useSharedValue(0)
  const xPrevious = useSharedValue(0)
  const yPrevious = useSharedValue(0)
  const scaleCurrent = useSharedValue(1)
  const scalePrevious = useSharedValue(1)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: xCurrent.value },
        { translateY: yCurrent.value },
        { scale: scaleCurrent.value },
        { translateX: xPrevious.value },
        { translateY: yPrevious.value },
        { scale: scalePrevious.value },
      ],
    }
  })

  return (
    <PinchGestureHandler
      onGestureEvent={useAnimatedGestureHandler({
        onStart: (event) => {
          if (event.numberOfPointers == 2) {
            focalX.value = event.focalX
            focalY.value = event.focalY
          }
        },
        onActive: (event) => {
          if (event.numberOfPointers == 2) {
            scaleCurrent.value = event.scale
          }
        },
        onEnd: () => {
          scalePrevious.value = scalePrevious.value * scaleCurrent.value

          xCurrent.value = 0
          yCurrent.value = 0

          scaleCurrent.value = 1
        },
      })}
    >
      <Animated.Image source={imageSource} style={[commonStyle.imageImport, animatedStyle]} />
    </PinchGestureHandler>
  )
}
