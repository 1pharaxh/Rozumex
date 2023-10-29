import { useFonts, Rubik_900Black } from "@expo-google-fonts/rubik";
import React from "react";
import { View, Text } from "react-native";

type CircleLevelProps = {
  num: number;
  className?: string;
};

export const CircleLevel: React.FC<CircleLevelProps> = ({ num, className }) => {
  let [fontsLoaded, fontError] = useFonts({
    Rubik_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      className={
        "border-4 border-amber-500 bg-amber-100 rounded-full w-[78px] h-[78px] flex flex-row items-center justify-center " +
        className
      }
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 25,
      }}
    >
      <Text
        style={{
          fontFamily: "Rubik_900Black",
          fontSize: 30,
          color: "#4B4A4A",
          margin: 0,
        }}
      >
        {num}
      </Text>
    </View>
  );
};
