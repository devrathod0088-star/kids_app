import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech";

import { STORIES } from "../../data/Level1/stories";

export default function StoriesScreen() {
  const [index, setIndex] = useState(0);

  const story = STORIES[index];

  const speakStory = () => {
    Speech.stop();
    Speech.speak(`${story.title}. ${story.story}`, {
      rate: 0.9,
      pitch: 1.1,
    });
  };

  const nextStory = () => {
    if (index < STORIES.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <LinearGradient colors={["#EEF2FF", "#FFFFFF"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* TITLE */}
        <Text style={styles.title}>📖 Stories World</Text>

        {/* CARD */}
        <View style={styles.card}>
          <Text style={styles.emoji}>{story.emoji}</Text>

          <Text style={styles.storyTitle}>{story.title}</Text>

          <Text style={styles.storyText}>{story.story}</Text>

          <Text style={styles.lesson}>💡 {story.lesson}</Text>
        </View>

        {/* BUTTONS */}
        <TouchableOpacity style={styles.btn} onPress={speakStory}>
          <Ionicons name="volume-high" size={20} color="#fff" />
          <Text style={styles.btnText}>Listen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2} onPress={nextStory}>
          <Text style={styles.btnText}>Next Story ▶</Text>
        </TouchableOpacity>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    alignItems: "center",
  },

  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },

  storyTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 10,
  },

  storyText: {
    fontSize: 15,
    textAlign: "center",
    color: "#374151",
  },

  lesson: {
    marginTop: 15,
    fontWeight: "700",
    color: "#4F46E5",
    textAlign: "center",
  },

  btn: {
    flexDirection: "row",
    backgroundColor: "#4F46E5",
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  btn2: {
    backgroundColor: "#10B981",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },

  btnText: {
    color: "#fff",
    fontWeight: "900",
    textAlign: "center",
  },
});