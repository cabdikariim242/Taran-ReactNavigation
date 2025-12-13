import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomHeader from "./components/CustomHeader";
import SwapPopUp from "./components/SwapPopUp.stub";
import "./globals.css";
import LandingPage from "./landingPage/LandingPage.stub";
import Login from "./Login/login.stub";
import Signin from "./Login/Signin.stub";
import Home from "./navigation/Home.stub";
import KYC from "./navigation/KYC.stub";
import Support from "./navigation/Support.stub";
import Swap from "./navigation/Swap.stub";
import Transaction from "./navigation/Transaction.stub";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

interface TabIconProps {
  icon: any;
  focused: boolean;
  title: string;
}

const TabIcon = ({ icon, focused, title }: TabIconProps) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          color: focused ? "#0C4C7B" : "rgba(12,76,123,0.7)",
          fontWeight: "600",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Swap" component={Swap} />
      <Tab.Screen name="KYC" component={KYC} />
      <Tab.Screen name="Support" component={Support} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="SwapPopUp" component={SwapPopUp} />
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
