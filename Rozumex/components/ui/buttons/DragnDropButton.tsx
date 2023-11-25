import React from "react";
type DragnDropButtonProps = {
  classname?: string;
  onPress?: () => void;
};

import { View, Text, TouchableOpacity } from "react-native";
import ButtonIcon from "../../../assets/icons/drag_n_drap_button.svg";

export const DragnDropButton: React.FC<DragnDropButtonProps> = ({
  classname,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={
          "w-[168px] h-[98px] flex items-center justify-center " + classname
        }
      >
        <ButtonIcon />
      </View>
    </TouchableOpacity>
  );
};
