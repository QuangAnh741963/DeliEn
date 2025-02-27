import React, { useState } from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { View } from "react-native-ui-lib"
import LinearGradient from "react-native-linear-gradient"
import BackgroundImage from "../VocabularyLessonDragSelection/components/BackgroundImage"
import { processVocabularyData } from "./services/functions"
import SelectionZone from "./components/SelectionZone"
import { data as dataAPI } from "./services/data"

import * as styles from "../VocabularyLessonDragSelection/services/styles"
import { useSharedValue } from "react-native-reanimated"

const VocabularyLessonDragSelection = ({ navigation }: any) => {
  const [lessonData] = useState(processVocabularyData())
  const dataWord = useSharedValue(dataAPI.words)

  return (
    <LinearGradient colors={["#FAD6A6", "#F06966"]} style={{ flex: 1 }}>
      <GestureHandlerRootView style={styles.containerStyle}>
        <View flex-9>
          <BackgroundImage data={lessonData} />
        </View>

        <View style={styles.selectZoneStyle}>
          <SelectionZone
            lessonData={lessonData}
            dataWord={dataWord.value}
            navigation={navigation}
          />
        </View>

        <View flex-1></View>
      </GestureHandlerRootView>
    </LinearGradient>
  )
}

export default VocabularyLessonDragSelection
