import { Modal, TouchableWithoutFeedback, View } from "react-native"
import { Image } from "react-native-ui-lib"
import React from "react"

import * as images from "../VocabularyLessonDragDrop/services/images"

const ModalResult = ({ modalVisible, setModalVisible, navigation }: any) => {
  const navigateToNewScreen = () => {
    navigation.navigate("DeliEn")
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
    >
      <TouchableWithoutFeedback onPress={navigateToNewScreen}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F06966",
          }}
        >
          <View>
            <View>
              <Image source={images.passImage} width={160} height={160} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default ModalResult
