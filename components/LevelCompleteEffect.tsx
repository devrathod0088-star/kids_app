import React from "react";
import { View, Platform } from "react-native";

let ConfettiCannon: any = null;

if (Platform.OS !== "web") {
  ConfettiCannon = require("react-native-confetti-cannon").default;
}

export default function LevelCompleteEffect() {
  if (Platform.OS === "web") return null;

  return (
    <View style={{ position: "absolute", top: 0 }}>
      <ConfettiCannon count={120} origin={{ x: 200, y: 0 }} fadeOut />
    </View>
  );
}