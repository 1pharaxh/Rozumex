import React, { useRef } from "react";
import { View } from "react-native";
import { CircleLevelButton } from "./ui/buttons/CircleLevelButton";
import { TrueFalseButton } from "./ui/buttons/TrueFalseButton";
import { DragnDropButton } from "./ui/buttons/DragnDropButton";
import { CoreTaskButton } from "./ui/buttons/CoreTaskButton";
import { GlowScriptButton } from "./ui/buttons/GlowScriptButton";
type SubLevelGridProps = {
  modalBtnText: string;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SubLevelGrid: React.FC<SubLevelGridProps> = ({
  modalBtnText,
  setModalVisible,
}: SubLevelGridProps) => {
  // make two refs for the two buttons
  const TrueFalseButtonRef = useRef(null);
  const DragnDropButtonRef = useRef(null);
  return (
    <View className="flex flex-col justify-start items-center h-full w-full">
      <View className="flex flex-row-reverse justify-end px-10 pt-10 items-start w-full">
        <CircleLevelButton
          onPress={() => {
            setModalVisible(false);
            // animateButton();
          }}
          text={modalBtnText}
        />
      </View>

      <View className="flex flex-row-reverse justify-between items-start w-full">
        <GlowScriptButton
          text="Why cite"
          durationtext="1.5 min"
        ></GlowScriptButton>
        <View className="mt-10">
          <GlowScriptButton
            text="Why research"
            durationtext="1.5 min"
          ></GlowScriptButton>
        </View>
      </View>

      <View className="flex flex-row justify-between items-start w-full py-5">
        <TrueFalseButton />
        <DragnDropButton />
      </View>
      <CoreTaskButton classname="mt-10" text="Madagascar Apples" />
    </View>
  );
};
