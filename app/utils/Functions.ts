import { images } from "../../assets/images"
import commonStyle from "../theme/styles"

// Scroll to top and bottom
const handleScrollToTop = (scroll: any) => {
  scroll?.current?.scrollTo({
    y: 0,
    animated: true,
  })
}
const handleScrollToBottom = (scroll: any) => {
  scroll?.current?.scrollToEnd()
}

// render day of the week in text
const _renderTodayInText = (today: any) => {
  switch (today) {
    case 0:
      return "Chủ nhật"
    case 1:
      return "Thứ hai"
    case 2:
      return "Thứ ba"
    case 3:
      return "Thứ tư"
    case 4:
      return "Thứ năm"
    case 5:
      return "Thứ sáu"
    case 6:
      return "Thứ bảy"
    default:
      return ""
  }
}
const _renderMonthInText = (month: any) => {
  switch (month) {
    case 0:
      return "Tháng Một"
    case 1:
      return "Tháng Hai"
    case 2:
      return "Tháng Ba"
    case 3:
      return "Tháng Tư"
    case 4:
      return "Tháng Năm"
    case 5:
      return "Tháng Sáu"
    case 6:
      return "Tháng Bảy"
    case 7:
      return "Tháng Tám"
    case 8:
      return "Tháng Chín"
    case 9:
      return "Tháng Mười"
    case 10:
      return "Tháng Mười Một"
    case 11:
      return "Tháng Mười Hai"
    default:
      return ""
  }
}

const _renderHoroscope = (cungMenh: string) => {
  switch (cungMenh) {
    case "Ly":
      return images.iconQueLy
    case "Khôn":
      return images.iconQueKhon
    case "Đoài":
      return images.iconQueDoai
    case "Cấn":
      return images.iconQueCan
    case "Khảm":
      return images.iconQueKham
    case "Càn":
      return images.iconQueCanf
    case "Chấn":
      return images.iconQueChan
    case "Tốn":
      return images.iconQueTon
    default:
      break
  }
}

const _renderHoroscopeDetail = (cungMenh: string): any => {
  switch (cungMenh) {
    case "Ly":
      return "9 Ly"
    case "Khôn":
      return "2 Khôn"
    case "Đoài":
      return "7 Đoài"
    case "Cấn":
      return "8 Cấn"
    case "Khảm":
      return "1 Khảm"
    case "Càn":
      return "6 Càn"
    case "Chấn":
      return "3 Chấn"
    case "Tốn":
      return "4 Tốn"
    default:
      break
  }
}

const _renderTextStyleForA1A2 = (type: string) => {
  switch (type.toLowerCase()) {
    case "giáp":
      return commonStyle.redText
    case "bính":
      return commonStyle.redText
    case "đinh":
      return commonStyle.redText
    case "mậu":
      return commonStyle.redText
    case "ất":
      return commonStyle.redText
    default:
      return commonStyle.grayText
  }
}
const _renderTextStyleForA3 = (type: string) => {
  switch (type.toLowerCase()) {
    case "anh":
      return commonStyle.redText
    case "tâm":
      return commonStyle.redText
    case "phò":
      return commonStyle.redText
    case "nhậm":
      return commonStyle.redText
    default:
      return commonStyle.grayText
  }
}
const _renderTextStyleForABC = (so: string) => {
  if (so == "9" || so == "8" || so == "6" || so == "1") {
    return commonStyle.redTextABC
  }

  return null
}
const _renderTextStyleForA4 = (type: string) => {
  switch (type.toLowerCase()) {
    case "trực phù":
      return commonStyle.redText
    case "thái âm":
      return commonStyle.redText
    case "lục hợp":
      return commonStyle.redText
    case "cửu địa":
      return commonStyle.redText
    case "cửu thiên":
      return commonStyle.redText
    default:
      return commonStyle.grayText
  }
}
const _renderTextStyleForA5 = (type: string) => {
  switch (type.toLowerCase()) {
    case "khai":
      return commonStyle.redText
    case "hưu":
      return commonStyle.redText
    case "sinh":
      return commonStyle.redText
    case "cảnh":
      return commonStyle.redText
    default:
      return commonStyle.grayText
  }
}

const _renderDataForA6 = (A6: any) => {
  switch (A6) {
    case "Trên":
      return images.iconUpRight
    case "Dưới":
      return images.iconDownLeft
    case "Trái":
      return images.iconCurveDownLeft
    case "Phải":
      return images.iconCurveDownRight
    default:
      return null
  }
}

