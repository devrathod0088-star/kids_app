import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Confetti() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        🎉 🎊 ⭐ 🎉
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 120,
    width: "100%",
    alignItems: "center",
  },

  text: {
    fontSize: 40,
  },
});