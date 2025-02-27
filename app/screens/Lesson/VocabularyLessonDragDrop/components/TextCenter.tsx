import React, { useRef, useState } from "react"
import { Text } from "react-native-ui-lib"
import { data } from "../services/data"
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import ModalResult from "../../common/ModalResult"

const TextCenter = ({ getLayout, dropzoneLayout, textCenterLayout, navigation }: any) => {
  const textCenterTitle = data.centerText.title

  const isDroppedInZone = (event: any) => {
    "worklet"
    return (
      textCenterLayout.pageX + event.translationX >= dropzoneLayout.pageX &&
      textCenterLayout.pageY + event.translationY >= dropzoneLayout.pageY &&
      textCenterLayout.pageX + event.translationX <= dropzoneLayout.pageX + dropzoneLayout.width &&
      textCenterLayout.pageY + event.translationY <= dropzoneLayout.pageY + dropzoneLayout.height
    )
  }

  const [modalVisible, setModalVisible] = useState(false)

  const showMyModal = () => {
    setModalVisible(true)
  }

  const translationValueX = useSharedValue(0)
  const translationValueY = useSharedValue(0)

  const createPanGestureHandler = () => {
    return Gesture.Pan()
      .onUpdate((event) => {
        translationValueX.value = event.translationX
        translationValueY.value = event.translationY
      })
      .onEnd((event) => {
        if (isDroppedInZone(event)) {
          runOnJS(showMyModal)()
        } else {
          translationValueX.value = withSpring(0)
          translationValueY.value = withSpring(0)
        }
      })
  }

  const panGestureHandler = createPanGestureHandler()

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translationValueX.value }, { translateY: translationValueY.value }],
    }
  })

  const viewRef = useRef<any>(null)

  const measureViews = () => {
    if (viewRef.current) {
      viewRef.current.measure(
        (_x: number, _y: number, width: number, height: number, pageX: number, pageY: number) => {
          getLayout({ width, height, pageX, pageY })
        },
      )
    }
  }

  return (
    <>
      <GestureDetector gesture={panGestureHandler}>
        <Animated.View style={animatedStyles} ref={viewRef} onLayout={measureViews}>
          <Text text40 white>
            {textCenterTitle}
          </Text>
        </Animated.View>
      </GestureDetector>

      <ModalResult
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </>
  )
}

export default TextCenter
