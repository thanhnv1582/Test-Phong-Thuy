import { StackScreenProps } from "@react-navigation/stack"
import React, { FC, useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
import { SafeAreaView } from "react-native-safe-area-context"
import {
  Image,
  View,
  Text,
  StyleSheet,
  Keyboard,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import { WIDTH } from "../../utils/defaultValues"
import { Header } from "../../components"
import { images } from "../../../assets/images"
import commonStyle from "../../theme/styles"
import { t } from "i18next"
import { getCurrentLocal } from "../../../i18n"
import { huong, huongEn, van, vanEn } from "../kyMon/defaultValue"
import { defaultTableType, defaultTableTypeEn } from "./defaultValue"
import HuyenKhongTable from "./huyenKhongTable/huyenKhongTable"

const data = {
  bangSo: {
    "1": {
      a: 4,
      b: 7,
      c: 9,
    },
    "2": {
      a: 5,
      b: 6,
      c: 1,
    },
    "3": {
      a: 6,
      b: 5,
      c: 2,
    },
    "4": {
      a: 7,
      b: 4,
      c: 3,
    },
    "5": {
      a: "8",
      b: "3",
      c: "4",
    },
    "6": {
      a: 9,
      b: 2,
      c: 5,
    },
    "7": {
      a: 1,
      b: 1,
      c: 6,
    },
    "8": {
      a: 2,
      b: 9,
      c: 7,
    },
    "9": {
      a: 3,
      b: 8,
      c: 8,
    },
  },
}

export const HuyenKhongScreen: FC<StackScreenProps<NavigatorParamList, "huyenKhong">> = observer(
  ({ route, navigation }) => {
    const goBack = () => navigation.goBack()

    const scrollRef = useRef<any>()

    const [tableSelect, setTableSelect] = useState<number>(1)
    const [selectVanType, setSelectVanType] = useState<string>()
    const [selectHuongNhaType, setSelectHuongNhaType] = useState<string>()
    const [directByLocale, setDirectByLocale] = useState<any>([])
    const [periodByLocale, setPeriodByLocale] = useState<any>([])
    const [defaultTableType_, setDefaultTableType_] = useState<any>([])
    const [dataHuyenKhong, setDataHuyenKhong] = useState<any>(data)

    useEffect(() => {
      getCurrentLocal().then((locale) => {
        switch (locale) {
          case "en":
            {
              setPeriodByLocale(huongEn)
              setDirectByLocale(vanEn)
              setDefaultTableType_(defaultTableTypeEn)
            }
            break
          case "vn":
            {
              setDirectByLocale(huong)
              setPeriodByLocale(van)
              setDefaultTableType_(defaultTableType)
            }
            break
          default:
            break
        }
      })
    }, [])

    const handleSelectTableType = (type: number) => {
      setTableSelect(type)
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
              return selectedItem.value
            }}
            rowTextForSelection={(item) => {
              return item.value
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

    const getHuyenKhongData = (van, huong) => {
      const huyenKhongData = {
        bangSo: {
          "1": {
            van: van,
            huong: "",
            son: "",
          },
          "2": {
            van: van + 1 >= 10 ? van - 8 : van + 1,
            huong: "",
            son: "",
          },
          "3": {
            van: van + 2 >= 10 ? van - 7 : van + 2,
            huong: "",
            son: "",
          },
          "4": {
            van: van + 3 >= 10 ? van - 6 : van + 3,
            huong: "",
            son: "",
          },
          "5": {
            van: van + 4 >= 10 ? van - 5 : van + 4,
            huong: "",
            son: "",
          },
          "6": {
            van: van + 5 >= 10 ? van - 4 : van + 5,
            huong: "",
            son: "",
          },
          "7": {
            van: van + 6 >= 10 ? van - 3 : van + 6,
            huong: "",
            son: "",
          },
          "8": {
            van: van + 7 >= 10 ? van - 2 : van + 7,
            huong: "",
            son: "",
          },
          "9": {
            van: van + 8 >= 10 ? van - 1 : van + 8,
            huong: "",
            son: "",
          },
        },
      }

      console.log("---------------")
      console.log(huyenKhongData)
      console.log("---------------")
    }

    const showHuyenKhongTable = () => {
      const van = selectVanType["key"]
      const huong = selectHuongNhaType["key"]

      getHuyenKhongData(van, huong)
    }

    return (
      <>
        <SafeAreaView style={commonStyle.container}>
          <View>
            <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
            <Header
              headerTx="Huyền không phi tinh"
              onLeftPress={goBack}
              titleStyle={commonStyle.headerText}
            />
          </View>
          <ScrollView
            ref={scrollRef}
            style={commonStyle.scrollStyle}
            contentContainerStyle={commonStyle.scrollContentStyle}
          >
            <>
              <View style={styles.selectContainer}>
                {_renderDropDown(periodByLocale, t("Period"), "---", (selectVanType: any) => {
                  setSelectVanType(selectVanType)
                  Keyboard.dismiss
                })}
                {_renderDropDown(
                  directByLocale,
                  t("House Direction"),
                  "---",
                  (selectHuongNhaType: any) => {
                    setSelectHuongNhaType(selectHuongNhaType)
                    Keyboard.dismiss
                  },
                )}
              </View>
              <View style={styles.buttonContainer}>
                <Pressable
                  onPress={showHuyenKhongTable}
                  disabled={!selectVanType || !selectHuongNhaType}
                  style={
                    !selectVanType || !selectHuongNhaType
                      ? styles.btnSubmitDisable
                      : styles.btnSubmit
                  }
                >
                  <Text style={styles.btnText}>{t("Get")}</Text>
                </Pressable>
              </View>
            </>
            <HuyenKhongTable
              tableType={tableSelect}
              // apiType={apiType}
              dataHuyenKhong={dataHuyenKhong}
              // showDetail={handleShowDetail}
            />
            <View style={styles.selectTableType}>
              {defaultTableType_.map((item: any) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleSelectTableType(item.id)}
                    style={tableSelect === item.id ? styles.activeTable : styles.inactiveTable}
                    key={item.id}
                  >
                    <Text style={tableSelect === item.id ? styles.activeText : styles.inactiveText}>
                      {item.type}
                    </Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  typeSelectContainer: {
    width: WIDTH - 40,
    height: 154,
    alignSelf: "center",
  },
  typeSelectContainer2: {
    width: WIDTH - 40,
    height: 0,
    alignSelf: "center",
  },
  firstGroup: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },
  typeSelect: {
    width: "85%",
    height: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D4190A",
    borderWidth: 1,
    borderColor: "#D4190A",
    borderRadius: 16,
    padding: 4,
  },
  activeType: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "14%",
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
  },
  activeText: {
    fontFamily: "Arial",
    fontSize: 11,
    lineHeight: 15,
    fontStyle: "normal",
    fontWeight: "700",
    color: "#D4190A",
  },
  inactiveType: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "14%",
    height: "100%",
    backgroundColor: "#D4190A",
    borderRadius: 15,
  },
  inactiveText: {
    fontFamily: "Arial",
    fontSize: 11,
    lineHeight: 15,
    fontStyle: "normal",
    fontWeight: "700",
    color: "#ffffff",
  },
  calendarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: 48,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  smallIconStyle: {
    width: 18,
    height: 18,
  },
  secondGroup: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FBE8E7",
    borderRadius: 4,
  },
  timeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    height: 48,
  },
  timeGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
    width: "65%",
  },
  dateContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: 48,
  },
  dateGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
    width: "90%",
  },
  reloadContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: 48,
  },
  dateTimeText: {
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#D4190A",
  },
  dateTimeText2: {
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    marginLeft: 25,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#D4190A",
  },
  thirdGroup: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  HDMYContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "12.5%",
    height: 42,
  },
  HDMYTextStyle: {
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#585A5C",
  },
  notiContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  notiLiveIcon: {
    width: 12,
    height: 12,
    backgroundColor: "red",
    borderRadius: 6,
  },
  notiText: {
    color: "#131200",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "700",
    fontFamily: "Arial",
    fontStyle: "normal",
    marginLeft: 8,
  },
  realTimeContainer: {
    width: WIDTH - 40,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  selectTableType: {
    width: WIDTH - 40,
    height: 48,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D4190A",
    borderWidth: 1,
    borderColor: "#D4190A",
    borderRadius: 16,
    padding: 4,
    marginBottom: 20,
  },
  activeTable: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
  },
  inactiveTable: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "100%",
    backgroundColor: "#D4190A",
    borderRadius: 15,
  },
  // Cach cuc detail
  cachCucContainer: {
    display: "flex",
    alignItems: "flex-start",
    width: WIDTH - 60,
    height: "auto",
    marginVertical: 10,
  },
  cachCucDetailLabel: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: "Arial",
    fontStyle: "normal",
  },
  textContainer: {
    width: "100%",
  },
  detailText: {
    color: "#585A5C",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "400",
    fontFamily: "Arial",
    fontStyle: "normal",
    marginTop: 10,
  },
  selectContainer: {
    width: WIDTH - 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  buttonContainer: {
    width: WIDTH - 40,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
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
  dropdownBtnStyle: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#DCDDDE",
    backgroundColor: "#FFFFFF",
    width: (WIDTH * 40) / 100,
    height: 48,
  },
  dropdownStyle: {
    borderRadius: 16,
    width: (WIDTH * 80) / 100,
  },
  btnText: {
    fontFamily: "Arial",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 15,
    color: "#FFFFFF",
  },
  btnSubmit: {
    backgroundColor: "#D4190A",
    width: (WIDTH * 40) / 100,
    height: 48,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSubmitDisable: {
    backgroundColor: "#E5756C",
    width: (WIDTH * 40) / 100,
    height: 48,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  paddingNha: {
    marginTop: 90,
  },
})
