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

export default function LogicScreen() {
  const [xp, setXp] = useState(0);

  const missions = [
    {
      title: "Pattern Power",
      icon: "apps-outline",
      color: "#8B5CF6",
      desc: "Find number, shape and color patterns.",
    },
    {
      title: "Sequence Master",
      icon: "reorder-four-outline",
      color: "#06B6D4",
      desc: "Complete missing numbers and logical sequences.",
    },
    {
      title: "Puzzle Brain",
      icon: "extension-puzzle-outline",
      color: "#F97316",
      desc: "Solve fun puzzles using smart thinking.",
    },
    {
      title: "Visual Reasoning",
      icon: "eye-outline",
      color: "#10B981",
      desc: "Look carefully and choose the correct answer.",
    },
    {
      title: "Escape Room",
      icon: "key-outline",
      color: "#EC4899",
      desc: "Use logic clues to escape the mystery room.",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={["#8B5CF6", "#EC4899"]} style={styles.hero}>
        <Text style={styles.heroEmoji}>🧠</Text>
        <Text style={styles.heroTitle}>Brain Logic</Text>
        <Text style={styles.heroText}>
          Improve patterns, sequences, puzzles and problem-solving skills.
        </Text>

        <View style={styles.xpBox}>
          <Text style={styles.xpText}>⭐ XP: {xp}</Text>
        </View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>🧩 Logic Missions</Text>

      {missions.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.85}
          onPress={() => setXp(xp + 25)}
        >
          <View style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: item.color }]}>
              <Ionicons name={item.icon as any} size={30} color="#fff" />
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <LinearGradient colors={["#7C3AED", "#DB2777"]} style={styles.rewardCard}>
        <Text style={styles.rewardTitle}>🏆 Brain Master Badge</Text>
        <Text style={styles.rewardText}>
          Complete all logic missions to unlock your Brain Master Badge.
        </Text>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
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
    color: "#FCE7F3",
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
    color: "#F5F3FF",
    marginTop: 10,
    lineHeight: 24,
  },
});