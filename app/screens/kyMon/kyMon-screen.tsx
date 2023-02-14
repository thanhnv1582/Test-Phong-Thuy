import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useRef, useState } from "react"
import SelectDropdown from "react-native-select-dropdown"
import { Header } from "../../components"
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native"
import { Formik } from "formik"
import { NavigatorParamList } from "../../navigators"
import { images } from "../../../assets/images"
import commonStyle from "../../theme/styles"
import { WIDTH } from "../../utils/defaultValues"
import {
  defaultHDMY,
  defaultTableType,
  defaultTableTypeEn,
  typeSelectEn,
  typeSelect,
  huong,
  huongEn,
  van,
  vanEn,
} from "./defaultValue"
import DatePicker from "react-native-date-picker"
import moment from "moment"
import { t } from "i18next"
import DateTimeSelectedTable from "./kymonTable/DateTimeSelectedTable"
import TamThienMonTable from "./kymonTable/TamThienMonTable"
import KyMonTableNotes from "./kymonTable/KyMonTableNotes"
import KyMonTable from "./kymonTable/KyMonTable"
import KyMonNhaTable from "./kymonTable/KyMonNhaTable"
import { kyMonApi } from "../../services/api/kyMon/KyMonApi"
import { handleScrollToBottom, _handleSelectKymonApiType } from "../../utils/Functions"
import { Route } from "@react-navigation/native"
import { checkLocalLanguageValue } from "../../../i18n/index"
import { array } from "yup"
import { _convertTextEnToVi } from "../../utils/Functions"

