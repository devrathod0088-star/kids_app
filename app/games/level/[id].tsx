import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function LevelScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Level Screen</Text>

      <Text style={styles.sub}>Level ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFF",
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
  },
  sub: {
    marginTop: 10,
    fontSize: 18,
    color: "#64748B",
  },
});