import React, { useCallback, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Col, Row, Grid } from "react-native-easy-grid"
import { t } from "i18next"
import { WIDTH } from "../../../utils/defaultValues"
import { _convertDataThaiTueThanhLongNguHanh } from "../../../utils/Functions"
import HuyenKhongDetail from "./huyenKhongDetail"

interface Props {
  tableType?: number
  apiType?: any
  dataHuyenKhong?: any
  showDetail?: any
}

export default function HuyenMonTable({ tableType, apiType, dataHuyenKhong, showDetail }: Props) {
  const [isCachCuc, setIsCachCuc] = useState<boolean>(false)

  const showCachCuc = useCallback(
    (isShow, b, c) => {
      setIsCachCuc(isShow)
      alert(b)
    },
    [setIsCachCuc],
  )

  const _renderTableItem = (isVertical?: boolean, data?: any, colSize?: number) => {
    return (
      <Col size={colSize} style={isVertical ? styles.childColStyle : styles.childRowStyle}>
        <Text style={styles.tableBorderText}>{data}</Text>
      </Col>
    )
  }
  return (
    <>
      <Grid>
        <View style={styles.container}>
          <View style={styles.leftRightCol}>
            <Col
              size={7}
              style={{
                backgroundColor: "#1C9247",
              }}
            >
              {_renderTableItem(true, t("KyMonKey.SE Xun"), 1)}
              {_renderTableItem(true, t("KyMonKey.Dragon"), 3)}
              {_renderTableItem(true, t("KyMonKey.E Zhen Rabbit"), 3)}
            </Col>
            <Col size={4} style={{ backgroundColor: "#F2AE00" }}>
              {_renderTableItem(true, t("KyMonKey.Tiger"), 3)}
              {_renderTableItem(true, t("KyMonKey.NE Gen"), 1)}
            </Col>
          </View>
          <View style={styles.middleCol}>
            <View style={styles.midColsRow}>
              <Row>
                <Col style={{ backgroundColor: "#1C9247" }}>
                  {_renderTableItem(false, t("KyMonKey.Snake"), 1)}
                </Col>
                <Col style={{ backgroundColor: "#E43D25" }}>
                  {_renderTableItem(false, t("KyMonKey.S Li Horse"), 1)}
                </Col>
                <Col style={{ backgroundColor: "#F2AE00" }}>
                  {_renderTableItem(false, t("KyMonKey.Goat"), 1)}
                </Col>
              </Row>
            </View>
            <HuyenKhongDetail dataHuyenKhong={dataHuyenKhong} showCachCuc={showCachCuc} />
            {/* {tableType === 1 ? (
              
            ) : (
              <CachCucNhaDetail dataHuyenKhong={dataHuyenKhong} showDetail={showDetail} />
            )} */}
            <View style={styles.midColsRow}>
              <Row>
                <Col style={{ backgroundColor: "#F2AE00" }}>
                  {_renderTableItem(false, t("KyMonKey.Ox"), 1)}
                </Col>
                <Col style={{ backgroundColor: "#338CC4" }}>
                  {_renderTableItem(false, t("KyMonKey.N Kan Rat"), 1)}
                </Col>
                <Col style={{ backgroundColor: "#A3A3A3" }}>
                  {_renderTableItem(false, t("KyMonKey.Pig"), 1)}
                </Col>
              </Row>
            </View>
          </View>
          <View style={styles.leftRightCol}>
            <Col size={4} style={{ backgroundColor: "#F2AE00" }}>
              {_renderTableItem(true, t("KyMonKey.SW Kun"), 1)}
              {_renderTableItem(true, t("KyMonKey.Monkey"), 3)}
            </Col>
            <Col size={7} style={{ backgroundColor: "#A3A3A3" }}>
              {_renderTableItem(true, t("KyMonKey.W Dui Rooster"), 3)}
              {_renderTableItem(true, t("KyMonKey.Dog"), 3)}
              {_renderTableItem(true, t("KyMonKey.NW Qian"), 1)}
            </Col>
          </View>
        </View>
      </Grid>
      {isCachCuc ? (
        <View>
          <Text>Hello</Text>
        </View>
      ) : (
        <></>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: WIDTH - 20,
    height: 410,
    marginBottom: 20,
    borderRadius: 4,
  },
  leftRightCol: {
    height: "100%",
    width: "8%",
    backgroundColor: "red",
  },
  middleCol: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    width: "84%",
    backgroundColor: "transparent",
  },
  midColsRow: {
    width: "100%",
    height: "8%",
    backgroundColor: "red",
  },
  iconNote: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: "center",
  },
  iconOnBorder: {
    width: 15,
    height: 15,
  },
  childRowStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 3,
  },
  childColStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: 10,
  },
  tableBorderText: {
    fontSize: 7,
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 10,
    color: "#fff",
    fontStyle: "normal",
    textAlign: "center",
    margin: 2,
  },
  itemBorderStyle: {
    backgroundColor: "#fff",
    borderWidth: 0.4,
    borderColor: "#C29D68",
  },
})
