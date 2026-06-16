import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import Animated, { FadeInUp, BounceIn } from "react-native-reanimated";

export default function LearnCard({ title, emoji, word, description }: any) {

  useEffect(() => {
    const text = `${word}. ${description}`;

    // Stop previous voice before new one starts
    Speech.stop();

    // Small delay makes voice smoother for kids apps
    const timer = setTimeout(() => {
      Speech.speak(text, {
        rate: 0.9,
        pitch: 1.2,
        language: "en-US",
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      Speech.stop();
    };

  }, [word]);

  return (
    <Animated.View entering={FadeInUp} style={styles.card}>

      {/* Teacher Badge */}
      <Animated.Text entering={BounceIn} style={styles.teacher}>
        👩‍🏫 Teacher Says
      </Animated.Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.emoji}>{emoji}</Text>

      <Text style={styles.word}>{word}</Text>

      <Text style={styles.desc}>{description}</Text>

      {/* Hint line for kids */}
      <Text style={styles.hint}>
        👂 Listen carefully and repeat
      </Text>

    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 25,
    marginBottom: 16,
    alignItems: "center",
    elevation: 6,
  },

  teacher: {
    fontSize: 14,
    fontWeight: "900",
    color: "#4F46E5",
    marginBottom: 6,
  },

  title: {
    fontSize: 18,
    fontWeight: "900",
    color: "#111827",
  },

  emoji: {
    fontSize: 70,
    marginVertical: 10,
  },

  word: {
    fontSize: 22,
    fontWeight: "900",
    color: "#4F46E5",
  },

  desc: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 6,
    fontSize: 14,
  },

  hint: {
    marginTop: 10,
    fontSize: 12,
    color: "#9CA3AF",
    fontStyle: "italic",
  },
});