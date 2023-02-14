import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
// import * as yup from "yup"
import React, { FC, useState } from "react"
import { View, Text, StyleSheet, Image, Pressable, Keyboard, ScrollView } from "react-native"
import { Header } from "../../components"
import { NavigatorParamList } from "../../navigators"
import { Formik } from "formik"
import InputComponent from "../../components/inputComponent/InputComponent"
import SelectDropdown from "react-native-select-dropdown"
import DatePicker from "react-native-date-picker"
import { SafeAreaView } from "react-native-safe-area-context"
import moment from "moment"
import { calendarTypeSelect, genderSelect } from "./defaultData"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { WIDTH } from "../../utils/defaultValues"
import { images } from "../../../assets/images"
import commonStyle from "../../theme/styles"

export const SimScreen: FC<StackScreenProps<NavigatorParamList, "sim">> = observer(
  ({ navigation }) => {
    const [datePickerSelect, setDatePickerSelect] = useState<any>(new Date())
    const [openDatePicker, setOpenDatePicker] = useState(false)
    const [timePickerSelect, setTimePickerSelect] = useState<any>(new Date())
    const [openTimePicker, setOpenTimePicker] = useState(false)
    const [selectCalendarType, setSelectCalendarType] = useState<string>(undefined)
    const [selectGender, setSelectGender] = useState<string>(undefined)
    const [isDateSelected, setIsDateSelected] = useState<boolean>(false)
    const [isTimeSelected, setIsTimeSelected] = useState<boolean>(false)
    const goBack = () => navigation.popToTop()
    // open date time picker
    const handleOpenDatePicker = () => {
      setOpenDatePicker(true)
    }
    const handleOpenTimePicker = () => {
      setOpenTimePicker(true)
    }
    const _renderDropDown = (
      data: any,
      selectLabel: string,
      btnText: string,
      onSelectValue: (selected: any, index: any) => void,
    ) => {
      return (
        <View>
          <Text style={styles.dateTimeLabel}>{selectLabel}</Text>
          <SelectDropdown
            data={data}
            onSelect={onSelectValue}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem
            }}
            rowTextForSelection={(item) => {
              return item
            }}
            defaultButtonText={btnText}
            buttonStyle={styles.dropdownBtnStyle}
            renderDropdownIcon={(isOpened) => {
              return (
                <>
                  <Image
                    source={isOpened ? images.iconUp : images.iconDown}
                    style={{ width: 24, height: 24 }}
                  />
                </>
              )
            }}
            dropdownIconPosition={"right"}
            buttonTextStyle={styles.btnTextStyle}
            dropdownStyle={styles.dropdownStyle}
            rowTextStyle={styles.dropdownTextStyle}
          />
        </View>
      )
    }

    return (
      <>
        <SafeAreaView style={commonStyle.container}>
          <View>
            <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
            <Header
              headerText="Sim điện thoại"
              leftIcon="btnBack"
              rightIcon="drawer"
              onLeftPress={goBack}
              titleStyle={commonStyle.headerText}
            />
          </View>
          <ScrollView
            style={commonStyle.scrollStyle}
            contentContainerStyle={commonStyle.scrollContentStyle}
          >
            <Formik
              initialValues={{
                fullName: "",
                phoneNumber: "",
              }}
              onSubmit={(values: any, actions: any) => {
                const result: any = {
                  fullName: values?.fullName,
                  phoneNumber: values?.phoneNumber,
                  year: datePickerSelect ? moment(datePickerSelect).format("YYYY") : "",
                  date: datePickerSelect ? datePickerSelect : "",
                  time: timePickerSelect ? timePickerSelect : "",
                  calendarType: selectCalendarType === "Dương lịch" ? "DL" : "AL",
                  gender: selectGender,
                }
                if (values?.fullName || values?.phoneNumber) {
                  navigation.navigate("simResult", result)
                  actions.resetForm()
                  setIsDateSelected(false)
                  setIsTimeSelected(false)
                }
              }}
            >
              {(formikValues: any) => (
                <View>
                  <InputComponent
                    inputLabel="Nhập họ và tên"
                    placeHolder="Nhập họ và tên cần tra cứu"
                    onChange={formikValues.handleChange("fullName")}
                    value={formikValues.values.fullName}
                    maxLength={64}
                    handleOnBlur={formikValues.handleBlur("fullName")}
                  />
                  <InputComponent
                    inputLabel="Nhập số điện thoại"
                    placeHolder="Nhập số điện thoại cần tra cứu"
                    onChange={formikValues.handleChange("phoneNumber")}
                    value={formikValues.values.phoneNumber}
                    maxLength={10}
                    keyboardType="number-pad"
                    handleOnBlur={formikValues.handleBlur("phoneNumber")}
                  />
                  <View style={styles.dateTime}>
                    <View style={styles.dateTimeContainer}>
                      <TouchableWithoutFeedback onPress={handleOpenDatePicker}>
                        <Text style={styles.dateTimeLabel}>Ngày sinh</Text>
                        <View style={styles.inputDateTime}>
                          <Text style={styles.datePickerTextStyle}>
                            {isDateSelected
                              ? datePickerSelect
                                ? moment(datePickerSelect).format("DD/MM/YYYY")
                                : ""
                              : "Chọn ngày sinh"}
                          </Text>
                          <Image source={images.iconCalendar} style={styles.dateTimeIcon} />
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.dateTimeContainer}>
                      <TouchableWithoutFeedback onPress={handleOpenTimePicker}>
                        <Text style={styles.dateTimeLabel}>Giờ sinh</Text>
                        <View style={styles.inputDateTime}>
                          <Text style={styles.datePickerTextStyle}>
                            {isTimeSelected
                              ? timePickerSelect
                                ? moment(timePickerSelect).format("HH:mm")
                                : ""
                              : "Chọn giờ sinh"}
                          </Text>
                          <Image source={images.iconClock} style={styles.dateTimeIcon} />
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                  <View style={styles.selectContainer}>
                    {_renderDropDown(
                      calendarTypeSelect,
                      "Loại lịch",
                      "Chọn loại lịch",
                      (selectedCalendar: any) => {
                        setSelectCalendarType(selectedCalendar)
                        Keyboard.dismiss
                      },
                    )}
                    {_renderDropDown(
                      genderSelect,
                      "Giới tính",
                      "Chọn giới tính",
                      (selectedGender: any) => {
                        setSelectGender(selectedGender)
                        Keyboard.dismiss
                      },
                    )}
                  </View>
                  <Pressable
                    onPress={formikValues.handleSubmit}
                    disabled={
                      !formikValues.dirty ||
                      !selectCalendarType ||
                      !selectGender ||
                      !isDateSelected ||
                      !isTimeSelected
                    }
                    style={
                      !formikValues.values.fullName ||
                      !formikValues.values.phoneNumber ||
                      !selectCalendarType ||
                      !selectGender ||
                      !isDateSelected ||
                      !isTimeSelected
                        ? styles.btnSubmitDisable
                        : styles.btnSubmit
                    }
                  >
                    <Text style={styles.btnText}>Phân tích phong thủy</Text>
                  </Pressable>
                </View>
              )}
            </Formik>
          </ScrollView>
        </SafeAreaView>
        <DatePicker
          modal
          theme="light"
          open={openDatePicker}
          date={datePickerSelect}
          mode="date"
          locale="vi"
          title="Chọn ngày sinh"
          minimumDate={new Date("1932-01-01")}
          maximumDate={new Date("2040-12-31")}
          androidVariant="iosClone"
          confirmText="Xác nhận"
          cancelText="Hủy"
          onConfirm={(dateSelect) => {
            setOpenDatePicker(false)
            setDatePickerSelect(dateSelect)
            setIsDateSelected(true)
          }}
          onCancel={() => {
            setOpenDatePicker(false)
          }}
        />
        <DatePicker
          modal
          theme="light"
          open={openTimePicker}
          date={timePickerSelect}
          mode="time"
          locale="vi"
          title="Chọn giờ sinh"
          is24hourSource="locale"
          androidVariant="iosClone"
          confirmText="Xác nhận"
          cancelText="Hủy"
          onConfirm={(timeSelect) => {
            setOpenTimePicker(false)
            setTimePickerSelect(timeSelect)
            setIsTimeSelected(true)
          }}
          onCancel={() => {
            setOpenTimePicker(false)
          }}
        />
      </>
    )
  },
)

