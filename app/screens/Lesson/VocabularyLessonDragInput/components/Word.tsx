import { View, Text } from "react-native-ui-lib"
import React from "react"

import { WordProps } from "../services/interfaces"
import { TextSize } from "../services/SizeStyle"

const Word = ({ id, word }: WordProps) => {
  return (
    <View width={TextSize.WIDTH} height={TextSize.HEIGHT} backgroundColor="#ffff" center br100>
      <Text color="#f86c6c" text50>
        {word}
      </Text>
    </View>
  )
}

export default Word
