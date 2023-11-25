type CoreTaskButtonProps = {
  text: string;
  classname: string;
  onPress?: () => void;
};

import { useFonts, Nunito_900Black } from "@expo-google-fonts/nunito";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ButtonIcon from "../../../assets/icons/core_task_button.svg";

export const CoreTaskButton: React.FC<CoreTaskButtonProps> = ({
  text,
  classname,
  onPress,
}) => {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const [line1, line2] = text.split(" ");
  return (
    <TouchableOpacity
      onPress={onPress}
      className={
        "rounded-full w-[168px] h-[98px] flex flex-row items-center justify-center relative " +
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
          fontFamily: "Nunito_900Black",
          fontSize: 22,
          color: "#FAA241",
          margin: 0,
          textAlign: "center", // Center align the text
        }}
      >
        {line1}
        {"\n"}
        {line2}
      </Text>
    </TouchableOpacity>
  );
};
