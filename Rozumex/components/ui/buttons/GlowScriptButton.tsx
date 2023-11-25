type GlowScriptButtonProps = {
  text: string;
  classname?: string;
  durationtext: string;
  onPress?: () => void;
};

import { useFonts, Nunito_900Black } from "@expo-google-fonts/nunito";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ButtonIcon from "../../../assets/icons/glowscript_button.svg";

export const GlowScriptButton: React.FC<GlowScriptButtonProps> = ({
  text,
  durationtext,
  classname,
  onPress,
}) => {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

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
        <View className=" absolute flex flex-col justify-between items-center pt-3 pb-2 w-full h-full gap-y-2">
          <Text
            style={{
              fontFamily: "Nunito_900Black",
              fontSize: 18,
              color: "#FFF8DC",
              margin: 0,
              textAlign: "center", // Center align the text
            }}
          >
            {text}
          </Text>

          <Text
            style={{
              fontFamily: "Nunito_900Black",
              fontSize: 12,
              color: "#FFF8DC",
              margin: 0,
              textAlign: "center", // Center align the text
            }}
          >
            ~ {durationtext}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
