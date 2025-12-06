import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Image, ImageBackground } from "react-native";
import LandingPage from "./landingPage/LandingPage";
import Home from "./navigation/Home";
import Swap from "./navigation/Swap";
import Transaction from "./navigation/Transaction";
import Support from "./navigation/Support";
import KYC from "./navigation/KYC";
import { images } from "./assets/images";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomHeader from './components/CustomHeader' // 👈 NEW
import './globals.css'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

interface TabIconProps {
  icon: any;
  focused: boolean;
  title: string;
}

const TabIcon = ({ icon, focused, title }: TabIconProps) => {
  return (
    <View className="items-center justify-center">
      {focused ? (
        <>
          <ImageBackground
            source={images.bg}
            style={{
              width: 49,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={icon}
              style={{ width: 21, height: 22, tintColor: "#fff" }}
            />
          </ImageBackground>
          <Text
            style={{
              width: 71,
              fontSize: 13,
              fontWeight: "600",
              color: "#0C4C7B",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Text>
        </>
      ) : (
        <>
          <View
            style={{
              width: 41,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icon}
              style={{
                width: 20,
                height: 20,
                tintColor: "#0C4C7B69",
                marginTop: 3,
              }}
            />
            <Text
              style={{
                fontSize: 11,
                width: 51,
                fontWeight: "600",
                color: "rgba(12,76,123,0.7)",
                textAlign: "center",
                textTransform: "capitalize",
                marginTop: 2,
              }}
            >
              {title}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          position: "absolute",
          marginBottom: 20,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={images.account} title="Account" />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={images.transactions}
              title="Transaction"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Swap"
        component={Swap}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={images.swap} title="Swap" />
          ),
        }}
      />
      <Tab.Screen
        name="KYC"
        component={KYC}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={images.kyc} title="KYC" />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={images.support} title="Support" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          <Stack.Screen name="LandingPage" component={LandingPage} />

          {/* 👇 Tabs screen WITH custom header */}
          <Stack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{
              headerShown: true,
              header: () => <CustomHeader />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
