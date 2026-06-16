import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Level4Dashboard() {
  const router = useRouter();

  const subjects = [
    {
      title: "Coding & Web Dev",
      emoji: "💻",
      route: "/foundation/level4/coding",
      colors: ["#2563EB", "#1D4ED8"],
    },
    {
      title: "AI & Future Tech",
      emoji: "🤖",
      route: "/foundation/level4/ai",
      colors: ["#8B5CF6", "#7C3AED"],
    },
    {
      title: "Robotics",
      emoji: "🔧",
      route: "/foundation/level4/robotics",
      colors: ["#06B6D4", "#0891B2"],
    },
    {
      title: "Finance",
      emoji: "💰",
      route: "/foundation/level4/finance",
      colors: ["#10B981", "#059669"],
    },
    {
      title: "Design",
      emoji: "🎨",
      route: "/foundation/level4/design",
      colors: ["#EC4899", "#DB2777"],
    },
    {
      title: "Public Speaking",
      emoji: "🎤",
      route: "/foundation/level4/speaking",
      colors: ["#F97316", "#EA580C"],
    },
    {
      title: "Advanced Science",
      emoji: "🔬",
      route: "/foundation/level4/science",
      colors: ["#0EA5E9", "#0284C7"],
    },
    {
      title: "Critical Thinking",
      emoji: "🧠",
      route: "/foundation/level4/thinking",
      colors: ["#6366F1", "#4F46E5"],
    },
    {
      title: "Career Skills",
      emoji: "🎯",
      route: "/foundation/level4/career",
      colors: ["#DC2626", "#B91C1C"],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["#4C1D95", "#7C3AED"]}
        style={styles.hero}
      >
        <Text style={styles.heroEmoji}>🐉</Text>

        <Text style={styles.heroTitle}>
          Dragon Academy
        </Text>

        <Text style={styles.heroSubtitle}>
          Future Masters • Ages 12–15
        </Text>

        <Text style={styles.heroText}>
          Build skills. Create projects.
          Shape your future.
        </Text>
      </LinearGradient>

      <Text style={styles.sectionTitle}>
        Choose Your Academy
      </Text>

      <View style={styles.grid}>
        {subjects.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardWrapper}
            activeOpacity={0.85}
            onPress={() => router.push(item.route as any)}
          >
            <LinearGradient
              colors={item.colors as any}
              style={styles.card}
            >
              <Text style={styles.cardEmoji}>
                {item.emoji}
              </Text>

              <Text style={styles.cardTitle}>
                {item.title}
              </Text>

              <Ionicons
                name="arrow-forward-circle"
                size={28}
                color="#fff"
              />
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>

      <LinearGradient
        colors={["#F59E0B", "#D97706"]}
        style={styles.rewardCard}
      >
        <Text style={styles.rewardTitle}>
          🏆 Future Master Trophy
        </Text>

        <Text style={styles.rewardText}>
          Complete all Level 4 academies to unlock
          the Future Master Certificate.
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
    padding: 28,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: "center",
  },

  heroEmoji: {
    fontSize: 70,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "900",
    marginTop: 10,
  },

  heroSubtitle: {
    color: "#E9D5FF",
    marginTop: 8,
    fontSize: 16,
    fontWeight: "700",
  },

  heroText: {
    color: "#F3E8FF",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 24,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "900",
    margin: 20,
    color: "#111827",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  cardWrapper: {
    width: "48%",
    marginBottom: 15,
  },

  card: {
    borderRadius: 24,
    minHeight: 160,
    padding: 20,
    justifyContent: "space-between",
  },

  cardEmoji: {
    fontSize: 36,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "900",
  },

  rewardCard: {
    margin: 20,
    padding: 25,
    borderRadius: 25,
    marginBottom: 40,
  },

  rewardTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },

  rewardText: {
    color: "#FEF3C7",
    marginTop: 10,
    lineHeight: 24,
  },
});