import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { Col, Grid, Row } from "react-native-easy-grid"
import { t } from "i18next"
import { HEIGHT } from "../../../utils/defaultValues"
import { _filterDataCachCuc } from "../../../utils/Functions"
import { checkLocalLanguageValue } from "../../../../i18n"

const CachCucNhaDetail = ({ dataKyMonNha, showDetail }) => {
  const [local, setLocal] = useState<string>("en")
  useEffect(() => {
    ;(async () => {
      const localCurrent = await checkLocalLanguageValue("en", "vn")
      setLocal(localCurrent)
    })()
  }, [])
  const _renderCachCucDetail = (dataDo?: any, dataDen?: any, huong?: string) => {
    return (
      <>
        <TouchableWithoutFeedback
          onPress={() => showDetail(dataDo, dataDen, huong)}
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
                              onPress={() => showDetail(dataDo, dataDen, huong)}
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
                              onPress={() => showDetail(dataDo, dataDen, huong)}
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

  return (
    <>
      {dataKyMonNha ? (
        <Grid>
          <Row>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMonNha.ketQuaA7A8.viTri[4].do,
                dataKyMonNha.ketQuaA7A8.viTri[4].den,
                t("Direction.Southeast"),
              )}
            </Col>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMonNha.ketQuaA7A8.viTri[9].do,
                dataKyMonNha.ketQuaA7A8.viTri[9].den,
                t("Direction.South"),
              )}
            </Col>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMonNha.ketQuaA7A8.viTri[2].do,
                dataKyMonNha.ketQuaA7A8.viTri[2].den,
                t("Direction.Southwest"),
              )}
            </Col>
          </Row>
          <Row>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMonNha.ketQuaA7A8.viTri[3].do,
                dataKyMonNha.ketQuaA7A8.viTri[3].den,
                t("Direction.East"),
              )}
            </Col>
            <Col style={styles.itemDetailStyle}></Col>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMonNha.ketQuaA7A8.viTri[7].do,
                dataKyMonNha.ketQuaA7A8.viTri[7].den,
                t("Direction.West"),
              )}
            </Col>
          </Row>
          <Row>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMonNha.ketQuaA7A8.viTri[8].do,
                dataKyMonNha.ketQuaA7A8.viTri[8].den,
                t("Direction.Northeast"),
              )}
            </Col>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMonNha.ketQuaA7A8.viTri[1].do,
                dataKyMonNha.ketQuaA7A8.viTri[1].den,
                t("Direction.North"),
              )}
            </Col>
            <Col style={styles.itemDetailStyle}>
              {_renderCachCucDetail(
                dataKyMonNha.ketQuaA7A8.viTri[6].do,
                dataKyMonNha.ketQuaA7A8.viTri[6].den,
                t("Direction.Northwest"),
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

export default CachCucNhaDetail

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
