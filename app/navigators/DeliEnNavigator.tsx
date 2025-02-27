import React from "react"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import HomeScreen from "app/screens/DeliENScreen/HomeScreen/HomeScreen"
import PlayScreen from "app/screens/DeliENScreen/PlayScreen/PlayScreen"
import UserScreen from "app/screens/DeliENScreen/UserScreen/UserScreen"
import SearchScreen from "app/screens/DeliENScreen/SearchScreen/SearchScreen"

import { Image } from "react-native"

const HomeIcon = require("../../assets/icons/home.png")
const SearchIcon = require("../../assets/icons/search.png")
const PlayIcon = require("../../assets/icons/play-circle.png")
const UserIcon = require("../../assets/icons/user.png")

const Tab = createMaterialBottomTabNavigator()

const DeliEnNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Image source={HomeIcon} width={22} height={22} />,
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: () => <Image source={SearchIcon} width={22} height={22} />,
        }}
      />
      <Tab.Screen
        name="PlayScreen"
        component={PlayScreen}
        options={{
          tabBarLabel: "Play",
          tabBarIcon: () => <Image source={PlayIcon} width={22} height={22} />,
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          tabBarLabel: "User",
          tabBarIcon: () => <Image source={UserIcon} width={22} height={22} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default DeliEnNavigator
