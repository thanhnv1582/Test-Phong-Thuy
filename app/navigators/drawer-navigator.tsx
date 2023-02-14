import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { HomeScreen, SimScreen, BatTuScreen, PhongThuyScreen, KyMonScreen } from "../screens"

const Drawer = createDrawerNavigator<any>()

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#D4190A",
        drawerInactiveTintColor: "#000",
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen name="home" component={HomeScreen} options={{ title: "Màn Hình Chính" }} />
      <Drawer.Screen name="sim" component={SimScreen} options={{ title: "Sim Điện Thoại" }} />
      <Drawer.Screen name="battu" component={BatTuScreen} options={{ title: "Bát Tự" }} />
      <Drawer.Screen name="kymon" component={KyMonScreen} options={{ title: "Kỳ Môn" }} />
      <Drawer.Screen
        name="phongthuy"
        component={PhongThuyScreen}
        options={{ title: "Phong Thủy" }}
      />
    </Drawer.Navigator>
  )
}
