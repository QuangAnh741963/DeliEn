import React, { useCallback, useRef } from "react"
import { View } from "react-native-ui-lib"
import * as styles from "../services/styles"
import { TableSize } from "../services/SizeStyle"
import { RenderCellsProps } from "../services/interfaces"
import Word from "./Word"
import { renderIndex, generateShuffledAlphabet } from "../services/functions"

const RenderCells = ({
  arrayIndex,
  lessonData,
  arrayWord,
  handleArrayWord,
  checkArrayIsSelected,
}: RenderCellsProps) => {
  const checkIndexRender = useRef(renderIndex(lessonData.words.length))
  const renderRandomText = useRef(generateShuffledAlphabet())

  const isWithinRange = useCallback(
    (index: number) => {
      for (let i = 0; i < arrayIndex.length; i++) {
        if (arrayIndex[i] === index) {
          return true
        }
      }
      return false
    },
    [arrayIndex],
  )

  const renderCells = () => {
    const cells = []
    let countLessonDataElement = 0
    let countRandomDataElement = 0

    const checkIndex = checkIndexRender.current

    for (let i = 0; i < TableSize.ROWS; i++) {
      const rowCells = []

      for (let j = 0; j < TableSize.COLUMNS; j++) {
        const index = i * TableSize.COLUMNS + j
        const isSelected = isWithinRange(index)
        const textColor = isSelected ? "#15B3BD" : "#f86c6c"

        let id = 999
        let word = ``
        if (lessonData.words[countLessonDataElement] !== undefined) {
          if (!checkIndex.includes(index)) {
            word = renderRandomText.current[countRandomDataElement]
          } else {
            id = lessonData.words[countLessonDataElement].id
            word = lessonData.words[countLessonDataElement].word
          }
        }

        if (isSelected) {
          if (!checkArrayIsSelected.includes(id)) {
            handleArrayWord(word)
          }
        }

        rowCells.push(
          <View key={index} style={[styles.cellStyle]}>
            <Word id={1} word={word} selected={true} textColor={textColor} />
          </View>,
        )

        if (checkIndex.includes(index)) {
          countLessonDataElement++
        } else {
          countRandomDataElement++
        }
      }

      cells.push(
        <View key={i} row>
          {rowCells}
        </View>,
      )
    }

    return cells
  }

  return (
    <>
      <View flex center>
        {renderCells()}
      </View>
    </>
  )
}

export default RenderCells
