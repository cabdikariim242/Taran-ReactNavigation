import { images } from "@/assets/images";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function accounts() {
  return (
    <View className="flex-1 pt-14 px-5 justify-start  items-center bg-[#ffffff84]">
      {/* my accounts and add acount button */}
      <View className="flex-row  justify-between border-b border-[#0C4C7B1A] pb-4 items-center w-full mx-auto ">
        <Text className="font-bold text-[#0C4C7B] text-[18px] ">
           My Accounts
        </Text>
        <Pressable className="flex-row gap-2">
          <Image source={images.AddButton} className="w-[15px] h-[15px] " />
          <Text className="font-bold text-[#0C4C7B] text-[12px] ">
            Add Account
          </Text>
        </Pressable>
      </View>
      {/* Cards */}
      <View className="w-full mt-4">
        <ScrollView  showsVerticalScrollIndicator={false} className="w-full h-[560px]">
          <Cards
            Icon={images.EVCPULS}
            service="Evc Plus Service"
            user="Ridwan Muse Ahmed"
            number="******5166"
          />
          <Cards
            Icon={images.Premieri}
            service="Premier Wallet"
            user="Ridwan Muse Ahmed"
            number="******5166"
          />
          <Cards
            Icon={images.Bybit}
            service="Bybit Wallet Address"
            user="USDT BEP-20"
            number="48394u83...ds884334"
          />
          <Cards
            Icon={images.YiksiWallet}
            service="Yiksi Wallet Address"
            user="USDT BEP-20"
            number="48394u83...ds884334"
          />
          <Cards
            Icon={images.TrustWallet}
            service="Trust Wallet Address "
            user="USDT TRC-20"
            number="48394u83...ds884334"
          />
          <Cards
            Icon={images.BNB}
            service="BNB Gas Fee"
            user="BNB"
            number="48394u83...ds884334"
          />
          <Cards
            Icon={images.BNB}
            service="BNB Gas Fee"
            user="BNB"
            number="48394u83...ds884334"
          />
        </ScrollView>
      </View>
    </View>
  );
}

interface CardProps {
  Icon: ImageSourcePropType;
  service: string;
  user: string;
  number: string;
}
const Cards = ({ Icon, service, user, number }: CardProps) => {
  return (
    <View className="bg-white w-[355px] my-4 h-[80px] mx-auto rounded-[12px] flex-row justify-between items-center ">
      <View className=" flex-row gap-2 w-[161px] h-[80px] justify-center items-center">
        <Image source={Icon} className="w-[40px] h-[40px]" />
        <View className="">
          <Text className="font-bold text-[#0C4C7B] text-[13px] ">
            {service}
          </Text>
          <Text className="font-bold text-[#0C4C7B] text-[10px] ">{user}</Text>
        </View>
      </View>
      <Text className="font-[400]  w-[88px] h-[14px]   text-[#0C4C7B] text-[14px] mr-4">
        {number}
      </Text>
    </View>
  );
};
