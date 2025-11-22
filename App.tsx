import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "./globals.css";

import HomeScreen from "./navigation/HomeScreen";
import Profile from "./navigation/Profile";
import Notifications from "./navigation/Notifications";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Profile">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={20} color={color} />
            ), 
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: "Notifications",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={20} color={color} />
            ), 
            tabBarBadge: 3
            ,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
