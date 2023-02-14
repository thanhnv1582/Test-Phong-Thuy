import React, { FC } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { View, StyleSheet, Image } from "react-native"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../../navigators"
import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../../../components"
import commonStyle from "../../../theme/styles"
import { images } from "../../../../assets/images"

export const KyMonInfoScreen: FC<StackScreenProps<NavigatorParamList, "kYMonInfor">> = observer(
  ({ navigation }) => {
    const goBack = () => navigation.popToTop()

    return (
      <>
        <SafeAreaView style={commonStyle.container}>
          <View>
            <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
            <Header
              headerText="Thông tin Kỳ Môn"
              leftIcon="btnBack"
              rightIcon="drawer"
              onLeftPress={goBack}
              titleStyle={commonStyle.headerText}
            />
          </View>
        </SafeAreaView>
      </>
    )
  },
)

const styles = StyleSheet.create({})
