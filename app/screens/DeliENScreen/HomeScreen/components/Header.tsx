import React from "react"
import { View, Image, Text, TouchableOpacity } from "react-native-ui-lib"
import { StatusBar, TextStyle, ViewStyle } from "react-native"

import * as images from "./images"

const Header = () => {
  return (
    <View flex-1 backgroundColor="#fff5d7">
      <StatusBar
        animated={true}
        backgroundColor="#fff5d7"
        barStyle="dark-content"
        showHideTransition="slide"
        hidden={false}
      />
      <View flex-1>
        <View flex-1 row paddingL-20 paddingT-12>
          <View>
            <Image
              style={imageStyle}
              source={{
                uri: images.Avatar,
              }}
            />
          </View>

          <View>
            <Text style={textStyle1}>Welcome back</Text>
            <Text style={textStyle2}>Ariana Grinder</Text>
          </View>
        </View>

        <View flex-1 row marginT-24 marginB-24 paddingL-20 paddingR-16 spread centerV>
          <View>
            <Text style={textStyle3}>Food & Drinks</Text>
            <Text style={textStyle4}>Food</Text>
            <Image source={require("assets/icons/food.png")} />
          </View>

          <View centerH>
            <TouchableOpacity style={buttonStyle}>
              <Text style={textStyle5}>Continue</Text>
              <Image source={images.ImageButton} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Header

const imageStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  marginRight: 10,
}

const textStyle1: TextStyle = {
  fontFamily: "SF Pro Display",
  fontStyle: "normal",
  fontWeight: "600",
  color: "rgba(50, 31, 14, 0.60)",
  lineHeight: 16,
  fontSize: 12,
  fontVariant: ["small-caps"],
}

const textStyle2: TextStyle = {
  fontFamily: "SF Pro Display",
  fontStyle: "normal",
  fontWeight: "600",
  color: "#321F0E",
  lineHeight: 20,
  fontSize: 15,
}

const textStyle3: TextStyle = {
  fontFamily: "SF Pro Display",
  fontStyle: "normal",
  fontWeight: "600",
  color: "#321F0E",
  lineHeight: 20,
  fontSize: 14,
  marginBottom: 11,
}

const textStyle4: TextStyle = {
  fontFamily: "SF Pro Display",
  fontStyle: "normal",
  fontWeight: "600",
  color: "#321F0E",
  lineHeight: 24,
  fontSize: 24,
  marginBottom: 14,
}

const textStyle5: TextStyle = {
  color: "#fff",
  marginLeft: 20,
  marginRight: 8,
}

const buttonStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#567DF4",
  padding: 10,
  borderRadius: 24,
  width: 126,
  height: 40,
}
