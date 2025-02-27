import React, { useCallback, useMemo, useState } from "react"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import { View } from "react-native-ui-lib"

import { TableSize, CellSize } from "../services/SizeStyle"
import { Coordinate } from "../services/interfaces"
import { runOnJS, useSharedValue } from "react-native-reanimated"
import RenderCells from "./RenderCells"
import ModalResult from "../../common/ModalResult"

const SelectionZone = ({ navigation, lessonData, dataWord }: any) => {
  const [arrayIndex, setArrayIndex] = useState<number[]>([])
  const arrayWord = useSharedValue<string[]>([])
  const checkArrayIsSelected = useSharedValue<number[]>([])
  const [modalVisible, setModalVisible] = useState(false)

  const handleArrayWord = (newWord: string) => {
    arrayWord.value = [...arrayWord.value, newWord]
  }

  const resetState = () => {
    "worklet"
    setArrayIndex([])
    arrayWord.value = []
    checkArrayIsSelected.value = []
  }

  const handleDragSelection = useCallback(({ x, y }: Coordinate) => {
    "worklet"
    const cellWidth = CellSize.WIDTH + CellSize.MARGIN * 2
    const cellHeight = CellSize.HEIGHT + CellSize.MARGIN * 2

    const targetColumn = Math.floor((x - CellSize.MARGIN - CellSize.WIDTH) / cellWidth)
    const targetRow = Math.floor((y - CellSize.MARGIN) / cellHeight)

    return targetRow * TableSize.COLUMNS + targetColumn
  }, [])

  const handleEnd = async () => {
    const str = arrayWord.value.join("")

    if (str == dataWord) {
      await setModalVisible(true)
    } else {
      resetState()
    }
  }

  const panGestureHandler = useMemo(
    () =>
      Gesture.Pan()
        .onBegin(({ x, y }) => {
          const index = handleDragSelection({ x, y })
          runOnJS(setArrayIndex)([...arrayIndex, index])
        })
        .onChange(({ x, y }) => {
          const index = handleDragSelection({ x, y })
          if (arrayIndex.indexOf(index) === -1) {
            runOnJS(setArrayIndex)([...arrayIndex, index])
          }
        })
        .onFinalize(() => {
          if (arrayIndex.length != 0) {
            runOnJS(handleEnd)()
          }
        })
        .shouldCancelWhenOutside(true)
        .onTouchesCancelled(resetState),
    [arrayIndex, handleDragSelection],
  )

  return (
    <View flex>
      <GestureDetector gesture={panGestureHandler}>
        <View flex center>
          <RenderCells
            arrayIndex={arrayIndex}
            lessonData={lessonData}
            arrayWord={arrayWord.value}
            handleArrayWord={handleArrayWord}
            checkArrayIsSelected={checkArrayIsSelected.value}
          />
        </View>
      </GestureDetector>
      <ModalResult
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </View>
  )
}

export default SelectionZone
