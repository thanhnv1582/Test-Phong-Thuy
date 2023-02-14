import React, { useState, useEffect } from "react"
import { View, Image, Platform, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { KyMonScreen } from "../screens"
import { LapChienLuocScreen } from "../screens/kyMon/kymonTable/LapChienLuoc"
import { images } from "../../assets/images"
import { getCurrentLocal } from "../../i18n"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  const [calendarTab, setCalendarTab] = useState<string>("Qi Men Calendar")
  const [strategyTab, setStrategyTab] = useState<string>("Qi Men Strategy")

  const setTabNavigator = async () => {
    const localKey = await getCurrentLocal()

    switch (localKey) {
      case "en":
        {
          setCalendarTab("Qi Men Calendar")
          setStrategyTab("Qi Men Strategy")
        }
        break
      case "vn":
        {
          setCalendarTab("Lịch Vận")
          setStrategyTab("Chiến Lược")
        }
        break
      default:
        {
          setCalendarTab("Qi Men Calendar")
          setStrategyTab("Qi Men Strategy")
        }
        break
    }
  }

  useEffect(() => {
    const fetch = async () => {
      await setTabNavigator()
    }
    fetch()
  }, [])

  return (
    <Tab.Navigator
      screenOptions={(route: any) => ({
        tabBarActiveTintColor: "#D4190A",
        tabBarInactiveTintColor: "#585A5C",
        tabBarStyle: { height: Platform.OS === "ios" ? 100 : 70 },
        tabBarLabelStyle: {
          fontSize: 14,
          lineHeight: 16,
          fontStyle: "normal",
          fontFamily: "Arial",
          fontWeight: "400",
          marginBottom: 8,
        },
      })}
    >
      <Tab.Screen
        name={calendarTab}
        component={KyMonScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={focused ? images.iconKyMonActive : images.iconKyMonInactive}
                  style={styles.iconStyle}
                />
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name={strategyTab}
        component={LapChienLuocScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={focused ? images.iconDungSuActive : images.iconDungSuInactive}
                  style={styles.iconStyle}
                />
              </View>
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 32,
    height: 32,
  },
})
