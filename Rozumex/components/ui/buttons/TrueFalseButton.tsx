import React from "react";
type TrueFalseButtonProps = {
  classname?: string;
  onPress?: () => void;
};

import { View, Text, TouchableOpacity } from "react-native";
import ButtonIcon from "../../../assets/icons/true_false_button.svg";

export const TrueFalseButton: React.FC<TrueFalseButtonProps> = ({
  classname,
  onPress,
}) => {
  return (
    <View
      className={
        "w-[168px] h-[98px] flex items-center justify-center " + classname
      }
    >
      <TouchableOpacity onPress={onPress}>
        <ButtonIcon />
      </TouchableOpacity>
    </View>
  );
};
