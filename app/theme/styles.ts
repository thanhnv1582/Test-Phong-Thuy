import { StyleSheet } from "react-native"
import { HEIGHT, WIDTH } from "../utils/defaultValues"
export default StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -9999999,
  },
  bgImgStyles: {
    height: HEIGHT,
    width: WIDTH,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    opacity: 1,
  },
  scrollStyle: {
    // flex: 1,
  },
  scrollContentStyle: {
    alignItems: "center",
  },
  headerText: {
    color: "#131200",
    fontSize: 20,
    lineHeight: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  yellowContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  grayContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EEEEEE",
  },
  grayContainerRed: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFF99",
  },
  redText: {
    fontSize: 7,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "red",
    lineHeight: 9,
    textAlign: "center",
  },
  redTextABC: {
    color: "red",
  },
  grayText: {
    fontSize: 7,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "black",
    lineHeight: 9,
    textAlign: "center",
  },
  midColVongNguHanh: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 13,
    borderWidth: 1,
    borderColor: "#E43D25",
    borderRadius: 4,
  },
  midColVongThaiTueDo: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 13,
    backgroundColor: "#E43D25",
    borderRadius: 4,
  },
  midColVongThaiTueDen: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 13,
    backgroundColor: "#131200",
    borderRadius: 4,
  },
  midColVongThanhLongDo: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 13,
    backgroundColor: "#FAD8D3",
    borderRadius: 4,
  },
  midColVongThanhLongDen: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 13,
    backgroundColor: "#D0D0CC",
    borderRadius: 4,
  },
  midColTTMContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 13,
    backgroundColor: "#FF8A00",
    borderRadius: 4,
  },
  TTMText: {
    fontSize: 8,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    color: "#fff",
    lineHeight: 9,
    textAlign: "center",
  },
  trucSuTextStyle: {
    fontSize: 7,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    color: "#fff",
    lineHeight: 9,
    textAlign: "center",
  },
  vongNguHanhTextStyle: {
    fontSize: 7,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    color: "#D4190A",
    lineHeight: 8,
    textAlign: "center",
  },
  vongThaiTueText: {
    fontSize: 7,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    color: "#fff",
    lineHeight: 9,
    textAlign: "center",
  },
  vongThanhLongTextDo: {
    fontSize: 7,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    color: "#D4190A",
    lineHeight: 9,
    textAlign: "center",
  },
  vongThanhLongTextDen: {
    fontSize: 7,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    color: "#131200",
    lineHeight: 9,
    textAlign: "center",
  },
  specialCaseContainer: {
    flex: 1,
    height: "100%",
    width: "111%",
    justifyContent: "center",
    alignItems: "center",
  },
  specialCaseText: {
    fontSize: 7,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    color: "#131200",
    lineHeight: 10,
    textAlign: "center",
  },
  specialCaseTextRed: {
    fontSize: 7,
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "700",
    color: "red",
    lineHeight: 10,
    textAlign: "center",
  },
  iconHDMY: {
    marginHorizontal: 2,
    marginVertical: 1,
    width: 12,
    height: 12,
  },
  sliderFixed: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    zIndex: 100,
    paddingTop: 20,
  },
  slider: {
    width: "86%",
  },
  sliderZoom: {
    width: "100%",
  },
  cameraWrap: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  FengshuiContainerChild: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  FengshuiImage: {
    width: "100%",
    resizeMode: "contain",
    position: "relative",
  },
  buttonFixed: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 70,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  compassesView: {
    alignItems: "center",
    shadowColor: "#000",
    marginTop: 20,
  },
  compassesEmptySpace: {
    width: "50%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.3,
  },
  compassesSpace: {
    width: "50%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    overflow: "hidden",
  },
  compassName: {
    marginTop: 10,
  },
  needle: {
    position: "absolute",
    width: "100%",
    resizeMode: "contain",
  },
  iconSetRotate: {
    width: 42,
    height: 42,
  },
  iconCamera: {
    width: 36,
    height: 36,
  },
  iconFengshuiScreen: {
    paddingLeft: 6,
    paddingRight: 6,
  },
  onTop: {
    zIndex: 999999,
  },
  setRotateModalContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.36)",
    justifyContent: "center",
    alignItems: "center",
  },
  setRotateModalContent: {
    width: "80%",
    height: 170,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnGroup: {
    flexDirection: "row",
    width: "80%",
    marginTop: 20,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageCompassItem: {
    height: 144,
    width: "80%",
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 70,
  },
  inputRotate: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1.0,
    borderTopColor: "black",
    borderTopWidth: 1.0,
    marginTop: 10,
  },
  titleRotate: {
    fontSize: 20,
    fontWeight: "700",
    color: "#d4190a",
  },
  btnRotateModal: {
    padding: 10,
    width: "44%",
    backgroundColor: "#d4190a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  btnTitle: {
    color: "white",
  },
  cameraText: {
    color: "#0693e3",
    fontWeight: "700",
    textAlign: "center",
  },
  cancelCameraText: {
    color: "#0693e3",
    fontWeight: "900",
    textAlign: "center",
    fontSize: 16,
  },
  cameraBtn: {
    width: "90%",
    backgroundColor: "#ffffff",
    paddingTop: 16,
    paddingBottom: 16,
  },
  cancelCamera: {
    marginTop: 6,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  imageOption: {
    borderBottomWidth: 1,
    borderBottomColor: "#dfdfdf",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  cameraContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.36)",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraContainerChild: {
    alignItems: "center",
    width: "100%",
    marginTop: "140%",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: (HEIGHT * 60) / 100,
  },
  animatedContainer: {
    width: WIDTH,
    height: (HEIGHT * 70) / 100,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 90,
  },
  imageImport: {
    width: WIDTH,
    height: 200,
    marginTop: 10,
    maxHeight: 400,
    zIndex: 1,
    resizeMode: "contain",
    position: "absolute",
  },
})