import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, Text, SafeAreaView, Image, ScrollView, FlatList, TouchableOpacity, StyleSheet, Dimensions } from "react-native"
import { Header } from "../../components"
import { NavigatorParamList } from "../../navigators"
import commonStyle from "../../theme/styles"
import { images } from "../../../assets/images"

export const BookmarkDetailsScreen: FC<
  StackScreenProps<NavigatorParamList, "bmdetails">
> = observer(({ route, navigation }) => {
  const goBack = () => navigation.pop()
  const headerTitle = route.params.group ? `${route.params.group}` : "";
  const detail = route.params.detail ? `${route.params.detail}` : "";
  const detailData = JSON.parse(detail);

  const Item = ({ title, value }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{`${title}`}</Text>
      <Text style={styles.value}>{`${value}`}</Text>
    </View>
  )

  const _renderBookmarkItems = ({ item }) => (
    <Item value={item.value} title={item.title} />
  )
  return (
    <>
      <SafeAreaView style={commonStyle.container}>
        <View>
          <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
          <Header
            headerText={headerTitle}
            leftIcon="btnBack"
            onLeftPress={goBack}
            titleStyle={commonStyle.headerText}
          />
        </View>
        <FlatList
            data={detailData}
            renderItem={_renderBookmarkItems}
            keyExtractor={(item) => item.id}
          />
      </SafeAreaView>
    </>
  )
})

const WIDTH = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    width: WIDTH - 40,
    marginVertical: 2,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#DCDDDE",
    flexDirection: "row",
  },
  title: {
    fontFamily: "Arial",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 15,
    color: "#131200",
    flex: 1, flexWrap: 'wrap'
  },
  value: {
    fontFamily: "Arial",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 15,
    color: "#131200",
    flex: 1, flexWrap: 'wrap'
  },
})