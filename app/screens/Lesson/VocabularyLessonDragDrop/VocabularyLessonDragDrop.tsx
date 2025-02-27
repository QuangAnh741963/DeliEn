import React, { useState } from "react"
import { View } from "react-native-ui-lib"
import BackgroundImage from "app/screens/Lesson/VocabularyLessonDragDrop/components/BackgroundImage"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import TextCenter from "app/screens/Lesson/VocabularyLessonDragDrop/components/TextCenter"

import * as styles from "./services/styles"
import LinearGradient from "react-native-linear-gradient"

const VocabularyLessonDragDrop = ({ navigation }: any) => {
  const [textCenterLayout, setTextCenterLayout] = useState({
    pageX: 0,
    pageY: 0,
    width: 0,
    height: 0,
  })

  const [dropzoneLayout, setDropzoneLayout] = useState({
    pageX: 0,
    pageY: 0,
    width: 0,
    height: 0,
  })

  const getLayoutImageBackground = (data: any) => {
    setDropzoneLayout(data)
  }

  const getLayoutTextCenter = (data: any) => {
    setTextCenterLayout(data)
  }

  return (
    <LinearGradient colors={["#FAD6A6", "#F06966"]} style={{ flex: 1 }}>
      <GestureHandlerRootView style={styles.containerStyle}>
        <BackgroundImage getLayout={getLayoutImageBackground} />

        <View absF center>
          <TextCenter
            getLayout={getLayoutTextCenter}
            dropzoneLayout={dropzoneLayout}
            textCenterLayout={textCenterLayout}
            navigation={navigation}
          />
        </View>
      </GestureHandlerRootView>
    </LinearGradient>
  )
}

export default VocabularyLessonDragDrop
