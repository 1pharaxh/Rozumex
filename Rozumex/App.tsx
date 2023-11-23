import React, { useRef, useState } from "react";
import {
  View,
  StatusBar,
  Image,
  ScrollView,
  SafeAreaView,
  Text,
  Animated,
} from "react-native";
import { useFonts, Rubik_900Black } from "@expo-google-fonts/rubik";
import { ScoreBar } from "./components/ScoreBar";
import { Modal, TouchableOpacity } from "react-native";
import { CircleLevel } from "./components/CircleLevel";
import { BlurView } from "expo-blur";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const position = useRef(new Animated.ValueXY()).current;
  const [modalBtnText, setModalBtnText] = useState("");

  const animateButton = () => {
    Animated.timing(position, {
      toValue: { x: 120, y: 320 }, // Change these values to move the button
      duration: 500, // Duration of the animation
      useNativeDriver: false, // Change this to true if you're not changing the layout
    }).start();
  };

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
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <BlurView className="w-full h-full" intensity={40} tint={"light"}>
          <SafeAreaView className="px-4 w-full h-full flex-1 items-center justify-start  pt-20">
            {/* Your modal content goes here */}

            <ScoreBar
              className="absolute top-0 left-0"
              bottle={21}
              health={5}
              xp={458}
            />

            <View className="flex flex-row-reverse justify-end p-10 items-start h-full w-full">
              <CircleLevel
                onPress={() => {
                  setModalVisible(false);
                  // animateButton();
                }}
                text={modalBtnText}
              />
            </View>
          </SafeAreaView>
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
          <Animated.View
            style={position.getLayout()}
            className="flex flex-row justify-start items-center w-full"
          >
            <CircleLevel
              onPress={() => {
                setModalVisible(true);
                setModalBtnText("1 BASICS");
              }}
              text={"1 BASICS"}
            />
          </Animated.View>

          <View className="flex flex-row justify-end items-center w-full">
            <CircleLevel
              onPress={() => {
                setModalVisible(true);
                setModalBtnText("2 SOURCING");
              }}
              text={"2 SOURCING"}
            />
          </View>

          <View className="flex flex-row justify-center items-center w-full">
            <CircleLevel
              onPress={() => {
                setModalVisible(true);
                setModalBtnText("3 IDEAS");
              }}
              text={"3 IDEAS"}
            />
          </View>

          <View className="flex flex-row justify-start items-center w-full">
            <CircleLevel
              onPress={() => {
                setModalVisible(true);
                setModalBtnText("4 VALIDATION");
              }}
              text={"4 VALIDATION"}
            />
          </View>

          <View className="flex flex-row justify-end items-center w-full">
            <CircleLevel
              onPress={() => {
                setModalVisible(true);
                setModalBtnText("5 MOTIVATION");
              }}
              text={"5 MOTIVATION"}
            />
          </View>

          <View className="flex flex-row justify-center items-center w-full">
            <CircleLevel
              onPress={() => {
                setModalVisible(true);
                setModalBtnText("6 HELPERS");
              }}
              text={"6 HELPERS"}
            />
          </View>

          <View className="flex flex-row justify-start items-center w-full">
            <CircleLevel
              onPress={() => {
                setModalVisible(true);
                setModalBtnText("7 STARTING");
              }}
              text={"7 STARTING"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
