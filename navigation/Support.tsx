import { images } from "@/assets/images";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function accounts() {
  return (
    <View className="flex-1 justify-start pt-10 px-6 items-center bg-[#ffffff84] h-[40px] ">
      <ScrollView className="w-full h-[560px]">
      {/* my accounts and add acount button */}
      <View className="flex-row justify-between border-b border-[#0C4C7B1A] pb-4 items-center w-full mx-auto ">
        <Text className="font-bold text-[#0C4C7B] text-[18px] ">Support</Text>

        <Image source={images.suppport} className="w-[45px] h-[45px] " />
      </View>
      {/* bot and contact us  */}
      <View className="flex flex-col justify-start gap-2 items-start w-full">
        <Image
          source={images.CallCenter}
          className="w-[206px] h-[211px] mt-0 mx-auto"
        />
        <Text className="font-bold text-[25px] text-[#0C4C7B] text-start w-[190px]">
          Contact us
        </Text>
        <Text className="font-[500] text-[17px] text-[#0C4C7B] text-start w-[321px] mx-auto">
          If you need any help please contact us our WhatsApp number by clicking
          the bellow button or our call center, Thanks .
        </Text>
      </View>
      {/* First card */}
      <View className="flex-row gap-4 justify-center items-center  mt-3">
        {/* call center card */}
        <View className="flex justify-center items-center w-[95px] h-[80] bg-white rounded-[12px] ">
          <View className="flex-row gap-2">
            <Image source={images.calling} className="w-[21px] h-[21px] " />
            <Text className="text-[#0C4C7B] font-bold text-[12px] w-[30px] ">Call Center</Text>
          </View>
          <Text className="font-bold text-[#0C4C7B] text-[22px]">2440</Text>
        </View>
        {/* whatsapp live chat */}
        <View className="w-[249px] h-[80px]">
<Cards
            Icon={images.whatsapp}
            service="WhatsApp Live Chat"
            contact="+252 61 4644448"
          />
        </View>
      </View>
      {/* Cards */} 
        <View className="mx-auto mt-2 flex gap-3 w-[356px] h-[100px]   pb-10">
          <Cards
            Icon={images.Email}
            service="Support Email"
            contact='support@taranapp.com'
          />
          <Cards
            Icon={images.Youtube}
            service="How to use Taran App "
            contact='Taran Business Online'
          />
        </View>
      </ScrollView>
    </View>
  );
}

interface CardProps {
  Icon: ImageSourcePropType;
  service: string;
  contact: string;
}
const Cards = ({ Icon, service, contact }: CardProps) => {
  return (
    <View className="bg-white w-full mx-auto rounded-[12px] flex-row justify-between items-center px-5">
      <View className=" flex-row gap-3 w-[165px] h-[80px] justify-end items-center  ">
        <Image source={Icon} style={{ width: 36, height: 35 }} />
        <View className=""> 
            <Text className="font-bold text-[#0C4C7B] text-[13px] w-[100px]   ">
              {service}
            </Text>  
            <Text className="font-bold  text-[#0C4C7BE5] text-[12px] ">
              {contact}
            </Text>
           
        </View>
      </View>
      <Image source={images.Right} className="w-[20px] h-[20px] " />
    </View>
  );
};
