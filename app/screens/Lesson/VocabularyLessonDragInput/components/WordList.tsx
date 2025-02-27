import React from "react"
import { View } from "react-native-ui-lib"
import WordPanGesture from "./WordPanGesture"
import Animated from "react-native-reanimated"

const WordList = ({
  children,
  inputZoneLayout,
  handleData,
  isReadyFill,
  isFinished,
  navigation,
}: any) => {
  const wordPanGestures = []
  let index = 0

  while (index < children.length) {
    const wordPanGesturesChildren = []
    for (let i = 0; i < 2 && index < children.length; i++, index++) {
      wordPanGesturesChildren.push(
        <WordPanGesture
          key={index}
          inputZoneLayout={inputZoneLayout}
          handleData={handleData}
          isReadyFill={isReadyFill}
          isFinished={isFinished}
          navigation={navigation}
        >
          {children[index]}
        </WordPanGesture>,
      )
    }
    wordPanGestures.push(wordPanGesturesChildren)
  }

  return (
    <Animated.View style={{ flex: 1, marginTop: 20 }}>
      {wordPanGestures.map((element, index) => {
        return (
          <View key={index} style={{ flexDirection: "row" }}>
            {element}
          </View>
        )
      })}
    </Animated.View>
  )
}

export default WordList
