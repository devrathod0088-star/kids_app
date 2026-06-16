import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
  Platform,
  ScrollView,
} from "react-native";

import { useRouter } from "expo-router";
import { useGame } from "../../../src/game/GameProvider";

/* ================= TYPES ================= */

type LevelStatus = "locked" | "open" | "done";

type Level = {
  id: number;
  status: LevelStatus;
};

/* ================= CONFETTI ================= */

let ConfettiCannon: any = null;

if (Platform.OS !== "web") {
  ConfettiCannon = require("react-native-confetti-cannon").default;
}

/* ================= SCREEN ================= */

export default function Games() {
  const router = useRouter();
  const game = useGame();

  const playerY = useRef(new Animated.Value(0)).current;
  const [showConfetti, setShowConfetti] = useState(false);

  const levels: Level[] = game?.levels ?? [];
  const xp: number = game?.xp ?? 0;
  const completeLevel = game?.completeLevel;

  const isLoading = !game || levels.length === 0;

  const spacing = 120;

  const currentIndex = Math.max(
    0,
    levels.findIndex((l) => l.status === "open")
  );

  /* ================= PLAYER MOVE ================= */

  useEffect(() => {
    if (isLoading) return;

    Animated.spring(playerY, {
      toValue: currentIndex * spacing,
      useNativeDriver: true,
      friction: 7,
    }).start();
  }, [currentIndex, isLoading]);

  /* ================= HELPERS ================= */

  const getColor = (status: LevelStatus) => {
    if (status === "done") return "#22c55e";
    if (status === "open") return "#6366f1";
    return "#cbd5e1";
  };

  const getStars = (status: LevelStatus) => {
    if (status === "done") return "⭐⭐⭐";
    if (status === "open") return "⭐";
    return "🔒";
  };

  const openLevel = (item: Level) => {
    if (item.status === "locked") return;
    router.push(`/games/level/${item.id}`);
  };

  /* ================= CONFETTI TRIGGER ================= */

  const handleComplete = (id: number) => {
    const level = levels.find((l) => l.id === id);
    if (!level || level.status !== "open") return;

    completeLevel?.(id);

    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 1800);
  };

  /* ================= UI ================= */

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.center}>
          <Text style={styles.loading}>Loading Adventure World... 🎮</Text>
        </View>
      ) : (
        <>
          {/* CONFETTI */}
          {showConfetti && ConfettiCannon && (
            <ConfettiCannon count={120} origin={{ x: 200, y: 0 }} fadeOut />
          )}

          {/* HEADER */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Adventure World 🚀</Text>
              <Text style={styles.subtitle}>
                Complete levels and earn rewards
              </Text>
            </View>

            <View style={styles.xpBox}>
              <Text style={styles.xp}>⭐ {xp} XP</Text>
            </View>
          </View>

          {/* MAP */}
          <ScrollView
            style={styles.map}
            contentContainerStyle={styles.mapContent}
            showsVerticalScrollIndicator={false}
          >
            {/* ROAD */}
            <View style={styles.road} />

            {/* PLAYER */}
            <Animated.View
              style={[
                styles.player,
                { transform: [{ translateY: playerY }] },
              ]}
            >
              <Text style={styles.car}>🚗</Text>
            </Animated.View>

            {/* LEVELS */}
            {levels.map((item, index) => {
              const isRight = index % 2 === 0;

              return (
                <View
                  key={item.id}
                  style={[
                    styles.row,
                    {
                      alignItems: isRight ? "flex-end" : "flex-start",
                    },
                  ]}
                >
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => openLevel(item)}
                    style={[
                      styles.node,
                      {
                        backgroundColor: getColor(item.status),
                        marginLeft: isRight ? 80 : 0,
                        marginRight: isRight ? 0 : 80,
                      },
                    ]}
                  >
                    <Text style={styles.level}>Level {item.id}</Text>

                    <Text style={styles.stars}>
                      {getStars(item.status)}
                    </Text>

                    <Text style={styles.status}>
                      {item.status.toUpperCase()}
                    </Text>

                    {item.status === "open" && (
                      <TouchableOpacity
                        style={styles.playButton}
                        onPress={() => openLevel(item)}
                      >
                        <Text style={styles.playText}>PLAY</Text>
                      </TouchableOpacity>
                    )}

                    {item.status === "done" && (
                      <TouchableOpacity
                        style={styles.doneButton}
                        onPress={() => openLevel(item)}
                      >
                        <Text style={styles.playText}>REPLAY</Text>
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>

          {/* BOTTOM NAV */}
          <View style={styles.bottomNav}>
            <Text style={styles.nav}>🏠</Text>
            <Text style={styles.nav}>🎮</Text>
            <Text style={styles.nav}>🏆</Text>
            <Text style={styles.nav}>🎁</Text>
            <Text style={styles.nav}>⚙️</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFF" },

  center: { flex: 1, justifyContent: "center", alignItems: "center" },

  loading: { fontSize: 18, fontWeight: "700", color: "#6366f1" },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#EEF2FF",
  },

  title: { fontSize: 24, fontWeight: "900" },

  subtitle: { fontSize: 13, color: "#6B7280", marginTop: 4 },

  xpBox: {
    backgroundColor: "#FFF7D6",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  xp: { color: "#E6A700", fontWeight: "800" },

  map: { flex: 1 },

  mapContent: { paddingVertical: 30, paddingBottom: 120 },

  road: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: 8,
    marginLeft: -4,
    backgroundColor: "#DDE5FF",
    borderRadius: 20,
  },

  player: { position: "absolute", left: 20, top: 40, zIndex: 999 },

  car: { fontSize: 34 },

  row: { height: 120, justifyContent: "center" },

  node: {
    width: 190,
    padding: 18,
    borderRadius: 24,
    elevation: 4,
  },

  level: { color: "#fff", fontSize: 20, fontWeight: "900" },

  stars: { fontSize: 16, marginTop: 6 },

  status: { fontSize: 11, marginTop: 6, color: "#fff", fontWeight: "700" },

  playButton: {
    marginTop: 12,
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 14,
    alignItems: "center",
  },

  doneButton: {
    marginTop: 12,
    backgroundColor: "#D1FAE5",
    paddingVertical: 10,
    borderRadius: 14,
    alignItems: "center",
  },

  playText: { fontWeight: "900" },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#EEF2FF",
  },

  nav: { fontSize: 26 },
});