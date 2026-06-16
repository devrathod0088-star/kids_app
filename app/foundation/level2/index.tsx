import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Level2AdventureWorld() {
  const router = useRouter();

  const worlds = [
    {
      id: 1,
      title: "Math World",
      desc: "Numbers & Logic",
      icon: "calculator",
      emoji: "🔢",
      color: ["#2563EB", "#38BDF8"],
      route: "/foundation/level2/math",
      progress: 100,
      stars: 3,
      locked: false,
    },
    {
      id: 2,
      title: "Grammar World",
      desc: "Words & Sentences",
      icon: "book",
      emoji: "📚",
      color: ["#DB2777", "#F472B6"],
      route: "/foundation/level2/grammar",
      progress: 80,
      stars: 3,
      locked: false,
    },
    {
      id: 3,
      title: "Science World",
      desc: "Discover & Learn",
      icon: "flask",
      emoji: "🔬",
      color: ["#059669", "#34D399"],
      route: "/foundation/level2/science",
      progress: 45,
      stars: 2,
      locked: false,
    },
    {
      id: 4,
      title: "Puzzle World",
      desc: "Think & Solve",
      icon: "extension-puzzle",
      emoji: "🧩",
      color: ["#EA580C", "#FDBA74"],
      route: "/foundation/level2/puzzles",
      progress: 0,
      stars: 0,
      locked: true,
    },
    {
      id: 5,
      title: "Memory World",
      desc: "Remember & Match",
      icon: "brain",
      emoji: "🧠",
      color: ["#7C3AED", "#C084FC"],
      route: "/foundation/level2/memory",
      progress: 0,
      stars: 0,
      locked: true,
    },
  ];

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      }}
      style={styles.bg}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(17,24,39,0.88)", "rgba(76,29,149,0.88)"]}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.levelBadge}>LEVEL 2</Text>
            <Text style={styles.title}>Adventure World 🚀</Text>
            <Text style={styles.subtitle}>Learn • Explore • Achieve • Shine</Text>

            <View style={styles.statsRow}>
              <Stat icon="heart" text="5" color="#EF4444" />
              <Stat icon="diamond" text="1,250" color="#38BDF8" />
              <Stat icon="star" text="12,500 XP" color="#FACC15" />
            </View>
          </View>

          <View style={styles.goalCard}>
            <View>
              <Text style={styles.goalTitle}>🎯 Daily Goal</Text>
              <Text style={styles.goalText}>Complete 3 learning worlds</Text>
            </View>

            <View style={styles.goalRight}>
              <Text style={styles.goalCount}>2 / 3</Text>
              <Text style={styles.goalMini}>Completed</Text>
            </View>

            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: "65%" }]} />
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.worldMapBtn}
            onPress={() => router.push("/foundation/level2/worldmap" as any)}
          >
            <LinearGradient
              colors={["#7C3AED", "#4F46E5"]}
              style={styles.worldMapGradient}
            >
              <View>
                <Text style={styles.worldMapTitle}>🚗 Open Car Level Map</Text>
                <Text style={styles.worldMapSub}>Go from level 1 to level 100</Text>
              </View>
              <Ionicons name="chevron-forward" size={28} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Learning Worlds</Text>

          {worlds.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              disabled={item.locked}
              onPress={() => router.push(item.route as any)}
              style={{ opacity: item.locked ? 0.65 : 1 }}
            >
              <LinearGradient colors={item.color as any} style={styles.card}>
                <View style={styles.iconBox}>
                  <Text style={styles.emoji}>{item.emoji}</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <View style={styles.cardTop}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    {item.locked ? (
                      <Ionicons name="lock-closed" size={22} color="#fff" />
                    ) : (
                      <Ionicons name="checkmark-circle" size={24} color="#BBF7D0" />
                    )}
                  </View>

                  <Text style={styles.cardDesc}>{item.desc}</Text>

                  <View style={styles.starRow}>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Ionicons
                        key={i}
                        name="star"
                        size={15}
                        color={i < item.stars ? "#FACC15" : "rgba(255,255,255,0.35)"}
                      />
                    ))}
                  </View>

                  <View style={styles.cardBar}>
                    <View
                      style={[
                        styles.cardFill,
                        { width: `${item.progress}%` },
                      ]}
                    />
                  </View>

                  <Text style={styles.percentText}>{item.progress}% Complete</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}

          <View style={styles.castle}>
            <Text style={styles.castleEmoji}>🏰</Text>
            <Text style={styles.castleTitle}>Knowledge Castle</Text>
            <Text style={styles.castleText}>
              Complete all worlds to unlock the final reward.
            </Text>

            <View style={styles.rewardRow}>
              <Reward text="1,000 XP" icon="⭐" />
              <Reward text="250 Gems" icon="💎" />
              <Reward text="Badge" icon="🏆" />
            </View>
          </View>

          <View style={{ height: 30 }} />
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
}

