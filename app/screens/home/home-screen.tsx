import React, { FC } from "react"
import { View, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
import { Header } from "../../components"
import HomeButton from "./homeButton"
import LunarCalendarComponent from "../../components/lunarCalendar/LunarCalendar"
import { WIDTH } from "../../utils/defaultValues"
import { images } from "../../../assets/images"
import commonStyle from "../../theme/styles"
import { Col, Row, Grid } from "react-native-easy-grid"

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  ({ navigation }) => {
    return (
      <SafeAreaView style={commonStyle.container}>
        <View testID="WelcomeScreen" style={commonStyle.container}>
          <View>
            <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
            <Header headerText="Phong Thuỷ" titleStyle={commonStyle.headerText} />
          </View>
          <ScrollView
            style={commonStyle.scrollStyle}
            contentContainerStyle={commonStyle.scrollContentStyle}
          >
            {/* <LunarCalendarComponent /> */}
            <View style={styles.groupBtnContainer}>
              <Grid>
                <Row>
                  <Col size={1}>
                    <HomeButton
                      onPress={() => navigation.navigate("huyenKhong")}
                      buttonImage={images.iconKymon}
                      buttonLabel="Huyền không"
                    />
                  </Col>
                  <Col size={1}>
                    <HomeButton
                      onPress={() => navigation.navigate("tinhToa")}
                      buttonImage={images.iconBattu}
                      buttonLabel="Tính toạ"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col size={1}>
                    <HomeButton
                      onPress={() => navigation.navigate("laBan")}
                      buttonImage={images.iconPhongthuy}
                      buttonLabel="La bàn"
                    />
                  </Col>
                  <Col size={1}>
                    <HomeButton
                      onPress={() => navigation.navigate("trachNhat")}
                      buttonImage={images.iconSim}
                      buttonLabel="Trạch nhật"
                    />
                  </Col>
                </Row>
              </Grid>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  },
)

const styles = StyleSheet.create({
  calendarContainer: {
    width: WIDTH - 40,
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 14,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, //
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  todayText: {
    color: "#D4190A",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21,
  },
  text1: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 15,
  },
  text2: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 15,
  },
  textStyle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
  },
  text: {
    color: "black",
    fontSize: 20,
    lineHeight: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  groupBtnContainer: {
    width: WIDTH - 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 12,
  },
})
