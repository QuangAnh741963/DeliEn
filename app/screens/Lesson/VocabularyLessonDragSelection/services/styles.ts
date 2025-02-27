import { ViewStyle } from "react-native"
import { CellSize } from "./SizeStyle"

export const containerStyle: ViewStyle = {
  flex: 1,
  position: `relative`,
}

export const selectZoneStyle: ViewStyle = {
  position: `absolute`,
  width: `100%`,
  bottom: `10%`,
}

export const cellStyle: ViewStyle = {
  height: CellSize.HEIGHT,
  width: CellSize.WIDTH,
  margin: CellSize.MARGIN,
  shadowOpacity: 1,
  shadowColor: "white",
  shadowOffset: { height: 1, width: 0 },
}