function Stat({ icon, text, color }: any) {
  return (
    <View style={styles.stat}>
      <Ionicons name={icon} size={18} color={color} />
      <Text style={styles.statText}>{text}</Text>
    </View>
  );
}

function Reward({ icon, text }: any) {
  return (
    <View style={styles.reward}>
      <Text style={styles.rewardIcon}>{icon}</Text>
      <Text style={styles.rewardText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 48,
    alignItems: "center",
  },
  levelBadge: {
    backgroundColor: "rgba(255,255,255,0.18)",
    color: "#FACC15",
    fontWeight: "900",
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 8,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
  },
  subtitle: {
    color: "#E0E7FF",
    marginTop: 6,
    fontWeight: "700",
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 22,
  },
  statText: {
    color: "#fff",
    fontWeight: "900",
  },
  goalCard: {
    marginTop: 24,
    backgroundColor: "rgba(255,255,255,0.16)",
    borderRadius: 26,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
  },
  goalTitle: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "900",
  },
  goalText: {
    color: "#DDE6FF",
    marginTop: 5,
  },
  goalRight: {
    position: "absolute",
    right: 18,
    top: 18,
    alignItems: "flex-end",
  },
  goalCount: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },
  goalMini: {
    color: "#CBD5E1",
    fontSize: 11,
    fontWeight: "700",
  },
  progressBar: {
    height: 11,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 20,
    marginTop: 18,
  },
  progressFill: {
    height: 11,
    backgroundColor: "#22C55E",
    borderRadius: 20,
  },
  worldMapBtn: {
    marginTop: 18,
  },
  worldMapGradient: {
    padding: 18,
    borderRadius: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  worldMapTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },
  worldMapSub: {
    color: "#EDE9FE",
    marginTop: 4,
    fontWeight: "700",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 24,
    marginBottom: 4,
  },
  card: {
    flexDirection: "row",
    padding: 18,
    borderRadius: 28,
    marginTop: 14,
    alignItems: "center",
    elevation: 9,
  },
  iconBox: {
    width: 62,
    height: 62,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.22)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  emoji: {
    fontSize: 32,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "900",
  },
  cardDesc: {
    color: "#F8FAFC",
    marginTop: 3,
    fontWeight: "700",
  },
  starRow: {
    flexDirection: "row",
    marginTop: 8,
    gap: 3,
  },
  cardBar: {
    height: 8,
    backgroundColor: "rgba(255,255,255,0.28)",
    borderRadius: 10,
    marginTop: 10,
  },
  cardFill: {
    height: 8,
    backgroundColor: "#FACC15",
    borderRadius: 10,
  },
  percentText: {
    color: "#fff",
    marginTop: 6,
    fontSize: 12,
    fontWeight: "800",
  },
  castle: {
    marginTop: 26,
    alignItems: "center",
    padding: 24,
    backgroundColor: "rgba(255,255,255,0.16)",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
  },
  castleEmoji: {
    fontSize: 58,
  },
  castleTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 8,
  },
  castleText: {
    color: "#E0E7FF",
    textAlign: "center",
    marginTop: 6,
    lineHeight: 20,
  },
  rewardRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  reward: {
    backgroundColor: "rgba(255,255,255,0.18)",
    padding: 12,
    borderRadius: 18,
    alignItems: "center",
    minWidth: 90,
  },
  rewardIcon: {
    fontSize: 24,
  },
  rewardText: {
    color: "#fff",
    fontWeight: "900",
    marginTop: 4,
    fontSize: 12,
  },
});