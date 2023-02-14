import React, { FC } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { observer } from "mobx-react-lite"
import { SafeAreaView, View, Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import { HEIGHT, WIDTH } from "../../utils/defaultValues"
import { images } from "../../../assets/images"
import commonStyle from "../../theme/styles"

export const NoInternetConnectionScreen: FC<
  StackScreenProps<NavigatorParamList, "noInternet">
> = observer(() => {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View>
        <Image style={commonStyle.bgImgStyles} source={images.backgroundImgNoIcon} />
        <View style={styles.bodyContainer}>
          <Image
            source={images.iconNoInterNet}
            style={styles.iconNoInternetStyle}
            resizeMode="contain"
          />
          <View style={styles.notiContainer}>
            <Text style={styles.title}>Không có kết nối internet</Text>
            <Text style={styles.content}>
              Vui lòng kiểm tra lại kết nối wifi của thiết bị và thử lại
            </Text>
          </View>
          <TouchableOpacity style={styles.btnRetry}>
            <Text style={styles.btnText}>Thử lại</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
})
const styles = StyleSheet.create({
  bodyContainer: {
    width: WIDTH,
    height: HEIGHT / 1.2,
    position: "absolute",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  iconNoInternetStyle: {
    width: WIDTH - 176,
    height: 200,
  },
  notiContainer: {
    width: WIDTH - 150,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 23,
    marginTop: 32,
    color: "#131200",
  },
  content: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
    marginTop: 16,
    color: "#131200",
  },
  btnRetry: {
    width: WIDTH - 176,
    height: 52,
    backgroundColor: "#D4190A",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
    color: "#FFFFFF",
  },
})
