import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts, Rubik_900Black } from "@expo-google-fonts/rubik";
import { StatusBar } from "./components/StatusBar";
export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="px-4 h-full flex-1 items-center justify-center bg-yellow-500">
      <StatusBar num1={222} num2={70} num3={284} />
    </View>
  );
}
