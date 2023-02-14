import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, LogBox } from "react-native"
import { Header } from "../../components"
import { NavigatorParamList } from "../../navigators"
import { WIDTH } from "../../utils/defaultValues"
import BatTuTuTruComponent from "../../components/table/BatTuTuTruTable"
import SimDienThoaiApi from "../../services/api/simDienThoai/simApi"
import commonStyle from "../../theme/styles"
import LabelWithIconComponent from "../../components/title/LabelWithIconComponent"
import { thienCanDiaChiApi } from "../../services/api/canChi/CanChiApi"
import moment from "moment"
import { _renderHoroscope, _renderHoroscopeDetail } from "../../utils/Functions"

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"])

const backgroundImg = require("../../../assets/images/img_background.png")

export const SimResultScreen: FC<StackScreenProps<NavigatorParamList, "simResult">> = observer(
  ({ route, navigation }) => {
    const [fullNameResult, setFullNameResult] = useState<any>()
    const [phoneNumberResult, setPhoneNumberResult] = useState<any>()
    const [yearResult, setYearResult] = useState<any>()
    const [thanCan, setThanCan] = useState<any>(null)
    const [thanChi, setThanChi] = useState<any>(null)
    const [thienCan, setThienCan] = useState<any>(null)
    const [diaChi, setDiaChi] = useState<any>(null)
    const [khongVong, setKhongVong] = useState<any>(null)
    const [cungMenh, setCungMenh] = useState<any>(null)
    const [banMenh, setBanMenh] = useState<any>(null)
    const [tietKhi, setTietKhi] = useState<any>(null)
    const [lunarDay, setLunarDay] = useState<string>("")
    const [duongLich, setDuongLich] = useState<string>("")
    const [thienCanGio, setThienCanGio] = useState<string>("")
    const [diaChiGio, setDiaChiGio] = useState<string>("")
    const dateOfBirth = route.params.date ? moment(route.params.date).format("DD/MM/YYYY") : ""
    const day = route.params.date ? moment(route.params.date).format("DD") : ""
    const month = route.params.date ? moment(route.params.date).format("MM") : ""
    const year = route.params.date ? moment(route.params.date).format("YYYY") : ""
    const time = route.params.time ? moment(route.params.time).format("HH:mm") : ""
    const timeBorn = route.params.time ? moment(route.params.time).format("HH") : ""
    const gender = route.params.gender
    const calendarType = route.params.calendarType
    const minute = new Date().getMinutes()

    // --------- get analyze data --------- //
    const phanTich = () => {
      const fullName = route.params.fullName
      const phoneNumber = route.params.phoneNumber
      const year = route.params.year
      SimDienThoaiApi.phanTichSdt(phoneNumber, fullName, year).then(async (res: any) => {
        if (res && res.data[0]) {
          const result1 = await res.data[0].data.phanTichKetQuaHoTen
          const result2 = await res.data[0].data.phanTichSDT
          const result3 = await res.data[0].data.phanTichNamSinh
          if (res.data[0].data.phanTichKetQuaHoTen.length > 0) {
            setFullNameResult(result1)
          } else {
            setFullNameResult(null)
          }
          if (res.data[0].data.phanTichSDT.length > 0) {
            setPhoneNumberResult(result2)
          } else {
            setPhoneNumberResult(null)
          }
          if (res.data[0].data.phanTichNamSinh.length > 0) {
            setYearResult(result3)
          } else {
            setYearResult(null)
          }
        }
      })
    }
    // --------- get thien can dia chi data --------- //
    const getDataThienCanDiaChi = () => {
      thienCanDiaChiApi
        .getData(dateOfBirth, timeBorn, calendarType, minute.toString())
        .then(async (res) => {
          if (res && res.status === 200) {
            const resData = await res.data.details
            let duongLich = await res.data.details.duongLich
            let lunar = await res.data.details.amLich
            const userCungMenh = await res.data.details.cungMenh
            const userBanMenh = await res.data.details.banMenh
            const userTietKhi = await res.data.details.tietKhi
            if (lunar) {
              lunar.forEach((item: any, index: number) => {
                lunar[index] = item.toString()
              })
              const convertDayAL = `${lunar[0]}/${lunar[1]}/${lunar[2]}`
              setLunarDay(convertDayAL)
            }
            if (duongLich) {
              duongLich.forEach((item: any, index: number) => {
                duongLich[index] = item.toString()
              })
              const convertDayDL = `${duongLich[0]}/${duongLich[1]}/${duongLich[2]}`
              setDuongLich(convertDayDL)
            }
            setThanCan(resData.thanCan)
            setThanChi(resData.thanChi)
            setThienCan(resData.thienCan)
            setDiaChi(resData.diaChi)
            setKhongVong(resData.khongVong)
            setThienCanGio(resData.thienCan.gio)
            setDiaChiGio(resData.diaChi.gio)
            if (userCungMenh && gender === "Nam") {
              setCungMenh(userCungMenh[0])
            } else {
              setCungMenh(userCungMenh[1])
            }
            setBanMenh(userBanMenh[0])
            setTietKhi(`${userTietKhi[0]}`)
          }
        })
    }
    // --------- fetch data for the first time and auto fetch every 1 minute --------- //
    useEffect(() => {
      phanTich()
      getDataThienCanDiaChi()
      const autoFetchData = setInterval(() => {
        getDataThienCanDiaChi()
      }, 60000)
      return () => {
        clearInterval(autoFetchData)
      }
    }, [])
    // --------- back btn behavior --------- //
    const goBack = () => navigation.goBack()

    // --------- render --------- //
    const _renderUserInfo = (label: string, detail: string) => {
      return (
        <View>
          <View style={styles.userInfoContainer}>
            <View style={styles.label}>
              <Text style={styles.labelBold}>{label}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailText}>{detail}</Text>
            </View>
          </View>
        </View>
      )
    }

    return (
      <>
        <SafeAreaView style={commonStyle.container}>
          <View>
            <Image style={commonStyle.bgImgStyles} source={backgroundImg} />
            <Header
              headerText="Sim điện thoại"
              leftIcon="btnBack"
              rightIcon="drawer"
              onLeftPress={goBack}
              titleStyle={commonStyle.headerText}
            />
          </View>
          <ScrollView style={commonStyle.scrollStyle}>
            <View>
              <LabelWithIconComponent labelText="Thông tin thân chủ" />
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <View style={styles.detailContainer}>
                  {_renderUserInfo("Họ và tên:", route.params.fullName ?? "")}
                  {_renderUserInfo("Số điện thoại:", route.params.phoneNumber ?? "")}
                  {_renderUserInfo(
                    "Dương lịch:",
                    `${duongLich ? duongLich : ""} ${time ? time : ""}`,
                  )}
                  {_renderUserInfo(
                    "Âm lịch:",
                    `${lunarDay ? `${lunarDay}, Giờ ${thienCanGio} ${diaChiGio}` : ""}`,
                  )}
                  {_renderUserInfo("Tiết khí:", tietKhi)}
                  {_renderUserInfo("Giới tính:", gender ? gender : "")}
                  {_renderUserInfo("Cung mệnh:", cungMenh)}
                  {_renderUserInfo("Bản mệnh:", banMenh)}
                </View>
                {cungMenh ? (
                  <View style={styles.canKhonContainer}>
                    <View style={styles.canKhonDetail}>
                      <Image source={_renderHoroscope(cungMenh)} style={styles.horoscopeIcon} />
                      <Text style={styles.canKhonText}>{_renderHoroscopeDetail(cungMenh)}</Text>
                    </View>
                  </View>
                ) : null}
              </View>
              <LabelWithIconComponent labelText="Bát tự tứ trụ" />
              <View style={styles.batTuTable}>
                <BatTuTuTruComponent
                  thanCan={thanCan}
                  thanChi={thanChi}
                  thienCan={thienCan}
                  diaChi={diaChi}
                  khongVong={khongVong}
                  timeBorn={time}
                  dayBorn={day}
                  monthBorn={month}
                  yearBorn={year}
                />
              </View>
              {yearResult ? (
                <>
                  <LabelWithIconComponent labelText="Xét mệnh tam nguyên" />
                  <View style={styles.resultContainer}>
                    {yearResult?.map((item: any, index: number) => {
                      return (
                        <View style={styles.result} key={index}>
                          <Text>{"\u2022"}</Text>
                          <Text style={styles.resultText}>{item}</Text>
                        </View>
                      )
                    })}
                  </View>
                </>
              ) : null}
              {fullNameResult ? (
                <>
                  <LabelWithIconComponent
                    labelText={`Kết quả phân tích họ và tên: ${route.params.fullName ?? ""}`}
                  />
                  <View style={styles.resultContainer}>
                    {fullNameResult?.map((item: any, index: number) => {
                      return (
                        <View style={styles.result} key={index}>
                          <Text>{"\u2022"}</Text>
                          <Text style={styles.resultText}>{item}</Text>
                        </View>
                      )
                    })}
                  </View>
                </>
              ) : null}
              {phoneNumberResult ? (
                <>
                  <LabelWithIconComponent
                    labelText={`Kết quả phân tích số điện thoại: ${route.params.phoneNumber ?? ""}`}
                  />
                  <View style={styles.resultContainer}>
                    {phoneNumberResult?.map((item: any, index: number) => {
                      return (
                        <View style={styles.result} key={index}>
                          <Text>{"\u2022"}</Text>
                          <Text style={styles.resultText}>{item}</Text>
                        </View>
                      )
                    })}
                  </View>
                </>
              ) : null}
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  },
)

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: "row",
    paddingLeft: 20,
  },
  labelIcStyle: {
    width: 15,
    height: 15,
  },
  labelStyle: {
    color: "#131200",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "bold",
    fontFamily: "Arial",
    fontStyle: "normal",
    marginLeft: 8,
  },
  userInfoContainer: {
    flexDirection: "row",
    width: WIDTH - 176,
    marginBottom: 8,
  },
  label: {
    width: 100,
  },
  labelBold: {
    color: "#131200",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "bold",
    fontFamily: "Arial",
    fontStyle: "normal",
  },
  detailContainer: {
    width: WIDTH - 135,
    marginTop: 12,
    marginBottom: 15,
  },
  detail: {},
  detailText: {
    color: "#585A5C",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "400",
    fontFamily: "Arial",
    fontStyle: "normal",
  },
  canKhonContainer: {
    width: WIDTH - 315,
    marginTop: 12,
    marginBottom: 15,
    alignItems: "flex-end",
  },
  canKhonDetail: {
    justifyContent: "center",
    alignItems: "center",
  },
  horoscopeIcon: {
    width: 60,
    height: 30,
  },
  canKhonText: {
    color: "#585A5C",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "bold",
    fontFamily: "Arial",
    fontStyle: "normal",
    marginTop: 8,
  },
  batTuTable: {
    width: WIDTH - 40,
    alignSelf: "center",
    margin: 20,
  },
  resultContainer: {
    width: WIDTH - 44,
    alignSelf: "center",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
  },
  result: {
    flexDirection: "row",
    marginBottom: 8,
  },
  resultText: {
    color: "#585A5C",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "400",
    fontFamily: "Arial",
    fontStyle: "normal",
    marginLeft: 8,
  },
})
