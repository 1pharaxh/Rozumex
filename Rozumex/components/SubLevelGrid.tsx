import React, { useState, useEffect, useRef } from "react";
import { ScrollView, View } from "react-native";
import { CircleLevelButton } from "./ui/buttons/CircleLevelButton";
import { TrueFalseButton } from "./ui/buttons/TrueFalseButton";
import { DragnDropButton } from "./ui/buttons/DragnDropButton";
import { CoreTaskButton } from "./ui/buttons/CoreTaskButton";
import { GlowScriptButton } from "./ui/buttons/GlowScriptButton";
import Lines from "../assets/sublevel_lines.svg";
import Svg, { Line } from "react-native-svg";
type SubLevelGridProps = {
  modalBtnText: string;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SubLevelGrid: React.FC<SubLevelGridProps> = ({
  modalBtnText,
  setModalVisible,
}: SubLevelGridProps) => {
  // make two refs for the two buttons

  return (
    <View className="flex flex-col justify-start items-center h-full w-full">
      <View className="flex flex-row-reverse justify-end px-10 pt-10 items-start w-full z-10">
        <CircleLevelButton
          onPress={() => {
            setModalVisible(false);
            // animateButton();
          }}
          text={modalBtnText}
        />
      </View>
      <View className="flex flex-row-reverse justify-between items-start w-full z-10 px-5">
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
      <View className="flex flex-row justify-between items-start w-full pt-7 z-10 px-5">
        <TrueFalseButton />
        <DragnDropButton />
      </View>
      <CoreTaskButton classname="mt-8 z-10" text="Madagascar Apples " />
      <View className="absolute top-[105px] -z-1">
        <Lines
          style={{
            transform: [{ scaleX: 1.05 }, { scaleY: 1 }],
          }}
        />
      </View>

      {/* <Svg className="absolute">
        <Line
          x1="85"
          y1="268"
          x2="85"
          y2="300"
          stroke="#42A7E1"
          strokeWidth="4"
        />
      </Svg>

      <Svg className="absolute">
        <Line
          x1="295"
          y1="225"
          x2="295"
          y2="300"
          stroke="#42A7E1"
          strokeWidth="4"
        />
      </Svg> */}
    </View>
  );
};
