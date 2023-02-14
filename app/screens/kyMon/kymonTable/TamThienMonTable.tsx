import React from "react"
import { Col, Row, Grid } from "react-native-easy-grid"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { t } from "i18next"
import { WIDTH } from "../../../utils/defaultValues"
import { _convertTextViToEn } from "../../../utils/Functions"
import LabelWithIconComponent from "../../../components/title/LabelWithIconComponent"

interface Props {
  apiType?: any
  tamThienMonData?: any
  kyMon64queData?: any
  menhCung?: any
  cungGoc?: any
  navigation?: any
  kyMon?: any
  detailMenhCung?: any
  locale?: any
}

const TamThienMonTable = ({
  apiType,
  tamThienMonData,
  kyMon64queData,
  menhCung,
  cungGoc,
  navigation,
  kyMon,
  detailMenhCung,
  locale,
}: Props) => {
  const _renderTable = (headerText: string, data?: any) => {
    return (
      <>
        <Col size={25} style={styles.colHeight}>
          <Row style={styles.headerStyle}>
            <Text style={styles.headerText}>{headerText}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.text}>{data}</Text>
          </Row>
        </Col>
      </>
    )
  }

  const selectItem = (cungGoc: number, loai: string) => {
    const params: any = {
      cung: cungGoc,
      loai: loai,
      kyMon: JSON.stringify(kyMon),
    }
    navigation.navigate("tamthang", params)
  }

  const _renderTableTamThang = (
    headerText: string,
    data1?: any,
    data2?: any,
    data3?: any,
    data4?: any,
    data5?: any,
    data6?: any,
  ) => {
    return (
      <>
        <Col size={25} style={styles.colHeightTT}>
          <Row style={styles.headerStyle}>
            <Text style={styles.headerText}>{headerText}</Text>
          </Row>
          <TouchableOpacity
            style={styles.cell1}
            onPress={() => selectItem(cungGoc.V3.soCung, "v3")}
          >
            <Row style={styles.cell}>
              <Text style={styles.textt}>{data1}</Text>
            </Row>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cell1}
            onPress={() => selectItem(cungGoc.V2.soCung, "v2")}
          >
            <Row style={styles.cell}>
              <Text style={styles.textt}>{data2}</Text>
            </Row>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cell1}
            onPress={() => selectItem(cungGoc.V1.soCung, "v1")}
          >
            <Row style={styles.cell}>
              <Text style={styles.textt}>{data3}</Text>
            </Row>
          </TouchableOpacity>
          {cungGoc.V1.soCung == cungGoc.V2.soCung ? (
            <TouchableOpacity
              style={styles.cell1}
              onPress={() => selectItem(cungGoc.V1.soCung, "v1v2")}
            >
              <Row style={styles.cell}>
                <Text style={styles.textt}>{data4}</Text>
              </Row>
            </TouchableOpacity>
          ) : null}
          {cungGoc.V1.soCung == cungGoc.V3.soCung ? (
            <TouchableOpacity
              style={styles.cell1}
              onPress={() => selectItem(cungGoc.V1.soCung, "v1v3")}
            >
              <Row style={styles.cell}>
                <Text style={styles.textt}>{data5}</Text>
              </Row>
            </TouchableOpacity>
          ) : null}
          {cungGoc.V2.soCung == cungGoc.V3.soCung ? (
            <TouchableOpacity
              style={styles.cell1}
              onPress={() => selectItem(cungGoc.V2.soCung, "v2v3")}
            >
              <Row style={styles.cell}>
                <Text style={styles.textt}>{data6}</Text>
              </Row>
            </TouchableOpacity>
          ) : null}
        </Col>
      </>
    )
  }

  return (
    <>
      {/* {kyMon64queData && apiType == 'gio' ? (
        <View style={styles.container}>
          <LabelWithIconComponent labelText="Kỳ môn 64 quẻ" customStyle={styles.labelContainer} />
            <Grid>
              {_renderTable("Khai", kyMon64queData.khai)}
              {_renderTable("Hưu", kyMon64queData.huu)}
              {_renderTable("Sinh", kyMon64queData.sinh)}
            </Grid>
        </View>
      ) : (
        <Grid></Grid>
      )} */}
      {/* {tamThienMonData && apiType == 'gio' ? (
        <View style={styles.container}>
          <LabelWithIconComponent labelText="Thiên Tam Môn" customStyle={styles.labelContainer} />
            <Grid>
              {_renderTable("Thiên tam môn", tamThienMonData.thien_tam_mon)}
              {_renderTable("Giờ", tamThienMonData.gio)}
            </Grid>
        </View>
      ) : (
        <Grid></Grid>
      )} */}
      {menhCung && apiType == "menh" ? (
        <View style={styles.container}>
          <LabelWithIconComponent
            labelText={t("TamThienMon.Destiny")}
            customStyle={styles.labelContainer}
          />
          <Grid>
            {_renderTable(t("TamThienMon.Destiny"), t("TamThienMon.Destiny palaces"))}
            {_renderTable(
              t("TamThienMon.Spirit"),
              locale === "en" ? _convertTextViToEn(menhCung.A4) : menhCung.A4,
            )}
            {_renderTable(
              t("TamThienMon.Star"),
              locale === "en" ? _convertTextViToEn(menhCung.A3) : menhCung.A3,
            )}
            {_renderTable(
              t("TamThienMon.Door"),
              locale === "en" ? _convertTextViToEn(menhCung.A5) : menhCung.A5,
            )}
          </Grid>
        </View>
      ) : null}
      {menhCung && apiType == "menh" ? (
        <View style={styles.container}>
          <LabelWithIconComponent
            labelText={t("TamThienMon.3 Victory Palace")}
            customStyle={styles.labelContainer}
          />
          <Grid>
            {_renderTableTamThang(
              t("TamThienMon.Type"),
              t("TamThienMon.Divine Light"),
              t("TamThienMon.Blessing"),
              t("TamThienMon.Force"),
              t("TamThienMon.Force & Blessing"),
              t("TamThienMon.Force & Divine Light"),
              t("TamThienMon.Blessing & Divine Light"),
            )}

            {_renderTableTamThang(
              t("TamThienMon.Name"),
              t("TamThienMon.Tian Yi"),
              t("TamThienMon.9 Heaven"),
              t("TamThienMon.Life"),
              t("TamThienMon.Life 9 Heaven"),
              t("TamThienMon.Life Tian Yi"),
              t("TamThienMon.9 Heaven Tian Yi"),
            )}

            {_renderTableTamThang(
              t("TamThienMon.Palace"),
              locale === "en" ? _convertTextViToEn(cungGoc.V3.tenCung) : cungGoc.V3.tenCung,
              locale === "en" ? _convertTextViToEn(cungGoc.V2.tenCung) : cungGoc.V2.tenCung,
              locale === "en" ? _convertTextViToEn(cungGoc.V1.tenCung) : cungGoc.V1.tenCung,
              locale === "en" ? _convertTextViToEn(cungGoc.V1.tenCung) : cungGoc.V1.tenCung,
              locale === "en" ? _convertTextViToEn(cungGoc.V1.tenCung) : cungGoc.V1.tenCung,
              locale === "en" ? _convertTextViToEn(cungGoc.V2.tenCung) : cungGoc.V2.tenCung,
            )}
          </Grid>
        </View>
      ) : null}
      {/* {detailMenhCung && apiType == 'menh' ? (
        <View style={styles.container}>
          <LabelWithIconComponent labelText="Destiny Palaces Info" customStyle={styles.labelContainer} />
          <Text style={styles.text2}>Thiên can thiên bàn: {detailMenhCung['A1'].value}</Text>
          <Text style={styles.text3}>{detailMenhCung['A1'].title}</Text>
          <Text style={styles.text3}>{detailMenhCung['A1'].detail}</Text>
          <Text style={styles.text}>---</Text>
          <Text style={styles.text2}>Thiên can địa bàn: {detailMenhCung['A2'].value}</Text>
          <Text style={styles.text3}>{detailMenhCung['A2'].title}</Text>
          <Text style={styles.text3}>{detailMenhCung['A2'].detail}</Text>
          <Text style={styles.text}>---</Text>
          <Text style={styles.text2}>Thần: {detailMenhCung['A4'].value}</Text>
          <Text style={styles.text3}>{detailMenhCung['A4'].title}</Text>
          <Text style={styles.text3}>{detailMenhCung['A4'].detail}</Text>
          <Text style={styles.text}>---</Text>
          <Text style={styles.text2}>Cửu tinh: {detailMenhCung['A3'].value}</Text>
          <Text style={styles.text3}>{detailMenhCung['A3'].title}</Text>
          <Text style={styles.text3}>{detailMenhCung['A3'].detail}</Text>
          <Text style={styles.text}>---</Text>
          <Text style={styles.text2}>Cửa: {detailMenhCung['A5'].value}</Text>
          <Text style={styles.text3}>{detailMenhCung['A5'].title}</Text>
          <Text style={styles.text3}>{detailMenhCung['A5'].detail}</Text>
        </View>
      ) : (
        null
      )} */}
    </>
  )
}

export default TamThienMonTable

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  container: {
    width: WIDTH - 40,
    marginTop: 20,
    justifyContent: "flex-start",
  },
  colHeight: {
    height: 70,
  },
  colHeightTT: {
    height: 200,
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
  cell1: {
    borderWidth: 0,
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
  textt: {
    alignSelf: "center",
    color: "#131200",
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "700",
    fontStyle: "normal",
    textDecorationStyle: "double",
    textDecorationLine: "underline",
  },
  text2: {
    color: "#131200",
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "700",
    fontStyle: "normal",
  },
  text3: {
    color: "#131200",
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    fontStyle: "normal",
  },
})
