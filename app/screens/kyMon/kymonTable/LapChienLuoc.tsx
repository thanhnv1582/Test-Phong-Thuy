import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, useState, useEffect } from "react"
import { View, Text, StyleSheet, Image, Pressable, Keyboard, ScrollView } from "react-native"
import { t } from "i18next"
import { NavigatorParamList } from "../../../navigators"
import { Header } from "../../../components"
import commonStyle from "../../../theme/styles"
import { images } from "../../../../assets/images"
import { SafeAreaView } from "react-native-safe-area-context"
import { Formik } from "formik"
import moment from "moment"
import {
  WIDTH,
  kymonTableType,
  kymonTableList,
  kymonTableListEn,
  huongList,
  huongListEn,
  cachCucDoListEn,
  a1A2List,
  a3List,
  a4List,
  a5List,
  yesNo,
  a1A2ListEn,
  a3ListEn,
  a4ListEn,
  a5ListEn,
  yesNoEn,
  soList,
  cachCucDoList,
} from "../../../utils/defaultValues"
import "dayjs/locale/vi"
import { _renderMonthInText, _renderTodayInText } from "../../../utils/Functions"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import SelectDropdown from "react-native-select-dropdown"
import DatePicker from "react-native-date-picker"
import { checkLocalLanguageValue } from "../../../../i18n"

export const LapChienLuocScreen: FC<
  StackScreenProps<NavigatorParamList, "kymonchienluoc">
