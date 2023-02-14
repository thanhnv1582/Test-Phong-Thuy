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
  _renderTextStyleForABC,
  _convertTextViToEn,
} from "../../../utils/Functions"
import { checkLocalLanguageValue } from "../../../../i18n"

const KyMonNhaDetail = ({ dataKyMonNha, apiType, showTLTTTS }) => {
  const [local, setLocal] = useState<string>("en")
  useEffect(() => {
    ;(async () => {
      const localCurrent = await checkLocalLanguageValue("en", "vn")
      setLocal(localCurrent)
    })()
  }, [])

  useEffect(() => {}, [dataKyMonNha])
  // Function to filter data vongSaoNguHanh, vongThaiTue, vongThanhLong
  const _filterData = (data: any, positionIndex: string | number) => {
    const dataFilter = data.filter((item: any) => item.pos === positionIndex)
    if (dataFilter.length > 0) {
      return dataFilter
    } else {
      return null
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
    A3?: string,
    A3sub?: string,
    A4?: string,
    A4sub?: string,
    A5?: string,
    A5sub?: string,
    isCrossIconForA5?: boolean,
    a?: string,
    b?: string,
    c?: string,
    A7?: any,
    A8?: any,
    A6?: string,
    isHuongNha?: boolean,
    isHuongCua?: boolean,
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
                  top: 10,
                  right: 0,
                }}
              >
                {local === "en" ? _convertTextViToEn(A1sub) : A1sub}
              </Text>
            </Col>
            <Col size={3} style={{ flexDirection: "row", marginLeft: 2, position: "relative" }}>
              <Text
                style={{
                  ...styles.expandDetailTextStyle,
                  bottom: 8,
                  right: 0,
                }}
              >
                {local === "en" ? _convertTextViToEn(A2sub) : A2sub}
              </Text>
              <View style={styles.bottomLeftConnerContainer}>
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
              <Text
                style={{
                  ..._renderTextStyleForABC(a),
                  top: 60,
                  left: 20,
                  fontSize: 12,
                }}
              >
                {a}
              </Text>
              <Text
                style={{
                  ..._renderTextStyleForABC(b),
                  top: 0,
                  left: 0,
                  fontSize: 12,
                }}
              >
                {b}
              </Text>
              <Text
                style={{
                  ..._renderTextStyleForABC(c),
                  top: -15,
                  left: 40,
                  fontSize: 12,
                }}
              >
                {c}
              </Text>
              {isHuongNha ? (
                <Text
                  style={{
                    top: -14,
                    left: 13,
                    fontSize: 10,
                    color: "red",
                  }}
                >
                  {t("House")}
                </Text>
              ) : null}
              {isHuongCua ? (
                <Text
                  style={{
                    top: -14,
                    left: 13,
                    fontSize: 10,
                    color: "red",
                  }}
                >
                  {t("Door")}
                </Text>
              ) : null}
              {A5sub && isHuongNha && isHuongCua ? (
                <View style={{ ...styles.midColDataContainer }}>
                  <View style={styles.midColA5SubStyle}>
                    <Text style={commonStyle.trucSuTextStyle}>
                      {local === "en" ? _convertTextViToEn(A5sub) : A5sub}
                    </Text>
                  </View>
                </View>
              ) : (
                <View style={styles.midColContainerBlank}></View>
              )}
              {A5sub && (isHuongNha || isHuongCua) ? (
                <View style={{ ...styles.midColDataContainer }}>
                  <View style={styles.midColA5SubStyle}>
                    <Text style={commonStyle.trucSuTextStyle}>
                      {local === "en" ? _convertTextViToEn(A5sub) : A5sub}
                    </Text>
                  </View>
                </View>
              ) : (
                <View style={styles.midColContainerBlank}></View>
              )}
              {A5sub && !isHuongNha && !isHuongCua ? (
                <View style={{ ...styles.midColDataContainer }}>
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
                {local === "en" ? _convertTextViToEn(A4sub) : A4sub}
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
      {dataKyMonNha ? (
        <Grid>
          <Row>
            <Col key={4} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground("*"),
                dataKyMonNha.ketQuaA1.A1[4],
                dataKyMonNha.ketQuaA1["A1+"][4] ?? "",
                dataKyMonNha.ketQuaA1.phuDau[4] ?? "",
                _renderCrossIconForA1Pos4(dataKyMonNha.ketQuaA1.A1[4]),
                dataKyMonNha.ketQuaA2.A2[4],
                null,
                dataKyMonNha.ketQuaA3.A3[4],
                dataKyMonNha.ketQuaA3["A3+"],
                dataKyMonNha.ketQuaA4.A4[4],
                dataKyMonNha.ketQuaA4["A4+"],
                dataKyMonNha.ketQuaA5.A5[4],
                dataKyMonNha.ketQuaA5["A5+"][4] ?? "",
                _renderCrossIconForA5Pos4(dataKyMonNha.ketQuaA5.A5[4]),
                dataKyMonNha.bangSo[4]["a"],
                dataKyMonNha.bangSo[4]["b"],
                dataKyMonNha.bangSo[4]["c"],
                dataKyMonNha.ketQuaA7A8.viTri[4].soLuongDo,
                dataKyMonNha.ketQuaA7A8.viTri[4].soLuongDen,
                dataKyMonNha.ketQuaA6[4] ?? null,
                dataKyMonNha.huongNha[4] ?? false,
                dataKyMonNha.huongCua[4] ?? false,
              )}
            </Col>
            <Col key={9} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground("*"),
                dataKyMonNha.ketQuaA1.A1[9],
                dataKyMonNha.ketQuaA1["A1+"][9] ?? "",
                dataKyMonNha.ketQuaA1.phuDau[9] ?? "",
                null,
                dataKyMonNha.ketQuaA2.A2[9],
                null,
                dataKyMonNha.ketQuaA3.A3[9],
                dataKyMonNha.ketQuaA3["A3+"],
                dataKyMonNha.ketQuaA4.A4[9],
                dataKyMonNha.ketQuaA4["A4+"],
                dataKyMonNha.ketQuaA5.A5[9],
                dataKyMonNha.ketQuaA5["A5+"][9] ?? "",
                null,
                dataKyMonNha.bangSo[9]["a"],
                dataKyMonNha.bangSo[9]["b"],
                dataKyMonNha.bangSo[9]["c"],
                dataKyMonNha.ketQuaA7A8.viTri[9].soLuongDo,
                dataKyMonNha.ketQuaA7A8.viTri[9].soLuongDen,
                dataKyMonNha.ketQuaA6[9] ?? null,
                dataKyMonNha.huongNha[9] ?? false,
                dataKyMonNha.huongCua[9] ?? false,
              )}
            </Col>
            <Col key={2} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYinContainerBackground("*"),
                dataKyMonNha.ketQuaA1.A1[2],
                dataKyMonNha.ketQuaA1["A1+"][2] ?? "",
                dataKyMonNha.ketQuaA1.phuDau[2] ?? "",
                _renderCrossIconForA1Pos2(dataKyMonNha.ketQuaA1.A1[2]),
                dataKyMonNha.ketQuaA2.A2[2],
                dataKyMonNha.ketQuaA2["A2+"],
                dataKyMonNha.ketQuaA3.A3[2],
                dataKyMonNha.ketQuaA3["A3+"],
                dataKyMonNha.ketQuaA4.A4[2],
                dataKyMonNha.ketQuaA4["A4+"],
                dataKyMonNha.ketQuaA5.A5[2],
                dataKyMonNha.ketQuaA5["A5+"][2] ?? "",
                _renderCrossIconForA5Pos2(dataKyMonNha.ketQuaA5.A5[2]),
                dataKyMonNha.bangSo[2]["a"],
                dataKyMonNha.bangSo[2]["b"],
                dataKyMonNha.bangSo[2]["c"],
                dataKyMonNha.ketQuaA7A8.viTri[2].soLuongDo,
                dataKyMonNha.ketQuaA7A8.viTri[2].soLuongDen,
                dataKyMonNha.ketQuaA6[2] ?? null,
                dataKyMonNha.huongNha[2] ?? false,
                dataKyMonNha.huongCua[2] ?? false,
              )}
            </Col>
          </Row>
          <Row>
            <Col key={3} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground("*"),
                dataKyMonNha.ketQuaA1.A1[3],
                dataKyMonNha.ketQuaA1["A1+"][3] ?? "",
                dataKyMonNha.ketQuaA1.phuDau[3] ?? "",
                null,
                dataKyMonNha.ketQuaA2.A2[3],
                null,
                dataKyMonNha.ketQuaA3.A3[3],
                dataKyMonNha.ketQuaA3["A3+"],
                dataKyMonNha.ketQuaA4.A4[3],
                dataKyMonNha.ketQuaA4["A4+"],
                dataKyMonNha.ketQuaA5.A5[3],
                dataKyMonNha.ketQuaA5["A5+"][3] ?? "",
                null,
                dataKyMonNha.bangSo[3]["a"],
                dataKyMonNha.bangSo[3]["b"],
                dataKyMonNha.bangSo[3]["c"],
                dataKyMonNha.ketQuaA7A8.viTri[3].soLuongDo,
                dataKyMonNha.ketQuaA7A8.viTri[3].soLuongDen,
                dataKyMonNha.ketQuaA6[3] ?? null,
                dataKyMonNha.huongNha[3] ?? false,
                dataKyMonNha.huongCua[3] ?? false,
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
                          dataKyMonNha.ketQuaA1.phuDau[5]
                            ? styles.topLeftConnerContainerWithBorder
                            : styles.topLeftConnerContainer
                        }
                      >
                        <Text style={_renderTextStyleForA1A2(dataKyMonNha.ketQuaA1.A1[5])}>
                          {local === "en"
                            ? _convertTextViToEn(dataKyMonNha.ketQuaA1.A1[5])
                            : dataKyMonNha.ketQuaA1.A1[5]}
                        </Text>
                      </View>
                    </Col>
                    <Col
                      size={3}
                      style={{ flexDirection: "row", marginLeft: 2, position: "relative" }}
                    >
                      <View style={styles.bottomLeftConnerContainer}>
                        <Text style={_renderTextStyleForA1A2(dataKyMonNha.ketQuaA2.A2[5])}>
                          {local === "en"
                            ? _convertTextViToEn(dataKyMonNha.ketQuaA2.A2[5])
                            : dataKyMonNha.ketQuaA2.A2[5]}
                        </Text>
                      </View>
                    </Col>
                  </Col>
                  <Col size={2}>
                    <Col size={2}></Col>
                    <Col size={6}>
                      <Text
                        style={{
                          top: 59,
                          left: -8,
                          fontSize: 12,
                        }}
                      >
                        {dataKyMonNha.bangSo[5]["a"]}
                      </Text>
                      <Text
                        style={{
                          top: 0,
                          left: -26,
                          fontSize: 12,
                        }}
                      >
                        {dataKyMonNha.bangSo[5]["b"]}
                      </Text>
                      <Text
                        style={{
                          top: -15,
                          left: 13,
                          fontSize: 12,
                        }}
                      >
                        {dataKyMonNha.bangSo[5]["c"]}
                      </Text>
                    </Col>
                    <Col size={4}>
                      <View style={styles.a78Container}></View>
                    </Col>
                  </Col>
                </Grid>
              </View>
            </Col>
            <Col key={7} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYinContainerBackground("*"),
                dataKyMonNha.ketQuaA1.A1[7],
                dataKyMonNha.ketQuaA1["A1+"][7] ?? "",
                dataKyMonNha.ketQuaA1.phuDau[7] ?? "",
                null,
                dataKyMonNha.ketQuaA2.A2[7],
                null,
                dataKyMonNha.ketQuaA3.A3[7],
                dataKyMonNha.ketQuaA3["A3+"],
                dataKyMonNha.ketQuaA4.A4[7],
                dataKyMonNha.ketQuaA4["A4+"],
                dataKyMonNha.ketQuaA5.A5[7],
                dataKyMonNha.ketQuaA5["A5+"][7] ?? "",
                null,
                dataKyMonNha.bangSo[7]["a"],
                dataKyMonNha.bangSo[7]["b"],
                dataKyMonNha.bangSo[7]["c"],
                dataKyMonNha.ketQuaA7A8.viTri[7].soLuongDo,
                dataKyMonNha.ketQuaA7A8.viTri[7].soLuongDen,
                dataKyMonNha.ketQuaA6[7] ?? null,
                dataKyMonNha.huongNha[7] ?? false,
                dataKyMonNha.huongCua[7] ?? false,
              )}
            </Col>
          </Row>
          <Row>
            <Col key={8} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground("*"),
                dataKyMonNha.ketQuaA1.A1[8],
                dataKyMonNha.ketQuaA1["A1+"][8] ?? "",
                dataKyMonNha.ketQuaA1.phuDau[8] ?? "",
                _renderCrossIconForA1Pos8(dataKyMonNha.ketQuaA1.A1[8]),
                dataKyMonNha.ketQuaA2.A2[8],
                null,
                dataKyMonNha.ketQuaA3.A3[8],
                dataKyMonNha.ketQuaA3["A3+"],
                dataKyMonNha.ketQuaA4.A4[8],
                dataKyMonNha.ketQuaA4["A4+"],
                dataKyMonNha.ketQuaA5.A5[8],
                dataKyMonNha.ketQuaA5["A5+"][8] ?? "",
                _renderCrossIconForA5Pos8(dataKyMonNha.ketQuaA5.A5[8]),
                dataKyMonNha.bangSo[8]["a"],
                dataKyMonNha.bangSo[8]["b"],
                dataKyMonNha.bangSo[8]["c"],
                dataKyMonNha.ketQuaA7A8.viTri[8].soLuongDo,
                dataKyMonNha.ketQuaA7A8.viTri[8].soLuongDen,
                dataKyMonNha.ketQuaA6[8] ?? null,
                dataKyMonNha.huongNha[8] ?? false,
                dataKyMonNha.huongCua[8] ?? false,
              )}
            </Col>
            <Col key={1} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground("*"),
                dataKyMonNha.ketQuaA1.A1[1],
                dataKyMonNha.ketQuaA1["A1+"][1] ?? "",
                dataKyMonNha.ketQuaA1.phuDau[1] ?? "",
                null,
                dataKyMonNha.ketQuaA2.A2[1],
                null,
                dataKyMonNha.ketQuaA3.A3[1],
                dataKyMonNha.ketQuaA3["A3+"],
                dataKyMonNha.ketQuaA4.A4[1],
                dataKyMonNha.ketQuaA4["A4+"],
                dataKyMonNha.ketQuaA5.A5[1],
                dataKyMonNha.ketQuaA5["A5+"][1] ?? "",
                null,
                dataKyMonNha.bangSo[1]["a"],
                dataKyMonNha.bangSo[1]["b"],
                dataKyMonNha.bangSo[1]["c"],
                dataKyMonNha.ketQuaA7A8.viTri[1].soLuongDo,
                dataKyMonNha.ketQuaA7A8.viTri[1].soLuongDen,
                dataKyMonNha.ketQuaA6[1] ?? null,
                dataKyMonNha.huongNha[1] ?? false,
                dataKyMonNha.huongCua[1] ?? false,
              )}
            </Col>
            <Col key={6} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYinContainerBackground("*"),
                dataKyMonNha.ketQuaA1.A1[6],
                dataKyMonNha.ketQuaA1["A1+"][6] ?? "",
                dataKyMonNha.ketQuaA1.phuDau[6] ?? "",
                _renderCrossIconForA1Pos6(dataKyMonNha.ketQuaA1.A1[6]),
                dataKyMonNha.ketQuaA2.A2[6],
                null,
                dataKyMonNha.ketQuaA3.A3[6],
                dataKyMonNha.ketQuaA3["A3+"],
                dataKyMonNha.ketQuaA4.A4[6],
                dataKyMonNha.ketQuaA4["A4+"],
                dataKyMonNha.ketQuaA5.A5[6],
                dataKyMonNha.ketQuaA5["A5+"][6] ?? "",
                _renderCrossIconForA5Pos6(dataKyMonNha.ketQuaA5.A5[6]),
                dataKyMonNha.bangSo[6]["a"],
                dataKyMonNha.bangSo[6]["b"],
                dataKyMonNha.bangSo[6]["c"],
                dataKyMonNha.ketQuaA7A8.viTri[6].soLuongDo,
                dataKyMonNha.ketQuaA7A8.viTri[6].soLuongDen,
                dataKyMonNha.ketQuaA6[6] ?? null,
                dataKyMonNha.huongNha[6] ?? false,
                dataKyMonNha.huongCua[6] ?? false,
              )}
            </Col>
          </Row>
        </Grid>
      ) : null}
    </>
  )
}

export default KyMonNhaDetail

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
    marginTop: 4,
    marginLeft: 2,
    color: "black",
    fontWeight: "500",
    fontFamily: "Arial",
    fontStyle: "normal",
  },
  expandDetailTextStyleRed: {
    fontSize: 6,
    marginTop: 4,
    marginLeft: 2,
    color: "red",
    fontWeight: "500",
    fontFamily: "Arial",
    fontStyle: "normal",
  },
  expandDetailTextStyleRedA3: {
    fontSize: 6,
    marginTop: -7,
    marginLeft: 40,
    color: "red",
    fontWeight: "500",
    fontFamily: "Arial",
    fontStyle: "normal",
  },
  expandDetailTextStyleBlackA3: {
    fontSize: 6,
    marginTop: -7,
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
    top: 5,
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
