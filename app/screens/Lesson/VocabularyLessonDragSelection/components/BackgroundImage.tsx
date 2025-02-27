import React from "react"
import { View, Image } from "react-native-ui-lib"

import { BackgroundImageProps } from "../services/interfaces"

const BackgroundImage = ({ data }: BackgroundImageProps) => {
  return (
    <View flex center>
      <Image source={data.image} width={120} height={120} />
    </View>
  )
}

export default BackgroundImage
