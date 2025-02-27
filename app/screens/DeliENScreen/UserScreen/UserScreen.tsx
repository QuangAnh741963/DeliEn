import React from "react"
import { View, Text } from "react-native-ui-lib"
import Screen from "app/components/ScreenDeliEn/Screen"

const UserScreen = () => {
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
        <Text>UserScreen</Text>
      </View>
    </Screen>
  )
}

export default UserScreen
