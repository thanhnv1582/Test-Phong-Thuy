import moment from "moment"
import React, { useEffect, useState } from "react"
import { View, StyleSheet, Text, ScrollView } from "react-native"
import { Col, Row, Grid } from "react-native-easy-grid"
import commonStyle from "../../theme/styles"

interface Props {
  thanCan?: any
  thanChi?: any
  khongVong?: any
  thienCan?: any
  diaChi?: any
  timeBorn?: string
  dayBorn?: string
  monthBorn?: string
  yearBorn?: string
}

const BatTuTuTruComponent = ({
  thanCan,
  thanChi,
  khongVong,
  thienCan,
  diaChi,
  timeBorn,
  dayBorn,
  monthBorn,
  yearBorn,
}: Props) => {
  const locale = "vi"
  const [today, setToday] = useState(new Date())
  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: false,
    minute: "numeric",
    second: "numeric",
  })
  const day = moment(today).format("DD")
  const month = moment(today).format("MM")
  const year = moment(today).format("YYYY")

  /* table state */
  const [thanCanData, setThanCanData] = useState<any>()
  const [thanChiData, setThanChiData] = useState<any>()
  /* ------- convert and set thanCan result ------- */
  const convertDataThanCan = (data: any) => {
    data = data.map((item: any, index: number) => {
      return {
        id: item?.id,
        type: item?.loai_thien_can,
        result: item?.ket_qua,
      }
    })
    return data
  }

  const thanCanDetail = () => {
    if (thanCan) {
      const dataConvert = convertDataThanCan(thanCan)
      setThanCanData(dataConvert)
    }
  }
  /* ------- convert and set thanChi result ------- */
  const convertDataThanChi = (data: any) => {
    data = data.map((item: any, index: number) => {
      return {
        id: item?.id,
        result: item?.ket_qua,
        type: item?.loai_than_chi,
        nguHanh: item?.ngu_hanh,
        result2: item?.thien_can_gio_ngay_thang_nam,
      }
    })
    return data
  }
  const thanChiDetail = () => {
    if (thanChi) {
      const dataConvert = convertDataThanChi(thanChi)
      setThanChiData(dataConvert)
    }
  }

  const filterThanChiDataByType = (data: any, type: string) => {
    const filterData = data.filter((item: any) => item.type === type)
    return filterData
  }
  /* ------- api call first time ------- */
  useEffect(() => {
    thanCanDetail()
    thanChiDetail()
  }, [thanCan, thanChi, thienCan, diaChi])
  /* ------- get real time auto update every 500ms ------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date())
    }, 500)
    return () => {
      clearInterval(timer)
    }
  }, [])
  /* ------- render table column ------- */
  const _renderTable = (
    colSize: number,
    labelText?: string,
    data1?: string,
    data2?: string,
    data3?: string,
    data4?: string,
    data5?: string,
    listDataFilter?: any,
    iskhongVong?: boolean,
    timeHeaderStyle?: any,
  ) => {
    return (
      <>
        <Col size={colSize}>
          <Row style={styles.headerStyle}>
            <Text style={timeHeaderStyle ? timeHeaderStyle : styles.text}>{labelText}</Text>
          </Row>

          <Row style={styles.cellThienCan}>
            <ScrollView
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              style={commonStyle.scrollStyle}
              contentContainerStyle={commonStyle.scrollContentStyle}
            >
              {data1 ? <Text style={styles.dataText1}>{data1}</Text> : null}
              {data2 ? <Text style={styles.dataText2}>{data2}</Text> : null}
              {data3 ? <Text style={styles.dataText3}>{data3}</Text> : null}
            </ScrollView>
          </Row>
          <Row style={styles.cellDiaChi}>
            <ScrollView
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              style={commonStyle.scrollStyle}
              contentContainerStyle={commonStyle.scrollContentStyle}
            >
              {data4 ? <Text style={styles.dataText1}>{data4}</Text> : null}
              {data5 ? <Text style={styles.dataText2}>{data5}</Text> : null}
              {listDataFilter
                ? listDataFilter.map((item: any) => {
                    return (
                      <View key={item.id} style={{ height: 50, justifyContent: "space-around" }}>
                        <Text style={styles.dataText1}>{item.result2}</Text>
                        <Text style={styles.dataText2}>{item.nguHanh}</Text>
                        <Text style={styles.dataText3}>{item.result}</Text>
                      </View>
                    )
                  })
                : null}
              {iskhongVong ? <Text style={styles.vongDataStyle}>(DE)</Text> : null}
            </ScrollView>
          </Row>
        </Col>
      </>
    )
  }

  /* ------- render table ------- */

  return (
    <View style={styles.container}>
      <Grid>
        <Col size={20}>
          <Row style={styles.headerStyle}>
            <Text>&nbsp;</Text>
          </Row>
          <Row style={{ ...styles.cellThienCan, backgroundColor: "#D4190A" }}>
            <Text style={styles.text}>Thiên{"\n"}Can</Text>
          </Row>
          <Row
            style={{
              ...styles.cellDiaChi,
              backgroundColor: "#D4190A",
              justifyContent: "space-evenly",
            }}
          >
            <Text style={styles.text}>Địa{"\n"}Chi</Text>
          </Row>
        </Col>
        {thanCanData && thanChiData && thienCan && diaChi && khongVong ? (
          <>
            {_renderTable(
              40,
              `Giờ\n${timeBorn ? timeBorn : time}`,
              thienCan.gio,
              thienCan.nguHanhGio,
              thanCanData.find((item: any) => item?.type === "gio") !== undefined
                ? thanCanData.find((item: any) => item?.type === "gio").result
                : "",
              diaChi.gio,
              diaChi.nguHanhGio,
              filterThanChiDataByType(thanChiData, "gio"),
              khongVong.includes("gio"),
            )}
            {_renderTable(
              25,
              `Ngày\n${dayBorn ? dayBorn : day}`,
              thienCan.ngay,
              thienCan.nguHanhNgay,
              null,
              diaChi.ngay,
              diaChi.nguHanhNgay,
              filterThanChiDataByType(thanChiData, "ngay"),
              khongVong.includes("ngay"),
              styles.dateHeaderText,
            )}
            {_renderTable(
              25,
              `Tháng\n${monthBorn ? monthBorn : month}`,
              thienCan.thang,
              thienCan.nguHanhThang,
              thanCanData.find((item: any) => item?.type === "thang") !== undefined
                ? thanCanData.find((item: any) => item?.type === "thang").result
                : "",
              diaChi.thang,
              diaChi.nguHanhThang,
              filterThanChiDataByType(thanChiData, "thang"),
              khongVong.includes("thang"),
            )}
            {_renderTable(
              25,
              `Năm\n${yearBorn ? yearBorn : year}`,
              thienCan.nam,
              thienCan.nguHanhNam,
              thanCanData.find((item: any) => item?.type === "nam") !== undefined
                ? thanCanData.find((item: any) => item?.type === "nam").result
                : "",
              diaChi.nam,
              diaChi.nguHanhNam,
              filterThanChiDataByType(thanChiData, "nam"),
              khongVong.includes("nam"),
            )}
          </>
        ) : (
          <>
            {_renderTable(40, `Giờ ${time}`)}
            {_renderTable(25, `Ngày ${day}`)}
            {_renderTable(25, `Tháng ${month}`)}
            {_renderTable(25, `Năm ${year}`)}
          </>
        )}
      </Grid>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    minHeight: 200,
  },
  cellThienCan: {
    borderWidth: 0.8,
    borderColor: "#FF928A",
    backgroundColor: "#FBE8E7",
    height: 70,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  cellDiaChi: {
    borderWidth: 0.8,
    borderColor: "#FF928A",
    backgroundColor: "#FBE8E7",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
  },
  customCellTitleThienCan: {
    borderWidth: 0.7,
    borderColor: "#FF928A",
    backgroundColor: "#D4190A",
    height: 70,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customCellTitleDiaChi: {
    borderWidth: 0.7,
    borderColor: "#FF928A",
    backgroundColor: "#D4190A",
    height: 70,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerStyle: {
    height: 44,
    backgroundColor: "#D4190A",
    borderWidth: 0.8,
    borderColor: "#FF928A",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Arial",
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "400",
  },
  timeHeaderText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Arial",
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "400",
    marginLeft: 20,
    marginRight: 20,
  },
  dateHeaderText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Arial",
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "400",
    marginLeft: 10,
    marginRight: 10,
  },
  dataText1: {
    marginVertical: 3,
    textAlign: "center",
    color: "#131200",
    fontFamily: "Arial",
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "700",
    fontStyle: "normal",
  },
  dataText2: {
    marginVertical: 3,
    textAlign: "center",
    color: "#131200",
    fontFamily: "Arial",
    fontSize: 9,
    lineHeight: 12,
    fontWeight: "400",
    fontStyle: "normal",
  },
  dataText3: {
    marginVertical: 3,
    textAlign: "center",
    color: "#D4190A",
    fontFamily: "Arial",
    fontSize: 9,
    lineHeight: 12,
    fontWeight: "700",
    fontStyle: "normal",
  },
  vongDataStyle: {
    color: "#131200",
    fontFamily: "Arial",
    fontSize: 8,
    lineHeight: 9,
    fontWeight: "400",
    fontStyle: "normal",
  },
})
export default BatTuTuTruComponent
