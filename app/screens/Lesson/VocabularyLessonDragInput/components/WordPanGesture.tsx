import React, { useMemo, useState } from "react"
import { View } from "react-native-ui-lib"

import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"
import { Gesture, GestureDetector } from "react-native-gesture-handler"

import { TextSize } from "../services/SizeStyle"
import ModalResult from "../../common/ModalResult"

const WordPanGesture = ({
  children,
  inputZoneLayout,
  handleData,
  isReadyFill,
  isFinished,
  navigation,
}: any) => {
  const translationValueX = useSharedValue(0)
  const translationValueY = useSharedValue(0)

  const handleDataFilled = () => {
    const id = children.props.id
    handleData(id)
  }

  const isDroppedInZone = (event: any, id: number, ready: boolean) => {
    "worklet"
    return (
      event.absoluteX >= inputZoneLayout.pageX &&
      event.absoluteY + TextSize.HEIGHT >= inputZoneLayout.pageY &&
      ready
    )
  }

  const [modalVisible, setModalVisible] = useState(false)

  const showMyModal = () => {
    if (isFinished()) {
      setModalVisible(true)
    }
  }

  const handleEnd = async (id: number, event: any) => {
    const ready = await isReadyFill(id)
    if (isDroppedInZone(event, id, ready)) {
      await handleDataFilled()
      showMyModal()
    }
    translationValueX.value = withSpring(0)
    translationValueY.value = withSpring(0)
  }

  const createPanGestureHandler = () => {
    return Gesture.Pan()
      .onUpdate((event) => {
        translationValueX.value = event.translationX
        translationValueY.value = event.translationY
      })
      .onEnd((event) => {
        const id = children.props.id
        runOnJS(handleEnd)(id, event)
      })
  }

  const panGestureHandler = createPanGestureHandler()
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translationValueX.value }, { translateY: translationValueY.value }],
    }
  })

  const randomPadding = useMemo(() => Math.random() * 120, [])

  return (
    <>
      <View flex padding-4 br100 style={{ paddingHorizontal: randomPadding }}>
        <GestureDetector gesture={panGestureHandler}>
          <Animated.View style={animatedStyles}>
            <View>{children}</View>
          </Animated.View>
        </GestureDetector>
      </View>

      <ModalResult
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </>
  )
}

export default WordPanGesture