const styles = StyleSheet.create({
  formInput: {
    width: WIDTH - 40,
    height: 48,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: "#DCDDDE",
  },
  dateTime: {
    width: WIDTH - 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateTimeContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },
  dateTimeLabel: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
    color: "#585A5C",
    marginBottom: 8,
    marginLeft: 12,
  },
  inputDateTime: {
    width: WIDTH - 238,
    height: 48,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: "#DCDDDE",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
  },
  datePickerTextStyle: {
    color: "#131200",
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 15,
  },
  dateTimeIcon: {
    width: 24,
    height: 24,
  },
  select: {
    flexDirection: "column",
  },
  selectContainer: {
    width: WIDTH - 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dropdownBtnStyle: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#DCDDDE",
    backgroundColor: "#FFFFFF",
    width: WIDTH - 238,
    height: 48,
  },
  dropdownStyle: {
    borderRadius: 16,
    width: WIDTH - 238,
  },
  buttonTextStyles: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 15,
    color: "#A0A0A0",
  },
  btnTextStyle: {
    color: "#131200",
    textAlign: "left",
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
  },
  dropdownTextStyle: {
    color: "#131200",
    textAlign: "left",
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
  },
  btnSubmit: {
    backgroundColor: "#D4190A",
    width: WIDTH - 40,
    height: 48,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btnSubmitDisable: {
    backgroundColor: "#E5756C",
    width: WIDTH - 40,
    height: 48,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    fontFamily: "Arial",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 15,
    color: "#FFFFFF",
  },
  errorText: {
    fontFamily: "Arial",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 15,
    color: "#FF5151",
    marginHorizontal: 15,
  },
})
