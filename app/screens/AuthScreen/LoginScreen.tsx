import React from "react"
import { View, Text, Image } from "react-native-ui-lib"
import { Alert, TouchableOpacity, StatusBar } from "react-native"
import { useStore } from "../../models/helper/useStore"
import * as images from "./components/images"
import * as styles from "./components/styles"
import { observer } from "mobx-react-lite"

const LoginScreen = observer(({ navigation }: any) => {
  const { authenticationStore } = useStore()

  const onPress = async () => {
    await authenticationStore.login()

    if (authenticationStore.isLoggedIn) {
      console.log("isAuthenticated: " + authenticationStore.isLoggedIn)
      navigateDeliEnApp()
    } else {
      Alert.alert(`Login Fail`)
    }
  }

  const navigateDeliEnApp = () => {
    navigation.navigate("DeliEn")
  }

  return (
    <View flex-1 background-white>
      <StatusBar animated={true} backgroundColor="#f4f5f6" barStyle={`dark-content`} />
      <View flex-4 center background-blue>
        <Image source={images.LoginImageBackground} style={styles.imageStyle1} />
        <Image source={images.LoginImage} style={styles.imageStyle2} />
      </View>

      <View flex-3 center marginT-20>
        <Text text20>DeliEn</Text>
        <Text>Your English Coach</Text>
      </View>

      <View flex-3 marginT-90 center>
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
          <Text style={styles.buttonTextStyle}>Continue with Tiki</Text>
        </TouchableOpacity>

        <View marginT-24>
          <Text>Or Sign In with Email</Text>
        </View>
      </View>
    </View>
  )
})

export default LoginScreen
