// app/Login/login.tsx
import { images } from "@/assets/images";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

const Signin = () => {
  const [checked, setChecked] = useState(false);
 const navigation = useNavigation<any>(); 
 
  const router = useRouter();
  return (
    <View className="flex w-full h-full relative bg-[#f9fbfc7a] ">
      {/* First section rounded view and taran logo */}
      <View className="absolute top-[-330px] left-[-100px] right-0 w-[610px] h-[610px] rounded-full bg-[#0C4C7B] ">
        <View className="w-[175px] h-[175px] flex justify-center items-center absolute top-[500px] left-[215px] bg-white rounded-full">
          <Image
            source={images.TaranLogo}
            className="w-[105px] h-[117px] rounded-full"
          />
        </View>
      </View>

      <View className="w-full h-full max-h-[500px] mt-[370px]">
        <ScrollView
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
        >
          {/* Text */}
          <View className="w-[353px] mx-auto gap-3">
            <Text className="text-[#0C4C7BE5] text-[25px] font-[800]">
              Sign-In to the Taran App
            </Text>
            <Text className="text-[#0C4C7B99] text-[17px] w-[234px] font-[500]">
              TEnter your credentials to access your account
            </Text>
          </View>
          {/* TEXT inputs */}
          <View className="w-[353px] mx-auto flex gap-5 mt-6">
            <View className="flex  gap-3">
              <Text className="text-[#0C4C7BE5] text-[15px] font-[400] ml-2">
                Phone Number *
              </Text>
              <TextInput
                className="w-[356px] h-[55px] rounded-[12px] bg-[#0C4C7B1A] px-2"
                value=""
                placeholder="Enter your Phone number"
              />
            </View>
            {/* middle name */}
            <View className="flex  gap-3">
              <Text className="text-[#0C4C7BE5] text-[15px] font-[400] ml-2">
                Password *
              </Text>
              <TextInput
                className="w-[356px] h-[55px] rounded-[12px] bg-[#0C4C7B1A] px-2"
                value=""
                placeholder="Enter your Password"
              />
            </View>
            {/* last name */}
            <Pressable
              // onPress={() => router.push("./Login/Signin")}
              className="flex flex-row  gap-[4px] justify-start items-center "
            >
              <Text className="font-[600] text-[13px] text-[#BAC2CC]  ">
                Forget Password?
              </Text>
              <Text className="font-[600] text-[15px] text-[#0C4C7B]  ">
                Recover
              </Text>
            </Pressable>
            {/* LOGIN BUTTON */}
            <Pressable
              onPress={() => navigation.navigate("MainTabs")}
              className="bg-[#0C4C7B] h-[55px] rounded-[12px] flex items-center justify-center"
            >
              <Text className="font-[600] text-[15px] text-white text-center">
                Sign In
              </Text>
            </Pressable>
            {/* sign in */}
            <Pressable
              onPress={() => navigation.navigate("Login")}
              className="flex flex-row  gap-[4px] justify-center items-center "
            >
              <Text className="font-[600] text-[13px] text-[#BAC2CC]  ">
                I don't have an account?
              </Text>
              <Text className="font-[600] text-[15px] text-[#0C4C7B]  ">
                Sign Up now
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signin;
