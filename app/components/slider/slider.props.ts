import { SliderProps } from "react-native"

import { TxKeyPath } from "../../i18n"

interface onChangeValue {
  (value: number): void
}

export default interface SliderProp extends SliderProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * min value
   */
  minimumValue?: number

  /**
   * max value
   */
  maximumValue?: number

  /**
   * max value
   */
  value?: number

  /**
   * min color
   */
  minimumTrackTintColor?: string

  /**
   * min color
   */
  maximumTrackTintColor?: string

  /**
   * min color
   */
  thumbTintColor?: string

  /**
   * style
   */
  style?: Object

  /**
   * max value
   */
  onValueChange?: onChangeValue
}
