import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Level3SpaceAcademy() {
  const router = useRouter();

  const missions = [
    {
      no: "01",
      title: "Math Planet",
      icon: "calculator-outline",
      emoji: "🧮",
      route: "/foundation/level3/math",
      colors: ["#7C3AED", "#A855F7"],
      progress: 70,
      text: "Learn math tricks, practice puzzles, then try a small challenge.",
    },
    {
      no: "02",
      title: "Science Lab",
      icon: "flask-outline",
      emoji: "🔬",
      route: "/foundation/level3/science",
      colors: ["#0284C7", "#06B6D4"],
      progress: 45,
      text: "Explore science facts, practice experiments, then take a quick test.",
    },
    {
      no: "03",
      title: "World Explorer",
      icon: "earth-outline",
      emoji: "🌍",
      route: "/foundation/level3/geography",
      colors: ["#059669", "#10B981"],
      progress: 60,
      text: "Discover maps and cultures, practice, then complete a mini challenge.",
    },
    {
      no: "04",
      title: "Story Galaxy",
      icon: "book-outline",
      emoji: "📚",
      route: "/foundation/level3/reading",
      colors: ["#EA580C", "#F97316"],
      progress: 80,
      text: "Read stories, build vocabulary, then answer fun story questions.",
    },
    {
      no: "05",
      title: "Brain Logic",
      icon: "bulb-outline",
      emoji: "🧠",
      route: "/foundation/level3/logic",
      colors: ["#DB2777", "#EC4899"],
      progress: 55,
      text: "Learn logic, practice puzzles, then solve a mystery challenge.",
    },
    {
      no: "06",
      title: "Coding Island",
      icon: "code-slash-outline",
      emoji: "💻",
      route: "/foundation/level3/coding",
      colors: ["#111827", "#334155"],
      progress: 65,
      text: "Learn coding blocks, practice commands, then build a mini challenge.",
    },
    {
      no: "07",
      title: "Money Smart",
      icon: "cash-outline",
      emoji: "💰",
      route: "/foundation/level3/money",
      colors: ["#16A34A", "#22C55E"],
      progress: 50,
      text: "Learn saving, practice shopping choices, then test money skills.",
    },
    {
      no: "08",
      title: "Creative Studio",
      icon: "color-palette-outline",
      emoji: "🎨",
      route: "/foundation/level3/creative",
      colors: ["#BE185D", "#EC4899"],
      progress: 75,
      text: "Learn design ideas, practice creativity, then complete an art task.",
    },
    {
      no: "09",
      title: "Communication Club",
      icon: "mic-outline",
      emoji: "🎤",
      route: "/foundation/level3/communication",
      colors: ["#4F46E5", "#7C3AED"],
      progress: 60,
      text: "Learn speaking skills, practice confidence, then do a small challenge.",
      full: true,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={["#12002F", "#32127A", "#6D28D9"]} style={styles.hero}>
        <View style={styles.levelBadge}>
          <Ionicons name="star" size={17} color="#FACC15" />
          <Text style={styles.levelBadgeText}>Level 3 Learning</Text>
        </View>

        <Text style={styles.rocket}>🚀</Text>
        <Text style={styles.heroTitle}>SPACE ACADEMY</Text>
        <Text style={styles.heroSub}>Curious Minds • Ages 9–11</Text>
        <Text style={styles.heroSmall}>
          Learn first, practice next, then try a fun challenge test.
        </Text>

        <View style={styles.flowHero}>
          <Text style={styles.heroPill}>📘 Learn</Text>
          <Ionicons name="arrow-forward" size={16} color="#fff" />
          <Text style={styles.heroPill}>🧩 Practice</Text>
          <Ionicons name="arrow-forward" size={16} color="#fff" />
          <Text style={styles.heroPill}>🏆 Test</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNo}>9</Text>
            <Text style={styles.statText}>Subjects</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNo}>XP</Text>
            <Text style={styles.statText}>Rewards</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNo}>🏅</Text>
            <Text style={styles.statText}>Badges</Text>
          </View>
        </View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>🌟 Choose Learning World</Text>

      <View style={styles.grid}>
        {missions.map((m, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.88}
            style={[styles.cardWrap, m.full && styles.fullCard]}
            onPress={() => router.push(m.route as any)}
          >
            <LinearGradient colors={m.colors as any} style={styles.card}>
              <View style={styles.numBadge}>
                <Text style={styles.numText}>{m.no}</Text>
              </View>

              <View style={styles.iconCircle}>
                <Text style={styles.emoji}>{m.emoji}</Text>
                <Ionicons name={m.icon as any} size={24} color="#fff" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{m.title}</Text>
                <Text style={styles.cardText}>{m.text}</Text>

                <View style={styles.flowRow}>
                  <Text style={styles.flowPill}>📘 Learn</Text>
                  <Text style={styles.flowPill}>🧩 Practice</Text>
                  <Text style={styles.flowPill}>🏆 Test</Text>
                </View>

                <View style={styles.progressRow}>
                  <View style={styles.progressBg}>
                    <View style={[styles.progressFill, { width: `${m.progress}%` }]} />
                  </View>
                  <Text style={styles.percent}>{m.progress}%</Text>
                </View>

                <View style={styles.startBtn}>
                  <Text style={styles.startText}>Start Learning</Text>
                  <Ionicons name="arrow-forward" size={17} color="#fff" />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>

      <LinearGradient colors={["#2E1065", "#4C1D95", "#7C3AED"]} style={styles.unlockCard}>
        <Text style={styles.trophy}>🎉</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.unlockTitle}>Keep Exploring!</Text>
          <Text style={styles.unlockText}>
            Complete Learn, Practice and Test in each world to earn badges and unlock Level 4.
          </Text>
        </View>
        <Text style={styles.lock}>🔒</Text>
      </LinearGradient>
    </ScrollView>
  );
}

