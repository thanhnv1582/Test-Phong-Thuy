import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Modal,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native"
import { PinchToZoomImage, Drag, SliderComponent } from "../../components/index"
import { compasses, WIDTH } from "../../utils/defaultValues"
import { NavigatorParamList } from "../../navigators"
import { Header } from "../../components"
import commonStyle from "../../theme/styles"
import { images } from "../../../assets/images"

export const PhongThuyScreen: FC<StackScreenProps<NavigatorParamList, "phongthuy">> = observer(
  ({ navigation }) => {
    const [widthZoom, setWidthZoom] = useState(100)
    const [heightZoom, setHeightZoom] = useState(360)
    const [rotateZ, setRotateZ] = useState(0)
    const [needleRotateZ, setNeedleRotateZ] = useState(0)
    const [oneNeedleRotateZ, setOneNeedleRotateZ] = useState(0)
    const [isCompassesModal, setIsCompassesModal] = useState(false)
    const [isRotateModal, setIsRotateModal] = useState(false)
    const [initCompass, setInitCompass] = useState(compasses[0].src)
    const [rotateValue, setRotateValue] = useState(0)
    const [isChangedDeg, setIsChangedDeg] = useState(false)
    const [isCameraModal, setIsCameraModal] = useState(false)
    const [imageSource, setImageSource] = useState(images.transparent)
    const [isImported, setIsImported] = useState(false)

    const goBack = () => navigation.popToTop()

    const handleOnReleaseZoomSlider = (value) => {
      setWidthZoom(125 + value)
      setHeightZoom(360 + (360 * value) / 100)
    }

    const handleOnReleaseRotateSlider = (value) => {
      setRotateZ(value)
    }

    const handleCloseCompassesModal = () => {
      setIsCompassesModal(false)
    }

    const handleOpenCompassesModal = () => {
      setIsCompassesModal(true)
    }

    const handleSelectCompass = (compass) => {
      setInitCompass(compass.src)
    }

    const handleOpenRotateModal = () => {
      setIsRotateModal(true)
    }

    const handleCloseRotateModal = () => {
      setIsRotateModal(false)
    }

    const handleRotateNeedle = () => {
      if (isImported) {
        setOneNeedleRotateZ(rotateValue % 360)
      } else {
        setNeedleRotateZ(rotateValue % 360)
        setIsChangedDeg(true)
      }
      setIsRotateModal(false)
    }

    const onChangeRotate = (value) => {
      setRotateValue(Number(value))
    }

    const handleClickCompass = () => {
      setRotateZ((prev) => prev - (rotateValue % 360))
      setNeedleRotateZ(0)
      setIsChangedDeg(false)
    }

    const handleOpenLaunchCameraModal = () => {
      setIsCameraModal(true)
    }

    const handleCloseLaunchCameraModal = () => {
      setIsCameraModal(false)
    }

    const assignSource = (result) => {
      if (result.assets) {
        const source = { uri: `data:image/jpeg;base64,` + result.assets[0].base64 }
        setImageSource(source)
        setIsCameraModal(false)
        setIsImported(true)
        return true
      }
      return false
    }

    const handleLaunchCamera = async () => {
      const result = await launchCamera({
        cameraType: "back",
        mediaType: "photo",
        includeBase64: true,
      })
      assignSource(result)
    }

    const handleLaunchImage = async () => {
      const result = await launchImageLibrary({
        mediaType: "photo",
        includeBase64: true,
      })
      assignSource(result)
    }

    return (
      <>
        <SafeAreaView style={commonStyle.container}>
          <View>
            <Image style={commonStyle.bgImgStyles} source={images.backgroundImg} />
            <Header
              headerText="Qi Men Dun Jia Pro"
              onLeftPress={goBack}
              titleStyle={commonStyle.headerText}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={handleOpenRotateModal}
                style={[commonStyle.iconFengshuiScreen, commonStyle.onTop]}
              >
                <Image source={images.iconInCompass} style={commonStyle.iconSetRotate} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleOpenCompassesModal}
                style={[commonStyle.iconFengshuiScreen, commonStyle.onTop]}
              >
                <Image source={images.iconKyMonActive} style={commonStyle.iconSetRotate} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={commonStyle.contentContainer}>
            <View style={commonStyle.animatedContainer}>
              <Drag>
                <TouchableOpacity
                  style={[
                    commonStyle.FengshuiContainerChild,
                    { width: (((WIDTH * 70) / 100) * widthZoom) / 100 },
                  ]}
                  disabled={isChangedDeg ? false : true}
                  onPressOut={handleClickCompass}
                >
                  <Image
                    source={initCompass}
                    style={[
                      commonStyle.FengshuiImage,
                      {
                        transform: [{ rotateZ: `${rotateZ}deg` }],
                        height: heightZoom,
                      },
                    ]}
                  />
                  <Image
                    source={images.needle}
                    style={[
                      commonStyle.needle,
                      {
                        transform: [{ rotateZ: `${needleRotateZ}deg` }],
                        height: widthZoom * 2.5,
                      },
                    ]}
                  />
                  {isImported && oneNeedleRotateZ !== 0 ? (
                    <Image
                      source={images.oneNeedle}
                      style={[
                        commonStyle.needle,
                        {
                          transform: [{ rotateZ: `${oneNeedleRotateZ}deg` }],
                          height: widthZoom * 2.5,
                        },
                      ]}
                    />
                  ) : (
                    <></>
                  )}
                </TouchableOpacity>
              </Drag>
            </View>
            <PinchToZoomImage imageSource={imageSource} />
          </View>
          <View style={commonStyle.sliderFixed}>
            <SliderComponent
              style={commonStyle.sliderZoom}
              minimumValue={-30}
              maximumValue={80}
              value={-15}
              onValueChange={(value) => handleOnReleaseZoomSlider(value)}
            />
            <View style={{ flexDirection: "row" }}>
              <SliderComponent
                style={commonStyle.slider}
                minimumValue={0}
                maximumValue={360}
                value={180}
                onValueChange={(value) => handleOnReleaseRotateSlider(value)}
              />
              <TouchableOpacity
                onPress={handleOpenLaunchCameraModal}
                style={[commonStyle.cameraWrap, commonStyle.onTop]}
              >
                <Image source={images.camera60} style={commonStyle.iconCamera} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        <>
          {/* Modal set rotate */}
          <Modal animationType="fade" transparent={true} visible={isRotateModal}>
            <View style={commonStyle.centeredView}>
              <View style={commonStyle.setRotateModalContainer}>
                <View style={commonStyle.setRotateModalContent}>
                  <Text style={commonStyle.titleRotate}>Nhập số độ</Text>
                  <TextInput
                    placeholder="Nhập số độ"
                    defaultValue={String(rotateValue)}
                    keyboardType="numeric"
                    onChangeText={(value) => onChangeRotate(value)}
                    style={commonStyle.inputRotate}
                  />
                  <View style={commonStyle.btnGroup}>
                    <Pressable style={commonStyle.btnRotateModal}>
                      <Text style={commonStyle.btnTitle} onPress={handleRotateNeedle}>
                        Đi đến
                      </Text>
                    </Pressable>
                    <Pressable style={commonStyle.btnRotateModal} onPress={handleCloseRotateModal}>
                      <Text style={commonStyle.btnTitle}>Huỷ bỏ</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          {/* Modal compasses */}
          <Modal animationType="fade" transparent={true} visible={isCompassesModal}>
            <View style={commonStyle.centeredView}>
              <TouchableOpacity
                style={commonStyle.compassesEmptySpace}
                onPress={handleCloseCompassesModal}
              ></TouchableOpacity>
              <View style={commonStyle.compassesSpace}>
                <ScrollView>
                  {compasses.map((compass, index) => (
                    <TouchableOpacity
                      style={commonStyle.compassesView}
                      onPress={() => handleSelectCompass(compass)}
                      key={index}
                    >
                      <Image source={compass.src} style={commonStyle.imageCompassItem} />
                      <Text style={commonStyle.compassName}>{compass.name}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>
          {/* Modal camera*/}
          <Modal animationType="fade" transparent={true} visible={isCameraModal}>
            <View style={commonStyle.centeredView}>
              <TouchableOpacity
                style={commonStyle.cameraContainer}
                onPress={handleCloseLaunchCameraModal}
              >
                <View style={commonStyle.cameraContainerChild}>
                  <Pressable
                    style={[commonStyle.cameraBtn, commonStyle.imageOption]}
                    onPress={handleLaunchImage}
                  >
                    <Text style={commonStyle.cameraText}>Ảnh</Text>
                  </Pressable>
                  <Pressable style={commonStyle.cameraBtn} onPress={handleLaunchCamera}>
                    <Text style={commonStyle.cameraText}>Camera</Text>
                  </Pressable>
                  <Pressable
                    style={[commonStyle.cameraBtn, commonStyle.cancelCamera]}
                    onPress={handleCloseLaunchCameraModal}
                  >
                    <Text style={commonStyle.cancelCameraText}>Huỷ bỏ</Text>
                  </Pressable>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        </>
      </>
    )
  },
)
