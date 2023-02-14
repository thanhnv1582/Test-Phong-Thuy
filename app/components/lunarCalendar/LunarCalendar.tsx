import moment from "moment"
import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, AppState } from "react-native"
import { defaultDuongLich, WIDTH } from "../../utils/defaultValues"
import BatTuTuTruComponent from "../table/BatTuTuTruTable"
import TietKhiTable from "../table/TietKhiTable"
import { thienCanDiaChiApi } from "../../services/api/canChi/CanChiApi"
import { _renderTodayInText } from "../../utils/Functions"
import { useIsFocused } from "@react-navigation/native";

const LunarCalendarComponent = () => {
  const [getDayOfTheWeek, setGetDayOfTheWeek] = useState<any>(null)
  const [currentDate, setCurrentDate] = useState<any>(null)
  const [currentTime, setCurrentTime] = useState<any>(null)
  const [minute, setMinute] = useState<any>(null)
  const [thanCan, setThanCan] = useState<any>(null)
  const [thanChi, setThanChi] = useState<any>(null)
  const [thienCan, setThienCan] = useState<any>(null)
  const [diaChi, setDiaChi] = useState<any>(null)
  const [khongVong, setKhongVong] = useState<any>(null)
  const [tietKhiData, setTietKhiData] = useState<any>(null)
  const [thaiDuongThaiAmData, setThaiDuongThaiAmData] = useState<any>(null)
  const [othoThaiDuong, setOthoThaiDuong] = useState<any>(null)
  const [ngayAmLich, setNgayAmLich] = useState<string>("")
  const [thangAmLich, setThangAmLich] = useState<string>("")
  const [namAmLich, setNamAmLich] = useState<string>("")
  const [lunarDay, setLunarDay] = useState<string>("")

  const isFocused = useIsFocused();
  const getDataThienCanDiaChi = () => {
    console.log('getDataThienCanDiaChi');
    const getDayOfTheWeekData: any = new Date().getDay()
    const currentDateData = moment(new Date()).format("DD/MM/YYYY");
    const currentTimeData = moment(new Date()).format("HH");
    let minutes: any = new Date().getMinutes();
    if(minutes < 10) {
      minutes = '0' + minutes;
    }
    setGetDayOfTheWeek(getDayOfTheWeekData);
    setCurrentDate(currentDateData);
    setCurrentTime(currentTimeData);
    setMinute(minutes);

    thienCanDiaChiApi
      .getData(currentDateData, currentTimeData, defaultDuongLich, minutes.toString())
      .then(async (res) => {
        if (res && res.status === 200) {
          const resData = await res.data.details
          let lunar = await res.data.details.amLich
          const thaiDuongThaiAm = await res.data.details.thaiDuongThaiAm
          const oThoThaiDuong = await res.data.details.oTho[0]
          const tietKhi = await res.data.details.tietKhi
          if (lunar) {
            lunar.forEach((item: any, index: number) => {
              lunar[index] = item.toString()
            })
            const convertDay = `${lunar[0]}/${lunar[1]}/${lunar[2]}`
            setLunarDay(convertDay)
          }
          setNgayAmLich(resData.ngayThangNamHeader.ngay)
          setThangAmLich(resData.ngayThangNamHeader.thang)
          setNamAmLich(resData.ngayThangNamHeader.nam)
          setThanCan(resData.thanCan)
          setThanChi(resData.thanChi)
          setThienCan(resData.thienCan)
          setDiaChi(resData.diaChi)
          setKhongVong(resData.khongVong)
          setTietKhiData(tietKhi)
          setThaiDuongThaiAmData(thaiDuongThaiAm)
          setOthoThaiDuong(oThoThaiDuong)
        }
      })
  }

  const handleChange = (newState) => {
    if (newState === "active") {
      getDataThienCanDiaChi();
    }
  }

  useEffect(() => {
    AppState.addEventListener('change', handleChange);

    if(isFocused){ 
      getDataThienCanDiaChi();
      const autoFetchData = setInterval(() => {
        const today = new Date();
        const locale = "vi"
        const time = today.toLocaleTimeString(locale);
        
        if(time.substring(6,8) == '00'){
          getDataThienCanDiaChi();
        }
      }, 1000)
      return () => {
        clearInterval(autoFetchData);
        AppState.removeEventListener('change', handleChange);
      }
    }
    
  }, [isFocused])
  // render calendar contents
  const _renderCalendarContents = (
    leftItem: any,
    rightItemSub1: any,
    rightItemSub2: any,
    style?: any,
  ) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={style ? style : styles.todayText}>{leftItem}</Text>
        <Text style={styles.text1}>
          {rightItemSub1}&nbsp;
          <Text style={styles.text2}>{rightItemSub2}</Text>
        </Text>
      </View>
    )
  }
  return (
    <View style={styles.calendarContainer}>
      {_renderCalendarContents(_renderTodayInText(getDayOfTheWeek), "Ngày", ngayAmLich)}
      {_renderCalendarContents(currentDate, "Tháng", thangAmLich)}
      {_renderCalendarContents(`(Âm lịch: ${lunarDay})`, "Năm", namAmLich, styles.text1)}
      <View style={styles.notiContainer}>
        <View style={styles.notiLiveIcon}></View>
        <Text style={styles.notiText}>Ngày, giờ trực tiếp</Text>
      </View>
      <BatTuTuTruComponent
        thanCan={thanCan}
        thanChi={thanChi}
        diaChi={diaChi}
        thienCan={thienCan}
        khongVong={khongVong}
      />
      <TietKhiTable
        thaiDuongThaiAm={thaiDuongThaiAmData ? thaiDuongThaiAmData : null}
        tietKhi={tietKhiData ? tietKhiData[0] : null}
      />
      {othoThaiDuong && tietKhiData ? (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>
            Ô Thố Thái Dương (Ngày Âm Lịch): <Text style={styles.info}>{othoThaiDuong}</Text>
          </Text>
          <Text style={styles.label}>
            Tiết Khí Tiếp Theo: <Text style={styles.info}>{tietKhiData[1]}</Text>
          </Text>
        </View>
      ) : (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>
            Ô Thố Thái Dương (Ngày Âm Lịch): <Text style={styles.info}>&nbsp;</Text>
          </Text>
          <Text style={styles.label}>
            Tiết Khí Tiếp Theo: <Text style={styles.info}>&nbsp;</Text>
          </Text>
        </View>
      )}
    </View>
  )
}

export default LunarCalendarComponent

const styles = StyleSheet.create({
  calendarContainer: {
    width: WIDTH - 40,
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 14,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, //
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  todayText: {
    color: "#D4190A",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21,
  },
  text1: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 15,
    color: "#585A5C",
  },
  text2: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 15,
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
  infoContainer: {
    backgroundColor: "#fff",
    marginTop: 12,
    height: 62,
    justifyContent: "space-around",
  },
  label: {
    color: "#131200",
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "400",
    fontFamily: "Arial",
    fontStyle: "normal",
  },
  info: {
    color: "#131200",
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Arial",
    fontStyle: "normal",
  },
})
