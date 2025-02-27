import React from "react"
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  ViewStyle,
  StatusBarProps,
} from "react-native"

interface ScreenProps {
  children: React.ReactNode
  statusBarProps?: StatusBarProps
}

const Screen: React.FC<ScreenProps> = ({ children, statusBarProps }) => {
  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
        showHideTransition="slide"
        hidden={false}
        {...statusBarProps}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={keyboardAvoidingViewStyle}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Screen

const containerStyle: ViewStyle = {
  flex: 1,
  height: "100%",
  width: "100%",
}

const keyboardAvoidingViewStyle: ViewStyle = {
  flex: 1,
}
