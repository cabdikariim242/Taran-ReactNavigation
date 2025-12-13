import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { images } from "../assets/images";

export default function transaction() {
  return (
    <View className="flex-1  justify-start w-full px-6 pt-4 pb-8 relative items-center bg-[#ffffff84]">
      {/* the top bar icon and text */}
      <View className="flex-row justify-between border-b border-[#0C4C7B1A] pb-4 items-center w-full mx-auto ">
        {/* IMG AND TEXT */}
        <View className="flex flex-row   gap-4 mt-4 justify-center items-center  ">
          <Image source={images.Award} className="w-[46px] h-[60px]" />
          <View className="flex ">
            <Text className="text-[#0C4C7B96] text-[10px] font-[500]">
              Total Exchange
            </Text>
            <Text className="text-[#0C4C7B] text-[20px] font-[600]">
              $1,236.54
            </Text>
          </View>
        </View>
        <Image
          source={images.transactionIcon}
          className="w-[42px] h-[42px]  "
        />
      </View>
      {/* Cards */}
      <View className="h-[560px] mt-4">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="gap-4">
            <Cards status="confirming" icon={images.EVC} />
            <Cards status="complete" icon={images.Pbank} />
            <Cards status="failed" icon={images.EVCtoFiat} />
            <Text className="font-[500]  text-[#0C4C7B] text-[15px] border-b border-[#0C4C7B1A] pb-4">
              Yesterday
            </Text>
            <Cards status="failed" icon={images.Ebase} />
            <Cards status="complete" icon={images.EVCtoFiat} />
            <Text className="font-[500]  text-[#0C4C7B] text-[15px] border-b border-[#0C4C7B1A] pb-4">
              Sep 13, 2024
            </Text>
            <Cards status="failed" icon={images.EVC} />
            <Cards status="complete" icon={images.EVCtoFiat} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

interface CardProps {
  status: string;
  icon: ImageSourcePropType;
}
const Cards = ({ status, icon }: CardProps) => {
  return (
    <View className="flex flex-row justify-center gap-1 items-center w-[355px] h-[80px] bg-white rounded-[12px]">
      {/* IMAGE */}
      <Image source={icon} className="w-[56px] h-[48px]" />
      {/* You get */}
      <View className="flex justify-start items-start border-r pr-2 border-[#0C4C7B80] ">
        <Text className="font-[400] text-[7px] text-[#0C4C7BB2] ">You get</Text>
        <Text className="font-[600] text-[#0C4C7B] text-[12px]">$3,132.00</Text>
        <Text className="font-[400] text-[#0C4C7BE5] text-[8px]">
          2024-05-26 2:37:05
        </Text>
      </View>
      {/* Fee */}
      <View className="flex justify-start items-start border-r px-2 border-[#0C4C7B80] ">
        <Text className="font-[400] text-[7px] text-[#0C4C7BB2] ">Fee</Text>
        <Text className="font-[600] text-[#34C759] text-[12px]">$10.66</Text>
        <Text className="font-[400] text-[#0C4C7BE5] text-[8px]">
          Rate: 1.75%
        </Text>
      </View>
      {/* Time */}
      <View className="flex justify-start items-start  pl-2">
        <Text className="font-[400] text-[7px] text-[#0C4C7BB2] ">Time</Text>
        <Text className="font-[600] text-[#0C4C7B] text-[12px]">
          15 Hrs ago
        </Text>
        <Text className="font-[400] text-[#0C4C7BE5] text-[8px]">
          Duration: 25sec
        </Text>
      </View>
      {/* Time */}
      <View className="flex justify-start items-start gap-1 pl-2">
        <Text className="font-[400] text-[7px] text-[#0C4C7BB2] ">Status</Text>
        <Pressable
          className={`
      rounded-[4px] w-[65px] h-[21px] flex justify-center items-center
    ${status === "confirming" && "bg-[#FFB100]"} 
    ${status === "complete" && "bg-[#22C55E]"} 
    ${status === "failed" && "bg-[#F0133B]"}
  `}
        >
          <Text className="text-white font-bold text-[8px] capitalize">
            {status}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
