import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const MAP_WIDTH = width - 24;
const MAP_HEIGHT = 5200;
const LEVEL_GAP = 95;

const zones = [
  { name: "🌳 FOREST 1-10", bottom: 350, color: "#43A047", bg: "#7EE081" },
  { name: "🏝️ BEACH 11-20", bottom: 1350, color: "#F59E0B", bg: "#F8D889" },
  { name: "❄️ SNOW 21-30", bottom: 2350, color: "#2563EB", bg: "#CFEFFF" },
  { name: "🚀 SPACE 31-40", bottom: 3350, color: "#7C3AED", bg: "#2B145F" },
  { name: "🐉 DRAGON 41-50", bottom: 4350, color: "#DC2626", bg: "#3B1D1D" },
];

const colors = ["#22C55E", "#2EA8FF", "#8B5CF6", "#FDB022", "#FF5AA5", "#18C3D6"];

const levels = Array.from({ length: 50 }, (_, index) => {
  const id = index + 1;
  return {
    id,
    top: MAP_HEIGHT - 260 - index * LEVEL_GAP,
    left: index % 4 === 0 ? 165 : index % 4 === 1 ? 275 : index % 4 === 2 ? 130 : 245,
    color: colors[index % colors.length],
  };
});

export default function AdventureScreen() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const scrollRef = useRef<ScrollView>(null);

  const carScale = useRef(new Animated.Value(1)).current;
  const carRotate = useRef(new Animated.Value(0)).current;
  const carX = useRef(new Animated.Value(levels[0].left - 42)).current;
  const carY = useRef(new Animated.Value(levels[0].top + 10)).current;

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({ y: MAP_HEIGHT - 900, animated: false });
    }, 300);
  }, []);

  const moveCar = (levelId: number) => {
    const level = levels[levelId - 1];
    setCurrentLevel(levelId);

    Animated.parallel([
      Animated.timing(carX, {
        toValue: level.left - 42,
        duration: 650,
        useNativeDriver: false,
      }),
      Animated.timing(carY, {
        toValue: level.top + 10,
        duration: 650,
        useNativeDriver: false,
      }),
      Animated.sequence([
        Animated.timing(carScale, { toValue: 1.25, duration: 160, useNativeDriver: true }),
        Animated.timing(carScale, { toValue: 1, duration: 160, useNativeDriver: true }),
      ]),
      Animated.sequence([
        Animated.timing(carRotate, { toValue: 1, duration: 220, useNativeDriver: true }),
        Animated.timing(carRotate, { toValue: 0, duration: 220, useNativeDriver: true }),
      ]),
    ]).start();
  };

  const rotate = carRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-12deg"],
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Adventure ✨</Text>
          <View style={styles.profile}>
            <Text style={styles.avatar}>👦</Text>
            <View>
              <Text style={styles.name}>Dev Rathod</Text>
              <Text style={styles.levelText}>Level {currentLevel} Explorer</Text>
            </View>
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.card}>
            <Text style={styles.cardIcon}>⭐</Text>
            <Text style={styles.cardText}>Stars</Text>
            <Text style={styles.cardValue}>{currentLevel * 35}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>🔥</Text>
            <Text style={styles.cardText}>Streak</Text>
            <Text style={styles.cardValue}>7</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>🎁</Text>
            <Text style={styles.cardText}>Reward</Text>
            <Text style={styles.cardValueSmall}>Claim</Text>
          </View>
        </View>

        <View style={styles.map}>
          {zones.map((z) => (
            <View
              key={z.name}
              style={[
                styles.zone,
                {
                  bottom: z.bottom,
                  backgroundColor: z.bg,
                  borderColor: z.color,
                },
              ]}
            >
              <Text style={[styles.zoneTitle, { color: z.color }]}>{z.name}</Text>
            </View>
          ))}

          <View style={styles.road} />

          <Text style={styles.castle}>🏰</Text>
          <Text style={styles.dragon}>🐉</Text>
          <Text style={styles.rocket}>🚀</Text>
          <Text style={styles.snowman}>⛄</Text>
          <Text style={styles.beach}>🏖️</Text>
          <Text style={styles.house}>🏠</Text>
          <Text style={styles.start}>START</Text>

          {Array.from({ length: 90 }).map((_, i) => (
            <Text
              key={i}
              style={[
                styles.decor,
                {
                  top: 80 + i * 55,
                  left: i % 4 === 0 ? 40 : i % 4 === 1 ? MAP_WIDTH - 85 : i % 4 === 2 ? 95 : MAP_WIDTH - 140,
                },
              ]}
            >
              {i % 8 === 0
                ? "🌲"
                : i % 8 === 1
                ? "🌸"
                : i % 8 === 2
                ? "🪨"
                : i % 8 === 3
                ? "🌴"
                : i % 8 === 4
                ? "⭐"
                : i % 8 === 5
                ? "❄️"
                : i % 8 === 6
                ? "🪐"
                : "🍄"}
            </Text>
          ))}

          <Animated.Text
            style={[
              styles.car,
              {
                top: carY,
                left: carX,
                transform: [{ scale: carScale }, { rotate }],
              },
            ]}
          >
            🚙
          </Animated.Text>

          {levels.map((item) => {
            const active = item.id === currentLevel;
            const completed = item.id <= currentLevel;
            const boss = item.id % 10 === 0;

            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => moveCar(item.id)}
                activeOpacity={0.85}
                style={[
                  styles.level,
                  boss && styles.bossLevel,
                  {
                    top: item.top,
                    left: item.left,
                    backgroundColor: completed ? item.color : "#94A3B8",
                    borderColor: active ? "#FFF7AD" : "#FFFFFF",
                    transform: [{ scale: active ? 1.16 : 1 }],
                    elevation: active ? 25 : 12,
                  },
                ]}
              >
                {active && <View style={styles.glow} />}
                <Text style={styles.levelNumber}>{boss ? "👑" : item.id}</Text>
                <Text style={styles.star}>{completed ? "⭐⭐⭐" : "🔒"}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.goalCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.goalTitle}>🎯 Today's Goal</Text>
            <Text style={styles.goalSub}>Complete 2 activities</Text>
            <View style={styles.progressBg}>
              <View style={[styles.progressFill, { width: `${Math.min(currentLevel * 2, 100)}%` }]} />
            </View>
            <Text style={styles.goalCount}>{currentLevel} / 50 completed</Text>
          </View>

          <View style={styles.rewardBox}>
            <Text style={styles.gift}>🎁</Text>
            <Text style={styles.rewardText}>Next Reward</Text>
          </View>
        </View>

        <View style={styles.bottomNav}>
          <Text style={styles.nav}>🏠{"\n"}Home</Text>
          <Text style={styles.nav}>📖{"\n"}Learn</Text>
          <Text style={styles.navActive}>🚗{"\n"}Adventure</Text>
          <Text style={styles.nav}>👤{"\n"}Profile</Text>
          <Text style={styles.nav}>🛡️{"\n"}Parent</Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#AEEBFF" },
  scroll: { paddingBottom: 20 },

  header: {
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#172554",
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },

  profile: {
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    padding: 10,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    elevation: 10,
  },

  avatar: { fontSize: 30 },
  name: { fontSize: 13, fontWeight: "900", color: "#172554" },
  levelText: { fontSize: 11, fontWeight: "800", color: "#64748B" },

  stats: {
    position: "absolute",
    top: 110,
    left: 16,
    zIndex: 999,
    gap: 12,
  },

  card: {
    width: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    elevation: 12,
  },

  cardIcon: { fontSize: 28 },
  cardText: { fontSize: 11, fontWeight: "900", color: "#475569" },
  cardValue: { fontSize: 22, fontWeight: "900", color: "#7C3AED" },
  cardValueSmall: { fontSize: 13, fontWeight: "900", color: "#7C3AED" },

  map: {
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    alignSelf: "center",
    position: "relative",
    overflow: "hidden",
    borderRadius: 34,
    backgroundColor: "#7EE081",
    borderWidth: 8,
    borderColor: "#35A853",
    marginTop: 20,
  },

  zone: {
    position: "absolute",
    left: 0,
    width: MAP_WIDTH,
    height: 1000,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    opacity: 0.9,
  },

  zoneTitle: {
    position: "absolute",
    top: 30,
    right: 18,
    fontSize: 24,
    fontWeight: "900",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
  },

  road: {
    position: "absolute",
    left: MAP_WIDTH / 2 - 45,
    top: 0,
    width: 90,
    height: MAP_HEIGHT,
    backgroundColor: "#F7D787",
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderColor: "#D9A441",
    borderRadius: 50,
  },

  castle: { position: "absolute", top: 25, left: MAP_WIDTH / 2 - 55, fontSize: 90, zIndex: 30 },
  dragon: { position: "absolute", top: 260, right: 35, fontSize: 70, zIndex: 30 },
  rocket: { position: "absolute", top: 1450, left: 35, fontSize: 70, zIndex: 30 },
  snowman: { position: "absolute", top: 2450, left: 35, fontSize: 65, zIndex: 30 },
  beach: { position: "absolute", top: 3350, right: 35, fontSize: 65, zIndex: 30 },
  house: { position: "absolute", bottom: 95, left: 42, fontSize: 68, zIndex: 30 },
  start: {
    position: "absolute",
    bottom: 40,
    left: 55,
    backgroundColor: "#8B5A2B",
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 22,
    padding: 8,
    borderRadius: 10,
    zIndex: 40,
  },

  decor: { position: "absolute", fontSize: 28, zIndex: 20 },

  car: { position: "absolute", fontSize: 58, zIndex: 100 },

  level: {
    position: "absolute",
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    zIndex: 80,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 7 },
  },

  bossLevel: {
    width: 84,
    height: 84,
    borderRadius: 42,
  },

  glow: {
    position: "absolute",
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: "#FFF7AD",
    opacity: 0.5,
  },

  levelNumber: { color: "#FFFFFF", fontSize: 25, fontWeight: "900" },
  star: { fontSize: 9, marginTop: 2 },

  goalCard: {
    marginHorizontal: 18,
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 34,
    padding: 20,
    flexDirection: "row",
    elevation: 16,
    gap: 14,
  },

  goalTitle: { fontSize: 22, fontWeight: "900", color: "#172554" },
  goalSub: { marginTop: 5, fontSize: 13, fontWeight: "800", color: "#64748B" },

  progressBg: {
    marginTop: 18,
    height: 14,
    backgroundColor: "#E5E7EB",
    borderRadius: 20,
  },

  progressFill: {
    height: 14,
    backgroundColor: "#22C55E",
    borderRadius: 20,
  },

  goalCount: {
    marginTop: 16,
    color: "#7C3AED",
    fontSize: 20,
    fontWeight: "900",
  },

  rewardBox: {
    width: 120,
    borderRadius: 26,
    backgroundColor: "#F5F3FF",
    alignItems: "center",
    justifyContent: "center",
  },

  gift: { fontSize: 42 },
  rewardText: { fontSize: 13, fontWeight: "900", color: "#6D28D9" },

  bottomNav: {
    marginHorizontal: 18,
    marginTop: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 34,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 16,
  },

  nav: { textAlign: "center", color: "#94A3B8", fontSize: 12, fontWeight: "900" },
  navActive: { textAlign: "center", color: "#7C3AED", fontSize: 12, fontWeight: "900" },
});