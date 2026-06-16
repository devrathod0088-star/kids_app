import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TeacherMascot({ message }: { message: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>👩‍🏫</Text>
      <View style={styles.bubble}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    fontSize: 45,
  },
  bubble: {
    backgroundColor: "#4F46E5",
    padding: 12,
    borderRadius: 14,
    marginLeft: 10,
    maxWidth: "75%",
  },
  text: {
    color: "#fff",
    fontWeight: "700",
  },
});