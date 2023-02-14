import React from "react"
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native"

type Props = {
  isModalShow: boolean
  //   isModalClose: boolean
  data?: any
  color?: string
}

const DetailModal = ({ isModalShow, data, color }: Props) => {
  return (
    <>
      <Modal
        animationType="slide"
        style={styles.container}
        visible={isModalShow}
        onRequestClose={() => {
          !isModalShow
        }}
      >
        <View style={styles.container}>
          <Text style={{ ...styles.titleText, color: color }}>Thiên Độn</Text>
          <Text style={styles.detailText}>
            Lợi xuất hành kinh doanh, gặp đằng xà chủ ngờ vực, bạch hổ, huyền vũ chủ tai nạn, ốm đau
            tổn thất tiền tài
          </Text>
          <TouchableOpacity style={styles.btnClose} onPress={() => !isModalShow}>
            <Text style={styles.btnText}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  )
}

export default DetailModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titleText: {
    fontFamily: "Arial",
    fontSize: 20,
    lineHeight: 23,
    fontStyle: "normal",
    fontWeight: "700",
  },
  detailText: {
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 15,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#585A5C",
  },
  btnClose: {
    width: 141,
    height: 52,
    borderRadius: 32,
    backgroundColor: "#D4190A",
  },
  btnText: {
    fontFamily: "Arial",
    fontSize: 13,
    lineHeight: 16,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#fff",
  },
})
