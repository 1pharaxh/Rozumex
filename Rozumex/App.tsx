import React, { useState } from "react";
import {
  View,
  StatusBar,
  Image,
  ScrollView,
  SafeAreaView,
  Text,
} from "react-native";
import { useFonts, Rubik_900Black } from "@expo-google-fonts/rubik";
import { ScoreBar } from "./components/ScoreBar";
import { Modal, TouchableOpacity } from "react-native";
import { CircleLevel } from "./components/CircleLevel";
import { BlurView } from "expo-blur";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  let [fontsLoaded] = useFonts({
    Rubik_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="px-4 w-full h-full flex-1 items-center justify-start bg-[#FAC129] pt-20">
      <StatusBar barStyle={"default"} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <BlurView
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          intensity={100}
          tint={"light"}
        >
          {/* Your modal content goes here */}

          <TouchableOpacity
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text>Close!</Text>
          </TouchableOpacity>
        </BlurView>
      </Modal>

      <ScoreBar
        className="absolute top-0 left-0"
        bottle={21}
        health={5}
        xp={458}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="pt-10 h-full w-full px-10 "
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-col justify-center items-center w-full gap-y-28 pb-28">
          <View className="flex flex-row justify-start items-center w-full">
            <CircleLevel
              onPress={() => setModalVisible(true)}
              text={"1 BASICS"}
            />
          </View>

          <View className="flex flex-row justify-end items-center w-full">
            <CircleLevel
              onPress={() => setModalVisible(true)}
              text={"2 SOURCING"}
            />
          </View>

          <View className="flex flex-row justify-center items-center w-full">
            <CircleLevel
              onPress={() => setModalVisible(true)}
              text={"3 IDEAS"}
            />
          </View>

          <View className="flex flex-row justify-start items-center w-full">
            <CircleLevel
              onPress={() => setModalVisible(true)}
              text={"4 VALIDATION"}
            />
          </View>

          <View className="flex flex-row justify-end items-center w-full">
            <CircleLevel
              onPress={() => setModalVisible(true)}
              text={"5 MOTIVATION"}
            />
          </View>

          <View className="flex flex-row justify-center items-center w-full">
            <CircleLevel
              onPress={() => setModalVisible(true)}
              text={"6 HELPERS"}
            />
          </View>

          <View className="flex flex-row justify-start items-center w-full">
            <CircleLevel
              onPress={() => setModalVisible(true)}
              text={"7 STARTING"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
