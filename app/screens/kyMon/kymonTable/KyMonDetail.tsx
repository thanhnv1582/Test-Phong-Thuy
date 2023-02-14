// import moment from "moment"
import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { Col, Grid, Row } from "react-native-easy-grid"
import { t } from "i18next"
import { images } from "../../../../assets/images"
// import { images } from "../../../../assets/images"
import commonStyle from "../../../theme/styles"

import {
  _renderDataForA6,
  _renderSoCuc,
  _renderYangContainerBackground,
  _renderYinContainerBackground,
  _renderTextStyleForA1A2,
  _renderTextStyleForA3,
  _renderTextStyleForA4,
  _renderTextStyleForA5,
  _renderCrossIconForA1Pos2,
  _renderCrossIconForA1Pos4,
  _renderCrossIconForA1Pos8,
  _renderCrossIconForA1Pos6,
  _renderCrossIconForA5Pos4,
  _renderCrossIconForA5Pos2,
  _renderCrossIconForA5Pos8,
  _renderCrossIconForA5Pos6,
  _convertDataThaiTueThanhLongNguHanh,
  _convertTextViToEn,
} from "../../../utils/Functions"

const KyMonDetail = ({ dataKyMon, apiType, showTLTTTS, showTS, huongCL, local }) => {
  const [nguHanh, setNguHanh] = useState<any>(null)
  const [thaiTue, setThaiTue] = useState<any>(null)
  const [thanhLong, setThanhLong] = useState<any>(null)
  const [isshowTLTTTS, setIsshowTLTTTS] = useState<any>(null)
  const [isshowTS, setIsshowTS] = useState<any>(null)
  const [specialCase, setSpecialCase] = useState<any>(null)
  const [huongChienLuoc, setHuongChienLuoc] = useState<any>(null)
  useEffect(() => {
    if (dataKyMon) {
      const vongNguHanhConvert = _convertDataThaiTueThanhLongNguHanh(dataKyMon.vongSaoNguHanh)
      const vongThaiTueConvert = _convertDataThaiTueThanhLongNguHanh(dataKyMon.vongThaiTue)
      const vongThanhLongConvert = _convertDataThaiTueThanhLongNguHanh(dataKyMon.vongThanhLong)
      const special = dataKyMon.ketQuaA7A8.truongHopDacBiet
      setNguHanh(vongNguHanhConvert)
      setThanhLong(vongThanhLongConvert)
      setThaiTue(vongThaiTueConvert)
      setSpecialCase(special)
    } else {
      setNguHanh(null)
      setThanhLong(null)
      setThaiTue(null)
    }
    setIsshowTLTTTS(showTLTTTS)
    setIsshowTS(showTS)
    setHuongChienLuoc(huongCL)
  }, [dataKyMon, showTLTTTS, showTS, huongCL])
  // Function to filter data vongSaoNguHanh, vongThaiTue, vongThanhLong
  const _filterData = (data: any, positionIndex: string | number) => {
    const dataFilter = data.filter((item: any) => item.pos === positionIndex)
    if (dataFilter.length > 0) {
      return dataFilter
    } else {
      return null
    }
  }

  // Check TTM
  const _isThienTamMon = () => {
    const gioDiaChi: string = dataKyMon.canChiGioNgayThangnam.diaChi.gio
      .toLowerCase()
      .replace("\r", "")
    const gioThienTamMon: string = dataKyMon.thienTamMon.gio.toLowerCase().replace("\r", "")
    if (gioThienTamMon.includes(gioDiaChi)) {
      return true
    } else {
      return false
    }
  }
  const _isMenhCung = (A1: string, A1Plus: string, A1O5: string, thienCanNgay: string) => {
    if (A1O5 == thienCanNgay) {
      if (A1Plus && A1Plus == thienCanNgay) {
        return true
      } else {
        return false
      }
    } else {
      if (A1 == thienCanNgay) {
        return true
      } else {
        return false
      }
    }
  }
  const _isLinhHon = (A1: string, A1Plus: string, A1O5: string) => {
    if (A1O5 == dataKyMon.truNgayHeader) {
      if (A1Plus && A1Plus == dataKyMon.truNgayHeader) {
        return true
      } else {
        return false
      }
    } else {
      if (A1 == dataKyMon.truNgayHeader) {
        return true
      } else {
        return false
      }
    }
  }
  const _isTaiBach = (A5: string) => {
    if (A5 == "Sinh") {
      return true
    } else {
      return false
    }
  }
  const _isQuanLoc = (A5: string) => {
    if (A5 == "Khai") {
      return true
    } else {
      return false
    }
  }
  const _isDienTrach = (A5: string) => {
    if (A5 == "Tử") {
      return true
    } else {
      return false
    }
  }
  const _isSucKhoe = (A5: string) => {
    if (A5 == "Kinh") {
      return true
    } else {
      return false
    }
  }
  const _isKienThuc = (A5: string) => {
    if (A5 == "Đỗ") {
      return true
    } else {
      return false
    }
  }
  const _isPhongHiem = (A5: string) => {
    if (A5 == "Thương") {
      return true
    } else {
      return false
    }
  }
  const _isDiaVi = (A5: string) => {
    if (A5 == "Cảnh") {
      return true
    } else {
      return false
    }
  }
  const _isTatAch = (A3: string) => {
    if (A3 == "Nhuế") {
      return true
    } else {
      return false
    }
  }
  const _isHocHanh = (A3: string) => {
    if (A3 == "Phò") {
      return true
    } else {
      return false
    }
  }
  const _isVo = (A1: string, A1Plus: string, A1O5: string) => {
    if (A1O5 == "Ất") {
      if (A1Plus && A1Plus == "Ất") {
        return true
      } else {
        return false
      }
    } else {
      if (A1 == "Ất") {
        return true
      } else {
        return false
      }
    }
  }
  const _isChong = (A1: string, A1Plus: string, A1O5: string) => {
    if (A1O5 == "Canh") {
      if (A1Plus && A1Plus == "Canh") {
        return true
      } else {
        return false
      }
    } else {
      if (A1 == "Canh") {
        return true
      } else {
        return false
      }
    }
  }
  const _isMoiQuanHe = (A4: string) => {
    if (A4 == "Lục Hợp") {
      return true
    } else {
      return false
    }
  }
  const _isV3 = (soCung: any) => {
    if (soCung == dataKyMon.cungGoc.V3.soCung) {
      return true
    } else {
      return false
    }
  }
  const _isV2 = (soCung: any) => {
    if (soCung == dataKyMon.cungGoc.V2.soCung) {
      return true
    } else {
      return false
    }
  }
  const _isV1 = (soCung: any) => {
    if (soCung == dataKyMon.cungGoc.V1.soCung) {
      return true
    } else {
      return false
    }
  }
  // Check TTM position
  const _TTMPostion = (dataPos: string, currentPos: string | number, apiType: string) => {
    console.log(apiType)
    if (dataPos === currentPos && apiType === "gio") {
      return true
    } else {
      return false
    }
  }
  // Check A1 data
  const _isShowHDMYIcon = (
    A1: string,
    thienCan: string,
    diaChi: string,
    apiType: string,
    tableType: string,
    A1Plus: string,
    A1O5: string,
  ) => {
    A1 = A1.replace("\r", "")
    thienCan = thienCan.replace("\r", "")
    diaChi = diaChi.replace("\r", "")

    if (apiType == "ngay" && tableType == "gio") {
      return false
    }

    if (apiType == "thang" && (tableType == "gio" || tableType == "ngay")) {
      return false
    }

    if (apiType == "nam" && (tableType == "gio" || tableType == "ngay" || tableType == "thang")) {
      return false
    }

    if (thienCan + " " + diaChi == "Giáp Tý") {
      thienCan = "Mậu"
    }

    if (thienCan + " " + diaChi == "Giáp Tuất") {
      thienCan = "Kỷ"
    }

    if (thienCan + " " + diaChi == "Giáp Thân") {
      thienCan = "Canh"
    }

    if (thienCan + " " + diaChi == "Giáp Ngọ") {
      thienCan = "Tân"
    }

    if (thienCan + " " + diaChi == "Giáp Thìn") {
      thienCan = "Nhâm"
    }

    if (thienCan + " " + diaChi == "Giáp Dần") {
      thienCan = "Quý"
    }

    if (A1O5 == thienCan) {
      if (A1Plus && A1Plus == thienCan) {
        return true
      } else {
        return false
      }
    } else {
      if (A1 == thienCan) {
        return true
      } else {
        return false
      }
    }
  }
  const _renderTableDetail = (
    containerStyle?: any,
    A1?: string,
    A1sub?: string,
    phuDauA1?: any,
    isCrossIconForA1?: boolean,
    A2?: string,
    A2sub?: string,
    thienAtA2?: any,
    A3?: string,
    A3sub?: string,
    A4?: string,
    A4sub?: string,
    A5?: string,
    A5sub?: string,
    isCrossIconForA5?: boolean,
    A6?: string,
    A7?: any,
    A8?: any,
    dataNguHanh?: any,
    dataVongThaiTue?: any,
    dataVongThanhLong?: any,
    isThienTamMon?: boolean,
    isTTMpos?: any,
    isDayIcon?: boolean,
    isHourIcon?: boolean,
    isMonthIcon?: boolean,
    isYearIcon?: boolean,
    viTri?: any,
    isMenhCung?: boolean,
    isLinhHon?: boolean,
    isTaiBach?: boolean,
    isQuanLoc?: boolean,
    isDienTrach?: boolean,
    isSucKhoe?: boolean,
    isKienThuc?: boolean,
    isPhongHiem?: boolean,
    isDiaVi?: boolean,
    isTatAch?: boolean,
    isHocHanh?: boolean,
    isVo?: boolean,
    isChong?: boolean,
    isMoiQuanHe?: boolean,
    isV3?: boolean,
    isV2?: boolean,
    isV1?: boolean,
    a1TruongSinh?: any,
    a3TruongSinh?: any,
  ) => {
    return (
      <View style={containerStyle ?? styles.defaultContainer}>
        <Grid>
          <Col size={2}>
            <Col size={3} style={{ flexDirection: "row", marginLeft: 2, position: "relative" }}>
              <View
                style={
                  phuDauA1 ? styles.topLeftConnerContainerWithBorder : styles.topLeftConnerContainer
                }
              >
                <Text style={_renderTextStyleForA1A2(A1)}>
                  {local === "en" ? _convertTextViToEn(A1) : A1}
                </Text>
              </View>
              {isCrossIconForA1 ? (
                <View>
                  <Image source={images.iconCross} style={styles.iconStyle} />
                </View>
              ) : null}
              <Text
                style={{
                  ...styles.expandDetailTextStyle,
                  bottom: 0,
                  right: 0,
                }}
              >
                {local === "en" ? _convertTextViToEn(A1sub) : A1sub}
              </Text>
              {isshowTS && a1TruongSinh && a1TruongSinh.gia_tri != "" ? (
                <Text
                  style={{
                    ...(a1TruongSinh.mau == "do"
                      ? styles.expandDetailTextStyleRed
                      : styles.expandDetailTextStyleBlack),
                  }}
                >
                  {a1TruongSinh.gia_tri_en}
                </Text>
              ) : null}
            </Col>
            <Col size={8} style={{ justifyContent: "center" }}>
              {isDayIcon ? (
                <View>
                  <Image source={images.iconDays} style={commonStyle.iconHDMY} />
                </View>
              ) : null}
              {isHourIcon ? (
                <View>
                  <Image source={images.iconHours} style={commonStyle.iconHDMY} />
                </View>
              ) : null}
              {isMonthIcon ? (
                <View>
                  <Image source={images.iconMonths} style={commonStyle.iconHDMY} />
                </View>
              ) : null}
              {isYearIcon ? (
                <View>
                  <Image source={images.iconYears} style={commonStyle.iconHDMY} />
                </View>
              ) : null}
            </Col>
            <Col size={3} style={{ flexDirection: "row", marginLeft: 2, position: "relative" }}>
              <Text
                style={{
                  ...styles.expandDetailTextStyle,
                  top: 0,
                  right: 0,
                }}
              >
                {local === "en" ? _convertTextViToEn(A2sub) : A2sub}
              </Text>
              <View
                style={
                  thienAtA2
                    ? styles.bottomLeftConnerContainerWithBorder
                    : styles.bottomLeftConnerContainer
                }
              >
                <Text style={_renderTextStyleForA1A2(A2)}>
                  {local === "en" ? _convertTextViToEn(A2) : A2}
                </Text>
              </View>
            </Col>
          </Col>

          <Col size={4}>
            <Col size={1}>
              <Text
                style={{
                  ..._renderTextStyleForA3(A3),
                  marginTop: 2,
                }}
              >
                {local === "en" ? _convertTextViToEn(A3) : A3}
              </Text>
              {a3TruongSinh && a3TruongSinh.gia_tri != "" ? (
                <Text
                  style={{
                    ...(a3TruongSinh.mau == "do"
                      ? styles.expandDetailTextStyleRedA3
                      : styles.expandDetailTextStyleBlackA3),
                  }}
                >
                  {a3TruongSinh.gia_tri_en}
                </Text>
              ) : null}
              <Text
                style={{
                  ...styles.expandDetailTextStyle,
                  bottom: -3,
                  fontSize: 7,
                }}
              >
                {A3 == "Nhuế" ? (local === "en" ? _convertTextViToEn(A3sub) : A3sub) : ""}
              </Text>
            </Col>

            <Col size={5}>
              <ScrollView
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                style={commonStyle.scrollStyle}
                contentContainerStyle={commonStyle.scrollContentStyle}
              >
                <View style={{ flex: 1 }}>
                  <View style={commonStyle.specialCaseContainer}>
                    {isMenhCung && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>
                          {t("KyMonDetail2.Destiny palaces")}
                        </Text>
                      </View>
                    ) : null}
                    {isLinhHon && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>{t("KyMonDetail2.Soul")}</Text>
                      </View>
                    ) : null}
                    {isTaiBach && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>{t("KyMonDetail2.Money")}</Text>
                      </View>
                    ) : null}
                    {isQuanLoc && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>{t("KyMonDetail2.Job")}</Text>
                      </View>
                    ) : null}
                    {isDienTrach && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>{t("KyMonDetail2.Asset")}</Text>
                      </View>
                    ) : null}
                    {isSucKhoe && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>{t("KyMonDetail2.Health")}</Text>
                      </View>
                    ) : null}
                    {isKienThuc && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>
                          {t("KyMonDetail2.Knowledge")}
                        </Text>
                      </View>
                    ) : null}
                    {isPhongHiem && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>{t("KyMonDetail2.Risk")}</Text>
                      </View>
                    ) : null}
                    {isDiaVi && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>
                          {t("KyMonDetail2.Position")}
                        </Text>
                      </View>
                    ) : null}
                    {isTatAch && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>
                          {t("KyMonDetail2.Sickness")}
                        </Text>
                      </View>
                    ) : null}
                    {isHocHanh && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>{t("KyMonDetail2.Study")}</Text>
                      </View>
                    ) : null}
                    {isVo && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>{t("KyMonDetail2.Wife")}</Text>
                      </View>
                    ) : null}
                    {isChong && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>{t("KyMonDetail2.Husband")}</Text>
                      </View>
                    ) : null}
                    {isMoiQuanHe && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>
                          {t("KyMonDetail2.Relationship")}
                        </Text>
                      </View>
                    ) : null}
                    {isV3 && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>
                          {t("KyMonDetail2.Divine Light")}
                        </Text>
                      </View>
                    ) : null}
                    {isV2 && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>
                          {t("KyMonDetail2.Blessing")}
                        </Text>
                      </View>
                    ) : null}
                    {isV1 && apiType == "menh" ? (
                      <View style={styles.midColContainerPos5}>
                        <Text style={commonStyle.specialCaseText}>{t("KyMonDetail2.Force")}</Text>
                      </View>
                    ) : null}
                  </View>
                  {/* {isThienTamMon && isTTMpos ? (
                    <View style={styles.midColDataContainer}>
                      <View style={commonStyle.midColTTMContainer}>
                        <Text style={commonStyle.TTMText}>TTM</Text>
                      </View>
                    </View>
                  ) : null} */}
                  {dataNguHanh && apiType != "menh" && isshowTLTTTS
                    ? dataNguHanh.map((item: any, index: number) => {
                        return (
                          <View key={index} style={styles.midColDataContainer}>
                            <View style={commonStyle.midColVongNguHanh}>
                              <Text style={commonStyle.vongNguHanhTextStyle}>{item.text}</Text>
                            </View>
                          </View>
                        )
                      })
                    : null}
                  {dataVongThaiTue && apiType != "menh" && isshowTLTTTS
                    ? dataVongThaiTue.map((item: any, index: number) => {
                        return (
                          <View key={index} style={styles.midColDataContainer}>
                            <View
                              style={
                                item.color.toLowerCase() === "do"
                                  ? commonStyle.midColVongThaiTueDo
                                  : commonStyle.midColVongThaiTueDen
                              }
                            >
                              <Text style={commonStyle.vongThaiTueText}>{item.text}</Text>
                            </View>
                          </View>
                        )
                      })
                    : null}
                  {dataVongThanhLong && apiType != "menh" && isshowTLTTTS
                    ? dataVongThanhLong.map((item: any, index: number) => {
                        return (
                          <View key={index} style={styles.midColDataContainer}>
                            <View
                              style={
                                item.color.toLowerCase() === "do"
                                  ? commonStyle.midColVongThanhLongDo
                                  : commonStyle.midColVongThanhLongDen
                              }
                            >
                              <Text
                                style={
                                  item.color.toLowerCase() === "do"
                                    ? commonStyle.vongThanhLongTextDo
                                    : commonStyle.vongThanhLongTextDen
                                }
                              >
                                {item.text}
                              </Text>
                            </View>
                          </View>
                        )
                      })
                    : null}
                </View>
              </ScrollView>
              {A5sub ? (
                <View style={styles.midColDataContainer}>
                  <View style={styles.midColA5SubStyle}>
                    <Text style={commonStyle.trucSuTextStyle}>
                      {local === "en" ? _convertTextViToEn(A5sub) : A5sub}
                    </Text>
                  </View>
                </View>
              ) : (
                <View style={styles.midColContainerBlank}></View>
              )}
            </Col>

            <Col
              size={1}
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <Text style={_renderTextStyleForA5(A5)}>
                {local === "en" ? _convertTextViToEn(A5) : A5}
              </Text>
              {isCrossIconForA5 ? (
                <View>
                  <Image
                    source={images.iconCross}
                    style={{ ...styles.iconStyle, marginVertical: 0 }}
                  />
                </View>
              ) : null}
            </Col>
          </Col>

          <Col size={2}>
            <Col size={3}>
              <Text style={_renderTextStyleForA4(A4)}>
                {local === "en" ? _convertTextViToEn(A4) : A4}
              </Text>
              <Text
                style={{
                  ...styles.expandDetailTextStyle,
                  bottom: 0,
                  left: 0,
                }}
              >
                {A4sub}
              </Text>
            </Col>
            <Col size={8}>
              <View style={styles.a78Container}>
                {A7 !== 0 ? (
                  <View style={styles.rightColData2}>
                    <Text style={styles.rightColTextStyle}>{A7}</Text>
                  </View>
                ) : null}
                {A8 !== 0 ? (
                  <View style={styles.rightColData1}>
                    <Text style={styles.rightColTextStyle}>{A8}</Text>
                  </View>
                ) : null}
              </View>
            </Col>
            <Col size={2} style={styles.bottomRightConner}>
              <View>
                <Text>{_renderSoCuc(dataKyMon.soCuc, viTri)}</Text>
              </View>
            </Col>
            <Col size={2} style={styles.bottomRightConner}>
              {A6 !== "null" ? (
                <View>
                  <Image source={_renderDataForA6(A6)} style={styles.iconBottomRightConner} />
                </View>
              ) : (
                <View></View>
              )}
            </Col>
          </Col>
        </Grid>
      </View>
    )
  }
  return (
    <>
      {dataKyMon && nguHanh && thaiTue && thanhLong && specialCase ? (
        <Grid>
          <Row>
            <Col key={4} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground(
                  dataKyMon.soCuc.am_duong,
                  huongChienLuoc,
                  "Đông Nam",
                ),
                dataKyMon.ketQuaA1.A1[4],
                dataKyMon.ketQuaA1["A1+"][4] ?? "",
                dataKyMon.ketQuaA1.phuDau[4] ?? "",
                _renderCrossIconForA1Pos4(dataKyMon.ketQuaA1.A1[4]),
                dataKyMon.ketQuaA2.A2[4],
                null,
                dataKyMon.ketQuaA2.thienAt[4] ?? "",
                dataKyMon.ketQuaA3.A3[4],
                dataKyMon.ketQuaA3["A3+"],
                dataKyMon.ketQuaA4.A4[4],
                dataKyMon.ketQuaA4["A4+"],
                dataKyMon.ketQuaA5.A5[4],
                dataKyMon.ketQuaA5["A5+"][4] ?? "",
                _renderCrossIconForA5Pos4(dataKyMon.ketQuaA5.A5[4]),
                dataKyMon.ketQuaA6[4] ?? null,
                dataKyMon.ketQuaA7A8.viTri[4].soLuongDo,
                dataKyMon.ketQuaA7A8.viTri[4].soLuongDen,
                _filterData(nguHanh, 4),
                _filterData(thaiTue, 4),
                _filterData(thanhLong, 4),
                _isThienTamMon(),
                _TTMPostion(dataKyMon.thienTamMon.vi_tri, "4", apiType),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[4],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                  dataKyMon.canChiGioNgayThangnam.diaChi.ngay,
                  apiType,
                  "ngay",
                  dataKyMon.ketQuaA1["A1+"][4],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[4],
                  dataKyMon.canChiGioNgayThangnam.thienCan.gio,
                  dataKyMon.canChiGioNgayThangnam.diaChi.gio,
                  apiType,
                  "gio",
                  dataKyMon.ketQuaA1["A1+"][4],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[4],
                  dataKyMon.canChiGioNgayThangnam.thienCan.thang,
                  dataKyMon.canChiGioNgayThangnam.diaChi.thang,
                  apiType,
                  "thang",
                  dataKyMon.ketQuaA1["A1+"][4],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[4],
                  dataKyMon.canChiGioNgayThangnam.thienCan.nam,
                  dataKyMon.canChiGioNgayThangnam.diaChi.nam,
                  apiType,
                  "nam",
                  dataKyMon.ketQuaA1["A1+"][4],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                4,
                _isMenhCung(
                  dataKyMon.ketQuaA1.A1[4],
                  dataKyMon.ketQuaA1["A1+"][4],
                  dataKyMon.ketQuaA1.A1[5],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                ),
                _isLinhHon(
                  dataKyMon.ketQuaA1.A1[4],
                  dataKyMon.ketQuaA1["A1+"][4],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isTaiBach(dataKyMon.ketQuaA5.A5[4]),
                _isQuanLoc(dataKyMon.ketQuaA5.A5[4]),
                _isDienTrach(dataKyMon.ketQuaA5.A5[4]),
                _isSucKhoe(dataKyMon.ketQuaA5.A5[4]),
                _isKienThuc(dataKyMon.ketQuaA5.A5[4]),
                _isPhongHiem(dataKyMon.ketQuaA5.A5[4]),
                _isDiaVi(dataKyMon.ketQuaA5.A5[4]),
                _isTatAch(dataKyMon.ketQuaA3.A3[4]),
                _isHocHanh(dataKyMon.ketQuaA3.A3[4]),
                _isVo(
                  dataKyMon.ketQuaA1.A1[4],
                  dataKyMon.ketQuaA1["A1+"][4],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isChong(
                  dataKyMon.ketQuaA1.A1[4],
                  dataKyMon.ketQuaA1["A1+"][4],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isMoiQuanHe(dataKyMon.ketQuaA4.A4[4]),
                _isV3(4),
                _isV2(4),
                _isV1(4),
                dataKyMon.vongA1TruongSinh[4],
                dataKyMon.vongA3TruongSinh[4],
              )}
            </Col>
            <Col key={9} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYinContainerBackground(dataKyMon.soCuc.am_duong, huongChienLuoc, "Nam"),
                dataKyMon.ketQuaA1.A1[9],
                dataKyMon.ketQuaA1["A1+"][9] ?? "",
                dataKyMon.ketQuaA1.phuDau[9] ?? "",
                null,
                dataKyMon.ketQuaA2.A2[9],
                null,
                dataKyMon.ketQuaA2.thienAt[9] ?? "",
                dataKyMon.ketQuaA3.A3[9],
                dataKyMon.ketQuaA3["A3+"],
                dataKyMon.ketQuaA4.A4[9],
                dataKyMon.ketQuaA4["A4+"],
                dataKyMon.ketQuaA5.A5[9],
                dataKyMon.ketQuaA5["A5+"][9] ?? "",
                null,
                dataKyMon.ketQuaA6[9] ?? null,
                dataKyMon.ketQuaA7A8.viTri[9].soLuongDo,
                dataKyMon.ketQuaA7A8.viTri[9].soLuongDen,
                _filterData(nguHanh, 9),
                _filterData(thaiTue, 9),
                _filterData(thanhLong, 9),
                _isThienTamMon(),
                _TTMPostion(dataKyMon.thienTamMon.vi_tri, "9", apiType),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[9],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                  dataKyMon.canChiGioNgayThangnam.diaChi.ngay,
                  apiType,
                  "ngay",
                  dataKyMon.ketQuaA1["A1+"][4],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[9],
                  dataKyMon.canChiGioNgayThangnam.thienCan.gio,
                  dataKyMon.canChiGioNgayThangnam.diaChi.gio,
                  apiType,
                  "gio",
                  dataKyMon.ketQuaA1["A1+"][4],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[9],
                  dataKyMon.canChiGioNgayThangnam.thienCan.thang,
                  dataKyMon.canChiGioNgayThangnam.diaChi.thang,
                  apiType,
                  "thang",
                  dataKyMon.ketQuaA1["A1+"][4],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[9],
                  dataKyMon.canChiGioNgayThangnam.thienCan.nam,
                  dataKyMon.canChiGioNgayThangnam.diaChi.nam,
                  apiType,
                  "nam",
                  dataKyMon.ketQuaA1["A1+"][4],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                9,
                _isMenhCung(
                  dataKyMon.ketQuaA1.A1[9],
                  dataKyMon.ketQuaA1["A1+"][9],
                  dataKyMon.ketQuaA1.A1[5],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                ),
                _isLinhHon(
                  dataKyMon.ketQuaA1.A1[9],
                  dataKyMon.ketQuaA1["A1+"][9],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isTaiBach(dataKyMon.ketQuaA5.A5[9]),
                _isQuanLoc(dataKyMon.ketQuaA5.A5[9]),
                _isDienTrach(dataKyMon.ketQuaA5.A5[9]),
                _isSucKhoe(dataKyMon.ketQuaA5.A5[9]),
                _isKienThuc(dataKyMon.ketQuaA5.A5[9]),
                _isPhongHiem(dataKyMon.ketQuaA5.A5[9]),
                _isDiaVi(dataKyMon.ketQuaA5.A5[9]),
                _isTatAch(dataKyMon.ketQuaA3.A3[9]),
                _isHocHanh(dataKyMon.ketQuaA3.A3[9]),
                _isVo(
                  dataKyMon.ketQuaA1.A1[9],
                  dataKyMon.ketQuaA1["A1+"][9],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isChong(
                  dataKyMon.ketQuaA1.A1[9],
                  dataKyMon.ketQuaA1["A1+"][9],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isMoiQuanHe(dataKyMon.ketQuaA4.A4[9]),
                _isV3(9),
                _isV2(9),
                _isV1(9),
                dataKyMon.vongA1TruongSinh[9],
                dataKyMon.vongA3TruongSinh[9],
              )}
            </Col>
            <Col key={2} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYinContainerBackground(dataKyMon.soCuc.am_duong, huongChienLuoc, "Tây Nam"),
                dataKyMon.ketQuaA1.A1[2],
                dataKyMon.ketQuaA1["A1+"][2] ?? "",
                dataKyMon.ketQuaA1.phuDau[2] ?? "",
                _renderCrossIconForA1Pos2(dataKyMon.ketQuaA1.A1[2]),
                dataKyMon.ketQuaA2.A2[2],
                dataKyMon.ketQuaA2["A2+"],
                dataKyMon.ketQuaA2.thienAt[2] ?? "",
                dataKyMon.ketQuaA3.A3[2],
                dataKyMon.ketQuaA3["A3+"],
                dataKyMon.ketQuaA4.A4[2],
                dataKyMon.ketQuaA4["A4+"],
                dataKyMon.ketQuaA5.A5[2],
                dataKyMon.ketQuaA5["A5+"][2] ?? "",
                _renderCrossIconForA5Pos2(dataKyMon.ketQuaA5.A5[2]),
                dataKyMon.ketQuaA6[2] ?? null,
                dataKyMon.ketQuaA7A8.viTri[2].soLuongDo,
                dataKyMon.ketQuaA7A8.viTri[2].soLuongDen,
                _filterData(nguHanh, 2),
                _filterData(thaiTue, 2),
                _filterData(thanhLong, 2),
                _isThienTamMon(),
                _TTMPostion(dataKyMon.thienTamMon.vi_tri, "2", apiType),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[2],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                  dataKyMon.canChiGioNgayThangnam.diaChi.ngay,
                  apiType,
                  "ngay",
                  dataKyMon.ketQuaA1["A1+"][2],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[2],
                  dataKyMon.canChiGioNgayThangnam.thienCan.gio,
                  dataKyMon.canChiGioNgayThangnam.diaChi.gio,
                  apiType,
                  "gio",
                  dataKyMon.ketQuaA1["A1+"][2],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[2],
                  dataKyMon.canChiGioNgayThangnam.thienCan.thang,
                  dataKyMon.canChiGioNgayThangnam.diaChi.thang,
                  apiType,
                  "thang",
                  dataKyMon.ketQuaA1["A1+"][2],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[2],
                  dataKyMon.canChiGioNgayThangnam.thienCan.nam,
                  dataKyMon.canChiGioNgayThangnam.diaChi.nam,
                  apiType,
                  "nam",
                  dataKyMon.ketQuaA1["A1+"][2],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                2,
                _isMenhCung(
                  dataKyMon.ketQuaA1.A1[2],
                  dataKyMon.ketQuaA1["A1+"][2],
                  dataKyMon.ketQuaA1.A1[5],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                ),
                _isLinhHon(
                  dataKyMon.ketQuaA1.A1[2],
                  dataKyMon.ketQuaA1["A1+"][2],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isTaiBach(dataKyMon.ketQuaA5.A5[2]),
                _isQuanLoc(dataKyMon.ketQuaA5.A5[2]),
                _isDienTrach(dataKyMon.ketQuaA5.A5[2]),
                _isSucKhoe(dataKyMon.ketQuaA5.A5[2]),
                _isKienThuc(dataKyMon.ketQuaA5.A5[2]),
                _isPhongHiem(dataKyMon.ketQuaA5.A5[2]),
                _isDiaVi(dataKyMon.ketQuaA5.A5[2]),
                _isTatAch(dataKyMon.ketQuaA3.A3[2]),
                _isHocHanh(dataKyMon.ketQuaA3.A3[2]),
                _isVo(
                  dataKyMon.ketQuaA1.A1[2],
                  dataKyMon.ketQuaA1["A1+"][2],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isChong(
                  dataKyMon.ketQuaA1.A1[2],
                  dataKyMon.ketQuaA1["A1+"][2],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isMoiQuanHe(dataKyMon.ketQuaA4.A4[2]),
                _isV3(2),
                _isV2(2),
                _isV1(2),
                dataKyMon.vongA1TruongSinh[2],
                dataKyMon.vongA3TruongSinh[2],
              )}
            </Col>
          </Row>
          <Row>
            <Col key={3} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground(dataKyMon.soCuc.am_duong, huongChienLuoc, "Đông"),
                dataKyMon.ketQuaA1.A1[3],
                dataKyMon.ketQuaA1["A1+"][3] ?? "",
                dataKyMon.ketQuaA1.phuDau[3] ?? "",
                null,
                dataKyMon.ketQuaA2.A2[3],
                null,
                dataKyMon.ketQuaA2.thienAt[3] ?? "",
                dataKyMon.ketQuaA3.A3[3],
                dataKyMon.ketQuaA3["A3+"],
                dataKyMon.ketQuaA4.A4[3],
                dataKyMon.ketQuaA4["A4+"],
                dataKyMon.ketQuaA5.A5[3],
                dataKyMon.ketQuaA5["A5+"][3] ?? "",
                null,
                dataKyMon.ketQuaA6[3] ?? null,
                dataKyMon.ketQuaA7A8.viTri[3].soLuongDo,
                dataKyMon.ketQuaA7A8.viTri[3].soLuongDen,
                _filterData(nguHanh, 3),
                _filterData(thaiTue, 3),
                _filterData(thanhLong, 3),
                _isThienTamMon(),
                _TTMPostion(dataKyMon.thienTamMon.vi_tri, "3", apiType),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[3],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                  dataKyMon.canChiGioNgayThangnam.diaChi.ngay,
                  apiType,
                  "ngay",
                  dataKyMon.ketQuaA1["A1+"][3],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[3],
                  dataKyMon.canChiGioNgayThangnam.thienCan.gio,
                  dataKyMon.canChiGioNgayThangnam.diaChi.gio,
                  apiType,
                  "gio",
                  dataKyMon.ketQuaA1["A1+"][3],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[3],
                  dataKyMon.canChiGioNgayThangnam.thienCan.thang,
                  dataKyMon.canChiGioNgayThangnam.diaChi.thang,
                  apiType,
                  "thang",
                  dataKyMon.ketQuaA1["A1+"][3],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[3],
                  dataKyMon.canChiGioNgayThangnam.thienCan.nam,
                  dataKyMon.canChiGioNgayThangnam.diaChi.nam,
                  apiType,
                  "nam",
                  dataKyMon.ketQuaA1["A1+"][3],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                3,
                _isMenhCung(
                  dataKyMon.ketQuaA1.A1[3],
                  dataKyMon.ketQuaA1["A1+"][3],
                  dataKyMon.ketQuaA1.A1[5],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                ),
                _isLinhHon(
                  dataKyMon.ketQuaA1.A1[3],
                  dataKyMon.ketQuaA1["A1+"][3],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isTaiBach(dataKyMon.ketQuaA5.A5[3]),
                _isQuanLoc(dataKyMon.ketQuaA5.A5[3]),
                _isDienTrach(dataKyMon.ketQuaA5.A5[3]),
                _isSucKhoe(dataKyMon.ketQuaA5.A5[3]),
                _isKienThuc(dataKyMon.ketQuaA5.A5[3]),
                _isPhongHiem(dataKyMon.ketQuaA5.A5[3]),
                _isDiaVi(dataKyMon.ketQuaA5.A5[3]),
                _isTatAch(dataKyMon.ketQuaA3.A3[3]),
                _isHocHanh(dataKyMon.ketQuaA3.A3[3]),
                _isVo(
                  dataKyMon.ketQuaA1.A1[3],
                  dataKyMon.ketQuaA1["A1+"][3],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isChong(
                  dataKyMon.ketQuaA1.A1[3],
                  dataKyMon.ketQuaA1["A1+"][3],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isMoiQuanHe(dataKyMon.ketQuaA4.A4[3]),
                _isV3(3),
                _isV2(3),
                _isV1(3),
                dataKyMon.vongA1TruongSinh[3],
                dataKyMon.vongA3TruongSinh[3],
              )}
            </Col>
            <Col key={5} style={styles.itemDetailStyle}>
              <View style={styles.defaultContainer}>
                <Grid>
                  <Col size={2}>
                    <Col
                      size={3}
                      style={{ flexDirection: "row", marginLeft: 2, position: "relative" }}
                    >
                      <View
                        style={
                          dataKyMon.ketQuaA1.phuDau[5]
                            ? styles.topLeftConnerContainerWithBorder
                            : styles.topLeftConnerContainer
                        }
                      >
                        <Text style={_renderTextStyleForA1A2(dataKyMon.ketQuaA1.A1[5])}>
                          {local === "en"
                            ? _convertTextViToEn(dataKyMon.ketQuaA1.A1[5])
                            : dataKyMon.ketQuaA1.A1[5]}
                        </Text>
                      </View>
                    </Col>
                    <Col size={8}>
                      {_isShowHDMYIcon(
                        dataKyMon.ketQuaA1.A1[5],
                        dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                        dataKyMon.canChiGioNgayThangnam.diaChi.ngay,
                        apiType,
                        "ngay",
                        dataKyMon.ketQuaA1["A1+"][5],
                        dataKyMon.ketQuaA1.A1[5],
                      ) ? (
                        <View>
                          <Image source={images.iconDays} style={commonStyle.iconHDMY} />
                        </View>
                      ) : null}
                      {_isShowHDMYIcon(
                        dataKyMon.ketQuaA1.A1[5],
                        dataKyMon.canChiGioNgayThangnam.thienCan.gio,
                        dataKyMon.canChiGioNgayThangnam.diaChi.gio,
                        apiType,
                        "gio",
                        dataKyMon.ketQuaA1["A1+"][5],
                        dataKyMon.ketQuaA1.A1[5],
                      ) ? (
                        <View>
                          <Image source={images.iconHours} style={commonStyle.iconHDMY} />
                        </View>
                      ) : null}
                      {_isShowHDMYIcon(
                        dataKyMon.ketQuaA1.A1[5],
                        dataKyMon.canChiGioNgayThangnam.thienCan.thang,
                        dataKyMon.canChiGioNgayThangnam.diaChi.thang,
                        apiType,
                        "thang",
                        dataKyMon.ketQuaA1["A1+"][5],
                        dataKyMon.ketQuaA1.A1[5],
                      ) ? (
                        <View>
                          <Image source={images.iconMonths} style={commonStyle.iconHDMY} />
                        </View>
                      ) : null}
                      {_isShowHDMYIcon(
                        dataKyMon.ketQuaA1.A1[5],
                        dataKyMon.canChiGioNgayThangnam.thienCan.nam,
                        dataKyMon.canChiGioNgayThangnam.diaChi.nam,
                        apiType,
                        "nam",
                        dataKyMon.ketQuaA1["A1+"][5],
                        dataKyMon.ketQuaA1.A1[5],
                      ) ? (
                        <View>
                          <Image source={images.iconYears} style={commonStyle.iconHDMY} />
                        </View>
                      ) : null}
                    </Col>
                    <Col
                      size={3}
                      style={{ flexDirection: "row", marginLeft: 2, position: "relative" }}
                    >
                      <View
                        style={
                          dataKyMon.ketQuaA2.thienAt[5]
                            ? styles.bottomLeftConnerContainerWithBorder
                            : styles.bottomLeftConnerContainer
                        }
                      >
                        <Text style={_renderTextStyleForA1A2(dataKyMon.ketQuaA2.A2[5])}>
                          {local === "en"
                            ? _convertTextViToEn(dataKyMon.ketQuaA2.A2[5])
                            : dataKyMon.ketQuaA2.A2[5]}
                        </Text>
                      </View>
                    </Col>
                  </Col>
                  <Col size={4}>
                    <Col size={6}>
                      <View style={commonStyle.specialCaseContainer}>
                        {specialCase.thienHienThoiCach && apiType == "gio" ? (
                          <View style={styles.midColContainerPos5}>
                            <Text style={commonStyle.specialCaseTextRed}>
                              {t("KyMonDetail.centerContent.Heavenly Dazzling Hour Structure")}
                            </Text>
                          </View>
                        ) : null}
                        {specialCase.nguBatNgoThoi && apiType == "gio" ? (
                          <View style={styles.midColContainerPos5}>
                            <Text style={commonStyle.specialCaseText}>
                              {t("KyMonDetail.centerContent.Five do not meet Hour")}
                            </Text>
                          </View>
                        ) : null}
                        {specialCase.tuDaiCatThoi && apiType == "gio" ? (
                          <View style={styles.midColContainerPos5}>
                            <Text style={commonStyle.specialCaseTextRed}>
                              {t("KyMonDetail.centerContent.Earthly Four Gates")}
                            </Text>
                          </View>
                        ) : null}
                        {specialCase.quyNhanDangThienMon && apiType == "gio" ? (
                          <View style={styles.midColContainerPos5}>
                            <Text style={commonStyle.specialCaseTextRed}>
                              {t("KyMonDetail.centerContent.Tian Yi Noble Man")}
                            </Text>
                          </View>
                        ) : null}
                        {specialCase.phanNgam ? (
                          <View style={styles.midColContainerPos5}>
                            <Text style={commonStyle.specialCaseText}>
                              {t("KyMonDetail.centerContent.Fan Yin")}
                            </Text>
                          </View>
                        ) : null}
                        {specialCase.phanNgamMon && !specialCase.phanNgam ? (
                          <View style={styles.midColContainerPos5}>
                            <Text style={commonStyle.specialCaseText}>
                              {t("KyMonDetail.centerContent.Fan Yin Door")}
                            </Text>
                          </View>
                        ) : null}
                        {specialCase.phanNgamTinh && !specialCase.phanNgam ? (
                          <View style={styles.midColContainerPos5}>
                            <Text style={commonStyle.specialCaseText}>
                              {t("KyMonDetail.centerContent.Fan Yin Star")}
                            </Text>
                          </View>
                        ) : null}
                        {specialCase.phucNgam ? (
                          <View style={styles.midColContainerPos5}>
                            <Text style={commonStyle.specialCaseText}>
                              {t("KyMonDetail.centerContent.Fu Yin")}
                            </Text>
                          </View>
                        ) : null}
                        {specialCase.phucNgamMon && !specialCase.phucNgam ? (
                          <View style={styles.midColContainerPos5}>
                            <Text style={commonStyle.specialCaseText}>
                              {t("KyMonDetail.centerContent.Fu Yin Door")}
                            </Text>
                          </View>
                        ) : null}
                        {specialCase.phucNgamTinh && !specialCase.phucNgam ? (
                          <View style={styles.midColContainerPos5}>
                            <Text style={commonStyle.specialCaseText}>
                              {t("KyMonDetail.centerContent.Fu Yin Star")}
                            </Text>
                          </View>
                        ) : null}
                      </View>
                    </Col>
                  </Col>
                  <Col size={2}>
                    <Col size={2}></Col>
                    <Col size={6}></Col>
                    <Col size={4}>
                      <View style={styles.a78Container}></View>
                    </Col>
                    <Col size={2} style={styles.bottomRightConner}>
                      <View>
                        <Text>{_renderSoCuc(dataKyMon.soCuc, 5)}</Text>
                      </View>
                    </Col>
                    <Col size={2} style={styles.bottomRightConner}>
                      {dataKyMon.ketQuaA6[5] ? (
                        <View>
                          <Image
                            source={_renderDataForA6(dataKyMon.ketQuaA6[5])}
                            style={styles.iconBottomRightConner}
                          />
                        </View>
                      ) : null}
                    </Col>
                  </Col>
                </Grid>
              </View>
            </Col>
            <Col key={7} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYinContainerBackground(dataKyMon.soCuc.am_duong, huongChienLuoc, "Tây"),
                dataKyMon.ketQuaA1.A1[7],
                dataKyMon.ketQuaA1["A1+"][7] ?? "",
                dataKyMon.ketQuaA1.phuDau[7] ?? "",
                null,
                dataKyMon.ketQuaA2.A2[7],
                null,
                dataKyMon.ketQuaA2.thienAt[7] ?? "",
                dataKyMon.ketQuaA3.A3[7],
                dataKyMon.ketQuaA3["A3+"],
                dataKyMon.ketQuaA4.A4[7],
                dataKyMon.ketQuaA4["A4+"],
                dataKyMon.ketQuaA5.A5[7],
                dataKyMon.ketQuaA5["A5+"][7] ?? "",
                null,
                dataKyMon.ketQuaA6[7] ?? null,
                dataKyMon.ketQuaA7A8.viTri[7].soLuongDo,
                dataKyMon.ketQuaA7A8.viTri[7].soLuongDen,
                _filterData(nguHanh, 7),
                _filterData(thaiTue, 7),
                _filterData(thanhLong, 7),
                _isThienTamMon(),
                _TTMPostion(dataKyMon.thienTamMon.vi_tri, "7", apiType),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[7],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                  dataKyMon.canChiGioNgayThangnam.diaChi.ngay,
                  apiType,
                  "ngay",
                  dataKyMon.ketQuaA1["A1+"][7],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[7],
                  dataKyMon.canChiGioNgayThangnam.thienCan.gio,
                  dataKyMon.canChiGioNgayThangnam.diaChi.gio,
                  apiType,
                  "gio",
                  dataKyMon.ketQuaA1["A1+"][7],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[7],
                  dataKyMon.canChiGioNgayThangnam.thienCan.thang,
                  dataKyMon.canChiGioNgayThangnam.diaChi.thang,
                  apiType,
                  "thang",
                  dataKyMon.ketQuaA1["A1+"][7],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[7],
                  dataKyMon.canChiGioNgayThangnam.thienCan.nam,
                  dataKyMon.canChiGioNgayThangnam.diaChi.nam,
                  apiType,
                  "nam",
                  dataKyMon.ketQuaA1["A1+"][7],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                7,
                _isMenhCung(
                  dataKyMon.ketQuaA1.A1[7],
                  dataKyMon.ketQuaA1["A1+"][7],
                  dataKyMon.ketQuaA1.A1[5],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                ),
                _isLinhHon(
                  dataKyMon.ketQuaA1.A1[7],
                  dataKyMon.ketQuaA1["A1+"][7],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isTaiBach(dataKyMon.ketQuaA5.A5[7]),
                _isQuanLoc(dataKyMon.ketQuaA5.A5[7]),
                _isDienTrach(dataKyMon.ketQuaA5.A5[7]),
                _isSucKhoe(dataKyMon.ketQuaA5.A5[7]),
                _isKienThuc(dataKyMon.ketQuaA5.A5[7]),
                _isPhongHiem(dataKyMon.ketQuaA5.A5[7]),
                _isDiaVi(dataKyMon.ketQuaA5.A5[7]),
                _isTatAch(dataKyMon.ketQuaA3.A3[7]),
                _isHocHanh(dataKyMon.ketQuaA3.A3[7]),
                _isVo(
                  dataKyMon.ketQuaA1.A1[7],
                  dataKyMon.ketQuaA1["A1+"][7],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isChong(
                  dataKyMon.ketQuaA1.A1[7],
                  dataKyMon.ketQuaA1["A1+"][7],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isMoiQuanHe(dataKyMon.ketQuaA4.A4[7]),
                _isV3(7),
                _isV2(7),
                _isV1(7),
                dataKyMon.vongA1TruongSinh[7],
                dataKyMon.vongA3TruongSinh[7],
              )}
            </Col>
          </Row>
          <Row>
            <Col key={8} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground(
                  dataKyMon.soCuc.am_duong,
                  huongChienLuoc,
                  "Đông Bắc",
                ),
                dataKyMon.ketQuaA1.A1[8],
                dataKyMon.ketQuaA1["A1+"][8] ?? "",
                dataKyMon.ketQuaA1.phuDau[8] ?? "",
                _renderCrossIconForA1Pos8(dataKyMon.ketQuaA1.A1[8]),
                dataKyMon.ketQuaA2.A2[8],
                null,
                dataKyMon.ketQuaA2.thienAt[8] ?? "",
                dataKyMon.ketQuaA3.A3[8],
                dataKyMon.ketQuaA3["A3+"],
                dataKyMon.ketQuaA4.A4[8],
                dataKyMon.ketQuaA4["A4+"],
                dataKyMon.ketQuaA5.A5[8],
                dataKyMon.ketQuaA5["A5+"][8] ?? "",
                _renderCrossIconForA5Pos8(dataKyMon.ketQuaA5.A5[8]),
                dataKyMon.ketQuaA6[8] ?? null,
                dataKyMon.ketQuaA7A8.viTri[8].soLuongDo,
                dataKyMon.ketQuaA7A8.viTri[8].soLuongDen,
                _filterData(nguHanh, 8),
                _filterData(thaiTue, 8),
                _filterData(thanhLong, 8),
                _isThienTamMon(),
                _TTMPostion(dataKyMon.thienTamMon.vi_tri, "8", apiType),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[8],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                  dataKyMon.canChiGioNgayThangnam.diaChi.ngay,
                  apiType,
                  "ngay",
                  dataKyMon.ketQuaA1["A1+"][8],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[8],
                  dataKyMon.canChiGioNgayThangnam.thienCan.gio,
                  dataKyMon.canChiGioNgayThangnam.diaChi.gio,
                  apiType,
                  "gio",
                  dataKyMon.ketQuaA1["A1+"][8],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[8],
                  dataKyMon.canChiGioNgayThangnam.thienCan.thang,
                  dataKyMon.canChiGioNgayThangnam.diaChi.thang,
                  apiType,
                  "thang",
                  dataKyMon.ketQuaA1["A1+"][8],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[8],
                  dataKyMon.canChiGioNgayThangnam.thienCan.nam,
                  dataKyMon.canChiGioNgayThangnam.diaChi.nam,
                  apiType,
                  "nam",
                  dataKyMon.ketQuaA1["A1+"][8],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                8,
                _isMenhCung(
                  dataKyMon.ketQuaA1.A1[8],
                  dataKyMon.ketQuaA1["A1+"][8],
                  dataKyMon.ketQuaA1.A1[5],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                ),
                _isLinhHon(
                  dataKyMon.ketQuaA1.A1[8],
                  dataKyMon.ketQuaA1["A1+"][8],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isTaiBach(dataKyMon.ketQuaA5.A5[8]),
                _isQuanLoc(dataKyMon.ketQuaA5.A5[8]),
                _isDienTrach(dataKyMon.ketQuaA5.A5[8]),
                _isSucKhoe(dataKyMon.ketQuaA5.A5[8]),
                _isKienThuc(dataKyMon.ketQuaA5.A5[8]),
                _isPhongHiem(dataKyMon.ketQuaA5.A5[8]),
                _isDiaVi(dataKyMon.ketQuaA5.A5[8]),
                _isTatAch(dataKyMon.ketQuaA3.A3[8]),
                _isHocHanh(dataKyMon.ketQuaA3.A3[8]),
                _isVo(
                  dataKyMon.ketQuaA1.A1[8],
                  dataKyMon.ketQuaA1["A1+"][8],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isChong(
                  dataKyMon.ketQuaA1.A1[8],
                  dataKyMon.ketQuaA1["A1+"][8],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isMoiQuanHe(dataKyMon.ketQuaA4.A4[8]),
                _isV3(8),
                _isV2(8),
                _isV1(8),
                dataKyMon.vongA1TruongSinh[8],
                dataKyMon.vongA3TruongSinh[8],
              )}
            </Col>
            <Col key={1} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground(dataKyMon.soCuc.am_duong, huongChienLuoc, "Bắc"),
                dataKyMon.ketQuaA1.A1[1],
                dataKyMon.ketQuaA1["A1+"][1] ?? "",
                dataKyMon.ketQuaA1.phuDau[1] ?? "",
                null,
                dataKyMon.ketQuaA2.A2[1],
                null,
                dataKyMon.ketQuaA2.thienAt[1] ?? "",
                dataKyMon.ketQuaA3.A3[1],
                dataKyMon.ketQuaA3["A3+"],
                dataKyMon.ketQuaA4.A4[1],
                dataKyMon.ketQuaA4["A4+"],
                dataKyMon.ketQuaA5.A5[1],
                dataKyMon.ketQuaA5["A5+"][1] ?? "",
                null,
                dataKyMon.ketQuaA6[1] ?? null,
                dataKyMon.ketQuaA7A8.viTri[1].soLuongDo,
                dataKyMon.ketQuaA7A8.viTri[1].soLuongDen,
                _filterData(nguHanh, 1),
                _filterData(thaiTue, 1),
                _filterData(thanhLong, 1),
                _isThienTamMon(),
                _TTMPostion(dataKyMon.thienTamMon.vi_tri, "1", apiType),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[1],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                  dataKyMon.canChiGioNgayThangnam.diaChi.ngay,
                  apiType,
                  "ngay",
                  dataKyMon.ketQuaA1["A1+"][1],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[1],
                  dataKyMon.canChiGioNgayThangnam.thienCan.gio,
                  dataKyMon.canChiGioNgayThangnam.diaChi.gio,
                  apiType,
                  "gio",
                  dataKyMon.ketQuaA1["A1+"][1],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[1],
                  dataKyMon.canChiGioNgayThangnam.thienCan.thang,
                  dataKyMon.canChiGioNgayThangnam.diaChi.thang,
                  apiType,
                  "thang",
                  dataKyMon.ketQuaA1["A1+"][1],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[1],
                  dataKyMon.canChiGioNgayThangnam.thienCan.nam,
                  dataKyMon.canChiGioNgayThangnam.diaChi.nam,
                  apiType,
                  "nam",
                  dataKyMon.ketQuaA1["A1+"][1],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                1,
                _isMenhCung(
                  dataKyMon.ketQuaA1.A1[1],
                  dataKyMon.ketQuaA1["A1+"][1],
                  dataKyMon.ketQuaA1.A1[5],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                ),
                _isLinhHon(
                  dataKyMon.ketQuaA1.A1[1],
                  dataKyMon.ketQuaA1["A1+"][1],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isTaiBach(dataKyMon.ketQuaA5.A5[1]),
                _isQuanLoc(dataKyMon.ketQuaA5.A5[1]),
                _isDienTrach(dataKyMon.ketQuaA5.A5[1]),
                _isSucKhoe(dataKyMon.ketQuaA5.A5[1]),
                _isKienThuc(dataKyMon.ketQuaA5.A5[1]),
                _isPhongHiem(dataKyMon.ketQuaA5.A5[1]),
                _isDiaVi(dataKyMon.ketQuaA5.A5[1]),
                _isTatAch(dataKyMon.ketQuaA3.A3[1]),
                _isHocHanh(dataKyMon.ketQuaA3.A3[1]),
                _isVo(
                  dataKyMon.ketQuaA1.A1[1],
                  dataKyMon.ketQuaA1["A1+"][1],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isChong(
                  dataKyMon.ketQuaA1.A1[1],
                  dataKyMon.ketQuaA1["A1+"][1],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isMoiQuanHe(dataKyMon.ketQuaA4.A4[1]),
                _isV3(1),
                _isV2(1),
                _isV1(1),
                dataKyMon.vongA1TruongSinh[1],
                dataKyMon.vongA3TruongSinh[1],
              )}
            </Col>
            <Col key={6} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYinContainerBackground(dataKyMon.soCuc.am_duong, huongChienLuoc, "Tây Bắc"),
                dataKyMon.ketQuaA1.A1[6],
                dataKyMon.ketQuaA1["A1+"][6] ?? "",
                dataKyMon.ketQuaA1.phuDau[6] ?? "",
                _renderCrossIconForA1Pos6(dataKyMon.ketQuaA1.A1[6]),
                dataKyMon.ketQuaA2.A2[6],
                null,
                dataKyMon.ketQuaA2.thienAt[6] ?? "",
                dataKyMon.ketQuaA3.A3[6],
                dataKyMon.ketQuaA3["A3+"],
                dataKyMon.ketQuaA4.A4[6],
                dataKyMon.ketQuaA4["A4+"],
                dataKyMon.ketQuaA5.A5[6],
                dataKyMon.ketQuaA5["A5+"][6] ?? "",
                _renderCrossIconForA5Pos6(dataKyMon.ketQuaA5.A5[6]),
                dataKyMon.ketQuaA6[6] ?? null,
                dataKyMon.ketQuaA7A8.viTri[6].soLuongDo,
                dataKyMon.ketQuaA7A8.viTri[6].soLuongDen,
                _filterData(nguHanh, 6),
                _filterData(thaiTue, 6),
                _filterData(thanhLong, 6),
                _isThienTamMon(),
                _TTMPostion(dataKyMon.thienTamMon.vi_tri, "6", apiType),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[6],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                  dataKyMon.canChiGioNgayThangnam.diaChi.ngay,
                  apiType,
                  "ngay",
                  dataKyMon.ketQuaA1["A1+"][6],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[6],
                  dataKyMon.canChiGioNgayThangnam.thienCan.gio,
                  dataKyMon.canChiGioNgayThangnam.diaChi.gio,
                  apiType,
                  "gio",
                  dataKyMon.ketQuaA1["A1+"][6],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[6],
                  dataKyMon.canChiGioNgayThangnam.thienCan.thang,
                  dataKyMon.canChiGioNgayThangnam.diaChi.thang,
                  apiType,
                  "thang",
                  dataKyMon.ketQuaA1["A1+"][6],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isShowHDMYIcon(
                  dataKyMon.ketQuaA1.A1[6],
                  dataKyMon.canChiGioNgayThangnam.thienCan.nam,
                  dataKyMon.canChiGioNgayThangnam.diaChi.nam,
                  apiType,
                  "nam",
                  dataKyMon.ketQuaA1["A1+"][6],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                6,
                _isMenhCung(
                  dataKyMon.ketQuaA1.A1[6],
                  dataKyMon.ketQuaA1["A1+"][6],
                  dataKyMon.ketQuaA1.A1[5],
                  dataKyMon.canChiGioNgayThangnam.thienCan.ngay,
                ),
                _isLinhHon(
                  dataKyMon.ketQuaA1.A1[6],
                  dataKyMon.ketQuaA1["A1+"][6],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isTaiBach(dataKyMon.ketQuaA5.A5[6]),
                _isQuanLoc(dataKyMon.ketQuaA5.A5[6]),
                _isDienTrach(dataKyMon.ketQuaA5.A5[6]),
                _isSucKhoe(dataKyMon.ketQuaA5.A5[6]),
                _isKienThuc(dataKyMon.ketQuaA5.A5[6]),
                _isPhongHiem(dataKyMon.ketQuaA5.A5[6]),
                _isDiaVi(dataKyMon.ketQuaA5.A5[6]),
                _isTatAch(dataKyMon.ketQuaA3.A3[6]),
                _isHocHanh(dataKyMon.ketQuaA3.A3[6]),
                _isVo(
                  dataKyMon.ketQuaA1.A1[6],
                  dataKyMon.ketQuaA1["A1+"][6],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isChong(
                  dataKyMon.ketQuaA1.A1[6],
                  dataKyMon.ketQuaA1["A1+"][6],
                  dataKyMon.ketQuaA1.A1[5],
                ),
                _isMoiQuanHe(dataKyMon.ketQuaA4.A4[6]),
                _isV3(6),
                _isV2(6),
                _isV1(6),
                dataKyMon.vongA1TruongSinh[6],
                dataKyMon.vongA3TruongSinh[6],
              )}
            </Col>
          </Row>
        </Grid>
      ) : null}
    </>
  )
}

export default KyMonDetail

const styles = StyleSheet.create({
  defaultContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  topLeftConnerContainer: {
    marginTop: 2,
    alignItems: "center",
  },
  topLeftConnerContainerWithBorder: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginTop: 2,
    borderWidth: 1,
    borderColor: "#E43D25",
    width: "auto",
    height: 12,
  },
  bottomLeftConnerContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomLeftConnerContainerWithBorder: {
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: 1,
    borderWidth: 1,
    borderColor: "#E43D25",
    width: "auto",
    height: 12,
  },
  iconStyle: {
    width: 9,
    height: 9,
    // resizeMode: "center",
    marginVertical: 2,
  },
  // table border style

  expandDetailTextStyle: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    fontSize: 7,
    color: "red",
    fontWeight: "500",
    alignSelf: "center",
    fontFamily: "Arial",
    fontStyle: "normal",
    lineHeight: 10,
    textAlign: "center",
  },
  expandDetailTextStyleBlack: {
    fontSize: 6,
    marginTop: 9,
    marginLeft: 2,
    color: "black",
    fontWeight: "500",
    fontFamily: "Arial",
    fontStyle: "normal",
  },
  expandDetailTextStyleRed: {
    fontSize: 6,
    marginTop: 9,
    marginLeft: 2,
    color: "red",
    fontWeight: "500",
    fontFamily: "Arial",
    fontStyle: "normal",
  },
  expandDetailTextStyleRedA3: {
    fontSize: 6,
    marginTop: -1,
    marginLeft: 40,
    color: "red",
    fontWeight: "500",
    fontFamily: "Arial",
    fontStyle: "normal",
  },
  expandDetailTextStyleBlackA3: {
    fontSize: 6,
    marginTop: -1,
    marginLeft: 40,
    color: "black",
    fontWeight: "500",
    fontFamily: "Arial",
    fontStyle: "normal",
  },
  // right column style
  rightColTextStyle: {
    fontSize: 10,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    color: "#fff",
    lineHeight: 12,
  },
  rightColIconStyle: {
    width: 13,
    height: 13,
    // resizeMode: "center",
  },
  rightColData1: {
    backgroundColor: "#131200",
    justifyContent: "center",
    alignItems: "center",
    width: 13,
    height: 13,
  },
  rightColData2: {
    backgroundColor: "#E43D25",
    justifyContent: "center",
    alignItems: "center",
    width: 13,
    height: 13,
  },

  // bottom right conner style
  bottomRightConner: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconBottomRightConner: {
    width: 18,
    height: 18,
  },
  // mid column style
  midColDataContainer: {
    alignItems: "center",
    marginVertical: 2,
  },
  midColTextStyle: {
    fontSize: 9,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    color: "#E43D25",
    lineHeight: 10,
    textAlign: "center",
  },
  midColA5SubStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 13,
    backgroundColor: "#FF6767",
    borderRadius: 4,
  },
  midColContainerBlank: {
    width: 40,
    height: 13,
    backgroundColor: "transparent",
  },
  midColContainerPos5: {
    width: "100%",
    height: 13,
    backgroundColor: "transparent",
  },
  a78Container: {
    alignItems: "center",
    height: "80%",
    justifyContent: "center",
  },
  // ------------
  itemDetailStyle: {
    backgroundColor: "#fff",
    borderWidth: 0.4,
    borderColor: "#C29D68",
  },
})
