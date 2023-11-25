import { useFonts, Rubik_900Black } from "@expo-google-fonts/rubik";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ButtonIcon from "../../../assets/icons/main_level_icon.svg";
type CircleLevelProps = {
  text: string;
  classname?: string;
  onPress?: () => void;
};

export const CircleLevelButton: React.FC<CircleLevelProps> = ({
  text,
  classname,
  onPress,
}) => {
  let [fontsLoaded, fontError] = useFonts({
    Rubik_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const [line1, line2] = text.split(" ");
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={
          "rounded-full w-[168px] h-[98px] pt-4 flex flex-row items-center justify-center relative" +
          classname
        }
      >
        <ButtonIcon
          style={{
            position: "absolute",
            shadowColor: "#000",
            shadowOffset: {
              width: 3,
              height: 5,
            },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 25,
          }}
        />
        <Text
          style={{
            position: "absolute",
            fontFamily: "Rubik_900Black",
            fontSize: 23,
            color: "#42A7E1",
            margin: 0,
            textAlign: "center", // Center align the text
          }}
        >
          {line1}
          {"\n"}
          {line2}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
