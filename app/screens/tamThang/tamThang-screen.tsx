import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { View, Text, SafeAreaView, Image, FlatList, StyleSheet } from "react-native"
import { Col, Row, Grid } from "react-native-easy-grid"
import { Header } from "../../components"
import { NavigatorParamList } from "../../navigators"
import commonStyle from "../../theme/styles"
import { images } from "../../../assets/images"
import { TouchableOpacity } from "react-native-gesture-handler"
import { tamThangApi } from "../../services/api/tamThang/tamThangApi"
import { _convertTextViToEn } from "../../utils/Functions"
import { checkLocalLanguageValue } from "../../../i18n"
import { t } from "i18next"

export const TamThangScreen: FC<StackScreenProps<NavigatorParamList, "tamthang">> = observer(
  ({ route, navigation }) => {
    const cung = route.params.cung ? `${route.params.cung}` : ""
    const loai = route.params.loai ? `${route.params.loai}` : ""
    const kyMon = route.params.kyMon ? `${route.params.kyMon}` : ""
    const kyMonData = JSON.parse(kyMon)
    const [tamThangData, setTamThangData] = useState<any>()
    const [textKetQua, setTextKetQua] = useState<any>()
    const [local, setLocal] = useState<string>("en")

    // get ky mon data
    const getKyMonData = (loai: string, cung: string) => {
      tamThangApi.getData(loai, cung).then(async (res: any) => {
        if (res && res.status == "200") {
          const dataTamThang = await res.data.details
          const dataKQ = await res.data.text
          setTamThangData(dataTamThang)
          setTextKetQua(dataKQ)
        }
      })
    }

    const _renderTextStyleForA2 = (type: string) => {
      switch (type.toLowerCase()) {
        case "giáp":
          return styles.textABottomRed
        case "bính":
          return styles.textABottomRed
        case "đinh":
          return styles.textABottomRed
        case "mậu":
          return styles.textABottomRed
        case "ất":
          return styles.textABottomRed
        default:
          return styles.textABottom
      }
    }
    const _renderTextStyleForA1 = (type: string) => {
      switch (type.toLowerCase()) {
        case "giáp":
          return styles.textATopRed
        case "bính":
          return styles.textATopRed
        case "đinh":
          return styles.textATopRed
        case "mậu":
          return styles.textATopRed
        case "ất":
          return styles.textATopRed
        default:
          return styles.textATop
      }
    }
    const _renderTextStyleForA3 = (type: string) => {
      switch (type.toLowerCase()) {
        case "anh":
          return styles.textATopRed
        case "tâm":
          return styles.textATopRed
        case "phò":
          return styles.textATopRed
        case "nhậm":
          return styles.textATopRed
        default:
          return styles.textATop
      }
    }

    const _renderTextStyleForA4 = (type: string) => {
      switch (type.toLowerCase()) {
        case "trực phù":
          return styles.textATopRed
        case "thái âm":
          return styles.textATopRed
        case "lục hợp":
          return styles.textATopRed
        case "cửu địa":
          return styles.textATopRed
        case "cửu thiên":
          return styles.textATopRed
        default:
          return styles.textATop
      }
    }

    const _renderTextStyleForA5 = (type: string) => {
      switch (type.toLowerCase()) {
        case "khai":
          return styles.textABottomRed
        case "hưu":
          return styles.textABottomRed
        case "sinh":
          return styles.textABottomRed
        case "cảnh":
          return styles.textABottomRed
        default:
          return styles.textABottom
      }
    }

    useEffect(() => {
      getKyMonData(loai, cung)
      ;(async () => {
        const localCurrent = await checkLocalLanguageValue("en", "vn")
        setLocal(localCurrent)
      })()
    }, [])

    const _renderTamThangItems = ({ item }) => (
      <View>
        <Text style={styles.btnTextKQStyle}>{textKetQua}</Text>
        {item.listThang.map((r) => (
          <>
            {r.listNgay.map((s) => (
              <TouchableOpacity style={styles.btnStyle}>
                <Text style={styles.btnTextNgayStyle}>
                  {local === "en"
                    ? `Date ${s.ngay} Month ${r.thang} Year ${item.nam}`
                    : `Ngày ${s.ngay} Tháng ${r.thang} Năm ${item.nam}`}
                </Text>
                <Row style={{ height: 15, marginTop: 5 }}>
                  <Col size={1} style={styles.columnStyle}>
                    <Text style={styles.textLabel}>{t("Destiny Hour")}</Text>
                  </Col>
                  <Col size={1} style={styles.columnStyle}>
                    <Text style={styles.textLabel}>{t("Time.Date")}</Text>
                  </Col>
                  <Col size={1} style={styles.columnStyle}>
                    <Text style={styles.textLabel}>{t("Time.Month")}</Text>
                  </Col>
                </Row>
                <Row style={{ height: 110 }}>
                  <Col size={1} style={styles.columnStyle2}>
                    <Col size={1} style={{ flexDirection: "row", position: "relative" }}>
                      <Text style={_renderTextStyleForA1(kyMonData.ketQuaA1.A1[cung])}>
                        {local === "en"
                          ? _convertTextViToEn(kyMonData.ketQuaA1.A1[cung])
                          : kyMonData.ketQuaA1.A1[cung]}
                      </Text>
                      <Text style={_renderTextStyleForA2(kyMonData.ketQuaA2.A2[cung])}>
                        {local === "en"
                          ? _convertTextViToEn(kyMonData.ketQuaA2.A2[cung])
                          : kyMonData.ketQuaA2.A2[cung]}
                      </Text>
                    </Col>
                    <Col size={1} style={styles.columnStyle}>
                      <Text style={_renderTextStyleForA3(kyMonData.ketQuaA3.A3[cung])}>
                        {local === "en"
                          ? _convertTextViToEn(kyMonData.ketQuaA3.A3[cung])
                          : kyMonData.ketQuaA3.A3[cung]}
                      </Text>
                      <Text style={_renderTextStyleForA5(kyMonData.ketQuaA5.A5[cung])}>
                        {local === "en"
                          ? _convertTextViToEn(kyMonData.ketQuaA5.A5[cung])
                          : kyMonData.ketQuaA5.A5[cung]}
                      </Text>
                    </Col>
                    <Col
                      size={1}
                      style={{
                        flexDirection: "row",
                        position: "relative",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Text style={_renderTextStyleForA4(kyMonData.ketQuaA4.A4[cung])}>
                        {local === "en"
                          ? _convertTextViToEn(kyMonData.ketQuaA4.A4[cung])
                          : kyMonData.ketQuaA4.A4[cung]}
                      </Text>
                    </Col>
                  </Col>
                  <Col size={1} style={styles.columnStyle2}>
                    <Col size={1} style={{ flexDirection: "row", position: "relative" }}>
                      <Text style={_renderTextStyleForA1(s.data.gia_tri_a1)}>
                        {local === "en" ? _convertTextViToEn(s.data.gia_tri_a1) : s.data.gia_tri_a1}
                      </Text>
                      <Text style={_renderTextStyleForA2(s.data.gia_tri_a2)}>
                        {local === "en" ? _convertTextViToEn(s.data.gia_tri_a2) : s.data.gia_tri_a2}
                      </Text>
                    </Col>
                    <Col size={1} style={styles.columnStyle}>
                      <Text style={_renderTextStyleForA3(s.data.gia_tri_a3)}>
                        {local === "en" ? _convertTextViToEn(s.data.gia_tri_a3) : s.data.gia_tri_a3}
                      </Text>
                      <Text style={_renderTextStyleForA5(s.data.gia_tri_a5)}>
                        {local === "en" ? _convertTextViToEn(s.data.gia_tri_a5) : s.data.gia_tri_a5}
                      </Text>
                    </Col>
                    <Col
                      size={1}
                      style={{
                        flexDirection: "row",
                        position: "relative",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Text style={_renderTextStyleForA4(s.data.gia_tri_a4)}>
                        {local === "en" ? _convertTextViToEn(s.data.gia_tri_a4) : s.data.gia_tri_a4}
                      </Text>
                    </Col>
                  </Col>
                  <Col size={1} style={styles.columnStyle2}>
                    <Col size={1} style={{ flexDirection: "row", position: "relative" }}>
                      <Text style={_renderTextStyleForA1(r.data.gia_tri_a1)}>
                        {local === "en" ? _convertTextViToEn(s.data.gia_tri_a1) : s.data.gia_tri_a1}
                      </Text>
                      <Text style={_renderTextStyleForA2(r.data.gia_tri_a2)}>
                        {local === "en" ? _convertTextViToEn(s.data.gia_tri_a2) : s.data.gia_tri_a2}
                      </Text>
                    </Col>
                    <Col size={1} style={styles.columnStyle}>
                      <Text style={_renderTextStyleForA3(r.data.gia_tri_a3)}>
                        {local === "en" ? _convertTextViToEn(s.data.gia_tri_a3) : s.data.gia_tri_a3}
                      </Text>
                      <Text style={_renderTextStyleForA5(r.data.gia_tri_a5)}>
                        {local === "en" ? _convertTextViToEn(s.data.gia_tri_a5) : s.data.gia_tri_a5}
                      </Text>
                    </Col>
                    <Col
                      size={1}
                      style={{
                        flexDirection: "row",
                        position: "relative",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Text style={_renderTextStyleForA4(r.data.gia_tri_a4)}>
                        {local === "en" ? _convertTextViToEn(s.data.gia_tri_a4) : s.data.gia_tri_a4}
                      </Text>
                    </Col>
                  </Col>
                </Row>
              </TouchableOpacity>
            ))}
          </>
        ))}
      </View>
    )
    const goBack = () => navigation.pop()
    return (
      <>
        <SafeAreaView style={commonStyle.container}>
          <View>
            <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
            <Header
              headerText={local === "en" ? _convertTextViToEn(loai) : loai}
              leftIcon="btnBack"
              onLeftPress={goBack}
              titleStyle={commonStyle.headerText}
            />
          </View>
          <FlatList
            data={tamThangData}
            renderItem={_renderTamThangItems}
            keyExtractor={(item) => item.nam}
          />
        </SafeAreaView>
      </>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    marginVertical: 2,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#DCDDDE",
    flexDirection: "row",
  },
  dot: {
    color: "#D4190A",
    fontSize: 20,
    lineHeight: 20,
    width: 20,
    height: 15,
    textAlign: "center",
  },
  title: {
    fontFamily: "Arial",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 15,
    color: "#131200",
  },
  btnStyle: {
    width: "90%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android
  },
  btnTextNgayStyle: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 15,
    fontFamily: "Arial",
    fontStyle: "normal",
    color: "#131200",
  },
  btnTextKQStyle: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 15,
    textAlign: "center",
    fontFamily: "Arial",
    fontStyle: "normal",
    color: "#131200",
  },
  btnTextStyle: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 15,
    fontFamily: "Arial",
    fontStyle: "normal",
    color: "#131200",
  },
  textABottom: {
    fontSize: 10,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 12,
    position: "absolute",
    top: 90,
  },
  textABottomRed: {
    fontSize: 10,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 12,
    position: "absolute",
    top: 90,
    color: "red",
  },
  textATop: {
    fontSize: 10,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 12,
  },
  textATopRed: {
    fontSize: 10,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 12,
    color: "red",
  },
  textLabel: {
    fontSize: 11,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 12,
  },
  columnStyle: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
  },
  columnStyle2: {
    flexDirection: "row",
    position: "relative",
    borderWidth: 1,
    padding: 2,
    margin: 2,
  },
})
