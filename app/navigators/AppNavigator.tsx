import React from "react"
import { observer } from "mobx-react-lite"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "app/screens/AuthScreen/LoginScreen"
import DeliEnNavigator from "./DeliEnNavigator"
import SettingsScreen from "app/screens/DeliENScreen/SettingsScreen/SettingsScreen"
import StartPremiumScreen from "app/screens/DeliENScreen/UpgradePremiumAccountScreen/StartPremiumScreen/StartPremiumScreen"

import VocabularyLessonDragDrop from "app/screens/Lesson/VocabularyLessonDragDrop/VocabularyLessonDragDrop"
import VocabularyLessonDragInput from "app/screens/Lesson/VocabularyLessonDragInput/VocabularyLessonDragInput"
import VocabularyLessonDragSelection from "app/screens/Lesson/VocabularyLessonDragSelection/VocabularyLessonDragSelection"

const Stack = createNativeStackNavigator()
const AppStack = observer(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="VocabularyLessonDragSelection"
        component={VocabularyLessonDragSelection}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="DeliEn" component={DeliEnNavigator} options={{ headerShown: false }} />
      
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: true }} />
      <Stack.Screen
        name="UpgradePremium"
        component={StartPremiumScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VocabularyLessonDragInput"
        component={VocabularyLessonDragInput}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VocabularyLessonDragDrop"
        component={VocabularyLessonDragDrop}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
})

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}

export default AppNavigator
