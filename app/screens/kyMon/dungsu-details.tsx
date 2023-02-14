import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { Header } from "../../components"
import { NavigatorParamList } from "../../navigators"
import commonStyle from "../../theme/styles"
import { images } from "../../../assets/images"
import { _renderMonthInText } from "../../utils/Functions"
import { defaultDirection, dumpData, WIDTH } from "../../utils/defaultValues"
import SelectDropdown from "react-native-select-dropdown"

export const DungSuDetailScreen: FC<
  StackScreenProps<NavigatorParamList, "dungsuDetail">
> = observer(({ navigation }) => {
  const [dateSelect, setDateSelect] = useState<Date | null>(new Date())
  const [selectedDirection, setSelectedDirection] = useState<any>(null)
  const goBack = () => navigation.pop()
  useEffect(() => {
    console.log("Hướng", selectedDirection)
  }, [])
  const increaseDate = () => {
    const increaseDate = dateSelect.setDate(dateSelect.getDate() + 1)
    setDateSelect(new Date(increaseDate))
  }
  const decreaseDate = () => {
    const increaseDate = dateSelect.setDate(dateSelect.getDate() - 1)
    setDateSelect(new Date(increaseDate))
  }
  const _renderSelectDirection = (
    data: any,
    btnText: string,
    onSelectValue: (selected: any, index: any) => void,
  ) => {
    return (
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
                style={styles.dropdownIconStyle}
              />
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
  const _renderItem = (canhGio: string, data?: any) => {
    return (
      <>
        <View style={styles.itemDetailContainer}>
          <View style={styles.itemCol1}>
            <Text>{canhGio}</Text>
          </View>
          <View
            style={{
              ...styles.itemCol2,
              borderBottomWidth: 1,
              borderBottomColor: "#DCDDDE",
            }}
          >
            {data ? (
              data.map((item: any) => {
                return (
                  <View
                    key={item.id}
                    style={{
                      ...styles.itemStyle,
                      backgroundColor: item.type === 1 ? "#FF6767" : "#49A86C",
                    }}
                  >
                    <Text style={styles.itemText}>{item.value}</Text>
                    <Text style={styles.itemText}>{item.direction}</Text>
                  </View>
                )
              })
            ) : (
              <View style={styles.itemStyle}></View>
            )}
          </View>
        </View>
      </>
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
            titleStyle={commonStyle.headerText}
          />
        </View>
        <ScrollView contentContainerStyle={commonStyle.scrollContentStyle}>
          <View style={styles.firstCalendarHeader}>
            <TouchableOpacity onPress={decreaseDate}>
              <Image source={images.iconPrevious} style={styles.headerIcon} />
            </TouchableOpacity>
            <View style={{ width: "80%" }}>
              <Text style={styles.firstHeaderText}>
                {dateSelect
                  ? `Ngày ${dateSelect.getDate()}, ${_renderMonthInText(
                      dateSelect.getMonth(),
                    )}, Năm ${dateSelect.getFullYear()}`
                  : null}
              </Text>
            </View>
            <TouchableOpacity onPress={increaseDate}>
              <Image source={images.iconNext} style={styles.headerIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.divider}></View>
          <View
            style={{
              flexDirection: "row",
              height: 40,
            }}
          >
            <View style={styles.labelCol1}>
              <Text style={styles.labelText}>Canh Giờ</Text>
            </View>
            <View style={styles.labelCol2}>
              <Text style={styles.labelText}>Cách Cục</Text>
              {_renderSelectDirection(defaultDirection, "Phương vị", (selected: any) => {
                setSelectedDirection(selected)
              })}
            </View>
          </View>
          {_renderItem("Tí", dumpData)}
          {_renderItem("Sửu", dumpData.slice(0, 2))}
          {_renderItem("Dần")}
          {_renderItem("Mão")}
          {_renderItem("Thìn", dumpData.slice(3))}
          {_renderItem("Tỵ", dumpData.slice(4))}
          {_renderItem("Ngọ", dumpData.slice(0, 1))}
          {_renderItem("Mùi")}
          {_renderItem("Thân")}
          {_renderItem("Dậu")}
          {_renderItem("Tuất", dumpData.slice(0))}
          {_renderItem("Hợi")}
        </ScrollView>
      </SafeAreaView>
    </>
  )
})

const styles = StyleSheet.create({
  divider: {
    marginTop: 15,
    height: 3,
    width: WIDTH,
    borderBottomWidth: 1,
    borderBottomColor: "#DCDDDE",
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
    width: WIDTH / 7,
    height: 50,
    borderWidth: 0.8,
    borderColor: "#DCDDDE",
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
  labelText: {
    fontFamily: "Arial",
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "700",
    fontStyle: "normal",
    color: "#131200",
  },
  labelCol1: {
    width: "17%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 8,
  },
  labelCol2: {
    width: "83%",
    paddingHorizontal: 20,
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#DCDDDE",
  },
  itemDetailContainer: {
    flexDirection: "row",
  },
  itemCol1: {
    width: "17%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 8,
  },
  itemCol2: {
    width: "83%",
    paddingHorizontal: 20,
    height: "auto",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#DCDDDE",
  },
  itemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: "100%",
    height: 32,
    // backgroundColor: "#FF6767",
    borderRadius: 4,
  },
  itemText: {
    fontFamily: "Arial",
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#ffffff",
  },
  // select direction
  dropdownBtnStyle: {
    backgroundColor: "transparent",
    width: 120,
    height: 48,
  },
  dropdownStyle: {
    borderRadius: 16,
    width: 120,
    height: "auto",
  },
  btnTextStyle: {
    color: "#131200",
    textAlign: "center",
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
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
    width: 10,
    height: 15,
    tintColor: "#131200",
    marginLeft: -10,
  },
})
