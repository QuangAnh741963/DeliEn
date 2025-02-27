import React, { useEffect } from "react"
import { ViewStyle, View } from "react-native"
import AppNavigator from "./navigators/AppNavigator"
import { initTheme } from "./theme/rnuiTheme"

interface AppProps {
  hideSplashScreen: () => Promise<boolean>
}
initTheme()

export default function App(props: AppProps) {
  const { hideSplashScreen } = props
  useEffect(() => {
    setTimeout(hideSplashScreen, 300)
  }, [])

  return (
    <View style={$container}>
      <AppNavigator />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
}
