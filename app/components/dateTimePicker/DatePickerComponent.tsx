import React from "react"
import DatePicker from "react-native-date-picker"

type Props = {
  isVisible: boolean
  mode: any
  date: any
  onConfirm: () => void
  onCancel: () => void
}

const DatePickerComponent = ({ isVisible, mode, date, onConfirm, onCancel }: Props) => {
  return (
    <>
      <DatePicker
        modal
        open={isVisible}
        date={date}
        mode={mode}
        androidVariant="iosClone"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  )
}

export default DatePickerComponent
