import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { images } from "../assets/images";

export default function CustomHeader() {
  return (
    <View
      style={{
        backgroundColor: "#0C4C7B",
        paddingTop: StatusBar.currentHeight + 10,
        paddingHorizontal: 20,
        paddingBottom: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* LEFT: Profile */}
      <Image
        source={images.profile}
        style={{ width: 55, height: 55, borderRadius: 40 }}
      />

      {/* CENTER: Hello + Name + Greeting */}
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row", gap: 6 }}>
          <Text style={{ color: "#22C55E", fontSize: 18 }}>Hello,</Text>
          <Text style={{ color: "#fff", fontSize: 18 }}>Ridwaan</Text>
        </View>

        <Text style={{ color: "#fff", fontSize: 12 }}>Good Morning</Text>
      </View>

      {/* RIGHT: Notification */}
      <Image
        source={images.notification}
        style={{ width: 44, height: 44 }}
      />
    </View>
  );
}
