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

export default function MoneyScreen() {
  const [xp, setXp] = useState(0);

  const missions = [
    {
      title: "Needs vs Wants",
      icon: "cart-outline",
      color: "#22C55E",
      desc: "Learn the difference between things we need and things we want.",
    },
    {
      title: "Saving Money",
      icon: "wallet-outline",
      color: "#3B82F6",
      desc: "Discover why saving money is important for future goals.",
    },
    {
      title: "Smart Spending",
      icon: "cash-outline",
      color: "#F97316",
      desc: "Practice making good spending decisions.",
    },
    {
      title: "Budget Planner",
      icon: "calculator-outline",
      color: "#8B5CF6",
      desc: "Learn how to create a simple budget plan.",
    },
    {
      title: "Virtual Shop Mission",
      icon: "storefront-outline",
      color: "#EC4899",
      desc: "Use your coins wisely and complete shopping challenges.",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <LinearGradient
        colors={["#22C55E", "#16A34A"]}
        style={styles.hero}
      >
        <Text style={styles.heroEmoji}>💰</Text>

        <Text style={styles.heroTitle}>
          Money Smart
        </Text>

        <Text style={styles.heroText}>
          Learn saving, budgeting, smart spending and money management.
        </Text>

        <View style={styles.xpBox}>
          <Text style={styles.xpText}>
            ⭐ XP: {xp}
          </Text>
        </View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>
        🛒 Money Missions
      </Text>

      {missions.map((mission, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.85}
          onPress={() => setXp(xp + 25)}
        >
          <View style={styles.card}>
            <View
              style={[
                styles.iconBox,
                { backgroundColor: mission.color },
              ]}
            >
              <Ionicons
                name={mission.icon as any}
                size={30}
                color="#fff"
              />
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>
                {mission.title}
              </Text>

              <Text style={styles.desc}>
                {mission.desc}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      {/* Reward Section */}
      <LinearGradient
        colors={["#059669", "#22C55E"]}
        style={styles.rewardCard}
      >
        <Text style={styles.rewardTitle}>
          🏆 Money Master Badge
        </Text>

        <Text style={styles.rewardText}>
          Complete all money missions to unlock the
          Money Master Badge and become financially smart.
        </Text>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FDF4",
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
    color: "#DCFCE7",
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
    color: "#DCFCE7",
    marginTop: 10,
    lineHeight: 24,
  },
});