import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function CompleteLevel() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>🎉 Level 2 Complete!</Text>

      <Text style={styles.sub}>
        Great job! You earned XP 🚀
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/foundation/level2" as any)}
        style={styles.btn}
    > 
        <Text style={styles.btnText}>Back to Level 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "900",
    textAlign: "center",
  },

  sub: {
    color: "#cbd5e1",
    marginTop: 12,
    textAlign: "center",
    fontSize: 16,
  },

  btn: {
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    paddingHorizontal: 22,
    marginTop: 24,
    borderRadius: 14,
  },

  btnText: {
    color: "#000",
    fontWeight: "900",
    fontSize: 16,
  },
});