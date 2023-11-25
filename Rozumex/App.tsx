import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StatusBar,
  Image,
  ScrollView,
  SafeAreaView,
  Text,
  Animated,
  Modal,
} from "react-native";
import { useFonts, Rubik_900Black } from "@expo-google-fonts/rubik";
import { Nunito_900Black } from "@expo-google-fonts/nunito";
import { ScoreBar } from "./components/ScoreBar";
import { BlurView } from "expo-blur";
import { Platform } from "react-native";
import { CircleLevelButton } from "./components/CircleLevelButton";
import { CircleLevelGrid } from "./components/CircleLevelGrid";
import { GlowScriptButton } from "./components/GlowScriptButton";
import { DragnDropButton } from "./components/DragnDropButton";
import { TrueFalseButton } from "./components/TrueFalseButton";
import { CoreTaskButton } from "./components/CoreTaskButton";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalBtnText, setModalBtnText] = useState("");
  const [safeAreaPadding, setSafeAreaPadding] = useState("pt-20");
  useEffect(() => {
    if (Platform.OS === "android") {
      setSafeAreaPadding("pt-10");
    }
  }, []);
  const position = useRef(new Animated.ValueXY()).current;

  const animateButton = () => {
    Animated.timing(position, {
      toValue: { x: 120, y: 320 }, // Change these values to move the button
      duration: 500, // Duration of the animation
      useNativeDriver: false, // Change this to true if you're not changing the layout
    }).start();
  };

  let [fontsLoaded] = useFonts({
    Rubik_900Black,
    Nunito_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      className={
        "px-4 w-full h-full flex-1 items-center justify-start bg-[#FAC129] " +
        safeAreaPadding
      }
    >
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
          <SafeAreaView
            className={
              "px-4 w-full h-full flex-1 items-center justify-start  " +
              safeAreaPadding
            }
          >
            {/* Your modal content goes here */}

            <ScoreBar
              className="absolute top-0 left-0"
              bottle={21}
              health={5}
              xp={458}
            />
            <View className="flex flex-col justify-start items-center h-full w-full">
              <View className="flex flex-row-reverse justify-end p-10 items-start w-full">
                <CircleLevelButton
                  onPress={() => {
                    setModalVisible(false);
                    // animateButton();
                  }}
                  text={modalBtnText}
                />
              </View>
              <GlowScriptButton text="GLOWSCRIPT text"></GlowScriptButton>
              <DragnDropButton />
              <TrueFalseButton />
              <CoreTaskButton text="CORE TASK text" />
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

      <CircleLevelGrid
        setModalVisible={setModalVisible}
        setModalBtnText={setModalBtnText}
      />
    </SafeAreaView>
  );
}
