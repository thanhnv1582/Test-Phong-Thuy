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
                dataKyMon.dauNgua === "Thìn",
                dataKyMon.xacDinhKV.chi_khong_vong_1 === "Thìn",
                dataKyMon.xacDinhKV.chi_khong_vong_2 === "Thìn",
                dataKyMon.duongNhan === "Thìn",
                dataKyMon.vanXuong === "Thìn",
                dataKyMon.hocDuong === "Thìn",
                dataKyMon.duongQN === "Thìn",
                dataKyMon.amQN === "Thìn",
                dataKyMon.hoaDao === "Thìn",
              )}
              {_renderTableItem(
                true,
                kyMonKey.eZhenRabbit,
                3,
                dataKyMon.dauNgua === "Mão",
                dataKyMon.xacDinhKV.chi_khong_vong_1 === "Mão",
                dataKyMon.xacDinhKV.chi_khong_vong_2 === "Mão",
                dataKyMon.duongNhan === "Mão",
                dataKyMon.vanXuong === "Mão",
                dataKyMon.hocDuong === "Mão",
                dataKyMon.duongQN === "Mão",
                dataKyMon.amQN === "Mão",
                dataKyMon.hoaDao === "Mão",
              )}
            </Col>
            <Col size={4} style={{ backgroundColor: "#F2AE00" }}>
              {_renderTableItem(
                true,
                kyMonKey.tiger,
                3,
                dataKyMon.dauNgua === "Dần",
                dataKyMon.xacDinhKV.chi_khong_vong_1 === "Dần",
                dataKyMon.xacDinhKV.chi_khong_vong_2 === "Dần",
                dataKyMon.duongNhan === "Dần",
                dataKyMon.vanXuong === "Dần",
                dataKyMon.hocDuong === "Dần",
                dataKyMon.duongQN === "Dần",
                dataKyMon.amQN === "Dần",
                dataKyMon.hoaDao === "Dần",
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
                    dataKyMon.dauNgua === "Tỵ",
                    dataKyMon.xacDinhKV.chi_khong_vong_1 === "Tỵ",
                    dataKyMon.xacDinhKV.chi_khong_vong_2 === "Tỵ",
                    dataKyMon.duongNhan === "Tỵ",
                    dataKyMon.vanXuong === "Tỵ",
                    dataKyMon.hocDuong === "Tỵ",
                    dataKyMon.duongQN === "Tỵ",
                    dataKyMon.amQN === "Tỵ",
                    dataKyMon.hoaDao === "Tỵ",
                  )}
                </Col>
                <Col style={{ backgroundColor: "#E43D25" }}>
                  {_renderTableItem(
                    false,
                    kyMonKey.sLiHorse,
                    1,
                    dataKyMon.dauNgua === "Ngọ",
                    dataKyMon.xacDinhKV.chi_khong_vong_1 === "Ngọ",
                    dataKyMon.xacDinhKV.chi_khong_vong_2 === "Ngọ",
                    dataKyMon.duongNhan === "Ngọ",
                    dataKyMon.vanXuong === "Ngọ",
                    dataKyMon.hocDuong === "Ngọ",
                    dataKyMon.duongQN === "Ngọ",
                    dataKyMon.amQN === "Ngọ",
                  )}
                </Col>
                <Col style={{ backgroundColor: "#F2AE00" }}>
                  {_renderTableItem(
                    false,
                    kyMonKey.goat,
                    1,
                    dataKyMon.dauNgua === "Mùi",
                    dataKyMon.xacDinhKV.chi_khong_vong_1 === "Mùi",
                    dataKyMon.xacDinhKV.chi_khong_vong_2 === "Mùi",
                    dataKyMon.duongNhan === "Mùi",
                    dataKyMon.vanXuong === "Mùi",
                    dataKyMon.hocDuong === "Mùi",
                    dataKyMon.duongQN === "Mùi",
                    dataKyMon.amQN === "Mùi",
                    dataKyMon.hoaDao === "Mùi",
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
                    dataKyMon.dauNgua === "Sửu",
                    dataKyMon.xacDinhKV.chi_khong_vong_1 === "Sửu",
                    dataKyMon.xacDinhKV.chi_khong_vong_2 === "Sửu",
                    dataKyMon.duongNhan === "Sửu",
                    dataKyMon.vanXuong === "Sửu",
                    dataKyMon.hocDuong === "Sửu",
                    dataKyMon.duongQN === "Sửu",
                    dataKyMon.amQN === "Sửu",
                    dataKyMon.hoaDao === "Sửu",
                  )}
                </Col>
                <Col style={{ backgroundColor: "#338CC4" }}>
                  {_renderTableItem(
                    false,
                    kyMonKey.nKanRat,
                    1,
                    dataKyMon.dauNgua === "Tý",
                    dataKyMon.xacDinhKV.chi_khong_vong_1 === "Tý",
                    dataKyMon.xacDinhKV.chi_khong_vong_2 === "Tý",
                    dataKyMon.duongNhan === "Tý",
                    dataKyMon.vanXuong === "Tý",
                    dataKyMon.hocDuong === "Tý",
                    dataKyMon.duongQN === "Tý",
                    dataKyMon.amQN === "Tý",
                    dataKyMon.hoaDao === "Tý",
                  )}
                </Col>
                <Col style={{ backgroundColor: "#A3A3A3" }}>
                  {_renderTableItem(
                    false,
                    kyMonKey.pig,
                    1,
                    dataKyMon.dauNgua === "Hợi",
                    dataKyMon.xacDinhKV.chi_khong_vong_1 === "Hợi",
                    dataKyMon.xacDinhKV.chi_khong_vong_2 === "Hợi",
                    dataKyMon.duongNhan === "Hợi",
                    dataKyMon.vanXuong === "Hợi",
                    dataKyMon.hocDuong === "Hợi",
                    dataKyMon.duongQN === "Hợi",
                    dataKyMon.amQN === "Hợi",
                    dataKyMon.hoaDao === "Hợi",
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
                dataKyMon.dauNgua === "Thân",
                dataKyMon.xacDinhKV.chi_khong_vong_1 === "Thân",
                dataKyMon.xacDinhKV.chi_khong_vong_2 === "Thân",
                dataKyMon.duongNhan === "Thân",
                dataKyMon.vanXuong === "Thân",
                dataKyMon.hocDuong === "Thân",
                dataKyMon.duongQN === "Thân",
                dataKyMon.amQN === "Thân",
                dataKyMon.hoaDao === "Thân",
              )}
            </Col>
            <Col size={7} style={{ backgroundColor: "#A3A3A3" }}>
              {_renderTableItem(
                true,
                kyMonKey.wDuiRooster,
                3,
                dataKyMon.dauNgua === "Dậu",
                dataKyMon.xacDinhKV.chi_khong_vong_1 === "Dậu",
                dataKyMon.xacDinhKV.chi_khong_vong_2 === "Dậu",
                dataKyMon.duongNhan === "Dậu",
                dataKyMon.vanXuong === "Dậu",
                dataKyMon.hocDuong === "Dậu",
                dataKyMon.duongQN === "Dậu",
                dataKyMon.amQN === "Dậu",
                dataKyMon.hoaDao === "Dậu",
              )}
              {_renderTableItem(
                true,
                kyMonKey.dog,
                3,
                dataKyMon.dauNgua === "Tuất",
                dataKyMon.xacDinhKV.chi_khong_vong_1 === "Tuất",
                dataKyMon.xacDinhKV.chi_khong_vong_2 === "Tuất",
                dataKyMon.duongNhan === "Tuất",
                dataKyMon.vanXuong === "Tuất",
                dataKyMon.hocDuong === "Tuất",
                dataKyMon.duongQN === "Tuất",
                dataKyMon.amQN === "Tuất",
                dataKyMon.hoaDao === "Tuất",
              )}
              {_renderTableItem(true, kyMonKey.nWQian, 1)}
            </Col>
          </View>
        </View>
      </Grid>
      {/* {tableType === 1 && apiType !== 'menh' && apiType !== 'nha' ? (
      <Grid style={{marginBottom: 10}}>
        <Text>Hiển thị vòng thần sát:</Text>
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
