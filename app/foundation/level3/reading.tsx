import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function ReadingScreen() {
  const [xp, setXp] = useState(0);

  const missions = [
    {
      title: "Story Reading",
      icon: "book-outline",
      color: "#F97316",
      desc: "Read short stories and understand the main idea.",
    },
    {
      title: "Vocabulary Builder",
      icon: "text-outline",
      color: "#8B5CF6",
      desc: "Learn new words, meanings, synonyms and antonyms.",
    },
    {
      title: "Grammar Practice",
      icon: "create-outline",
      color: "#06B6D4",
      desc: "Practice nouns, verbs, adjectives and sentence building.",
    },
    {
      title: "Detective Reading",
      icon: "search-outline",
      color: "#10B981",
      desc: "Find clues in stories and answer questions.",
    },
    {
      title: "Creative Ending",
      icon: "sparkles-outline",
      color: "#EC4899",
      desc: "Choose or create your own story ending.",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={["#F97316", "#EF4444"]} style={styles.hero}>
        <Text style={styles.heroEmoji}>📚</Text>
        <Text style={styles.heroTitle}>Reading Champions</Text>
        <Text style={styles.heroText}>
          Improve reading, vocabulary, grammar and comprehension skills.
        </Text>

        <View style={styles.xpBox}>
          <Text style={styles.xpText}>⭐ XP: {xp}</Text>
        </View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>📖 Reading Missions</Text>

      {missions.map((mission, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.85}
          onPress={() => setXp(xp + 25)}
        >
          <View style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: mission.color }]}>
              <Ionicons name={mission.icon as any} size={30} color="#fff" />
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>{mission.title}</Text>
              <Text style={styles.desc}>{mission.desc}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <LinearGradient colors={["#F97316", "#DC2626"]} style={styles.rewardCard}>
        <Text style={styles.rewardTitle}>🏆 Reading Champion Badge</Text>
        <Text style={styles.rewardText}>
          Complete all reading missions to unlock your Reading Champion Badge.
        </Text>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7ED",
  },

  hero: {
    padding: 25,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: "center",
  },

  heroEmoji: {
    fontSize: 70,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
    marginTop: 10,
    textAlign: "center",
  },

  heroText: {
    color: "#FFEDD5",
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
  },

  xpBox: {
    marginTop: 15,
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
  },

  xpText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#111827",
    margin: 20,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 24,
    padding: 18,
    elevation: 4,
  },

  iconBox: {
    width: 65,
    height: 65,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "900",
    color: "#111827",
  },

  desc: {
    marginTop: 5,
    color: "#64748B",
    lineHeight: 22,
  },

  rewardCard: {
    margin: 20,
    borderRadius: 25,
    padding: 25,
    marginBottom: 40,
  },

  rewardTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },

  rewardText: {
    color: "#FFEDD5",
    marginTop: 10,
    lineHeight: 24,
  },
});