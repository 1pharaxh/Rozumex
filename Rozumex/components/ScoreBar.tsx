import { useFonts, Rubik_300Light_Italic } from "@expo-google-fonts/rubik";
import React from "react";
import { View, Text, Image } from "react-native";

type StatusBarProps = {
  bottle: number;
  health: number;
  xp: number;
  className?: string;
};

export const ScoreBar: React.FC<StatusBarProps> = ({
  bottle,
  health,
  xp,
  className,
}) => {
  let [fontsLoaded, fontError] = useFonts({
    Rubik_300Light_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      className={"px-3 py-2 rounded-[60px] bg-[#FFF8DC] " + className}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 25,
      }}
    >
      <View className="flex-row flex justify-center gap-6 px-4 py-2">
        <View className="flex-row flex justify-center">
          <Text
            style={{
              fontFamily: "Rubik_900Black",
              fontSize: 34,
              color: "#4B4A4A",
              margin: 0,
            }}
          >
            {health}
          </Text>
          <Image
            source={require("../assets/icons/red_heart.png")}
            style={{ width: 32, height: 35, objectFit: "contain" }}
          />
        </View>

        <View className="flex-row flex justify-center">
          <Text
            style={{
              fontFamily: "Rubik_900Black",
              fontSize: 34,
              color: "#4B4A4A",
              margin: 0,
            }}
          >
            {xp}
          </Text>
          <Image
            source={require("../assets/icons/xp.png")}
            style={{ width: 44, height: 40, objectFit: "contain" }}
          />
        </View>

        <View className="flex-row flex justify-center">
          <Text
            style={{
              fontFamily: "Rubik_900Black",
              fontSize: 34,
              color: "#4B4A4A",
              margin: 0,
            }}
          >
            {bottle}
          </Text>
          <Image
            source={require("../assets/icons/rozumex_logo.png")}
            style={{ width: 35, height: 35, objectFit: "contain" }}
          />
        </View>
      </View>
    </View>
  );
};
