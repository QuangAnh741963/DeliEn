import React from "react"
import { View, Text } from "react-native-ui-lib"
import Screen from "../../../components/ScreenDeliEn/Screen"

const SearchScreen = () => {
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
        <Text>SearchScreen</Text>
      </View>
    </Screen>
  )
}

export default SearchScreen
