import { View, Text } from "react-native-ui-lib"
import React from "react"

import { WordProps } from "../services/interfaces"
import { TextSize } from "../services/SizeStyle"

const Word = ({ word, textColor }: WordProps) => {
  return (
    <View width={TextSize.WIDTH} height={TextSize.HEIGHT} backgroundColor="#ffff" center br100>
      <Text color={textColor} text50>
        {word}
      </Text>
    </View>
  )
}

export default Word
