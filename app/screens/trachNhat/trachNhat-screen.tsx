import { StackScreenProps } from "@react-navigation/stack"
import React, { FC, useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"

import { NavigatorParamList } from "../../navigators"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image, View } from "react-native"
import { Header } from "../../components"
import { images } from "../../../assets/images"
import commonStyle from "../../theme/styles"

export const TrachNhatScreen: FC<StackScreenProps<NavigatorParamList, "trachNhat">> = observer(
  ({ route, navigation }) => {
    const goBack = () => navigation.goBack()

    return (
      <>
        <SafeAreaView>
          <View>
            <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
            <Header
              headerTx="Trạch Nhật"
              onLeftPress={goBack}
              titleStyle={commonStyle.headerText}
            />
          </View>
        </SafeAreaView>
      </>
    )
  },
)
