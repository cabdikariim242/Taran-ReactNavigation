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
export default function accounts() {
  return (
    <View className="flex-1 justify-start pt-4 px-6 items-center bg-[#ffffff84] ">
      {/* my accounts and add acount button */}
      <View className="flex-row justify-between  border-b border-[#0C4C7B1A] pb-4 items-center w-full mx-auto ">
        <Text className="font-bold text-[#0C4C7B] text-[18px] "> KYC</Text>
        <Pressable className="flex-row gap-2">
          <Image source={images.AddButton} className="w-[15px] h-[15px] " />
          <View>
            <Text className="font-bold text-[#0C4C7B] text-[12px] ">
              Tier 4
            </Text>
            <Text className="font-[500] text-[#22C55E] text-[9px] ">
              Upgrade Now!
            </Text>
          </View>
        </Pressable>
      </View>
      {/* Cards */}
      <View className="w-full  ">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="w-full mt-4 flex  h-[600px]"
        >
          <Cards
            Icon={images.Goverment}
            service="Basic Information"
            ver={true}
          />
          <Cards Icon={images.Goverment} service="Government ID " ver={true} />
          <Cards Icon={images.Face} service="Government ID " ver={true} />
          <Cards
            Icon={images.Resident}
            service="Residential Address"
            ver={true}
          />
          <Cards
            Icon={images.Certification}
            service="Business Certificate"
            ver={false}
          />
          <Cards
            Icon={images.Certification}
            service="Business Certificate"
            ver={true}
          />
          <Cards
            Icon={images.Certification}
            service="Business Certificate"
            ver={false}
          />
          <Cards
            Icon={images.Certification}
            service="Business Certificate"
            ver={true}
          />
        </ScrollView>
      </View>
    </View>
  );
}

interface CardProps {
  Icon: ImageSourcePropType;
  service: string;
  ver: boolean;
}
const Cards = ({ Icon, service, ver }: CardProps) => {
  return (
    <View className="bg-white w-[355px] h-[80px] mx-auto my-4 rounded-[12px] flex-row justify-between items-center px-5">
      <View className=" flex-row gap-2 w-[165px] h-[80px] justify-end items-center  ">
        <Image source={Icon} style={{ width: 35, height: 40 }} />
        <View className="">
          <View className="flex-row gap-2  ">
            <Text className="font-bold text-[#0C4C7B] text-[13px] w-[100px]   ">
              {service}
            </Text>
            <Image source={images.verified} className="w-[18px] h-[18px]  " />
          </View>
          {ver ? (
            <Text className="font-bold text-[#34C759DE] text-[10px] ">
              Verified
            </Text>
          ) : (
            <Text className="font-bold  text-[#F0133BE0] text-[10px] ">
              Unverified
            </Text>
          )}
        </View>
      </View>
      <Image source={images.Right} className="w-[20px] h-[20px] " />
    </View>
  );
};