const _renderSoCuc = (soCucData: any, viTri: any) => {
  let index = parseInt(soCucData.so_cuc)
  let soCuc = parseInt(soCucData.so_cuc)
  switch (viTri) {
    case 1:
      index = soCuc + 5
      if (index > 9) {
        index = index - 9
      }
      return index
    case 2:
      index = soCuc + 6
      if (index > 9) {
        index = index - 9
      }
      return index
    case 3:
      index = soCuc + 7
      if (index > 9) {
        index = index - 9
      }
      return index
    case 4:
      index = soCuc + 8
      if (index > 9) {
        index = index - 9
      }
      return index
    case 5:
      return soCuc
    case 6:
      index = soCuc + 1
      if (index > 9) {
        index = index - 9
      }
      return index
    case 7:
      index = soCuc + 2
      if (index > 9) {
        index = index - 9
      }
      return index
    case 8:
      index = soCuc + 3
      if (index > 9) {
        index = index - 9
      }
      return index
    case 9:
      index = soCuc + 4
      if (index > 9) {
        index = index - 9
      }
      return index
    default:
      return null
  }
}

const _renderYinContainerBackground = (
  yinOrYang: string,
  huongChienLuoc?: string,
  huongGoc?: string,
) => {
  if (huongChienLuoc && huongGoc && huongChienLuoc != "undefined" && huongChienLuoc == huongGoc) {
    return commonStyle.grayContainerRed
  }
  switch (yinOrYang) {
    case "-":
      return commonStyle.grayContainer
    case "+":
      return commonStyle.yellowContainer
    default:
      return null
  }
}
const _renderYangContainerBackground = (
  yinOrYang: string,
  huongChienLuoc?: string,
  huongGoc?: string,
) => {
  if (huongChienLuoc && huongGoc && huongChienLuoc != "undefined" && huongChienLuoc == huongGoc) {
    return commonStyle.grayContainerRed
  }
  switch (yinOrYang) {
    case "+":
      return commonStyle.grayContainer
    case "-":
      return commonStyle.yellowContainer
    default:
      return null
  }
}

const _convertTextViToEn = (text: any) => {
  if (text && text != "") {
    text = text.replace("\r", "")
  }
  switch (text) {
    case "Tý":
      return "Rat"
    case "Sửu":
      return "Ox"
    case "Dần":
      return "Tiger"
    case "Mão":
      return "Rabbit"
    case "Thìn":
      return "Dragon"
    case "Tỵ":
      return "Snake"
    case "Ngọ":
      return "Horse"
    case "Mùi":
      return "Goat"
    case "Thân":
      return "Monkey"
    case "Dậu":
      return "Rooster"
    case "Tuất":
      return "Dog"
    case "Hợi":
      return "Pig"
    case "Giáp":
      return "Jia"
    case "Ất":
      return "Yi"
    case "Bính":
      return "Bing"
    case "Đinh":
      return "Ding"
    case "Mậu":
      return "Wu"
    case "Kỷ":
      return "Ji"
    case "Canh":
      return "Geng"
    case "Tân":
      return "Xin"
    case "Nhâm":
      return "Ren"
    case "Quý":
      return "Gui"
    case "Môn":
      return "Door"
    case "Khai":
      return "Open"
    case "Hưu":
      return "Rest"
    case "Sinh":
      return "Life"
    case "Thương":
      return "Harm"
    case "Đỗ":
      return "Delusion"
    case "Cảnh":
      return "Scenery"
    case "Tử":
      return "Death"
    case "Kinh":
      return "Fear"
    case "Sao":
      return "Star"
    case "Bồng":
      return "Grass"
    case "Nhuế":
      return "Grain"
    case "Xung":
      return "Destructor"
    case "Phò":
      return "Assistant"
    case "Cầm":
      return "Bird"
    case "Tâm":
      return "Heart"
    case "Trụ":
      return "Pillar"
    case "Nhậm":
      return "Ambassador"
    case "Anh":
      return "Hero"
    case "Trực Phù":
      return "Chief"
    case "Đằng Xà":
      return "Snake"
    case "Thái Âm":
      return "Moon"
    case "Lục Hợp":
      return "Harmony"
    case "Câu Trận":
      return "Hook"
    case "Huyền Vũ":
      return "Tortoise"
    case "Chu Tước":
      return "Phoenix"
    case "Bạch Hổ":
      return "Tiger"
    case "Cửu Địa":
      return "Earth"
    case "Cửu Thiên":
      return "Heaven"
    case "Trực sử":
      return "Envoy"
    case "Đông":
      return "E"
    case "Đông Bắc":
      return "NE"
    case "Đông Nam":
      return "SE"
    case "Bắc":
      return "N"
    case "Tây Bắc":
      return "NW"
    case "Tây":
      return "W"
    case "Tây Nam":
      return "SW"
    case "Nam":
      return "S"
    case "v1":
      return "Force"
    case "v2":
      return "Blessing"
    case "v3":
      return "Divine Light"
    case "v1v2":
      return "Force & Blessing"
    case "v1v3":
      return "Force & Divine Light"
    case "v2v3":
      return "Blessing & Divine Light"
    case "Tỉnh":
      return "Well (Jing)"
    case "Quỷ":
      return "Ghost (Gui)"
    case "Liễu":
      return "Willow (Liu)"
    case "Tinh":
      return "Star (Xing)"
    case "Trương":
      return "Bow (Zhang)"
    case "Dực":
      return "Wing (Yi)"
    case "Chẩn":
      return "Carriage (Zhen)"
    case "Giác":
      return "Horn (Jiao)"
    case "Cang":
      return "Neck (Kang)"
    case "Đê":
      return "Foundation (Di)"
    case "Phòng":
      return "House (Feng)"
    case "Tâm":
      return "Heart (Xin)"
    case "Vĩ":
      return "Tail (Wei)"
    case "Cơ":
      return "Baskest (Ji)"
    case "Đẩu":
      return "Dipper (Dou)"
    case "Ngưu":
      return "Ox (Niu)"
    case "Nữ":
      return "Weaving Maiden (Nu)"
    case "Hư":
      return "Void (Xu)"
    case "Nguy":
      return "Danger (Wei)"
    case "Thất":
      return "Room (Shi)"
    case "Bích":
      return "Wall (Bi)"
    case "Khuê":
      return "Astride (Kui)"
    case "Lâu":
      return "Mound (Lou)"
    case "Vị":
      return "Stomach (Wei)"
    case "Mão":
      return "Pleiades (Mao)"
    case "Tất":
      return "Net (Bi)"
    case "Chuỷ":
      return "Beak (Zui)"
    case "Sâm":
      return "Orion(Shen)"
    case "Kiến":
      return "Establish"
    case "Trừ":
      return "Remove Day"
    case "Mãn":
      return "Full Day"
    case "Bình":
      return "Balance Day"
    case "Định":
      return "Stable Day"
    case "Chấp":
      return "Initiate Day"
    case "Phá":
      return "Destruction Day"
    case "Nguy":
      return "Danger Day"
    case "Thành":
      return "Success Day"
    case "Thu":
      return "Receive Day"
    case "Khai":
      return "Open Day"
    case "Bế":
      return "Close Day"
    default:
      return text
  }
}