export const KyMonScreen: FC<StackScreenProps<NavigatorParamList, "kymon">> = observer(
  ({ route, navigation }) => {
    const maxDate = new Date("2040-12-31")
    const minDate = new Date("1932-01-01")
    const goBack = () => navigation.goBack()
    const scrollRef = useRef<any>()
    const [datePickerSelect, setDatePickerSelect] = useState<any>(new Date())
    const [openDatePicker, setOpenDatePicker] = useState(false)
    // const [timePickerSelect, setTimePickerSelect] = useState<any>(new Date())
    const [openTimePicker, setOpenTimePicker] = useState(false)
    const [select, setSelect] = useState<number>(1)
    const [tableSelect, setTableSelect] = useState<number>(1)
    const [dataKyMon, setDataKyMon] = useState<any>()
    const [dataKyMonNha, setDataKyMonNha] = useState<any>()
    const [dataDetail, setDataDetail] = useState<any>()
    const [dataHuong, setDataHuong] = useState<any>()
    const [dataKyMonPhongThuyA1, setDataKyMonPhongThuyA1] = useState<any>()
    const [dataKyMonPhongThuyA1Plus, setDataKyMonPhongThuyA1Plus] = useState<any>()
    const [dataKyMonPhongThuyA2, setDataKyMonPhongThuyA2] = useState<any>()
    const [dataKyMonPhongThuyA3, setDataKyMonPhongThuyA3] = useState<any>()
    const [dataKyMonPhongThuyA4, setDataKyMonPhongThuyA4] = useState<any>()
    const [dataKyMonPhongThuyA5, setDataKyMonPhongThuyA5] = useState<any>()
    const [dataKyMonPhongThuyA1Special, setDataKyMonPhongThuyA1Special] = useState<any>()
    const [dataKyMonPhongThuyA5Special, setDataKyMonPhongThuyA5Special] = useState<any>()
    const [apiType, setApiType] = useState<string>("gio")
    const [selectVanType, setSelectVanType] = useState<string>()
    const [selectHuongNhaType, setSelectHuongNhaType] = useState<string>()
    const [selectHuongCuaType, setSelectHuongCuaType] = useState<string>()
    const [typeSelect_, setTypeSelect_] = useState<any>([])
    const [defaultTableType_, setDefaultTableType_] = useState<any>([])
    const [monthTranslate, setMonthTranslate] = useState<string>("")
    const [directByLocale, setDirectByLocale] = useState<any>([])
    const [periodByLocale, setPeriodByLocale] = useState<any>([])
    const [locale, setLocale] = useState<string>("en")

    useEffect(() => {
      getKyMonData()
      setDataDetail(null)
      setDataHuong(null)
      setDataKyMonPhongThuyA1(null)
      setDataKyMonPhongThuyA1Plus(null)
      setDataKyMonPhongThuyA2(null)
      setDataKyMonPhongThuyA3(null)
      setDataKyMonPhongThuyA4(null)
      setDataKyMonPhongThuyA5(null)
      setDataKyMonPhongThuyA1Special(null)
      setDataKyMonPhongThuyA5Special(null)
    }, [datePickerSelect, apiType])

    useEffect(() => {
      const monthEn = moment(datePickerSelect).format("MMMM")
      checkLocalLanguageValue(monthEn, _convertTextEnToVi(monthEn)).then((data) =>
        setMonthTranslate(data),
      )

      checkLocalLanguageValue(typeSelectEn, typeSelect).then((data) => setTypeSelect_(data))

      checkLocalLanguageValue(defaultTableTypeEn, defaultTableType).then((data) =>
        setDefaultTableType_(data),
      )

      checkLocalLanguageValue(huongEn, huong).then((data) => setDirectByLocale(data))

      checkLocalLanguageValue(vanEn, van).then((data) => setPeriodByLocale(data))

      checkLocalLanguageValue("en", "vn").then((data) => setLocale(data))
    }, [])

    const handleSelectType = (id: number) => {
      setSelect(id)
      setApiType(_handleSelectKymonApiType(id))
    }
    const handleSelectTableType = (type: number) => {
      setTableSelect(type)
      // handleScrollToTop(scrollRef)
    }
    // --------- open date time picker --------- //
    const handleOpenDatePicker = () => {
      setOpenDatePicker(true)
    }
    const handleOpenTimePicker = () => {
      setOpenTimePicker(true)
    }
    // --------- reset date/time to current date/time --------- //
    const refreshTime = () => {
      setDatePickerSelect(new Date())
    }
    // --------- navigate to bookmark --------- //
    const goToBookmark = () => {
      navigation.navigate("bookmark")
    }

    const goToTamThang = () => {
      navigation.navigate("tamthang")
    }

    // check increase/decrease to max/min date
    const _checkMaxDate = () => {
      if (datePickerSelect.getTime() >= maxDate.getTime()) {
        setDatePickerSelect(maxDate)
      }
    }
    const _checkMinDate = () => {
      if (datePickerSelect.getTime() <= minDate.getTime()) {
        setDatePickerSelect(minDate)
      }
    }
    // --------- increase or decrease date/time --------- //
    const increaseDate = () => {
      const increaseDate = datePickerSelect.setDate(datePickerSelect.getDate() + 1)
      setDatePickerSelect(new Date(increaseDate))
      _checkMaxDate()
      // handleScrollToTop(scrollRef)
    }
    const increaseMonth = () => {
      const increaseMonth = datePickerSelect.setMonth(datePickerSelect.getMonth() + 1)
      setDatePickerSelect(new Date(increaseMonth))
      _checkMaxDate()
      // handleScrollToTop(scrollRef)
    }
    const increaseYear = () => {
      const increaseYear: Date = datePickerSelect.setFullYear(datePickerSelect.getFullYear() + 1)
      setDatePickerSelect(new Date(increaseYear))
      _checkMaxDate()
      // handleScrollToTop(scrollRef)
    }
    const increaseTime = () => {
      const hourIncrease = 2
      const increaseTime = datePickerSelect.setTime(
        datePickerSelect.getTime() + hourIncrease * 60 * 60 * 1000,
      )
      setDatePickerSelect(new Date(increaseTime))
      // handleScrollToTop(scrollRef)
    }
    const decreaseDate = () => {
      const decreaseDate = datePickerSelect.setDate(datePickerSelect.getDate() - 1)
      setDatePickerSelect(new Date(decreaseDate))
      _checkMinDate()
      // handleScrollToTop(scrollRef)
    }
    const decreaseMonth = () => {
      const decreaseMonth = datePickerSelect.setMonth(datePickerSelect.getMonth() - 1)
      setDatePickerSelect(new Date(decreaseMonth))
      _checkMinDate()
      // handleScrollToTop(scrollRef)
    }
    const decreaseYear = () => {
      const decreaseYear = datePickerSelect.setFullYear(datePickerSelect.getFullYear() - 1)
      setDatePickerSelect(new Date(decreaseYear))
      _checkMinDate()
      // handleScrollToTop(scrollRef)
    }
    const decreaseTime = () => {
      const hourDecrease = 2
      const increaseTime = datePickerSelect.setTime(
        datePickerSelect.getTime() - hourDecrease * 60 * 60 * 1000,
      )
      setDatePickerSelect(new Date(increaseTime))
      // handleScrollToTop(scrollRef)
    }

    // get ky mon data
    const getKyMonData = () => {
      if (route.params) {
        const date = route.params["ngay"] + "/" + route.params["thang"] + "/" + route.params["nam"]
        const hour = route.params["gio"]
        const minute = route.params["phut"]
        const type = route.params["type"]
        kyMonApi.getData(date, hour, minute, type).then(async (res: any) => {
          if (res && res.data.status === "200") {
            const kyMonData = await res.data.details
            setDataKyMon(kyMonData)
          }
        })
      } else {
        const date = moment(datePickerSelect).format("DD/MM/YYYY")
        const hour = moment(datePickerSelect).format("HH")
        const minute = moment(datePickerSelect).format("mm")
        kyMonApi.getData(date, hour, minute, apiType).then(async (res: any) => {
          if (res && res.data.status === "200") {
            const kyMonData = await res.data.details
            setDataKyMon(kyMonData)
          }
        })
      }
    }

    const getKyMonNhaData = (result: any) => {
      const van = result.van.key
      const huongNha = result.huongNha.key
      const huongCua = result.huongCua.key
      kyMonApi.getDataNha(van, huongNha, huongCua).then(async (res: any) => {
        if (res && res.data.status === "200") {
          const kyMonDataNha = await res.data.details
          setDataKyMonNha(kyMonDataNha)
        }
      })
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

    const handleShowDetail = (
      dataDo: any,
      dataDen: any,
      huong: string,
      dataDetailPhongThuyA1: any,
      dataDetailPhongThuyA1Plus: any,
      dataDetailPhongThuyA2: any,
      dataDetailPhongThuyA3: any,
      dataDetailPhongThuyA4: any,
      dataDetailPhongThuyA5: any,
      dataDetailPhongThuyA1Special: any,
      dataDetailPhongThuyA5Special: any,
    ) => {
      const allData = dataDo.concat(dataDen)
      setDataDetail(allData)
      setDataHuong(huong)
      setDataKyMonPhongThuyA1(dataDetailPhongThuyA1)
      setDataKyMonPhongThuyA1Plus(dataDetailPhongThuyA1Plus)
      setDataKyMonPhongThuyA2(dataDetailPhongThuyA2)
      setDataKyMonPhongThuyA3(dataDetailPhongThuyA3)
      setDataKyMonPhongThuyA4(dataDetailPhongThuyA4)
      setDataKyMonPhongThuyA5(dataDetailPhongThuyA5)
      setDataKyMonPhongThuyA1Special(dataDetailPhongThuyA1Special)
      setDataKyMonPhongThuyA5Special(dataDetailPhongThuyA5Special)
      handleScrollToBottom(scrollRef)
    }

    // --------- switch case for increase or decrease date/time action --------- //
    const increaseOrDecrease = (id: number) => {
      switch (id) {
        case 1:
          decreaseTime()
          break
        case 2:
          decreaseDate()
          break
        case 3:
          decreaseMonth()
          break
        case 4:
          decreaseYear()
          break
        case 5:
          increaseYear()
          break
        case 6:
          increaseMonth()
          break
        case 7:
          increaseDate()
          break
        case 8:
          increaseTime()
          break
        default:
          break
      }
    }

    const _renderCachCucText = (
      data: any,
      huong: string,
      dataDetailPhongThuyA1: any,
      dataDetailPhongThuyA1Plus: any,
      dataDetailPhongThuyA2: any,
      dataDetailPhongThuyA3: any,
      dataDetailPhongThuyA4: any,
      dataDetailPhongThuyA5: any,
      dataDetailPhongThuyA1Special: any,
      dataDetailPhongThuyA5Special: any,
    ) => {
      return (
        <>
          <Text style={{ fontWeight: "bold" }}>{huong}</Text>
          {data
            ? data.map((item: any, index: number) => {
                return (
                  <View key={index} style={styles.cachCucContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          ...styles.cachCucDetailLabel,
                          color:
                            item.loai.toLowerCase() === "đen"
                              ? "#131200"
                              : item.loai.toLowerCase() === "xanh"
                              ? "#367E18"
                              : "#E43D25",
                        }}
                      >
                        {locale === "en" ? item.tieu_de_en : item.tieu_de}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.detailText}>
                        {locale === "en" ? item.noi_dung_en : item.noi_dung}
                      </Text>
                    </View>
                  </View>
                )
              })
            : null}
          {/* {apiType == 'gio' ? (<Text style={{fontWeight: "bold", marginTop: 15}}>Feng Shui</Text>):null}
            {apiType == 'gio' && dataDetailPhongThuyA1 ? (
                  <View style={styles.cachCucContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          ...styles.cachCucDetailLabel,
                          color: "#131200"
                        }}
                      >
                        Thiên can thiên bàn: {dataDetailPhongThuyA1.value}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.detailText}>{dataDetailPhongThuyA1.detail}</Text>
                    </View>
                  </View>
                )
            : null}
            {apiType == 'gio' && dataDetailPhongThuyA1Special && dataDetailPhongThuyA1Special.map((item: any) => {
              return (
                <View style={styles.cachCucContainer}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.textContainer}>
                    <Text style={styles.detailText}>{item.detail}</Text>
                    </View>
                  </View>
                </View>
              )
            })}
            {apiType == 'gio' && dataDetailPhongThuyA1Plus ? (
                  <View style={styles.cachCucContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          ...styles.cachCucDetailLabel,
                          color: "#131200"
                        }}
                      >
                        Thiên can thiên bàn: {dataDetailPhongThuyA1Plus.value}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.detailText}>{dataDetailPhongThuyA1Plus.detail}</Text>
                    </View>
                  </View>
                )
            : null}
            {apiType == 'gio' && dataDetailPhongThuyA2 ? (
                  <View style={styles.cachCucContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          ...styles.cachCucDetailLabel,
                          color: "#131200"
                        }}
                      >
                        Thiên can địa bàn: {dataDetailPhongThuyA2.value}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.detailText}>{dataDetailPhongThuyA2.detail}</Text>
                    </View>
                  </View>
                )
            : null}
            {apiType == 'gio' && dataDetailPhongThuyA4 ? (
                  <View style={styles.cachCucContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          ...styles.cachCucDetailLabel,
                          color: "#131200"
                        }}
                      >
                        Thần: {dataDetailPhongThuyA4.value}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.detailText}>{dataDetailPhongThuyA4.detail}</Text>
                    </View>
                  </View>
                )
            : null}
            {apiType == 'gio' && dataDetailPhongThuyA3 ? (
                  <View style={styles.cachCucContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          ...styles.cachCucDetailLabel,
                          color: "#131200"
                        }}
                      >
                        Cửu tinh: {dataDetailPhongThuyA3.value}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.detailText}>{dataDetailPhongThuyA3.detail}</Text>
                    </View>
                  </View>
                )
            : null}
            {apiType == 'gio' && dataDetailPhongThuyA5 ? (
                  <View style={styles.cachCucContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          ...styles.cachCucDetailLabel,
                          color: "#131200"
                        }}
                      >
                        Cửa: {dataDetailPhongThuyA5.value}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.detailText}>{dataDetailPhongThuyA5.detail}</Text>
                    </View>
                  </View>
                )
            : null}
            {apiType == 'gio' && dataDetailPhongThuyA5Special && dataDetailPhongThuyA5Special.map((item: any) => {
              return (
                <View style={styles.cachCucContainer}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.textContainer}>
                      <Text style={styles.detailText}>{item.detail}</Text>
                    </View>
                  </View>
                </View>
              )
            })} */}
        </>
      )
    }

    const dateTimeLabel = t("Time.Datetime")

    return (
      <>
        <SafeAreaView style={commonStyle.container}>
          <View>
            <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
            {route.params ? (
              <Header
                headerText={
                  route.params["gio"] +
                  ":" +
                  route.params["phut"] +
                  ", " +
                  route.params["ngay"] +
                  " - " +
                  route.params["thang"] +
                  " - " +
                  route.params["nam"]
                }
                leftIcon="btnBack"
                onLeftPress={goBack}
                titleStyle={commonStyle.headerText}
              />
            ) : (
              <Header
                headerTx="Qi Men Dun Jia Pro"
                onLeftPress={goBack}
                titleStyle={commonStyle.headerText}
              />
            )}
          </View>

          <ScrollView
            ref={scrollRef}
            style={commonStyle.scrollStyle}
            contentContainerStyle={commonStyle.scrollContentStyle}
          >
            <View style={route.params ? styles.typeSelectContainer2 : styles.typeSelectContainer}>
              {!route.params ? (
                <View style={styles.firstGroup}>
                  <View style={styles.typeSelect}>
                    {typeSelect_.map((item: any) => {
                      return (
                        <TouchableOpacity
                          onPress={() => handleSelectType(item.id)}
                          style={select === item.id ? styles.activeType : styles.inactiveType}
                          key={item.id}
                        >
                          <Text
                            style={select === item.id ? styles.activeText : styles.inactiveText}
                          >
                            {item.type}
                          </Text>
                        </TouchableOpacity>
                      )
                    })}
                  </View>
                  <TouchableWithoutFeedback onPress={goToBookmark}>
                    <View style={styles.calendarContainer}>
                      <Image source={images.iconBookMark} style={styles.iconStyle} />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              ) : null}

              {apiType !== "nha" && !route.params ? (
                <View style={styles.secondGroup}>
                  <View style={styles.timeContainer}>
                    <TouchableOpacity onPress={handleOpenTimePicker} style={styles.timeGroup}>
                      <Text style={styles.dateTimeText}>
                        {datePickerSelect ? moment(datePickerSelect).format("HH:mm") : ""}
                      </Text>
                      <Image source={images.iconDownFilled} style={styles.smallIconStyle} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.dateContainer}>
                    <TouchableOpacity onPress={handleOpenDatePicker} style={styles.dateGroup}>
                      <Text style={styles.dateTimeText2}>
                        {datePickerSelect
                          ? `${monthTranslate}, ${moment(datePickerSelect).format("DD")}, ${moment(
                              datePickerSelect,
                            ).format("YYYY")}`
                          : ""}
                      </Text>
                      <Image source={images.iconDownFilled} style={styles.smallIconStyle} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.reloadContainer} onPress={refreshTime}>
                    <Image source={images.iconReload} style={styles.iconStyle} />
                  </TouchableOpacity>
                </View>
              ) : null}
              {apiType !== "nha" && !route.params ? (
                <View style={styles.thirdGroup}>
                  {defaultHDMY.map((item: any) => {
                    return (
                      <TouchableOpacity
                        style={styles.HDMYContainer}
                        key={item.id}
                        onPress={() => increaseOrDecrease(item.id)}
                      >
                        <Text style={styles.HDMYTextStyle}>{item.value}</Text>
                      </TouchableOpacity>
                    )
                  })}
                </View>
              ) : null}
              {apiType == "nha" ? (
                <Formik
                  initialValues={{
                    van: "",
                    huongNha: "",
                    huongCua: "",
                  }}
                  onSubmit={(values: any, actions: any) => {
                    const result: any = {
                      van: selectVanType,
                      huongNha: selectHuongNhaType,
                      huongCua: selectHuongCuaType,
                    }
                    getKyMonNhaData(result)
                  }}
                >
                  {(formikValues: any) => (
                    <>
                      <View style={styles.selectContainer}>
                        {_renderDropDown(
                          periodByLocale,
                          t("Period"),
                          "---",
                          (selectVanType: any) => {
                            setSelectVanType(selectVanType)
                            Keyboard.dismiss
                          },
                        )}
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
                      <View style={styles.selectContainer}>
                        {_renderDropDown(
                          directByLocale,
                          t("Door Direction"),
                          "---",
                          (selectHuongCuaType: any) => {
                            setSelectHuongCuaType(selectHuongCuaType)
                            Keyboard.dismiss
                          },
                        )}
                        <Pressable
                          onPress={formikValues.handleSubmit}
                          disabled={!selectVanType || !selectHuongNhaType || !selectHuongCuaType}
                          style={
                            !selectVanType || !selectHuongNhaType || !selectHuongCuaType
                              ? styles.btnSubmitDisable
                              : styles.btnSubmit
                          }
                        >
                          <Text style={styles.btnText}>{t("Get")}</Text>
                        </Pressable>
                      </View>
                    </>
                  )}
                </Formik>
              ) : null}
            </View>
            {apiType == "nha" ? <View style={styles.paddingNha}></View> : null}
            {dataKyMon && apiType != "nha" ? (
              <KyMonTable
                tableType={tableSelect}
                apiType={apiType}
                dataKyMon={dataKyMon}
                showDetail={handleShowDetail}
                huongChienLuoc={route.params ? route.params["huong"] : null}
              />
            ) : null}
            {dataKyMonNha && apiType == "nha" ? (
              <KyMonNhaTable
                tableType={tableSelect}
                apiType={apiType}
                dataKyMonNha={dataKyMonNha}
                showDetail={handleShowDetail}
              />
            ) : null}
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
            {/*  */}
            {tableSelect === 1 && apiType != "nha" ? (
              dataKyMon ? (
                <>
                  <View style={styles.realTimeContainer}>
                    <View style={styles.notiContainer}>
                      <View style={styles.notiLiveIcon}></View>
                      <Text style={styles.notiText}>{dateTimeLabel}</Text>
                    </View>
                    {route.params ? (
                      <DateTimeSelectedTable
                        dateTimeSelectedTableData={dataKyMon.canChiGioNgayThangnam}
                        currentDate={
                          route.params["nam"] +
                          "-" +
                          route.params["thang"] +
                          "-" +
                          route.params["ngay"] +
                          "T" +
                          route.params["gio"] +
                          ":" +
                          route.params["phut"] +
                          ":00"
                        }
                      />
                    ) : (
                      <DateTimeSelectedTable
                        dateTimeSelectedTableData={dataKyMon.canChiGioNgayThangnam}
                        currentDate={datePickerSelect}
                      />
                    )}
                  </View>
                  <View style={{ height: 20 }}></View>
                  <KyMonTableNotes dataKymon={dataKyMon} />
                  <TamThienMonTable
                    apiType={apiType}
                    tamThienMonData={dataKyMon.thienTamMon}
                    kyMon64queData={dataKyMon.kyMon64Que}
                    menhCung={dataKyMon.menhCung}
                    cungGoc={dataKyMon.cungGoc}
                    navigation={navigation}
                    kyMon={dataKyMon}
                    detailMenhCung={dataKyMon.detailMenhCung}
                    locale={locale}
                  />
                  <View style={{ height: 20 }}></View>
                </>
              ) : (
                <>
                  <View style={styles.realTimeContainer}>
                    <View style={styles.notiContainer}>
                      <View style={styles.notiLiveIcon}></View>
                      <Text style={styles.notiText}>Ngày, giờ chọn</Text>
                    </View>
                    <DateTimeSelectedTable />
                  </View>
                  <TamThienMonTable apiType={apiType} locale={locale} />
                  <View style={{ height: 20 }}></View>
                </>
              )
            ) : dataDetail ? (
              _renderCachCucText(
                dataDetail,
                dataHuong,
                dataKyMonPhongThuyA1,
                dataKyMonPhongThuyA1Plus,
                dataKyMonPhongThuyA2,
                dataKyMonPhongThuyA3,
                dataKyMonPhongThuyA4,
                dataKyMonPhongThuyA5,
                dataKyMonPhongThuyA1Special,
                dataKyMonPhongThuyA5Special,
              )
            ) : null}
            {/*  */}
          </ScrollView>
        </SafeAreaView>
        <DatePicker
          modal
          theme="light"
          androidVariant="iosClone"
          open={openDatePicker}
          date={datePickerSelect}
          mode={"date"}
          locale={t("_local")}
          title={t("Choose Date")}
          minimumDate={new Date("1932-01-01")}
          maximumDate={new Date("2040-12-31")}
          confirmText="OK"
          cancelText={t("Cancel")}
          onConfirm={(dateSelect) => {
            setOpenDatePicker(false)
            setDatePickerSelect(dateSelect)
          }}
          onCancel={() => {
            setOpenDatePicker(false)
          }}
        />
        <DatePicker
          modal
          theme="light"
          androidVariant="iosClone"
          open={openTimePicker}
          date={datePickerSelect}
          mode={"time"}
          locale="vi"
          title={t("Choose Hour")}
          is24hourSource="locale"
          confirmText="OK"
          cancelText={t("Cancel")}
          onConfirm={(timeSelect) => {
            setOpenTimePicker(false)
            setDatePickerSelect(timeSelect)
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
    width: WIDTH - 238,
    height: 48,
  },
  dropdownStyle: {
    borderRadius: 16,
    width: WIDTH - 238,
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
    width: WIDTH - 238,
    height: 48,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btnSubmitDisable: {
    backgroundColor: "#E5756C",
    width: WIDTH - 238,
    height: 48,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  paddingNha: {
    marginTop: 90,
  },
})
