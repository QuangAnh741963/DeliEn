import React from "react"
import { View, Text } from "react-native-ui-lib"
import Screen from "../../../components/ScreenDeliEn/Screen"

const PlayScreen = () => {
  return (
    <Screen
      statusBarProps={{
        animated: true,
        hidden: false,
        backgroundColor: "#fff5d7",
        barStyle: "dark-content",
      }}
    >
      <View flex center>
        <Text>PlayScreen</Text>
      </View>
    </Screen>
  )
}

export default PlayScreen