> = observer(({ navigation }) => {
  const [dateSearchFrom, setDateSearchFrom] = useState<any>(new Date())
  const [dateSearchTo, setDateSearchTo] = useState<any>(new Date())
  const [openSearchFrom, setOpenSearchFrom] = useState(false)
  const [openSearchTo, setOpenSearchTo] = useState(false)
  const [isDateFromSelected, setIsDateFromSelected] = useState<boolean>(false)
  const [isDateToSelected, setIsDateToSelected] = useState<boolean>(false)

  const [bangKyMon, setBangKyMon] = useState<string>("")
  const [huong, setHuong] = useState<String>("")
  const [cachCuc, setCachCuc] = useState<String>("")
  const [cachCucBad, setCachCucBad] = useState<String>("")
  const [thapThan, setThapThan] = useState<String>("")
  const [cuuTinh, setCuuTinh] = useState<String>("")
  const [batMon, setBatMon] = useState<String>("")
  const [canThienBan, setCanThienBan] = useState<String>("")
  const [canDiaBan, setCanDiaBan] = useState<String>("")
  const [gomViTriGio, setGomViTriGio] = useState<String>("")
  const [khongVong, setKhongVong] = useState<String>("")
  const [dichMa, setDichMa] = useState<String>("")
  const [kyMonSelectIndex, setKiMonSelectIndex] = useState<Number>(0)
  const [local, setLocal] = useState<string>("en")

  useEffect(() => {
    ;(async () => {
      const localCurrent = await checkLocalLanguageValue("en", "vn")
      setLocal(localCurrent)
    })()
  }, [])

  const goBack = () => navigation.goBack()
  // open date time picker
  const handleOpenDatePickerSearchFrom = () => {
    setOpenSearchFrom(true)
  }
  const handleOpenDatePickerSearchTo = () => {
    setOpenSearchTo(true)
  }

  const submit = (result: any) => {
    const params: any = {
      startDate: result.startDate,
      endDate: result.endDate,
      kyMonTable: result.kyMonTable.key,
      huong: result.huong.key,
      cachCuc: result.cachCuc.key,
      cachCucBad: result.cachCucBad.key,
      a1: result.a1.key,
      a2: result.a2.key,
      a3: result.a3.key,
      a4: result.a4.key,
      a5: result.a5.key,
      isH: result.isH.key,
      isKV: result.isKV.key,
      isNgua: result.isNgua.key,
    }
    navigation.navigate("chienluoc", params)
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
                  style={{ width: 20, height: 24 }}
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

  const _renderDropDownChangeTable = (
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
          buttonStyle={styles.dropdownBtnStyleChangeTable}
          renderDropdownIcon={(isOpened) => {
            return (
              <>
                <Image
                  source={isOpened ? images.iconUp : images.iconDown}
                  style={{ width: 20, height: 24 }}
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

  const _renderDropDownChangeType = (
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
            const selectedIndex = kymonTableType.findIndex((item) => item === selectedItem)
            setKiMonSelectIndex(selectedIndex)
            return selectedItem
          }}
          rowTextForSelection={(item) => {
            return item
          }}
          defaultButtonText={btnText}
          buttonStyle={styles.dropdownBtnStyleChangeTypeTable}
          renderDropdownIcon={(isOpened) => {
            return (
              <>
                <Image
                  source={isOpened ? images.iconUp : images.iconDown}
                  style={{ width: 20, height: 24 }}
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

  const __chienLuocContent = () => (
    <>
      <View style={styles.inputRow}>
        <View style={styles.dateTimeContainer}>
          <TouchableWithoutFeedback onPress={handleOpenDatePickerSearchFrom}>
            <Text style={styles.dateTimeLabel}>{t("Choose Date")}</Text>
            <View style={styles.inputDateTime}>
              <Text style={styles.datePickerTextStyle}>
                {isDateFromSelected
                  ? dateSearchFrom
                    ? local === "en"
                      ? moment(dateSearchFrom).format("MMMM DD, YYYY")
                      : moment(dateSearchFrom).format("DD-MM-YYYY")
                    : ""
                  : ""}
              </Text>
              <Image source={images.iconCalendar} style={styles.dateTimeIcon} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.dateTimeContainer}>
          <TouchableWithoutFeedback onPress={handleOpenDatePickerSearchTo}>
            <Text style={styles.dateTimeLabel}></Text>
            <View style={styles.inputDateTime}>
              <Text style={styles.datePickerTextStyle}>
                {isDateToSelected
                  ? dateSearchTo
                    ? local === "en"
                      ? moment(dateSearchTo).format("MMMM DD, YYYY")
                      : moment(dateSearchFrom).format("DD-MM-YYYY")
                    : ""
                  : ""}
              </Text>
              <Image source={images.iconCalendar} style={styles.dateTimeIcon} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.selectContainer}>
        <View style={styles.selectContainer_2_Col_1}>
          {_renderDropDownChangeTable(
            local === "en" ? kymonTableListEn : kymonTableList,
            t("LapChienLuoc.Qi Men Chart"),
            "---",
            (selectedBangKyMon: any) => {
              setBangKyMon(selectedBangKyMon)
              Keyboard.dismiss
            },
          )}
        </View>
        <View style={styles.selectContainer_2_Col_2}>
          {_renderDropDownChangeTable(
            local === "en" ? huongListEn : huongList,
            t("LapChienLuoc.Palace"),
            "---",
            (selectedHuong: any) => {
              setHuong(selectedHuong)
              Keyboard.dismiss
            },
          )}
        </View>
      </View>
      <View style={styles.selectContainer}>
        <View style={styles.selectContainer_3_Col}>
          {_renderDropDownChangeTable(
            local === "en" ? cachCucDoListEn : cachCucDoList,
            t("LapChienLuoc.Good Structure"),
            "---",
            (selectedCachCuc: any) => {
              setCachCuc(selectedCachCuc)
              Keyboard.dismiss
            },
          )}
        </View>
        <View style={styles.selectContainer_3_Col}>
          {_renderDropDownChangeTable(
            local === "en" ? a3ListEn : a3List,
            t("LapChienLuoc.Star"),
            "---",
            (selectedCuuTinh: any) => {
              setCuuTinh(selectedCuuTinh)
              Keyboard.dismiss
            },
          )}
        </View>
      </View>
      <View style={styles.selectContainer}>
        <View style={styles.selectContainer_3_Col}>
          {_renderDropDownChangeTable(
            local === "en" ? a4ListEn : a4List,
            t("LapChienLuoc.Spirit"),
            "---",
            (selectedThapThan: any) => {
              setThapThan(selectedThapThan)
              Keyboard.dismiss
            },
          )}
        </View>
        <View style={styles.selectContainer_3_Col}>
          {_renderDropDownChangeTable(
            local === "en" ? a5ListEn : a5List,
            t("LapChienLuoc.Door"),
            "---",
            (selectedBatMon: any) => {
              setBatMon(selectedBatMon)
              Keyboard.dismiss
            },
          )}
        </View>
      </View>
      <View style={styles.selectContainer}>
        <View style={styles.selectContainer_3_Col}>
          {_renderDropDownChangeTable(
            local === "en" ? a1A2ListEn : a1A2List,
            t("LapChienLuoc.Heaven Stem"),
            "---",
            (selectedCanThienBan: any) => {
              setCanThienBan(selectedCanThienBan)
              Keyboard.dismiss
            },
          )}
        </View>
        <View style={styles.selectContainer_3_Col}>
          {_renderDropDownChangeTable(
            local === "en" ? a1A2ListEn : a1A2List,
            t("LapChienLuoc.Earth Stem"),
            "---",
            (selectedCanDiaBan: any) => {
              setCanDiaBan(selectedCanDiaBan)
              Keyboard.dismiss
            },
          )}
        </View>
      </View>
      <View style={styles.selectContainer}>
        <View style={styles.selectContainer_3_Col}>
          {_renderDropDownChangeTable(
            local === "en" ? yesNoEn : yesNo,
            t("LapChienLuoc.Include Hour Stem"),
            "---",
            (selectedGomViTriGio: any) => {
              setGomViTriGio(selectedGomViTriGio)
              Keyboard.dismiss
            },
          )}
        </View>
        <View style={styles.selectContainer_3_Col}>
          {_renderDropDownChangeTable(
            local === "en" ? yesNoEn : yesNo,
            t("LapChienLuoc.DE"),
            "---",
            (selectedKhongVong: any) => {
              setKhongVong(selectedKhongVong)
              Keyboard.dismiss
            },
          )}
        </View>
        <View style={styles.selectContainer_3_Col}>
          {_renderDropDownChangeTable(
            local === "en" ? yesNoEn : yesNo,
            t("LapChienLuoc.Horse"),
            "---",
            (selectedDichMa: any) => {
              setDichMa(selectedDichMa)
              Keyboard.dismiss
            },
          )}
        </View>
        <View style={styles.selectContainer_3_Col}>
          {_renderDropDownChangeTable(
            local === "en" ? yesNoEn : yesNo,
            t("LapChienLuoc.Include Bad Structure"),
            "---",
            (selectedCachCucBad: any) => {
              setCachCucBad(selectedCachCucBad)
              Keyboard.dismiss
            },
          )}
        </View>
      </View>
    </>
  )

  const __64QueContent = () => (
    <>
      <View>
        <View style={styles.selectContainer}>
          <View style={[styles.selectContainer_2_Col_1, styles.mt_1]}>
            {_renderDropDown(soList, "Nhập số", "---", () => {
              Keyboard.dismiss
            })}
          </View>
          <View style={[styles.selectContainer_2_Col_1, styles.mt_1]}>
            {_renderDropDown(a5List, "Nhập cửa", a5List[0].value, () => {
              Keyboard.dismiss
            })}
          </View>
          <View style={[styles.selectContainer_2_Col_1, styles.mt_1]}>
            {_renderDropDown(a1A2List, "Nhập thiên can", "---", () => {
              Keyboard.dismiss
            })}
          </View>
          <View style={[styles.selectContainer_2_Col_1, styles.mt_1]}>
            {_renderDropDownChangeTable(huongList, "Nhập hướng", "---", () => {
              Keyboard.dismiss
            })}
          </View>
        </View>
      </View>
    </>
  )

  const kyMonType = () => {
    switch (kyMonSelectIndex) {
      case 0:
        return __chienLuocContent()
      case 1:
        return __64QueContent()
      default:
        return __chienLuocContent()
    }
  }

  return (
    <>
      <SafeAreaView style={commonStyle.container}>
        <View>
          <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
          <Header
            headerText={t(`Qi Men Strategy`)}
            leftIcon="btnBack"
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
              loai: "",
              startDate: "",
              endDate: "",
              kyMonTable: "",
              huong: "",
              cachCuc: "",
              cachCucBad: "",
              a1: "",
              a2: "",
              a3: "",
              a4: "",
              a5: "",
              isH: "",
              isKV: "",
              isNgua: "",
            }}
            onSubmit={(values: any, actions: any) => {
              const result: any = {
                startDate: dateSearchFrom ? moment(dateSearchFrom).format("YYYY-MM-DD") : "",
                endDate: dateSearchTo ? moment(dateSearchTo).format("YYYY-MM-DD") : "",
                kyMonTable: bangKyMon,
                huong: huong,
                cachCuc: cachCuc,
                cachCucBad: cachCucBad,
                a1: canThienBan,
                a2: canDiaBan,
                a3: cuuTinh,
                a4: thapThan,
                a5: batMon,
                isH: gomViTriGio,
                isKV: khongVong,
                isNgua: dichMa,
              }
              submit(result)
            }}
          >
            {(formikValues: any) => (
              <View>
                {kyMonType()}
                <Pressable
                  onPress={formikValues.handleSubmit}
                  disabled={!isDateFromSelected || !isDateToSelected || !bangKyMon}
                  style={
                    !isDateFromSelected || !isDateToSelected || !bangKyMon
                      ? styles.btnSubmitDisable
                      : styles.btnSubmit
                  }
                >
                  <Text style={styles.btnText}>{t("Get")}</Text>
                </Pressable>
              </View>
            )}
          </Formik>
        </ScrollView>
      </SafeAreaView>
      <DatePicker
        modal
        theme="light"
        open={openSearchFrom}
        date={dateSearchFrom}
        mode="date"
        locale={local === "en" ? "en" : "vi"}
        title={t("From")}
        minimumDate={new Date("2023-01-01")}
        maximumDate={new Date("2025-12-31")}
        androidVariant="iosClone"
        confirmText="OK"
        cancelText={t("Cancel")}
        onConfirm={(dateSelect) => {
          setOpenSearchFrom(false)
          setDateSearchFrom(dateSelect)
          setIsDateFromSelected(true)
        }}
        onCancel={() => {
          setOpenSearchFrom(false)
        }}
      />
      <DatePicker
        modal
        theme="light"
        open={openSearchTo}
        date={dateSearchTo}
        mode="date"
        locale={local === "en" ? "en" : "vi"}
        title={t("To")}
        minimumDate={new Date("2023-01-01")}
        maximumDate={new Date("2025-12-31")}
        androidVariant="iosClone"
        confirmText="OK"
        cancelText={t("Cancel")}
        onConfirm={(dateSelect) => {
          setOpenSearchTo(false)
          setDateSearchTo(dateSelect)
          setIsDateToSelected(true)
        }}
        onCancel={() => {
          setOpenSearchTo(false)
        }}
      />
    </>
  )
})

const styles = StyleSheet.create({
  inputRow: {
    width: (WIDTH * 94) / 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  choiseTable: {
    flexDirection: "row",
  },
  inputDropDown: {},
  dateTimeContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },
  dateTimeLabel: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 15,
    color: "#585A5C",
    marginBottom: 8,
    marginLeft: 12,
  },
  inputDateTime: {
    width: (WIDTH * 45) / 100,
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
    fontSize: 12,
    lineHeight: 15,
    left: 10,
  },
  dateTimeIcon: {
    width: 24,
    height: 24,
  },

  select: {
    flexDirection: "column",
  },
  selectContainer_2_Col_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  mt_1: {
    marginTop: 10,
  },
  selectContainer_2_Col_2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  selectContainer_3_Col: {
    flexDirection: "row",
    flexBasis: "auto",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  selectContainer: {
    width: (WIDTH * 94) / 100,
    flexDirection: "row",
    flexFlow: "row wrap",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dropdownBtnStyle: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#DCDDDE",
    backgroundColor: "#FFFFFF",
    width: (WIDTH * 45) / 100,
    height: 48,
  },
  inputNumberStyle: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#DCDDDE",
    backgroundColor: "#FFFFFF",
    paddingLeft: 20,
    width: (WIDTH * 45) / 100,
    height: 48,
  },
  dropdownBtnStyleChangeTable: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#DCDDDE",
    backgroundColor: "#FFFFFF",
    width: (WIDTH * 45) / 100,
    height: 48,
  },
  dropdownBtnStyleChangeTypeTable: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#DCDDDE",
    backgroundColor: "#FFFFFF",
    width: (WIDTH * 60) / 100,
    height: 48,
  },
  dropdownStyle: {
    borderRadius: 16,
    width: (WIDTH * 45) / 100,
  },
  buttonTextStyles: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,
    color: "#A0A0A0",
  },
  btnTextStyle: {
    color: "#131200",
    textAlign: "left",
    fontSize: 12,
    lineHeight: 15,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
  },
  dropdownTextStyle: {
    color: "#131200",
    textAlign: "left",
    fontSize: 12,
    lineHeight: 15,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    width: 30,
  },
  btnSubmit: {
    backgroundColor: "#D4190A",
    width: (WIDTH * 94) / 100,
    height: 48,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btnSubmitDisable: {
    backgroundColor: "#E5756C",
    width: (WIDTH * 94) / 100,
    height: 48,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    fontFamily: "Arial",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 15,
    color: "#FFFFFF",
  },
  errorText: {
    fontFamily: "Arial",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 15,
    color: "#FF5151",
    marginHorizontal: 15,
  },
})
