import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { NavigatorParamList } from "../../navigators"
import { Header } from "../../components"
import commonStyle from "../../theme/styles"
import { images } from "../../../assets/images"
import { Calendar } from "react-native-big-calendar"
import moment from "moment"
import {
  calendarDefaultTheme,
  dayOftheWeekInVie,
  defaultDirection,
  WIDTH,
} from "../../utils/defaultValues"
import "dayjs/locale/vi"
import { _renderMonthInText, _renderTodayInText } from "../../utils/Functions"
import SelectDropdown from "react-native-select-dropdown"

export const DungSuScreen: FC<StackScreenProps<NavigatorParamList, "dungsu">> = observer(
  ({ navigation }) => {
    const date = "2022-08-05T15:45:00+07:00"
    const date2 = "2022-08-05T17:45:00+07:00"
    const date3 = "2022-08-03T12:45:00+07:00"
    const date4 = "2022-08-03T13:45:00+07:00"
    const [currentMonth, setCurrentMonth] = useState<Date | null>(
      new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    )
    const [selectedDirection, setSelectedDirection] = useState<any>(null)

    const events = [
      {
        title: "Meeting",
        start: moment(date).toDate(),
        end: moment(date2).toDate(),
      },

      {
        title: "Tea break",
        start: moment(date3).toDate(),
        end: moment(date4).toDate(),
      },
    ]
    const goBack = () => navigation.popToTop()
    const onPressEvent = (event: any) => {
      console.log("event", selectedDirection)
      setCurrentMonth(event.start)
      navigation.navigate("dungsuDetail")
    }
    const selectDirection = () => {}
    const nextMonth = () => {
      const increaseMonth = currentMonth.setMonth(currentMonth.getMonth() + 1)
      setCurrentMonth(new Date(increaseMonth))
    }
    const previousMonth = () => {
      const decreaseMonth = currentMonth.setMonth(currentMonth.getMonth() - 1)
      setCurrentMonth(new Date(decreaseMonth))
    }
    const _renderHeader = () => {
      return (
        <>
          <View style={styles.firstCalendarHeader}>
            <TouchableOpacity onPress={previousMonth}>
              <Image source={images.iconPrevious} style={styles.headerIcon} />
            </TouchableOpacity>
            <View style={{ width: "80%" }}>
              <Text style={styles.firstHeaderText}>
                {_renderMonthInText(currentMonth.getMonth())}, Năm {currentMonth.getFullYear()}
              </Text>
            </View>
            <TouchableOpacity onPress={nextMonth}>
              <Image source={images.iconNext} style={styles.headerIcon} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            {dayOftheWeekInVie.map((item: any, index: number) => {
              return (
                <View key={index} style={styles.headerItem}>
                  <View
                    style={
                      _renderTodayInText(new Date().getDay()) === item.fullText
                        ? { ...styles.currentDay, backgroundColor: "#D4190A" }
                        : styles.currentDay
                    }
                  >
                    <Text
                      style={
                        _renderTodayInText(new Date().getDay()) === item.fullText
                          ? { ...styles.headerText, color: "#fff" }
                          : styles.headerText
                      }
                    >
                      {item.value}
                    </Text>
                  </View>
                </View>
              )
            })}
          </View>
        </>
      )
    }
    const _renderSelectDirection = () => {
      return (
        <SelectDropdown
          data={defaultDirection}
          onSelect={(selected: any) => {
            setSelectedDirection(selected)
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem
          }}
          rowTextForSelection={(item) => {
            return item
          }}
          defaultButtonText=""
          buttonStyle={styles.dropdownBtnStyle}
          renderDropdownIcon={() => {
            return (
              <>
                <Image source={images.iconCompass} style={styles.dropdownIconStyle} />
              </>
            )
          }}
          dropdownIconPosition={"right"}
          buttonTextStyle={styles.btnTextStyle}
          dropdownStyle={styles.dropdownStyle}
          rowTextStyle={styles.dropdownTextStyle}
        />
      )
    }
    return (
      <>
        <SafeAreaView style={commonStyle.container}>
          <View>
            <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
            <Header
              headerText="Lịch Dụng Sự"
              leftIcon="btnBack"
              onLeftPress={goBack}
              rightIcon="compass"
              onRightPress={selectDirection}
              renderSpecialItem={true}
              specialItem={_renderSelectDirection()}
              titleStyle={commonStyle.headerText}
            />
          </View>
          <Calendar
            renderHeaderForMonthView={_renderHeader}
            calendarCellStyle={styles.calendarCellStyle}
            headerContainerStyle={{ width: "100%" }}
            // bodyContainerStyle={styles.headerItem}
            locale="vi"
            theme={calendarDefaultTheme}
            events={events}
            height={600}
            showTime={false}
            hideNowIndicator={true}
            date={currentMonth}
            mode="month"
            onPressEvent={(event) => onPressEvent(event)}
          />
        </SafeAreaView>
      </>
    )
  },
)

const styles = StyleSheet.create({
  calendarContainer: {
    marginVertical: 50,
  },
  calendarCellStyle: {
    borderColor: "#DCDDDE",
  },
  firstCalendarHeader: {
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  firstHeaderText: {
    textAlign: "center",
    color: "#D4190A",
    fontFamily: "Arial",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    fontStyle: "normal",
  },
  headerItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
    width: WIDTH / 7,
    height: 50,
    // borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
    borderColor: "#DCDDDE",
  },
  currentDay: {
    width: 34,
    height: 34,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
  },
  headerText: {
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "700",
    fontStyle: "normal",
    color: "#131200",
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  // select direction
  dropdownBtnStyle: {
    position: "absolute",
    right: 24,
    backgroundColor: "transparent",
    width: 120,
    height: 30,
  },
  dropdownStyle: {
    borderRadius: 16,
    width: 120,
    height: "auto",
  },
  btnTextStyle: {
    display: "none",
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
  dropdownIconStyle: {
    width: 24,
    height: 24,
  },
})
