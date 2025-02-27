import React from "react"
import { View } from "react-native-ui-lib"
import Header from "./components/Header"
import Body from "./components/Body"

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View flex>
      <View flex-1>
        <Header />
      </View>

      <View flex-3>
        <Body navigation = {navigation}/>
      </View>
    </View>
  )
}

export default HomeScreen
