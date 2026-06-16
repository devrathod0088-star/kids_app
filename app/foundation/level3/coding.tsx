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

export default function CodingScreen() {
  const [xp, setXp] = useState(0);

  const lessons = [
    {
      title: "What is Coding?",
      icon: "code-slash-outline",
      color: "#3B82F6",
      desc: "Learn how computers follow instructions.",
    },
    {
      title: "Algorithms",
      icon: "git-network-outline",
      color: "#8B5CF6",
      desc: "Understand step-by-step problem solving.",
    },
    {
      title: "Loops",
      icon: "repeat-outline",
      color: "#10B981",
      desc: "Repeat actions automatically.",
    },
    {
      title: "Conditions",
      icon: "git-branch-outline",
      color: "#F97316",
      desc: "Make decisions using IF and ELSE.",
    },
    {
      title: "Robot Mission",
      icon: "hardware-chip-outline",
      color: "#EC4899",
      desc: "Guide the robot using coding blocks.",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={["#111827", "#374151"]}
        style={styles.hero}
      >
        <Text style={styles.heroEmoji}>💻</Text>

        <Text style={styles.heroTitle}>
          Coding For Kids
        </Text>

        <Text style={styles.heroText}>
          Learn coding, algorithms, loops and robotics.
        </Text>

        <View style={styles.xpBox}>
          <Text style={styles.xpText}>⭐ XP: {xp}</Text>
        </View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>
        🚀 Coding Missions
      </Text>

      {lessons.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.85}
          onPress={() => setXp(xp + 25)}
        >
          <View style={styles.card}>
            <View
              style={[
                styles.iconBox,
                { backgroundColor: item.color },
              ]}
            >
              <Ionicons
                name={item.icon as any}
                size={30}
                color="#fff"
              />
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>
                {item.title}
              </Text>

              <Text style={styles.desc}>
                {item.desc}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <LinearGradient
        colors={["#6366F1", "#8B5CF6"]}
        style={styles.rewardCard}
      >
        <Text style={styles.rewardTitle}>
          🏆 Junior Coder Badge
        </Text>

        <Text style={styles.rewardText}>
          Complete all coding missions to unlock
          your first coding badge.
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
  },

  heroText: {
    color: "#CBD5E1",
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
  },

  xpBox: {
    marginTop: 15,
    backgroundColor: "#4F46E5",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
  },

  xpText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
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
    color: "#E0E7FF",
    marginTop: 10,
    lineHeight: 24,
  },
});