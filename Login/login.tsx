// app/Login/login.tsx
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { images } from "../assets/images";

export default function Login() {
  const [Countries, setCountries] = useState("Somali");
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation<any>();
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
              Sign-Up to the Taran App
            </Text>
            <Text className="text-[#0C4C7B99] text-[17px] w-[234px] font-[500]">
              To get started with the Taran App, create your account
            </Text>
          </View>
          {/* TEXT inputs */}
          <View className="w-[353px] mx-auto flex gap-5 mt-6">
            <View className="flex  gap-3">
              <Text className="text-[#0C4C7BE5] text-[15px] font-[400] ml-2">
                First Name *
              </Text>
              <TextInput
                className="w-[356px] h-[55px] rounded-[12px] bg-[#0C4C7B1A] px-2"
                value=""
                placeholder="Enter Your First Name"
              />
            </View>
            {/* middle name */}
            <View className="flex  gap-3">
              <Text className="text-[#0C4C7BE5] text-[15px] font-[400] ml-2">
                Middle Name *
              </Text>
              <TextInput
                className="w-[356px] h-[55px] rounded-[12px] bg-[#0C4C7B1A] px-2"
                value=""
                placeholder="Enter Your Middle Name"
              />
            </View>
            {/* last name */}
            <View className="flex  gap-3">
              <Text className="text-[#0C4C7BE5] text-[15px] font-[400] ml-2">
                Last Name *
              </Text>
              <TextInput
                className="w-[356px] h-[55px] rounded-[12px] bg-[#0C4C7B1A] px-2"
                value=""
                placeholder="Enter Your Last Name"
              />
            </View>
            {/* select your country */}
            <View className="flex flex-row gap-3">
              <View className="flex   gap-3">
                <Text className="text-[#0C4C7BE5] text-[15px] font-[400] ml-2">
                  Select Country *
                </Text>
                <Picker
                  selectedValue={Countries}
                  onValueChange={(itemValue) => setCountries(itemValue)}
                  style={{
                    height: 50,
                    width: 90,
                    backgroundColor: "#e8eff3",
                    color: "black",
                    borderRadius: 10,
                  }}
                >
                  <Picker.Item label="Somali" value="Somali" />
                  <Picker.Item label="Kenya" value="Kenya" />
                  <Picker.Item label="Ethopia" value="Ethopia" />
                  <Picker.Item label="Djabouti" value="Djabouti" />
                </Picker>
              </View>
              <View className="flex   gap-3">
                <Text className="text-[#0C4C7BE5] text-[15px] font-[400] ml-2">
                  Phone Number *
                </Text>
                <TextInput
                  className="w-[243px] h-[55px] rounded-[12px] bg-[#0C4C7B1A] px-2"
                  value=""
                  placeholder="Enter you Phone Number"
                />
              </View>
            </View>
            {/* email */}
            <View className="flex  gap-3">
              <Text className="text-[#0C4C7BE5] text-[15px] font-[400] ml-2">
                Email *
              </Text>
              <TextInput
                className="w-[356px] h-[55px] rounded-[12px] bg-[#0C4C7B1A] px-2"
                value=""
                placeholder="Enter  your email"
              />
            </View>
            {/* city */}
            <View className="flex  gap-3">
              <Text className="text-[#0C4C7BE5] text-[15px] font-[400] ml-2">
                City *
              </Text>
              <TextInput
                className="w-[356px] h-[55px] rounded-[12px] bg-[#0C4C7B1A] px-2"
                value=""
                placeholder="Enter your city"
              />
            </View>
            {/* District and village */}
            <View className="flex flex-row gap-3">
              <View className="flex   gap-3">
                <Text className="text-[#0C4C7BE5] text-[15px] font-[400] ml-2">
                  District
                </Text>
                <TextInput
                  className="w-[175px] h-[55px] rounded-[12px] bg-[#0C4C7B1A] px-2"
                  value=""
                  placeholder="Enter your district"
                />
              </View>
              <View className="flex   gap-3">
                <Text className="text-[#0C4C7BE5] text-[15px] font-[400] ml-2">
                  Village
                </Text>
                <TextInput
                  className="w-[175px] h-[55px] rounded-[12px] bg-[#0C4C7B1A] px-2"
                  value=""
                  placeholder="Enter your village"
                />
              </View>
            </View>
            {/* checkbox */}
            <Pressable
              onPress={() => setChecked(!checked)}
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderWidth: 2,
                  borderColor: "#0C4C7B",
                  borderRadius: 6,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: checked ? "#0C4C7B" : "#fff",
                }}
              >
                {/* Draw checkmark manually */}
                {checked && (
                  <View
                    style={{
                      width: 10,
                      height: 5,
                      borderLeftWidth: 2,
                      borderBottomWidth: 2,
                      borderColor: "#fff",
                      transform: [{ rotate: "-45deg" }],
                    }}
                  />
                )}
              </View>
              <View className="flex ">
                <Text className="text-[#0C4C7B] text-[10px] font-[400]">
                  Terms & Conditions
                </Text>
                <Text className="text-[#5D6166] text-[8px] w-[166px] font-[400]">
                  By continuing you agree to Taran's Terms of service, and
                  privacy notice
                </Text>
              </View>
            </Pressable>
            {/* LOGIN BUTTON */}
            <Pressable
              onPress={() => navigation.navigate("MainTabs")}
              className="bg-[#0C4C7B] h-[55px] rounded-[12px] flex items-center justify-center"
            >
              <Text className="font-[600] text-[15px] text-white text-center">
                Sign Up
              </Text>
            </Pressable>
            {/* sign in */}
            <Pressable
              onPress={() => navigation.navigate("Signin")}
              className="flex flex-row  gap-[4px] justify-center items-center "
            >
              <Text className="font-[600] text-[13px] text-[#BAC2CC]  ">
                Already have an account?
              </Text>
              <Text className="font-[600] text-[15px] text-[#0C4C7B]  ">
                Sign In
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
