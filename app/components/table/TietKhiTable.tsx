import React from "react"
import { Col, Row, Grid } from "react-native-easy-grid"
import { View, StyleSheet, Text } from "react-native"

type Props = {
  thaiDuongThaiAm: any
  tietKhi: any
}

const TietKhiTable = ({ thaiDuongThaiAm, tietKhi }: Props) => {
  /* ------- render table column ------- */
  const _renderMidCol = (data1?: string, data2?: string) => {
    return (
      <>
        <Col size={40} style={styles.colHeight}>
          <Row style={styles.headerStyle}>
            <Text style={styles.headerText}>Thái Dương</Text>
          </Row>
          <Row style={styles.cell}>
            <Col style={styles.leftCol}>
              <Text style={styles.text}>Đáo Sơn</Text>
            </Col>
            <Col style={styles.rightCol}>
              <Text style={styles.text}>Tam Hợp</Text>
            </Col>
          </Row>
          <Row style={styles.cell}>
            <Col style={styles.leftCol}>
              <Text style={styles.text}>{data1}</Text>
            </Col>
            <Col style={styles.rightCol}>
              <Text style={styles.text}>{data2}</Text>
            </Col>
          </Row>
        </Col>
      </>
    )
  }

  const _renderLeftCol = (data?: string) => {
    return (
      <>
        <Col size={20} style={styles.colHeight}>
          <Row style={styles.headerStyle}>
            <Text style={styles.headerText}>Tiết Khí</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.text}>{data ? data : ""}</Text>
          </Row>
        </Col>
      </>
    )
  }
  const _renderRightCol = (data?: string) => {
    return (
      <>
        <Col size={20} style={styles.colHeight}>
          <Row style={styles.headerStyle}>
            <Text style={styles.headerText}>Thái Âm</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.text}>Đáo Sơn</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.text}>{data}</Text>
          </Row>
        </Col>
      </>
    )
  }
  return (
    <View style={styles.container}>
      {thaiDuongThaiAm && tietKhi ? (
        <Grid>
          {_renderLeftCol(tietKhi)}
          {_renderMidCol(thaiDuongThaiAm.thai_duong_dao_son, thaiDuongThaiAm.thai_duong_tam_hop)}
          {_renderRightCol(thaiDuongThaiAm.thai_am_dao_son)}
        </Grid>
      ) : (
        <Grid>
          {_renderLeftCol()}
          {_renderMidCol()}
          {_renderRightCol()}
        </Grid>
      )}
    </View>
  )
}

export default TietKhiTable

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 12,
    height: 103,
  },
  cell: {
    borderWidth: 0.8,
    borderColor: "#FF928A",
    backgroundColor: "#FBE8E7",
    height: 35,
    flex: 1,
    justifyContent: "center",
  },
  colHeight: {
    height: 103,
  },
  leftCol: {
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 0.8,
    borderRightColor: "#FF928A",
  },
  rightCol: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerStyle: {
    height: 35,
    backgroundColor: "#D4190A",
    borderWidth: 0.8,
    borderColor: "#FF928A",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Arial",
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "400",
    marginLeft: 7,
    marginRight: 7,
  },
  text: {
    alignSelf: "center",
    color: "#131200",
    fontFamily: "Arial",
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "700",
    fontStyle: "normal",
  },
})
