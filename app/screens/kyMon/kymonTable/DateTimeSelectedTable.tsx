import React, { useEffect, useState } from "react"
import { Col, Row, Grid } from "react-native-easy-grid"
import { View, StyleSheet, Text } from "react-native"
import moment from "moment"
import { t } from "i18next"
import { WIDTH } from "../../../utils/defaultValues"
import { _convertTextViToEn, _convertTextViToEn2 } from "../../../utils/Functions"
import { checkLocalLanguageValue } from "../../../../i18n/index"

interface Props {
  dateTimeSelectedTableData?: any
  currentDate?: any
}

const DateTimeSelectedTable = ({ dateTimeSelectedTableData, currentDate }: Props) => {
  const [today, setToday] = useState(new Date())
  const [locale, setLocale] = useState("vi")
  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: false,
    minute: "numeric",
  })
  const day = moment(today).format("DD")
  const month = moment(today).format("MM")
  const year = moment(today).format("YYYY")

  useEffect(() => {
    checkLocalLanguageValue("en", "vn").then((data) => (data === "en" ? setLocale("en") : ""))
    const timer = setInterval(() => {
      setToday(new Date())
    }, 500)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const _renderTable = (headerText: string, data1?: any, data2?: any) => {
    return (
      <>
        <Col size={25} style={styles.colHeight}>
          <Row style={styles.headerStyle}>
            <Text style={styles.headerText}>{headerText}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.text}>{locale === "en" ? _convertTextViToEn2(data1) : data1}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.text}>{locale === "en" ? _convertTextViToEn(data2) : data2}</Text>
          </Row>
        </Col>
      </>
    )
  }

  const timeLabel = {
    hour: t("Time.Hour"),
    date: t("Time.Date"),
    month: t("Time.Month"),
    year: t("Time.Year"),
  }

  return (
    <>
      <View style={styles.container}>
        {dateTimeSelectedTableData && currentDate ? (
          <Grid>
            {_renderTable(
              `${timeLabel.hour} ${moment(currentDate).format("HH:mm")}`,
              dateTimeSelectedTableData.thienCan.gio,
              dateTimeSelectedTableData.diaChi.gio,
            )}
            {_renderTable(
              `${timeLabel.date} ${moment(currentDate).format("DD")}`,
              dateTimeSelectedTableData.thienCan.ngay,
              dateTimeSelectedTableData.diaChi.ngay,
            )}
            {_renderTable(
              `${timeLabel.month} ${moment(currentDate).format("MM")}`,
              dateTimeSelectedTableData.thienCan.thang,
              dateTimeSelectedTableData.diaChi.thang,
            )}
            {_renderTable(
              `${timeLabel.year} ${moment(currentDate).format("YYYY")}`,
              dateTimeSelectedTableData.thienCan.nam,
              dateTimeSelectedTableData.diaChi.nam,
            )}
          </Grid>
        ) : (
          <Grid>
            {_renderTable(`${timeLabel.hour} ${time}`)}
            {_renderTable(`${timeLabel.date} ${day}`)}
            {_renderTable(`${timeLabel.month} ${month}`)}
            {_renderTable(`${timeLabel.year} ${year}`)}
          </Grid>
        )}
      </View>
    </>
  )
}

export default DateTimeSelectedTable

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    height: 103,
    width: WIDTH - 40,
  },
  colHeight: {
    height: 103,
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
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "400",
  },
  cell: {
    borderWidth: 0.8,
    borderColor: "#FF928A",
    backgroundColor: "#FBE8E7",
    height: 35,
    flex: 1,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    color: "#131200",
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "700",
    fontStyle: "normal",
  },
})
