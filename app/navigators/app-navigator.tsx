import React, { useEffect, useState } from "react"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen, SimScreen, BatTuScreen, PhongThuyScreen, SimResultScreen } from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { NoInternetConnectionScreen } from "../components/noInternet/noInternetComponent"
import NetInfo from "@react-native-community/netinfo"
// import { DungSuScreen } from "../screens/kyMon/dungsu-screen"
import { LapChienLuocScreen } from "../screens/kyMon/kymonTable/LapChienLuoc"
import TabNavigator from "./tab-navigator"
import { BookmarkScreen } from "../screens/bookmark/bookmark-screen"
import { BookmarkDetailsScreen } from "../screens/bookmark/bookmark-details"
import { DungSuDetailScreen } from "../screens/kyMon/dungsu-details"
import { TamThangDetailsScreen } from "../screens/tamThang/tamThang-details"
import { TamThangScreen } from "../screens/tamThang/tamThang-screen"
import { ChienLuocScreen } from "../screens/kyMon/chienLuoc-screen"
import {
  KyMonScreen,
  HuyenKhongScreen,
  TrachNhatScreen,
  LaBanScreen,
  TinhToaScreen,
} from "../screens"

export type NavigatorParamList = {
  home: undefined
  demo: undefined
  demoList: undefined
  sim: undefined
  battu: undefined
  phongthuy: undefined
  kymon: undefined
  kymonHome: undefined
  dungsu: any
  kymonchienluoc: any
  simResult: any
  noInternet: any
  bookmark: any
  bmdetails: any
  dungsuDetail: any
  ttdetails: any
  tamthang: any
  chienluoc: any
  huyenKhong: any
  tinhToa: any
  laBan: any
  trachNhat: any
  // 🔥 Your screens go here
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Stack.Screen name="noInternet" component={NoInternetConnectionScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="sim" component={SimScreen} />
      <Stack.Screen name="simResult" component={SimResultScreen} />
      <Stack.Screen name="battu" component={BatTuScreen} />
      <Stack.Screen name="kymonHome" component={TabNavigator} />
      <Stack.Screen name="phongthuy" component={PhongThuyScreen} />
      {/* <Stack.Screen name="dungsu" component={DungSuScreen} /> */}
      <Stack.Screen name="kymonchienluoc" component={LapChienLuocScreen} />
      <Stack.Screen name="kymon" component={KyMonScreen} />
      <Stack.Screen name="dungsuDetail" component={DungSuDetailScreen} />
      <Stack.Screen name="bookmark" component={BookmarkScreen} />
      <Stack.Screen name="bmdetails" component={BookmarkDetailsScreen} />
      <Stack.Screen name="ttdetails" component={TamThangDetailsScreen} />
      <Stack.Screen name="tamthang" component={TamThangScreen} />
      <Stack.Screen name="chienluoc" component={ChienLuocScreen} />
      <Stack.Screen name="huyenKhong" component={HuyenKhongScreen} />
      <Stack.Screen name="tinhToa" component={TinhToaScreen} />
      <Stack.Screen name="laBan" component={LaBanScreen} />
      <Stack.Screen name="trachNhat" component={TrachNhatScreen} />

      {/** 🔥 Your screens go here */}
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const [isConnected, setIsConnected] = useState<boolean>(true)
  useEffect(() => {
    const data = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected)
    })
    return () => {
      data()
    }
  })
  // const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer ref={navigationRef} theme={DefaultTheme} {...props}>
      <AppStack />
      {!isConnected ? alert("check internet connection") : null}
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

const exitRoutes = ["rootHome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
