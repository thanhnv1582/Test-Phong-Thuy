import React, { memo, useEffect, useState } from "react"
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native"
import { Col, Grid, Row } from "react-native-easy-grid"
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

const HuyenKhongDetail = ({ dataHuyenKhong, showCachCuc }) => {
  const _renderTableDetail = (containerStyle?: any, a?: string, b?: string, c?: string) => {
    return (
      <Pressable
        style={containerStyle ?? styles.defaultContainer}
        onPress={() => {
          showCachCuc(true, b, c)
        }}
      >
        <Grid>
          <Col size={2}></Col>
          <Col size={4}>
            <Col size={1}></Col>
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
            </Col>
          </Col>
          <Col size={2}></Col>
        </Grid>
      </Pressable>
    )
  }

  console.log(dataHuyenKhong)

  return (
    <>
      {dataHuyenKhong ? (
        <Grid>
          <Row>
            <Col key={4} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground("*"),
                dataHuyenKhong.bangSo[4]["a"],
                dataHuyenKhong.bangSo[4]["b"],
                dataHuyenKhong.bangSo[4]["c"],
              )}
            </Col>
            <Col key={9} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground("*"),
                dataHuyenKhong.bangSo[9]["a"],
                dataHuyenKhong.bangSo[9]["b"],
                dataHuyenKhong.bangSo[9]["c"],
              )}
            </Col>
            <Col key={2} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYinContainerBackground("*"),
                dataHuyenKhong.bangSo[2]["a"],
                dataHuyenKhong.bangSo[2]["b"],
                dataHuyenKhong.bangSo[2]["c"],
              )}
            </Col>
          </Row>
          <Row>
            <Col key={3} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground("*"),
                dataHuyenKhong.bangSo[3]["a"],
                dataHuyenKhong.bangSo[3]["b"],
                dataHuyenKhong.bangSo[3]["c"],
              )}
            </Col>
            <Col key={5} style={styles.itemDetailStyle}>
              <View style={styles.defaultContainer}>
                <Grid>
                  <Col size={2}></Col>
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
                        {dataHuyenKhong.bangSo[5]["a"]}
                      </Text>
                      <Text
                        style={{
                          top: 0,
                          left: -26,
                          fontSize: 12,
                        }}
                      >
                        {dataHuyenKhong.bangSo[5]["b"]}
                      </Text>
                      <Text
                        style={{
                          top: -15,
                          left: 13,
                          fontSize: 12,
                        }}
                      >
                        {dataHuyenKhong.bangSo[5]["c"]}
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
                dataHuyenKhong.bangSo[7]["a"],
                dataHuyenKhong.bangSo[7]["b"],
                dataHuyenKhong.bangSo[7]["c"],
              )}
            </Col>
          </Row>
          <Row>
            <Col key={8} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground("*"),
                dataHuyenKhong.bangSo[8]["a"],
                dataHuyenKhong.bangSo[8]["b"],
                dataHuyenKhong.bangSo[8]["c"],
              )}
            </Col>
            <Col key={1} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYangContainerBackground("*"),
                dataHuyenKhong.bangSo[1]["a"],
                dataHuyenKhong.bangSo[1]["b"],
                dataHuyenKhong.bangSo[1]["c"],
              )}
            </Col>
            <Col key={6} style={styles.itemDetailStyle}>
              {_renderTableDetail(
                _renderYinContainerBackground("*"),
                dataHuyenKhong.bangSo[6]["a"],
                dataHuyenKhong.bangSo[6]["b"],
                dataHuyenKhong.bangSo[6]["c"],
              )}
            </Col>
          </Row>
        </Grid>
      ) : null}
    </>
  )
}

export default memo(HuyenKhongDetail)

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