const CARD_WIDTH = width > 800 ? "48%" : "100%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  hero: {
    padding: 28,
    paddingTop: 35,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38,
    alignItems: "center",
  },

  levelBadge: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 30,
    alignItems: "center",
  },

  levelBadgeText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 16,
  },

  rocket: {
    fontSize: 62,
    marginTop: 12,
  },

  heroTitle: {
    fontSize: width > 800 ? 56 : 38,
    color: "#fff",
    fontWeight: "900",
    letterSpacing: 1,
    textAlign: "center",
  },

  heroSub: {
    color: "#EDE9FE",
    fontSize: 18,
    fontWeight: "800",
    marginTop: 8,
    textAlign: "center",
  },

  heroSmall: {
    color: "#C4B5FD",
    marginTop: 8,
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
  },

  flowHero: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },

  heroPill: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    backgroundColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },

  statsRow: {
    flexDirection: "row",
    backgroundColor: "rgba(15,23,42,0.7)",
    borderRadius: 28,
    padding: 14,
    marginTop: 24,
    width: "92%",
    justifyContent: "space-around",
  },

  statBox: {
    alignItems: "center",
  },

  statNo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },

  statText: {
    color: "#CBD5E1",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#0F172A",
    margin: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },

  cardWrap: {
    width: CARD_WIDTH as any,
    marginBottom: 18,
  },

  fullCard: {
    width: "100%",
  },

  card: {
    minHeight: 205,
    borderRadius: 28,
    padding: 20,
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
    elevation: 6,
  },

  numBadge: {
    position: "absolute",
    top: 14,
    left: 14,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },

  numText: {
    color: "#fff",
    fontWeight: "900",
  },

  iconCircle: {
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.16)",
    alignItems: "center",
    justifyContent: "center",
  },

  emoji: {
    fontSize: 34,
    marginBottom: 3,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "900",
  },

  cardText: {
    color: "#F8FAFC",
    marginTop: 7,
    lineHeight: 21,
    fontSize: 14,
  },

  flowRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 10,
  },

  flowPill: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "900",
    backgroundColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
  },

  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 12,
  },

  progressBg: {
    flex: 1,
    height: 9,
    backgroundColor: "rgba(0,0,0,0.28)",
    borderRadius: 20,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#FACC15",
    borderRadius: 20,
  },

  percent: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 13,
  },

  startBtn: {
    marginTop: 14,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 22,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },

  startText: {
    color: "#fff",
    fontWeight: "900",
  },

  unlockCard: {
    margin: 18,
    marginBottom: 35,
    borderRadius: 30,
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  trophy: {
    fontSize: 55,
  },

  unlockTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },

  unlockText: {
    color: "#DDD6FE",
    marginTop: 8,
    lineHeight: 22,
  },

  lock: {
    fontSize: 45,
  },
});