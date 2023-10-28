import { useFonts, Rubik_300Light_Italic } from "@expo-google-fonts/rubik";
import React from "react";
import { View, Text, Image } from "react-native";

type StatusBarProps = {
  num1: number;
  num2: number;
  num3: number;
};

export const StatusBar: React.FC<StatusBarProps> = ({ num1, num2, num3 }) => {
  let [fontsLoaded, fontError] = useFonts({
    Rubik_300Light_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      className="p-3 rounded-[30px] bg-amber-100"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: -10,
          height: -10,
        },
        shadowOpacity: 0.8,
        shadowRadius: 50,
        elevation: 30,
      }}
    >
      <View className="flex-row flex justify-center gap-6 px-4 py-2">
        <View className="flex-row flex justify-center">
          <Text
            style={{
              fontFamily: "Rubik_900Black",
              fontSize: 30,
              color: "#4B4A4A",
              margin: 0,
            }}
          >
            {num1}
          </Text>
          <Image
            source={require("../assets/icons/rozumex_logo.png")}
            style={{ width: 35, height: 35, objectFit: "contain" }}
          />
        </View>

        <View className="flex-row flex justify-center">
          <Text
            style={{
              fontFamily: "Rubik_900Black",
              fontSize: 30,
              color: "#4B4A4A",
              margin: 0,
            }}
          >
            {num2}
          </Text>
          <Image
            source={require("../assets/icons/red_heart.png")}
            style={{ width: 32, height: 30, objectFit: "contain" }}
          />
        </View>

        <View className="flex-row flex justify-center">
          <Text
            style={{
              fontFamily: "Rubik_900Black",
              fontSize: 30,
              color: "#4B4A4A",
              margin: 0,
            }}
          >
            {num3}
          </Text>
          <Image
            source={require("../assets/icons/xp.png")}
            style={{ width: 44, height: 36, objectFit: "contain" }}
          />
        </View>
      </View>
    </View>
  );
};
