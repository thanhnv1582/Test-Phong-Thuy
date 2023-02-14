import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { Col, Grid, Row } from "react-native-easy-grid"
import { t } from "i18next"
import { HEIGHT } from "../../../utils/defaultValues"
import { _filterDataCachCuc } from "../../../utils/Functions"
import { checkLocalLanguageValue } from "../../../../i18n"

const CachCucDetail = ({ dataKyMon, showDetail }) => {
  const [local, setLocal] = useState("en")
  useEffect(() => {
    ;(async () => {
      const localCurrent = await checkLocalLanguageValue("en", "vn")
      setLocal(localCurrent)
    })()
  }, [])

  const _renderCachCucDetail = (
    dataDo?: any,
    dataDen?: any,
    huong?: string,
    dataDetailPhongThuyA1?: any,
    dataDetailPhongThuyA1Plus?: any,
    dataDetailPhongThuyA2?: any,
    dataDetailPhongThuyA3?: any,
    dataDetailPhongThuyA4?: any,
    dataDetailPhongThuyA5?: any,
    dataDetailPhongThuyA1Special?: any,
    dataDetailPhongThuyA5Special?: any,
  ) => {
    return (
      <>
        <TouchableWithoutFeedback
          onPress={() =>
            showDetail(
              dataDo,
              dataDen,
              huong,
              dataDetailPhongThuyA1,
              dataDetailPhongThuyA1Plus,
              dataDetailPhongThuyA2,
              dataDetailPhongThuyA3,
              dataDetailPhongThuyA4,
              dataDetailPhongThuyA5,
              dataDetailPhongThuyA1Special,
              dataDetailPhongThuyA5Special,
            )
          }
          style={{ height: "100%" }}
        >
          <View>
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
              <View style={{ flex: 1 }}>
                {dataDo
                  ? _filterDataCachCuc(dataDo).map((item: any, index: number) => {
                      return (
                        <View key={index} style={styles.container}>
                          <View style={styles.detailContainer}>
                            <Text
                              onPress={() =>
                                showDetail(
                                  dataDo,
                                  dataDen,
                                  huong,
                                  dataDetailPhongThuyA1,
                                  dataDetailPhongThuyA1Plus,
                                  dataDetailPhongThuyA2,
                                  dataDetailPhongThuyA3,
                                  dataDetailPhongThuyA4,
                                  dataDetailPhongThuyA5,
                                  dataDetailPhongThuyA1Special,
                                  dataDetailPhongThuyA5Special,
                                )
                              }
                              style={{
                                ...styles.detailTextStyle,
                                color: item.loai === "Xanh" ? "#367E18" : "#E43D25",
                                textDecorationColor: "#E43D25",
                              }}
                            >
                              {local === "en" ? item.tieu_de_en : item.tieu_de}
                            </Text>
                          </View>
                        </View>
                      )
                    })
                  : null}
                {dataDen
                  ? _filterDataCachCuc(dataDen).map((item: any, index: number) => {
                      return (
                        <View key={index} style={styles.container}>
                          <View style={styles.detailContainer}>
                            <Text
                              onPress={() =>
                                showDetail(
                                  dataDo,
                                  dataDen,
                                  huong,
                                  dataDetailPhongThuyA1,
                                  dataDetailPhongThuyA1Plus,
                                  dataDetailPhongThuyA2,
                                  dataDetailPhongThuyA3,
                                  dataDetailPhongThuyA4,
                                  dataDetailPhongThuyA5,
                                  dataDetailPhongThuyA1Special,
                                  dataDetailPhongThuyA5Special,
                                )
                              }
                              style={{
                                ...styles.detailTextStyle,
                                color: "#131200",
                                textDecorationColor: "#131200",
                              }}
                            >
                              {local === "en" ? item.tieu_de_en : item.tieu_de}
                            </Text>
                          </View>
                        </View>
                      )
                    })
                  : null}
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </>
    )
  }

  // const _renderModal = () => {
  //   return (
  //     <>
  //       <View style={styles.centeredView}>
  //         <Modal
  //           animationType="slide"
  //           transparent={true}
  //           visible={isModalShow}
  //           onRequestClose={() => {
  //             setIsModalShow(false)
  //           }}
  //         >
  //           <View style={styles.centeredView}>
  //             <View style={styles.modalContainer}>
  //               <Text style={{ ...styles.titleText, color: "red" }}>Thiên Độn</Text>
  //               <Text style={styles.detailText}>
  //                 Lợi xuất hành kinh doanh, gặp đằng xà chủ ngờ vực, bạch hổ, huyền vũ chủ tai nạn,
  //                 ốm đau tổn thất tiền tài
  //               </Text>
  //               <TouchableOpacity style={styles.btnClose} onPress={() => setIsModalShow(false)}>
  //                 <Text style={styles.btnText}>Đóng</Text>
  //               </TouchableOpacity>
  //             </View>
  //           </View>
  //         </Modal>
  //       </View>
  //     </>
  //   )
  // }

  return (
    <>
      {dataKyMon ? (
        <Grid>
          <Row>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMon.ketQuaA7A8.viTri[4].do,
                dataKyMon.ketQuaA7A8.viTri[4].den,
                t("Direction.Southeast"),
                dataKyMon.detailKyMonPhongThuyA1[4],
                dataKyMon.detailKyMonPhongThuyA1Plus[4],
                dataKyMon.detailKyMonPhongThuyA2[4],
                dataKyMon.detailKyMonPhongThuyA3[4],
                dataKyMon.detailKyMonPhongThuyA4[4],
                dataKyMon.detailKyMonPhongThuyA5[4],
                dataKyMon.detailKyMonPhongThuyA1Special[4],
                dataKyMon.detailKyMonPhongThuyA5Special[4],
              )}
            </Col>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMon.ketQuaA7A8.viTri[9].do,
                dataKyMon.ketQuaA7A8.viTri[9].den,
                t("Direction.South"),
                dataKyMon.detailKyMonPhongThuyA1[9],
                dataKyMon.detailKyMonPhongThuyA1Plus[9],
                dataKyMon.detailKyMonPhongThuyA2[9],
                dataKyMon.detailKyMonPhongThuyA3[9],
                dataKyMon.detailKyMonPhongThuyA4[9],
                dataKyMon.detailKyMonPhongThuyA5[9],
                dataKyMon.detailKyMonPhongThuyA1Special[9],
                dataKyMon.detailKyMonPhongThuyA5Special[9],
              )}
            </Col>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMon.ketQuaA7A8.viTri[2].do,
                dataKyMon.ketQuaA7A8.viTri[2].den,
                t("Direction.Southwest"),
                dataKyMon.detailKyMonPhongThuyA1[2],
                dataKyMon.detailKyMonPhongThuyA1Plus[2],
                dataKyMon.detailKyMonPhongThuyA2[2],
                dataKyMon.detailKyMonPhongThuyA3[2],
                dataKyMon.detailKyMonPhongThuyA4[2],
                dataKyMon.detailKyMonPhongThuyA5[2],
                dataKyMon.detailKyMonPhongThuyA1Special[2],
                dataKyMon.detailKyMonPhongThuyA5Special[2],
              )}
            </Col>
          </Row>
          <Row>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMon.ketQuaA7A8.viTri[3].do,
                dataKyMon.ketQuaA7A8.viTri[3].den,
                t("Direction.East"),
                dataKyMon.detailKyMonPhongThuyA1[3],
                dataKyMon.detailKyMonPhongThuyA1Plus[3],
                dataKyMon.detailKyMonPhongThuyA2[3],
                dataKyMon.detailKyMonPhongThuyA3[3],
                dataKyMon.detailKyMonPhongThuyA4[3],
                dataKyMon.detailKyMonPhongThuyA5[3],
                dataKyMon.detailKyMonPhongThuyA1Special[3],
                dataKyMon.detailKyMonPhongThuyA5Special[3],
              )}
            </Col>
            <Col style={styles.itemDetailStyle}></Col>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMon.ketQuaA7A8.viTri[7].do,
                dataKyMon.ketQuaA7A8.viTri[7].den,
                t("Direction.West"),
                dataKyMon.detailKyMonPhongThuyA1[7],
                dataKyMon.detailKyMonPhongThuyA1Plus[7],
                dataKyMon.detailKyMonPhongThuyA2[7],
                dataKyMon.detailKyMonPhongThuyA3[7],
                dataKyMon.detailKyMonPhongThuyA4[7],
                dataKyMon.detailKyMonPhongThuyA5[7],
                dataKyMon.detailKyMonPhongThuyA1Special[7],
                dataKyMon.detailKyMonPhongThuyA5Special[7],
              )}
            </Col>
          </Row>
          <Row>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMon.ketQuaA7A8.viTri[8].do,
                dataKyMon.ketQuaA7A8.viTri[8].den,
                t("Direction.Northeast"),
                dataKyMon.detailKyMonPhongThuyA1[8],
                dataKyMon.detailKyMonPhongThuyA1Plus[8],
                dataKyMon.detailKyMonPhongThuyA2[8],
                dataKyMon.detailKyMonPhongThuyA3[8],
                dataKyMon.detailKyMonPhongThuyA4[8],
                dataKyMon.detailKyMonPhongThuyA5[8],
                dataKyMon.detailKyMonPhongThuyA1Special[8],
                dataKyMon.detailKyMonPhongThuyA5Special[8],
              )}
            </Col>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMon.ketQuaA7A8.viTri[1].do,
                dataKyMon.ketQuaA7A8.viTri[1].den,
                t("Direction.North"),
                dataKyMon.detailKyMonPhongThuyA1[1],
                dataKyMon.detailKyMonPhongThuyA1Plus[1],
                dataKyMon.detailKyMonPhongThuyA2[1],
                dataKyMon.detailKyMonPhongThuyA3[1],
                dataKyMon.detailKyMonPhongThuyA4[1],
                dataKyMon.detailKyMonPhongThuyA5[1],
                dataKyMon.detailKyMonPhongThuyA1Special[1],
                dataKyMon.detailKyMonPhongThuyA5Special[1],
              )}
            </Col>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMon.ketQuaA7A8.viTri[6].do,
                dataKyMon.ketQuaA7A8.viTri[6].den,
                t("Direction.Northwest"),
                dataKyMon.detailKyMonPhongThuyA1[6],
                dataKyMon.detailKyMonPhongThuyA1Plus[6],
                dataKyMon.detailKyMonPhongThuyA2[6],
                dataKyMon.detailKyMonPhongThuyA3[6],
                dataKyMon.detailKyMonPhongThuyA4[6],
                dataKyMon.detailKyMonPhongThuyA5[6],
                dataKyMon.detailKyMonPhongThuyA1Special[6],
                dataKyMon.detailKyMonPhongThuyA5Special[6],
              )}
            </Col>
          </Row>
        </Grid>
      ) : (
        <Grid>
          <Row>
            <Col style={styles.itemDetailStyle}>{_renderCachCucDetail()}</Col>
            <Col style={styles.itemDetailStyle}>{_renderCachCucDetail()}</Col>
            <Col style={styles.itemDetailStyle}>{_renderCachCucDetail()}</Col>
          </Row>
          <Row>
            <Col style={styles.itemDetailStyle}>{_renderCachCucDetail()}</Col>
            <Col style={styles.itemDetailStyle}>{_renderCachCucDetail()}</Col>
            <Col style={styles.itemDetailStyle}>{_renderCachCucDetail()}</Col>
          </Row>
          <Row>
            <Col style={styles.itemDetailStyle}>{_renderCachCucDetail()}</Col>
            <Col style={styles.itemDetailStyle}>{_renderCachCucDetail()}</Col>
            <Col style={styles.itemDetailStyle}>{_renderCachCucDetail()}</Col>
          </Row>
        </Grid>
      )}
      {/* {setIsModalShow ? _renderModal() : null} */}
    </>
  )
}

export default CachCucDetail

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 8,
  },
  detailContainer: {
    flexDirection: "row",
  },
  detailTextStyle: {
    fontFamily: "Arial",
    fontSize: 10,
    lineHeight: 15,
    fontWeight: "700",
    letterSpacing: 0.1,
  },
  itemDetailStyle: {
    backgroundColor: "#fff",
    borderWidth: 0.4,
    borderColor: "#C29D68",
  },
  // ----------- Modal ------------- //
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    marginTop: HEIGHT / 4,
  },
  modalContainer: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleText: {
    fontFamily: "Arial",
    fontSize: 20,
    lineHeight: 23,
    fontStyle: "normal",
    fontWeight: "700",
  },
  detailText: {
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#585A5C",
    textAlign: "center",
    marginVertical: 20,
  },
  btnClose: {
    width: 141,
    height: 52,
    borderRadius: 32,
    backgroundColor: "#D4190A",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 16,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#fff",
  },
})
