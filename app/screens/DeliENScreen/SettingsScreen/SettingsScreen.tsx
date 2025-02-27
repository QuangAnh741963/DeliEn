import React from "react"
import { View, Text } from "react-native-ui-lib"
import Screen from "../../../components/ScreenDeliEn/Screen"

const SettingsScreen = () => {
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
        <Text>SettingsScreen</Text>
      </View>
    </Screen>
  )
}

export default SettingsScreen
