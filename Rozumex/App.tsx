import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { useFonts, Rubik_900Black } from "@expo-google-fonts/rubik";
import { ScoreBar } from "./components/ScoreBar";
import { CircleLevel } from "./components/CircleLevel";
export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="px-4 h-full flex-1 items-center justify-start bg-yellow-500 pt-20">
      <ScoreBar num1={21} num2={3} num3={284} />
      <View className="mt-24 relative">
        <View className="absolute top-[-40px] right-[80px]">
          <CircleLevel num={1} />
        </View>

        <View className="absolute top-[60px] right-[-40px]">
          <CircleLevel num={2} />
        </View>

        <View className="absolute top-[160px] right-[-140px]">
          <CircleLevel num={3} />
        </View>
      </View>
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
}