const _convertTextViToEn2 = (text: any) => {
  if (text && text != "") {
    text = text.replace("\r", "")
  }
  switch (text) {
    case "Giáp":
      return "Wood"
    case "Ất":
      return "Wood"
    case "Bính":
      return "Fire"
    case "Đinh":
      return "Fire"
    case "Mậu":
      return "Earth"
    case "Kỷ":
      return "Earth"
    case "Canh":
      return "Metal"
    case "Tân":
      return "Metal"
    case "Nhâm":
      return "Water"
    case "Quý":
      return "Water"
    default:
      return text
  }
}

const _convertTextEnToVi = (text: any) => {
  if (text && text != "") {
    text = text.replace("\r", "").trim()
  }

  switch (text) {
    case "January":
      return "Tháng 1"
    case "February":
      return "Tháng 2"
    case "March":
      return "Tháng 3"
    case "April":
      return "Tháng 4"
    case "May":
      return "Tháng 5"
    case "June":
      return "Tháng 6"
    case "July":
      return "Tháng 7"
    case "August":
      return "Tháng 8"
    case "September":
      return "Tháng 9"
    case "October":
      return "Tháng 10"
    case "November":
      return "Tháng 11"
    case "December":
      return "Tháng 12"
    default:
      return text
  }
}

const _renderCrossIconForA1Pos2 = (data: string) => {
  switch (data.toLowerCase()) {
    case "ất":
      return true
    case "quý":
      return true

    default:
      return false
  }
}
const _renderCrossIconForA1Pos4 = (data: string) => {
  switch (data.toLowerCase()) {
    case "tân":
      return true
    case "nhâm":
      return true

    default:
      return false
  }
}
const _renderCrossIconForA1Pos6 = (data: string) => {
  switch (data.toLowerCase()) {
    case "ất":
      return true
    case "bính":
      return true
    case "mậu":
      return true

    default:
      return false
  }
}
const _renderCrossIconForA1Pos8 = (data: string) => {
  switch (data.toLowerCase()) {
    case "đinh":
      return true
    case "kỷ":
      return true
    case "canh":
      return true

    default:
      return false
  }
}
const _renderCrossIconForA5Pos2 = (data: string) => {
  switch (data.toLowerCase()) {
    case "thương":
      return true
    case "đỗ":
      return true

    default:
      return false
  }
}
const _renderCrossIconForA5Pos4 = (data: string) => {
  switch (data.toLowerCase()) {
    case "hưu":
      return true
    case "sinh":
      return true
    case "tử":
      return true

    default:
      return false
  }
}
const _renderCrossIconForA5Pos6 = (data: string) => {
  switch (data.toLowerCase()) {
    case "cảnh":
      return true

    default:
      return false
  }
}
const _renderCrossIconForA5Pos8 = (data: string) => {
  switch (data.toLowerCase()) {
    case "kinh":
      return true
    case "khai":
      return true

    default:
      return false
  }
}

