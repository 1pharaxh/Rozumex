import React from "react";
type TrueFalseButtonProps = {
  className?: string;
  onPress?: () => void;
};

import { View, Text, TouchableOpacity } from "react-native";
import ButtonIcon from "../assets/icons/true_false_button.svg";

export const TrueFalseButton: React.FC<TrueFalseButtonProps> = ({
  className,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className={className}>
        <ButtonIcon />
      </View>
    </TouchableOpacity>
  );
};
