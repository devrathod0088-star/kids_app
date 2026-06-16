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

export default function CommunicationScreen() {
  const [xp, setXp] = useState(0);

  const lessons = [
    {
      title: "Speaking Clearly",
      icon: "mic-outline",
      color: "#0EA5E9",
      desc: "Learn how to speak confidently and clearly.",
    },
    {
      title: "Listening Skills",
      icon: "ear-outline",
      color: "#10B981",
      desc: "Become a better listener and understand others.",
    },
    {
      title: "Show & Tell",
      icon: "megaphone-outline",
      color: "#F97316",
      desc: "Present your ideas in front of others.",
    },
    {
      title: "Teamwork",
      icon: "people-outline",
      color: "#8B5CF6",
      desc: "Learn to cooperate and solve problems together.",
    },
    {
      title: "Role Play Mission",
      icon: "chatbubbles-outline",
      color: "#EC4899",
      desc: "Practice real-life conversations through fun activities.",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={["#0EA5E9", "#6366F1"]}
        style={styles.hero}
      >
        <Text style={styles.heroEmoji}>🗣️</Text>

        <Text style={styles.heroTitle}>
          Communication Skills
        </Text>

        <Text style={styles.heroText}>
          Build confidence, improve speaking,
          listening and teamwork skills.
        </Text>

        <View style={styles.xpBox}>
          <Text style={styles.xpText}>
            ⭐ XP: {xp}
          </Text>
        </View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>
        🎤 Communication Missions
      </Text>

      {lessons.map((lesson, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.85}
          onPress={() => setXp(xp + 25)}
        >
          <View style={styles.card}>
            <View
              style={[
                styles.iconBox,
                { backgroundColor: lesson.color },
              ]}
            >
              <Ionicons
                name={lesson.icon as any}
                size={30}
                color="#fff"
              />
            </View>

            <View style={styles.content}>
              <Text style={styles.lessonTitle}>
                {lesson.title}
              </Text>

              <Text style={styles.lessonDesc}>
                {lesson.desc}
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
          🏆 Confident Speaker Badge
        </Text>

        <Text style={styles.rewardText}>
          Complete all communication missions to
          unlock your Confident Speaker Badge and
          become a great communicator.
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
    color: "#E0F2FE",
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

  lessonTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#111827",
  },

  lessonDesc: {
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