const _handleSelectKymonApiType = (id: number) => {
  switch (id) {
    case 1:
      return "gio"
    case 2:
      return "ngay"
    case 3:
      return "thang"
    case 4:
      return "nam"
    case 5:
      return "menh"
    case 6:
      return "nha"

    default:
      return ""
  }
}

const _convertDataThaiTueThanhLongNguHanh = (data: any) => {
  data = data.map((item: any) => {
    return {
      text: item.text,
      color: item.mau_text.replace("\r", ""),
      pos: parseInt(item.vi_tri, 10),
    }
  })
  return data
}

const _filterDataCachCuc = (data: any) => {
  const dataFilter = data.filter((item: any) => item.hien_thi.trim("\r", "") === "1")
  return dataFilter
}

const _checkDataTrucSu = (dataKymon: any) => {
  if (dataKymon.ketQuaA5["A5+"][1]) {
    return dataKymon.ketQuaA5["A5"][1]
  }
  if (dataKymon.ketQuaA5["A5+"][2]) {
    return dataKymon.ketQuaA5["A5"][2]
  }
  if (dataKymon.ketQuaA5["A5+"][3]) {
    return dataKymon.ketQuaA5["A5"][3]
  }
  if (dataKymon.ketQuaA5["A5+"][4]) {
    return dataKymon.ketQuaA5["A5"][4]
  }
  if (dataKymon.ketQuaA5["A5+"][6]) {
    return dataKymon.ketQuaA5["A5"][6]
  }
  if (dataKymon.ketQuaA5["A5+"][7]) {
    return dataKymon.ketQuaA5["A5"][7]
  }
  if (dataKymon.ketQuaA5["A5+"][8]) {
    return dataKymon.ketQuaA5["A5"][8]
  }
  if (dataKymon.ketQuaA5["A5+"][9]) {
    return dataKymon.ketQuaA5["A5"][9]
  }
}

const _checkDataTrucPhu = (dataKymon: any) => {
  if (dataKymon.ketQuaA4["A4"][1] == "Trực Phù") {
    return dataKymon.ketQuaA3["A3"][1]
  }
  if (dataKymon.ketQuaA4["A4"][2] == "Trực Phù") {
    return dataKymon.ketQuaA3["A3"][2]
  }
  if (dataKymon.ketQuaA4["A4"][3] == "Trực Phù") {
    return dataKymon.ketQuaA3["A3"][3]
  }
  if (dataKymon.ketQuaA4["A4"][4] == "Trực Phù") {
    return dataKymon.ketQuaA3["A3"][4]
  }
  if (dataKymon.ketQuaA4["A4"][6] == "Trực Phù") {
    return dataKymon.ketQuaA3["A3"][6]
  }
  if (dataKymon.ketQuaA4["A4"][7] == "Trực Phù") {
    return dataKymon.ketQuaA3["A3"][7]
  }
  if (dataKymon.ketQuaA4["A4"][8] == "Trực Phù") {
    return dataKymon.ketQuaA3["A3"][8]
  }
  if (dataKymon.ketQuaA4["A4"][9] == "Trực Phù") {
    return dataKymon.ketQuaA3["A3"][9]
  }
}

const _checkDataPhuThu = (dataKymon: any) => {
  if (dataKymon.ketQuaA1["phuDau"]) {
    return Object.values(dataKymon.ketQuaA1["phuDau"])
  } else {
    return ""
  }
}

export {
  handleScrollToTop,
  handleScrollToBottom,
  _renderHoroscope,
  _renderHoroscopeDetail,
  _renderTodayInText,
  _renderMonthInText,
  _renderDataForA6,
  _renderYinContainerBackground,
  _renderYangContainerBackground,
  _renderTextStyleForA1A2,
  _renderTextStyleForA3,
  _renderTextStyleForA4,
  _renderTextStyleForA5,
  _renderCrossIconForA1Pos2,
  _renderCrossIconForA1Pos4,
  _renderCrossIconForA1Pos6,
  _renderCrossIconForA1Pos8,
  _renderCrossIconForA5Pos2,
  _renderCrossIconForA5Pos4,
  _renderCrossIconForA5Pos6,
  _renderCrossIconForA5Pos8,
  _handleSelectKymonApiType,
  _convertDataThaiTueThanhLongNguHanh,
  _filterDataCachCuc,
  _checkDataTrucSu,
  _checkDataTrucPhu,
  _checkDataPhuThu,
  _renderSoCuc,
  _renderTextStyleForABC,
  _convertTextViToEn,
  _convertTextViToEn2,
  _convertTextEnToVi,
}
