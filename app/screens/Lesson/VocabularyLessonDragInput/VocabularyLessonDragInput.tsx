import React, { useState } from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { View } from "react-native-ui-lib"
import BackgroundImage from "./components/BackgroundImage"
import Input from "./components/Input"
import { processVocabularyData } from "./services/vocabularyDataProcessing"

import * as styles from "./services/styles"

import LinearGradient from "react-native-linear-gradient"
import Word from "./components/Word"
import WordList from "./components/WordList"

const VocabularyLessonDragInput = ({ navigation }: any) => {
  const [lessonData, setLessonData] = useState(processVocabularyData())

  const [inputZoneLayout, setInputZoneLayout] = useState({
    pageX: 0,
    pageY: 0,
    width: 0,
    height: 0,
  })

  const getLayoutInputZone = (data: any) => {
    setInputZoneLayout(data)
  }

  const handleData = (id: number) => {
    const updatedLessonData = { ...lessonData }
    const updatedWords = updatedLessonData.words.map((word) => {
      if (word.id === id) {
        return { ...word, filled: true }
      }
      return word
    })
    updatedLessonData.words = updatedWords
    setLessonData(updatedLessonData)
  }

  const isReadyFill = (id: number) => {
    for (const word of lessonData.words) {
      if (word.id < id && !word.filled) {
        return false
      }
    }
    return true
  }

  const isFinished = () => {
    let count = 0
    for (const word of lessonData.words) {
      if (word.filled) {
        count++
      }
    }
    if (count == lessonData.words.length - 1) {
      return true
    } else {
      return false
    }
  }

  return (
    <LinearGradient colors={["#FAD6A6", "#F06966"]} style={{ flex: 1 }}>
      <GestureHandlerRootView style={styles.vocal_containerStyle}>
        <View flex-9 style={styles.vocal_backgroundImageStyle}>
          <BackgroundImage data={lessonData} />
        </View>

        <View style={styles.vocal_textDropZoneStyle}>
          <WordList
            inputZoneLayout={inputZoneLayout}
            handleData={handleData}
            isReadyFill={isReadyFill}
            isFinished={isFinished}
            navigation={navigation}
          >
            {lessonData.words.map((word, index) => {
              if (!word.filled) {
                return <Word key={index} {...word} />
              }
              return
            })}
          </WordList>
        </View>

        <View flex-1>
          <Input data={lessonData} getLayout={getLayoutInputZone} />
        </View>
      </GestureHandlerRootView>
    </LinearGradient>
  )
}

export default VocabularyLessonDragInput
