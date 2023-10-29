import React, { useState, useEffect } from "react";
import { View, StatusBar, Image, ScrollView } from "react-native";
import { useFonts, Rubik_900Black } from "@expo-google-fonts/rubik";
import { ScoreBar } from "./components/ScoreBar";
import RuneGroupIcon from "./assets/icons/rune_group_icon.svg";

import { CircleLevel } from "./components/CircleLevel";
export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="px-4 w-full h-full flex-1 items-center justify-start bg-yellow-500 pt-20">
      <StatusBar barStyle={"default"} />

      <ScoreBar num1={21} num2={3} num3={284} />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="pt-10 h-full w-full relative"
      >
        <RuneGroupIcon width={300} height={700} />

        <View className="absolute top-0 left-10">
          <CircleLevel num={1} />
        </View>

        <View className="absolute top-24 left-36">
          <CircleLevel num={2} />
        </View>

        <View className="absolute top-48 right-10">
          <CircleLevel num={3} />
        </View>

        <View className="absolute top-64 left-6">
          <CircleLevel num={4} />
        </View>

        <View className="absolute top-[390px] right-16">
          <CircleLevel num={6} />
        </View>

        <View className="absolute top-[410px] left-10">
          <CircleLevel num={5} />
        </View>

        <View className="absolute top-[480px] left-1/3">
          <CircleLevel num={7} />
        </View>

        <View className="absolute top-[530px] left-8">
          <CircleLevel num={8} />
        </View>
      </ScrollView>
    </View>
  );
}
