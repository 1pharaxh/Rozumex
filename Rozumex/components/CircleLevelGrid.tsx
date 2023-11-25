import React from "react";
type CircleLevelGridProps = {
  className?: string;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setModalBtnText: React.Dispatch<React.SetStateAction<string>>;
};
import { View, ScrollView } from "react-native";
import { CircleLevelButton } from "./CircleLevelButton";
export const CircleLevelGrid: React.FC<CircleLevelGridProps> = ({
  setModalVisible,
  setModalBtnText,
}: CircleLevelGridProps) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="pt-10 h-full w-full px-10 "
      showsVerticalScrollIndicator={false}
    >
      <View className="flex flex-col justify-center items-center w-full gap-y-28 pb-28">
        <View className="flex flex-row justify-start items-center w-full">
          <CircleLevelButton
            onPress={() => {
              setModalVisible(true);
              setModalBtnText("1 BASICS");
            }}
            text={"1 BASICS"}
          />
        </View>

        <View className="flex flex-row justify-end items-center w-full">
          <CircleLevelButton
            onPress={() => {
              setModalVisible(true);
              setModalBtnText("2 SOURCING");
            }}
            text={"2 SOURCING"}
          />
        </View>

        <View className="flex flex-row justify-center items-center w-full">
          <CircleLevelButton
            onPress={() => {
              setModalVisible(true);
              setModalBtnText("3 IDEAS");
            }}
            text={"3 IDEAS"}
          />
        </View>

        <View className="flex flex-row justify-start items-center w-full">
          <CircleLevelButton
            onPress={() => {
              setModalVisible(true);
              setModalBtnText("4 VALIDATION");
            }}
            text={"4 VALIDATION"}
          />
        </View>

        <View className="flex flex-row justify-end items-center w-full">
          <CircleLevelButton
            onPress={() => {
              setModalVisible(true);
              setModalBtnText("5 MOTIVATION");
            }}
            text={"5 MOTIVATION"}
          />
        </View>

        <View className="flex flex-row justify-center items-center w-full">
          <CircleLevelButton
            onPress={() => {
              setModalVisible(true);
              setModalBtnText("6 HELPERS");
            }}
            text={"6 HELPERS"}
          />
        </View>

        <View className="flex flex-row justify-start items-center w-full">
          <CircleLevelButton
            onPress={() => {
              setModalVisible(true);
              setModalBtnText("7 STARTING");
            }}
            text={"7 STARTING"}
          />
        </View>
      </View>
    </ScrollView>
  );
};
