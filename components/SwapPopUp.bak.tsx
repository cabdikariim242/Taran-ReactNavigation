import { images } from "@/assets/images";
import React, { useState } from "react";
// import { router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index2() {
  const [selectedValue, setSelectedValue] = useState("apple");
  const [ShowAdv, setShowAdv] = useState(false);

  return (
    <View className="w-full h-full max-h-[650px]  ">
      {/* ScrollView with fixed height */}
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* Header */}
        <View className="flex-row justify-start border-b border-[#0C4C7B1A] h-[54px] px-7 gap-3 py-2 items-center w-full mx-auto">
          <Image source={images.back} className="w-[16px] h-[16px]" />
          <Text className="text-[#0C4C7B96] text-[18px] font-[500]">Back</Text>
        </View>
      </ScrollView>
    </View>
  );
}
