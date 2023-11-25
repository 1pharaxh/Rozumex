import React from "react";
type DragnDropButtonProps = {
  className?: string;
  onPress?: () => void;
};

import { View, Text, TouchableOpacity } from "react-native";
import ButtonIcon from "../../../assets/icons/drag_n_drap_button.svg";

export const DragnDropButton: React.FC<DragnDropButtonProps> = ({
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
