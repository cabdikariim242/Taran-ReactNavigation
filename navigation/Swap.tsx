import { images } from "@/assets/images";
import { useNavigation } from "@react-navigation/native";

 import { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  Text,
  View,
} from "react-native";


export default function Index() {
  const [ShowAdv, setShowAdv] = useState(false);
  const navigation = useNavigation<any>();

  return ( 

    
    //  full content
    <View className="flex-1 relative  justify-start items-center  bg-white  ">
      {/* IMG AND TEXT */}
      <View className="flex flex-row gap-4 mt-4 justify-center items-center w-full max-w-[199px] ">
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
      {/* Cards */}
      <View className="flex flex-col gap-2 mt-4 relative">
        {/* First Card */}
        <View>
          <Cards title="You Pay" />
        </View>
        {/* MIDDLE IMAGE */}
        <Pressable
          style={{ borderRadius: 33 }}
          className="bg-white z-10 flex justify-center items-center rounded-full w-[66px] h-[66px] absolute left-40 top-[96px]"
          onPress={() => setShowAdv(!ShowAdv)}
        >
          <Image source={images.swapIcon} className="w-[56px] h-[56px]" />
        </Pressable>

        {/* Second Card */}
        <View>
          <Cards title="You Get" />
        </View>
      </View>
      {/* Button */}
      <View className="w-full max-w-[356px] rounded-[12px] mt-5">
        <Pressable
          onPress={() => navigation.navigate("SwapPopUp")}
          className="bg-[#0C4C7B] h-[55px] rounded-[12px] flex items-center justify-center"
        >
          <Text className="font-[600] text-[15px] text-white text-center">
            Swap
          </Text>
        </Pressable>
      </View>
      {/* Swap Amount */}
      <View className="w-full max-w-[356px] mt-5   bg-[#f3f0f0df] mx-auto rounded-[13px] ">
        {/* Fist One */}
        <View className="flex flex-col gap-6 mt-3">
          <SwapCards title="Swap Amount" total="0.00" />
          <Image source={images.BorderBottom} className="w-[356px] h-[2px]" />
        </View>
        {/* second One */}
        <View className="flex flex-col gap-6 mt-3">
          <SwapCards title="Swap Amount" total="0.00" />
          <Image source={images.BorderBottom} className="w-[356px] h-[2px]" />
        </View>
        {/* third One */}
        <View className="flex flex-col gap-6 mt-3">
          <SwapCards title="Swap Amount" total="0.00" />
          <Image source={images.BorderBottom} className="w-[356px] h-[2px]" />
        </View>
        {/* fourth One */}
        <View className="flex flex-col gap-6 my-3">
          <SwapCards title="Swap Amount" total="0.00" />
        </View>
      </View>
        <Modal
          visible={ShowAdv}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setShowAdv(false)}
          presentationStyle="formSheet"
        >
          <View className="w-full h-full flex justify-center items-center ">
            <Advertisement show={ShowAdv} setShow={setShowAdv} />
          </View>
        </Modal> 
    </View> 
  );
}

interface CardProps {
  title: string;
}

const Cards = ({ title }: CardProps) => {
  return (
    <View className="flex flex-row justify-between items-center w-[356px] px-10 h-[129px] bg-[#0C4C7B1A]  rounded-[20px] ">
      <View className="flex flex-col gap-4">
        <Text className="text-[#0C4C7BE5] text-[12px] font-[400] ">
          {title}
        </Text>
        <Text className="text-[#0C4C7BE5] text-[12px] font-[400] ">
          Select Your Country
        </Text>
      </View>
      <Text className="text-[#0C4C7BE5] text-[12px] font-[400] ">0.00</Text>
    </View>
  );
};

interface SwapProps {
  title: string;
  total: string;
}

const SwapCards = ({ title, total }: SwapProps) => {
  return (
    <View className="w-[308px] mx-auto flex-row justify-between items-center">
      <Text className="text-[#0C4C7B99] text-[12px] font-[500]">{title}</Text>
      <Text className="text-[#0C4C7B] text-[13px] font-[700]">{total}</Text>
    </View>
  );
};



interface ADVProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const Advertisement = ({ show, setShow }: ADVProps) => {
  return (
    <View
      style={{ display: show ? "flex" : "none" }}
      className="flex w-[356px] h-[342px] rounded-[24px]"
    >
      <View
        className="flex justify-start items-center gap-4 w-full h-full rounded-[24px]   bg-white border "
        style={{ borderColor: "#0C4C7B" }}
      >
        <Text
          className="text-[#0C4C7B] text-[16px]  font-bold    mx-auto "
          style={{ width: 277, marginTop: 10 }}
        >
          Earn while you are swapping is that make sense to you, try it now by
          using USDC Base
        </Text>
        <View className=" " style={{ width: 338, height: 270 }}>
          <Image
            source={images.advertisement}
            className="flex-1 w-full h-full"
          />
        </View>
      </View>
      <Pressable className="mt-4 mx-auto" onPress={() => setShow(false)}>
        <Image source={images.endclose} className="w-[40px] h-[40px]" />
      </Pressable>
    </View>
  );
};

