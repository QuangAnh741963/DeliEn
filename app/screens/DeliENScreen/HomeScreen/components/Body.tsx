import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native-ui-lib"
import {
  SafeAreaView,
  FlatList,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
} from "react-native"

import * as images from "./images"

interface Item {
  image: ImageSourcePropType
}

interface ListItem {
  title: string
  items: Item[]
}

const data: ListItem[] = [
  {
    title: "Recommend",
    items: [
      { image: images.HotelGreen1 },
      { image: images.HotelGreen2 },
      { image: images.HotelGreen1 },
    ],
  },
  {
    title: "Editor choice",
    items: [
      { image: images.HotelGreen3 },
      { image: images.HotelGreen4 },
      { image: images.HotelGreen1 },
    ],
  },
  {
    title: "Hot courses",
    items: [
      { image: images.HotelGreen5 },
      { image: images.HotelGreen6 },
      { image: images.HotelGreen1 },
    ],
  },
]

const renderItem = ({
  navigation,
  item,
  index,
  listItem,
}: {
  navigation: any
  item: Item
  index: number
  listItem: ListItem
}) => {
  const navigateLessonDragDrop = () => {
    if (item.image === images.HotelGreen1) {
      navigation.navigate("VocabularyLessonDragDrop")
    }
    if (item.image === images.HotelGreen3) {
      navigation.navigate("VocabularyLessonDragInput")
    }
    if (item.image === images.HotelGreen5) {
      navigation.navigate("VocabularyLessonDragSelection")
    }
  }

  const marginLeft = index === 0 ? 20 : 12
  const marginRight = index === listItem.items.length - 1 ? 20 : 0

  return (
    <TouchableOpacity onPress={navigateLessonDragDrop}>
      <View style={{ ...renderItemStyle, marginLeft, marginRight }}>
        <Image source={item.image} style={imageStyle} />
      </View>
    </TouchableOpacity>
  )
}

const renderListItem = ({ navigation, listItem }: { navigation: any; listItem: ListItem }) => {
  return (
    <View>
      <Text style={textStyle}>{listItem.title}</Text>
      <View>
        <FlatList
          data={listItem.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => renderItem({ navigation, item, index, listItem })}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </View>
    </View>
  )
}

const Body = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={container}>
      <View style={containerContent}>
        <FlatList
          data={data}
          renderItem={({ item }) => renderListItem({ navigation, listItem: item })}
          keyExtractor={(listItem) => listItem.title}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default Body

const container: ViewStyle = {
  flex: 1,
  backgroundColor: "#fff5d7",
}

const containerContent: ViewStyle = {
  borderRadius: 16,
  backgroundColor: "#ffff",
  height: "100%",
  paddingVertical: 25,
}

const renderItemStyle: ViewStyle = {
  flexDirection: "row",
  paddingVertical: 20,
}

const imageStyle: ImageStyle = {
  width: 150,
  height: 120,
  borderRadius: 16,
  paddingTop: 80,
  paddingLeft: 16,
}

const textStyle: TextStyle = {
  color: "#321F0E",
  fontFamily: "SF Pro Display",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: 24,
  lineHeight: 24,
  marginLeft: 20,
}
