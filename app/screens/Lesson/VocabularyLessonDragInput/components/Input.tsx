import React, { useCallback } from "react"
import { View, Text } from "react-native-ui-lib"

import { InputProps } from "../services/interfaces"
import * as styles from "../services/styles"
import { LayoutChangeEvent } from "react-native"

const Input = ({ data, getLayout }: InputProps) => {
  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      event.target.measure((x, y, width, height, pageX, pageY) => {
        getLayout({ width, height, pageX, pageY })
      })
    },
    [getLayout],
  )

  const sortedWords = data.words.slice().sort((a, b) => a.id - b.id)

  const filledWords = sortedWords.map((word, index) => (
    <Text key={word.id} white text60 marginR-2>
      {word.filled ? word.word : "_"}
    </Text>
  ))

  return (
    <View flex center paddingV-16>
      <View flex row center style={styles.input_inputStyle} onLayout={onLayout}>
        <View flex center row>
          {filledWords}
        </View>
      </View>
    </View>
  )
}

export default Input
