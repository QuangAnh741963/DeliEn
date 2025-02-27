import React, { useCallback, useLayoutEffect, useState } from "react"
import { View, Image } from "react-native-ui-lib"
import * as styles from "../services/styles"
import { data } from "../services/data"
import { LayoutChangeEvent } from "react-native"

const BackgroundImage = ({ getLayout }: any) => {
  const imageDatas = data.backgroundImage

  const [shuffledArray, setShuffledArray] = useState([0, 1, 2, 3])

  useLayoutEffect(() => {
    const array = [0, 1, 2, 3]
    const randomComparator = () => Math.random() - 0.5
    const shuffledArray = array.sort(randomComparator)
    setShuffledArray(shuffledArray)
  }, [imageDatas])

  const onLayout = useCallback(
    (index: number) => (event: LayoutChangeEvent) => {
      event.target.measure((x, y, width, height, pageX, pageY) => {
        if (imageDatas[shuffledArray[index]].title === data.centerText.title) {
          getLayout({ width, height, pageX, pageY })
        }
      })
    },
    [imageDatas, shuffledArray, getLayout],
  )

  return (
    <View flex-1 center>
      <View flex-1 style={styles.viewStyle}>
        <View onLayout={onLayout(0)}>
          <Image source={imageDatas[shuffledArray[0]].image} width={100} height={100} />
        </View>

        <View onLayout={onLayout(1)}>
          <Image source={imageDatas[shuffledArray[1]].image} width={100} height={100} />
        </View>
      </View>

      <View flex-1 style={styles.viewStyle}>
        <View onLayout={onLayout(2)}>
          <Image source={imageDatas[shuffledArray[2]].image} width={100} height={100} />
        </View>

        <View onLayout={onLayout(3)}>
          <Image source={imageDatas[shuffledArray[3]].image} width={100} height={100} />
        </View>
      </View>
    </View>
  )
}

export default BackgroundImage
