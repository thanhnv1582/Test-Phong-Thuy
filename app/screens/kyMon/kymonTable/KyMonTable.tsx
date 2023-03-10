import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, Image, Switch } from "react-native"
import { Col, Row, Grid } from "react-native-easy-grid"
import { t } from "i18next"
import { images } from "../../../../assets/images"
import { Checkbox } from "../../../components"
import { WIDTH } from "../../../utils/defaultValues"
import { _convertDataThaiTueThanhLongNguHanh } from "../../../utils/Functions"
import CachCucDetail from "./CachCucDetail"
import KyMonDetail from "./KyMonDetail"
import KyMonTableNotes from "./KyMonTableNotes"
// import KyMonDetail from "./KyMonDetail"
import { checkLocalLanguageValue } from "../../../../i18n"

interface Props {
  tableType: number
  apiType: any
  dataKyMon: any
  showDetail: any
  huongChienLuoc: string
}

const KyMonTable = ({ tableType, apiType, dataKyMon, showDetail, huongChienLuoc }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isEnabledTS, setIsEnabledTS] = useState(false)
  const [local, setLocal] = useState("en")
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  const toggleSwitchTS = () => setIsEnabledTS((previousState) => !previousState)
  useEffect(() => {
    ;(async () => {
      const localCurrent = await checkLocalLanguageValue("en", "vn")
      setLocal(localCurrent)
    })()
  }, [])

  const _renderTableItem = (
    isVertical?: boolean,
    data?: any,
    colSize?: number,
    isIconDauNgua?: boolean,
    isIconKhongVong1?: boolean,
    isIconKhongVong2?: boolean,
    isIconduongNhan?: boolean,
    isIconVanXuong?: boolean,
    isIconHocDuong?: boolean,
    isIconDuongQN?: boolean,
    isIconAmQN?: boolean,
    isIconHoaDao?: boolean,
  ) => {
    return (
      <Col size={colSize} style={isVertical ? styles.childColStyle : styles.childRowStyle}>
        {isIconKhongVong1 || isIconKhongVong2 ? (
          <View>
            <Image source={images.iconKhongVong} style={styles.iconOnBorder} />
          </View>
        ) : null}
        <Text style={styles.tableBorderText}>{data}</Text>
        {isIconDauNgua ? (
          <View>
            <Image source={images.iconHorse} style={styles.iconOnBorder} />
          </View>
        ) : null}
        {isIconduongNhan && apiType == "menh" ? (
          <View>
            <Image source={images.sword} style={styles.iconOnBorder} />
          </View>
        ) : null}
        {isIconVanXuong && apiType == "menh" ? (
          <View>
            <Image source={images.notebook} style={styles.iconOnBorder} />
          </View>
        ) : null}
        {isIconHocDuong && apiType == "menh" ? (
          <View>
            <Image source={images.students} style={styles.iconOnBorder} />
          </View>
        ) : null}
        {isIconDuongQN && apiType == "menh" ? (
          <View>
            <Image source={images.man} style={styles.iconOnBorder} />
          </View>
        ) : null}
        {isIconAmQN && apiType == "menh" ? (
          <View>
            <Image source={images.woman} style={styles.iconOnBorder} />
          </View>
        ) : null}
        {isIconHoaDao && apiType == "menh" ? (
          <View>
            <Image source={images.peach} style={styles.iconOnBorder} />
          </View>
        ) : null}
      </Col>
    )
  }

  const kyMonKey = {
    dragon: t("KyMonKey.Dragon"),
    eZhenRabbit: t("KyMonKey.E Zhen Rabbit"),
    tiger: t("KyMonKey.Tiger"),
    nEGen: t("KyMonKey.NE Gen"),
    snake: t("KyMonKey.Snake"),
    sLiHorse: t("KyMonKey.S Li Horse"),
    goat: t("KyMonKey.Goat"),
    ox: t("KyMonKey.Ox"),
    dog: t("KyMonKey.Dog"),
    pig: t("KyMonKey.Pig"),
    monkey: t("KyMonKey.Monkey"),
    nKanRat: t("KyMonKey.N Kan Rat"),
    wDuiRooster: t("KyMonKey.W Dui Rooster"),
    nWQian: t("KyMonKey.NW Qian"),
    sWKun: t("KyMonKey.SW Kun"),
    sEXun: t("KyMonKey.SE Xun"),
  }

  const showGrowthLabel = t("Show 12 Growth")

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
              {_renderTableItem(true, kyMonKey.sEXun, 1)}
              {_renderTableItem(
                true,
                kyMonKey.dragon,
                3,
                dataKyMon.dauNgua === "Th??n",
                dataKyMon.xacDinhKV.chi_khong_vong_1 === "Th??n",
                dataKyMon.xacDinhKV.chi_khong_vong_2 === "Th??n",
                dataKyMon.duongNhan === "Th??n",
                dataKyMon.vanXuong === "Th??n",
                dataKyMon.hocDuong === "Th??n",
                dataKyMon.duongQN === "Th??n",
                dataKyMon.amQN === "Th??n",
                dataKyMon.hoaDao === "Th??n",
              )}
              {_renderTableItem(
                true,
                kyMonKey.eZhenRabbit,
                3,
                dataKyMon.dauNgua === "M??o",
                dataKyMon.xacDinhKV.chi_khong_vong_1 === "M??o",
                dataKyMon.xacDinhKV.chi_khong_vong_2 === "M??o",
                dataKyMon.duongNhan === "M??o",
                dataKyMon.vanXuong === "M??o",
                dataKyMon.hocDuong === "M??o",
                dataKyMon.duongQN === "M??o",
                dataKyMon.amQN === "M??o",
                dataKyMon.hoaDao === "M??o",
              )}
            </Col>
            <Col size={4} style={{ backgroundColor: "#F2AE00" }}>
              {_renderTableItem(
                true,
                kyMonKey.tiger,
                3,
                dataKyMon.dauNgua === "D???n",
                dataKyMon.xacDinhKV.chi_khong_vong_1 === "D???n",
                dataKyMon.xacDinhKV.chi_khong_vong_2 === "D???n",
                dataKyMon.duongNhan === "D???n",
                dataKyMon.vanXuong === "D???n",
                dataKyMon.hocDuong === "D???n",
                dataKyMon.duongQN === "D???n",
                dataKyMon.amQN === "D???n",
                dataKyMon.hoaDao === "D???n",
              )}
              {_renderTableItem(true, kyMonKey.nEGen, 1)}
            </Col>
          </View>
          <View style={styles.middleCol}>
            <View style={styles.midColsRow}>
              <Row>
                <Col style={{ backgroundColor: "#1C9247" }}>
                  {_renderTableItem(
                    false,
                    kyMonKey.snake,
                    1,
                    dataKyMon.dauNgua === "T???",
                    dataKyMon.xacDinhKV.chi_khong_vong_1 === "T???",
                    dataKyMon.xacDinhKV.chi_khong_vong_2 === "T???",
                    dataKyMon.duongNhan === "T???",
                    dataKyMon.vanXuong === "T???",
                    dataKyMon.hocDuong === "T???",
                    dataKyMon.duongQN === "T???",
                    dataKyMon.amQN === "T???",
                    dataKyMon.hoaDao === "T???",
                  )}
                </Col>
                <Col style={{ backgroundColor: "#E43D25" }}>
                  {_renderTableItem(
                    false,
                    kyMonKey.sLiHorse,
                    1,
                    dataKyMon.dauNgua === "Ng???",
                    dataKyMon.xacDinhKV.chi_khong_vong_1 === "Ng???",
                    dataKyMon.xacDinhKV.chi_khong_vong_2 === "Ng???",
                    dataKyMon.duongNhan === "Ng???",
                    dataKyMon.vanXuong === "Ng???",
                    dataKyMon.hocDuong === "Ng???",
                    dataKyMon.duongQN === "Ng???",
                    dataKyMon.amQN === "Ng???",
                  )}
                </Col>
                <Col style={{ backgroundColor: "#F2AE00" }}>
                  {_renderTableItem(
                    false,
                    kyMonKey.goat,
                    1,
                    dataKyMon.dauNgua === "M??i",
                    dataKyMon.xacDinhKV.chi_khong_vong_1 === "M??i",
                    dataKyMon.xacDinhKV.chi_khong_vong_2 === "M??i",
                    dataKyMon.duongNhan === "M??i",
                    dataKyMon.vanXuong === "M??i",
                    dataKyMon.hocDuong === "M??i",
                    dataKyMon.duongQN === "M??i",
                    dataKyMon.amQN === "M??i",
                    dataKyMon.hoaDao === "M??i",
                  )}
                </Col>
              </Row>
            </View>
            {tableType === 1 ? (
              <KyMonDetail
                dataKyMon={dataKyMon}
                apiType={apiType}
                showTLTTTS={isEnabled}
                showTS={isEnabledTS}
                huongCL={huongChienLuoc}
                local={local}
              />
            ) : (
              <CachCucDetail dataKyMon={dataKyMon} showDetail={showDetail} />
            )}
            <View style={styles.midColsRow}>
              <Row>
                <Col style={{ backgroundColor: "#F2AE00" }}>
                  {_renderTableItem(
                    false,
                    kyMonKey.ox,
                    1,
                    dataKyMon.dauNgua === "S???u",
                    dataKyMon.xacDinhKV.chi_khong_vong_1 === "S???u",
                    dataKyMon.xacDinhKV.chi_khong_vong_2 === "S???u",
                    dataKyMon.duongNhan === "S???u",
                    dataKyMon.vanXuong === "S???u",
                    dataKyMon.hocDuong === "S???u",
                    dataKyMon.duongQN === "S???u",
                    dataKyMon.amQN === "S???u",
                    dataKyMon.hoaDao === "S???u",
                  )}
                </Col>
                <Col style={{ backgroundColor: "#338CC4" }}>
                  {_renderTableItem(
                    false,
                    kyMonKey.nKanRat,
                    1,
                    dataKyMon.dauNgua === "T??",
                    dataKyMon.xacDinhKV.chi_khong_vong_1 === "T??",
                    dataKyMon.xacDinhKV.chi_khong_vong_2 === "T??",
                    dataKyMon.duongNhan === "T??",
                    dataKyMon.vanXuong === "T??",
                    dataKyMon.hocDuong === "T??",
                    dataKyMon.duongQN === "T??",
                    dataKyMon.amQN === "T??",
                    dataKyMon.hoaDao === "T??",
                  )}
                </Col>
                <Col style={{ backgroundColor: "#A3A3A3" }}>
                  {_renderTableItem(
                    false,
                    kyMonKey.pig,
                    1,
                    dataKyMon.dauNgua === "H???i",
                    dataKyMon.xacDinhKV.chi_khong_vong_1 === "H???i",
                    dataKyMon.xacDinhKV.chi_khong_vong_2 === "H???i",
                    dataKyMon.duongNhan === "H???i",
                    dataKyMon.vanXuong === "H???i",
                    dataKyMon.hocDuong === "H???i",
                    dataKyMon.duongQN === "H???i",
                    dataKyMon.amQN === "H???i",
                    dataKyMon.hoaDao === "H???i",
                  )}
                </Col>
              </Row>
            </View>
          </View>
          <View style={styles.leftRightCol}>
            <Col size={4} style={{ backgroundColor: "#F2AE00" }}>
              {_renderTableItem(true, kyMonKey.sWKun, 1)}
              {_renderTableItem(
                true,
                kyMonKey.monkey,
                3,
                dataKyMon.dauNgua === "Th??n",
                dataKyMon.xacDinhKV.chi_khong_vong_1 === "Th??n",
                dataKyMon.xacDinhKV.chi_khong_vong_2 === "Th??n",
                dataKyMon.duongNhan === "Th??n",
                dataKyMon.vanXuong === "Th??n",
                dataKyMon.hocDuong === "Th??n",
                dataKyMon.duongQN === "Th??n",
                dataKyMon.amQN === "Th??n",
                dataKyMon.hoaDao === "Th??n",
              )}
            </Col>
            <Col size={7} style={{ backgroundColor: "#A3A3A3" }}>
              {_renderTableItem(
                true,
                kyMonKey.wDuiRooster,
                3,
                dataKyMon.dauNgua === "D???u",
                dataKyMon.xacDinhKV.chi_khong_vong_1 === "D???u",
                dataKyMon.xacDinhKV.chi_khong_vong_2 === "D???u",
                dataKyMon.duongNhan === "D???u",
                dataKyMon.vanXuong === "D???u",
                dataKyMon.hocDuong === "D???u",
                dataKyMon.duongQN === "D???u",
                dataKyMon.amQN === "D???u",
                dataKyMon.hoaDao === "D???u",
              )}
              {_renderTableItem(
                true,
                kyMonKey.dog,
                3,
                dataKyMon.dauNgua === "Tu???t",
                dataKyMon.xacDinhKV.chi_khong_vong_1 === "Tu???t",
                dataKyMon.xacDinhKV.chi_khong_vong_2 === "Tu???t",
                dataKyMon.duongNhan === "Tu???t",
                dataKyMon.vanXuong === "Tu???t",
                dataKyMon.hocDuong === "Tu???t",
                dataKyMon.duongQN === "Tu???t",
                dataKyMon.amQN === "Tu???t",
                dataKyMon.hoaDao === "Tu???t",
              )}
              {_renderTableItem(true, kyMonKey.nWQian, 1)}
            </Col>
          </View>
        </View>
      </Grid>
      {/* {tableType === 1 && apiType !== 'menh' && apiType !== 'nha' ? (
      <Grid style={{marginBottom: 10}}>
        <Text>Hi???n th??? v??ng th???n s??t:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "red" }}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ marginTop: -6, transform: [{ scaleX: .6 }, { scaleY: .6 }] }}
        />
      </Grid>
      ): null } */}
      {tableType === 1 && apiType !== "menh" && apiType !== "nha" ? (
        <Grid style={{ marginBottom: 10 }}>
          <Text>{showGrowthLabel}:</Text>
          <Switch
            trackColor={{ false: "#767577", true: "red" }}
            onValueChange={toggleSwitchTS}
            value={isEnabledTS}
            style={{ marginTop: -6, transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
          />
        </Grid>
      ) : null}
    </>
  )
}

export default KyMonTable

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
