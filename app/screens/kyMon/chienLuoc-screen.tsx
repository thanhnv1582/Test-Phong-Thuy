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
import { kyMonApi } from "../../services/api/kyMon/KyMonApi"
import { _convertTextViToEn, _convertTextViToEn2 } from "../../utils/Functions"
import { t } from "i18next"

export const ChienLuocScreen: FC<StackScreenProps<NavigatorParamList, "chienluoc">> = observer(
  ({ route, navigation }) => {
    const startDate = route.params.startDate ? `${route.params.startDate}` : ""
    const endDate = route.params.endDate ? `${route.params.endDate}` : ""
    const kyMonTable = route.params.kyMonTable ? `${route.params.kyMonTable}` : ""
    const huong = route.params.huong ? `${route.params.huong}` : ""
    const cachCuc = route.params.cachCuc ? `${route.params.cachCuc}` : ""
    const cachCucBad = route.params.cachCucBad ? `${route.params.cachCucBad}` : ""
    const a1 = route.params.a1 ? `${route.params.a1}` : ""
    const a2 = route.params.a2 ? `${route.params.a2}` : ""
    const a3 = route.params.a1 ? `${route.params.a3}` : ""
    const a4 = route.params.a4 ? `${route.params.a4}` : ""
    const a5 = route.params.a5 ? `${route.params.a5}` : ""
    const isH = route.params.isH ? `${route.params.isH}` : ""
    const isKV = route.params.isKV ? `${route.params.isKV}` : ""
    const isNgua = route.params.isNgua ? `${route.params.isNgua}` : ""
    const [chienLuocData, setChienLuocData] = useState<any>()
    const [textKetQua, setTextKetQua] = useState<any>()
    const [loading, setLoading] = useState<any>()
    // get ky mon data
    const getKyMonData = (
      startDate: string,
      endDate: string,
      kyMonTable: string,
      huong: string,
      cachCuc: string,
      a1: string,
      a2: string,
      a3: string,
      a4: string,
      a5: string,
      isH: string,
      isKV: string,
      isNgua: string,
    ) => {
      setLoading(true)
      kyMonApi
        .getDataChienLuoc(
          startDate,
          endDate,
          kyMonTable,
          huong,
          cachCuc,
          a1,
          a2,
          a3,
          a4,
          a5,
          isH,
          isKV,
          isNgua,
          cachCucBad,
        )
        .then(async (res: any) => {
          console.log(res)
          if (res && res.status == "200") {
            const dataChienLuoc = await res.data.details
            const dataKQ = await res.data.text
            setLoading(false)
            setChienLuocData(dataChienLuoc)
            setTextKetQua(dataKQ)
          }
        })
    }

    const goToKyMon = (
      type: string,
      gio: string,
      phut: string,
      ngay: string,
      thang: string,
      nam: string,
      huong: string,
    ) => {
      const params: any = {
        type: type,
        gio: gio,
        phut: phut,
        ngay: ngay,
        thang: thang,
        nam: nam,
        huong: huong,
      }
      navigation.navigate("kymon", params)
    }

    useEffect(() => {
      getKyMonData(
        startDate,
        endDate,
        kyMonTable,
        huong,
        cachCuc,
        a1,
        a2,
        a3,
        a4,
        a5,
        isH,
        isKV,
        isNgua,
      )
    }, [])

    const _renderChienLuocItemsGio = ({ item }) => (
      <View>
        {item ? (
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() =>
              goToKyMon("gio", item.gio, "00", item.ngay, item.thang, item.nam, item.huong)
            }
          >
            <Text
              style={styles.btnTextNgayStyle}
            >{`${item.gio}:00, ${item.ngay} - ${item.thang} - ${item.nam}`}</Text>
            <Text style={styles.btnTextNgayStyle}>{`${_convertTextViToEn(item.huong)}`}</Text>
            <Text style={styles.btnTextNgayStyle}>{`${_convertTextViToEn2(
              item.can,
            )} ${_convertTextViToEn(item.chi)}`}</Text>
            <Text style={styles.btnTextNgayStyle}>{`${_convertTextViToEn(item.truc)}`}</Text>
            <Text style={styles.btnTextNgayStyle}>{`${_convertTextViToEn(item.sao)}`}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    )
    const _renderChienLuocItemsNgay = ({ item }) => (
      <View>
        {item ? (
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() =>
              goToKyMon("ngay", "22", "55", item.ngay, item.thang, item.nam, item.huong)
            }
          >
            <Text
              style={styles.btnTextNgayStyle}
            >{`${item.ngay} - ${item.thang} - ${item.nam}`}</Text>
            <Text style={styles.btnTextNgayStyle}>{`${_convertTextViToEn(item.huong)}`}</Text>
            <Text style={styles.btnTextNgayStyle}>{`${_convertTextViToEn2(
              item.can,
            )} ${_convertTextViToEn(item.chi)}`}</Text>
            <Text style={styles.btnTextNgayStyle}>{`${_convertTextViToEn(item.truc)}`}</Text>
            <Text style={styles.btnTextNgayStyle}>{`${_convertTextViToEn(item.sao)}`}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    )
    const goBack = () => navigation.pop()
    return (
      <>
        <SafeAreaView style={commonStyle.container}>
          <View>
            <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
            <Header
              headerText={t(`Qi Men Strategy`)}
              leftIcon="btnBack"
              onLeftPress={goBack}
              titleStyle={commonStyle.headerText}
            />
          </View>
          {loading ? <Text style={styles.btnTextKQStyle}>{t("Loading")} ...</Text> : null}
          <Text style={styles.btnTextKQStyle}>{textKetQua}</Text>
          <FlatList
            data={chienLuocData}
            renderItem={kyMonTable == "gio" ? _renderChienLuocItemsGio : _renderChienLuocItemsNgay}
            keyExtractor={(item) => item.id}
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
  textATop: {
    fontSize: 10,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 12,
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
