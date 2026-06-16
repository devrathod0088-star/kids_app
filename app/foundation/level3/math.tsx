import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function MathScreen() {
  const router = useRouter();
  const [xp] = useState(0);

  const missions = [
    {
      title: "Multiplication Master",
      topic: "multiplication",
      icon: "close-outline",
      color: "#2563EB",
      desc: "Learn multiplication tables and solve fun challenges.",
    },
    {
      title: "Division Quest",
      topic: "division",
      icon: "remove-outline",
      color: "#7C3AED",
      desc: "Master division with step-by-step examples.",
    },
    {
      title: "Fraction World",
      topic: "fraction",
      icon: "pie-chart-outline",
      color: "#F97316",
      desc: "Explore fractions using exciting activities.",
    },
    {
      title: "Decimal Challenge",
      topic: "decimal",
      icon: "calculator-outline",
      color: "#10B981",
      desc: "Understand decimals with real-life examples.",
    },
    {
      title: "Geometry Mission",
      topic: "geometry",
      icon: "shapes-outline",
      color: "#EC4899",
      desc: "Discover shapes, angles, and measurements.",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient
        colors={["#2563EB", "#7C3AED"]}
        style={styles.hero}
      >
        <Text style={styles.heroEmoji}>🧮</Text>

        <Text style={styles.heroTitle}>
          Math Adventures
        </Text>

        <Text style={styles.heroText}>
          Learn, practice, and test your math skills
          to become a Math Champion!
        </Text>

        <View style={styles.xpBox}>
          <Text style={styles.xpText}>
            ⭐ XP: {xp}
          </Text>
        </View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>
        🧮 Math Learning Path
      </Text>

      {missions.map((item, index) => (
        <View key={index} style={styles.card}>
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

            <View style={styles.actionRow}>
              {/* Learn */}
              <TouchableOpacity
                style={styles.learnBtn}
                onPress={() =>
                  router.push({
                    pathname:
                      "/foundation/level3/mathLearn",
                    params: {
                      topic: item.topic,
                    },
                  } as any)
                }
              >
                <Text style={styles.btnText}>
                  📘 Learn
                </Text>
              </TouchableOpacity>

              {/* Practice */}
              <TouchableOpacity
                style={styles.practiceBtn}
                onPress={() =>
                  router.push({
                    pathname:
                      "/foundation/level3/mathPractice",
                    params: {
                      topic: item.topic,
                    },
                  } as any)
                }
              >
                <Text style={styles.btnText}>
                  🧩 Practice
                </Text>
              </TouchableOpacity>

              {/* Test */}
              <TouchableOpacity
                style={styles.testBtn}
                onPress={() =>
                  router.push({
                    pathname:
                      "/foundation/level3/mathTest",
                    params: {
                      topic: item.topic,
                    },
                  } as any)
                }
              >
                <Text style={styles.btnText}>
                  🏆 Test
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}

      <LinearGradient
        colors={["#4F46E5", "#9333EA"]}
        style={styles.rewardCard}
      >
        <Text style={styles.rewardTitle}>
          🏅 Math Champion Badge
        </Text>

        <Text style={styles.rewardText}>
          Complete all topics to unlock the
          ultimate Math Champion Badge!
        </Text>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF4FF",
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
    color: "#E0E7FF",
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

  actionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 12,
  },

  learnBtn: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
  },

  practiceBtn: {
    backgroundColor: "#10B981",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
  },

  testBtn: {
    backgroundColor: "#F97316",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
  },

  btnText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 12,
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
    color: "#EDE9FE",
    marginTop: 10,
    lineHeight: 24,
  },
});