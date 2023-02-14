import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { Col, Grid, Row } from "react-native-easy-grid"
import { color } from "react-native-reanimated"
import { t } from "i18next"
import { images } from "../../../../assets/images"
import { WIDTH } from "../../../utils/defaultValues"
import {
  _checkDataTrucSu,
  _checkDataTrucPhu,
  _checkDataPhuThu,
  _convertTextViToEn,
} from "../../../utils/Functions"
import { checkLocalLanguageValue } from "../../../../i18n/index"
interface Props {
  dataKymon?: any
}

const KyMonTableNotes = ({ dataKymon }: Props) => {
  const [locale, setLocale] = useState("vi")

  useEffect(() => {
    checkLocalLanguageValue("en", "vn").then((data) => (data === "en" ? setLocale("en") : ""))
  }, [])

  const _renderNoteItem = (icon: any, noteText: string, iconStyle?: any) => {
    return (
      <>
        <View style={styles.noteItem}>
          <Image source={icon} style={iconStyle ? iconStyle : styles.iconNote} />
          <Text style={styles.noteText}>:{noteText}</Text>
        </View>
      </>
    )
  }
  const _renderNoteItemString = (icon: any, noteText: string, mau?: any) => {
    return (
      <>
        <View style={styles.noteItem}>
          <Text style={mau == "do" ? styles.noteTextRed : styles.noteText}>
            {icon}: {noteText}
          </Text>
        </View>
      </>
    )
  }

  const _renderNoteTable = (
    size: number,
    headerText: string,
    data1?: any,
    data2?: any,
    data3?: any,
    data4?: any,
    data5?: any,
    data6?: any,
    data7?: any,
    data8?: any,
  ) => {
    return (
      <>
        <Col size={size} style={styles.colHeight}>
          <Row style={styles.headerStyle}>
            <Text style={styles.headerText}>{headerText}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.text}>{data1}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.text}>{data2}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.text}>{data3}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.text}>{data4}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.text}>{data5}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.text}>{data6}</Text>
          </Row>
          {dataKymon.loai == "ngay" ? (
            <>
              <Row style={styles.cell}>
                <Text style={styles.text}>{data7}</Text>
              </Row>
              <Row style={styles.cell}>
                <Text style={styles.text}>{data8}</Text>
              </Row>
            </>
          ) : null}
        </Col>
      </>
    )
  }
  return (
    <>
      <View style={styles.noteContainer}>
        <Grid>
          {_renderNoteTable(
            2,
            t("KyMonTableNote.Type"),
            t("KyMonTableNote.Structure"),
            t("KyMonTableNote.Lead stem"),
            t("KyMonTableNote.Envoy"),
            t("KyMonTableNote.Chief"),
            t("KyMonTableNote.Method"),
            t("KyMonTableNote.Star path"),
            t("KyMonTableNote.12 Officer"),
            t("KyMonTableNote.28 Constellation"),
          )}
          {_renderNoteTable(
            2,
            t("KyMonTableNote.Description"),
            dataKymon.soCuc.am_duong === "-"
              ? `${t("KyMonTableNote.Yin")} ${dataKymon.soCuc.so_cuc}`
              : `${t("KyMonTableNote.Yang")} ${dataKymon.soCuc.so_cuc}`,
            locale === "en"
              ? _convertTextViToEn(_checkDataPhuThu(dataKymon)[0])
              : _checkDataPhuThu(dataKymon)[0],
            locale === "en"
              ? _convertTextViToEn(_checkDataTrucSu(dataKymon))
              : _checkDataTrucSu(dataKymon),
            locale === "en"
              ? _convertTextViToEn(_checkDataTrucPhu(dataKymon))
              : _checkDataTrucPhu(dataKymon),
            t("KyMonTableNote.Zhi Run"),
            t("KyMonTableNote.Rotating"),
            locale === "en" ? _convertTextViToEn(dataKymon.truc) : dataKymon.truc,
            locale === "en" ? _convertTextViToEn(dataKymon.sao) : dataKymon.sao,
          )}
        </Grid>
        <View style={{ height: 20 }}></View>
        <Text style={styles.noteTitle}>{t("KyMonTableNote.Note")}</Text>
        <View style={styles.firstRow}>
          {_renderNoteItem(images.iconKhongVong, t("KyMonTableNote.DE"))}
          {_renderNoteItem(images.iconHorse, t("KyMonTableNote.Horse"))}
          {_renderNoteItem(images.iconCross, t("KyMonTableNote.Grave"))}
        </View>
        <View style={styles.firstRow}>
          {_renderNoteItem(images.iconUpRight, t("KyMonTableNote.Door Counter Palace"))}
          {_renderNoteItem(images.iconDownLeft, t("KyMonTableNote.Palace Counter Door"))}
        </View>
        <View style={styles.firstRow}>
          {_renderNoteItem(images.iconCurveDownLeft, t("KyMonTableNote.Door Produces Palace"))}
          {_renderNoteItem(images.iconCurveDownRight, t("KyMonTableNote.Palace Produces Door"))}
        </View>
        <View style={styles.firstRow}>
          {_renderNoteItem(images.iconHours, t("Time.Hour"))}
          {_renderNoteItem(images.iconDays, t("Time.Date"))}
          {_renderNoteItem(images.iconMonths, t("Time.Month"))}
          {_renderNoteItem(images.iconYears, t("Time.Year"))}
        </View>
        <View style={styles.firstRow}>
          {_renderNoteItemString("P", t("KyMonTableNote.Prosperous"), "do")}
          {_renderNoteItemString("A", t("KyMonTableNote.Abandoned"), "do")}
        </View>
        <View style={styles.firstRow}>
          {_renderNoteItemString("W", t("KyMonTableNote.Weak"), "den")}
          {_renderNoteItemString("T", t("KyMonTableNote.Trap"), "den")}
          {_renderNoteItemString("D", t("KyMonTableNote.Death"), "den")}
        </View>
        {dataKymon.loai == "menh" ? (
          <>
            <View style={styles.firstRow}>
              {_renderNoteItem(images.sword, t("KyMonTableNote.menhType.Goat blade"))}
              {_renderNoteItem(images.notebook, t("KyMonTableNote.menhType.Knowledge"))}
              {_renderNoteItem(images.students, t("KyMonTableNote.menhType.School"))}
            </View>
            <View style={styles.firstRow}>
              {_renderNoteItem(images.man, t("KyMonTableNote.menhType.Yang Nobleman"))}
              {_renderNoteItem(images.woman, t("KyMonTableNote.menhType.Yin Nobleman"))}
            </View>
          </>
        ) : null}
      </View>
    </>
  )
}

export default KyMonTableNotes

const styles = StyleSheet.create({
  noteContainer: {
    width: WIDTH - 40,
  },
  noteTitle: {
    color: "#D4190A",
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "700",
    fontStyle: "normal",
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
  },
  noteItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  iconNote: {
    width: 20,
    height: 20,
    // marginRight: 8,
    // resizeMode: "center",
  },
  bigIconNote: {
    width: 80,
    height: 20,
    marginRight: 8,
  },
  noteText: {
    color: "#131200",
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "400",
    fontStyle: "normal",
  },
  noteTextRed: {
    color: "red",
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "400",
    fontStyle: "normal",
  },
  colHeight: {
    height: "auto",
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
    height: 30,
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
