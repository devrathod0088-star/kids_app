import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>
        This is a modal 🎉
      </Text>

      <Text style={styles.subtitle}>
        Welcome to your Kids App modal screen
      </Text>

      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Go to Home
          </Text>
        </Pressable>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0B1020",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#fff",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#A5B4FC",
    marginBottom: 30,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});


