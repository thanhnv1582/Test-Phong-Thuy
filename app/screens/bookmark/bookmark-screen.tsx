import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { View, Text, SafeAreaView, Image, FlatList, StyleSheet } from "react-native"
import { t } from "i18next" 
import { Header } from "../../components"
import { NavigatorParamList } from "../../navigators"
import commonStyle from "../../theme/styles"
import { images } from "../../../assets/images"
import { TouchableOpacity } from "react-native-gesture-handler"
import { data } from "./dummyData"
import { bookmarkApi } from "../../services/api/bookmark/bookmarkApi"

export const BookmarkScreen: FC<StackScreenProps<NavigatorParamList, "bookmark">> = observer(
  ({ navigation }) => {
    const [dataBookmark, setDataBookmark] = useState<any>()
    // get ky mon data
    const getKyMonData = (lang) => {
      bookmarkApi.getData(lang).then(async (res: any) => {
        if (res && res.status == "200") {
          const bookmarkData = await res.data.bookmark
          setDataBookmark(bookmarkData)
        }
      })
    }

    const lang = t("_local")
    useEffect(() => {
      getKyMonData(lang)
      setDataBookmark(null)
    }, [])

    const selectItem = (id: number, group: string, detail: Array<string>) => {
      const params: any = {
        id: id.toString(),
        group: group,
        detail: JSON.stringify(detail),
      }
      navigation.navigate("bmdetails", params)
    }
    const Item = ({ id, group, onPress }) => (
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <Text style={styles.dot}>{"\u2022"}</Text>
        <Text style={styles.title}>{`${group}`}</Text>
      </TouchableOpacity>
    )
    const _renderBookmarkItems = ({ item }) => (
      <Item
        id={item.id}
        group={item.group}
        onPress={() => selectItem(item.id, item.group, item.detail)}
      />
    )
    const goBack = () => navigation.pop()
    return (
      <>
        <SafeAreaView style={commonStyle.container}>
          <View>
            <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
            <Header
              headerTx="Bookmark"
              leftIcon="btnBack"
              onLeftPress={goBack}
              titleStyle={commonStyle.headerText}
            />
          </View>
          <FlatList
            data={dataBookmark}
            renderItem={_renderBookmarkItems}
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
})
