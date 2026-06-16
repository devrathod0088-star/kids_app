import React, { useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

const MAP_WIDTH = Math.min(width - 24, 460);
const MAP_HEIGHT = 5200;

const colors = ["#22C55E", "#2EA8FF", "#8B5CF6", "#FDB022", "#FF5AA5", "#18C3D6"];

const levels = Array.from({ length: 50 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    top: MAP_HEIGHT - 260 - index * 95,
    left:
      index % 4 === 0
        ? 185
        : index % 4 === 1
        ? 275
        : index % 4 === 2
        ? 145
        : 250,
    color: colors[index % colors.length],
    title:
      id === 50
        ? "Legend"
        : id % 5 === 0
        ? "Level Up"
        : id % 4 === 0
        ? "Challenge"
        : id % 3 === 0
        ? "Practice"
        : id % 2 === 0
        ? "Learn"
        : "Start",
  };
});

const roadPath =
  "M210 5050 C80 4950 330 4850 200 4750 C90 4650 340 4550 220 4450 C100 4350 340 4250 200 4150 C80 4050 330 3950 210 3850 C100 3750 330 3650 220 3550 C90 3450 340 3350 210 3250 C80 3150 330 3050 220 2950 C90 2850 340 2750 210 2650 C80 2550 330 2450 220 2350 C90 2250 340 2150 210 2050 C80 1950 330 1850 220 1750 C90 1650 340 1550 210 1450 C80 1350 330 1250 220 1150 C90 1050 340 950 210 850 C80 750 330 650 220 550 C120 430 280 320 230 180";

export default function Games() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const scrollRef = useRef<ScrollView>(null);

  const carScale = useRef(new Animated.Value(1)).current;
  const carRotate = useRef(new Animated.Value(0)).current;
  const carX = useRef(new Animated.Value(levels[0].left - 35)).current;
  const carY = useRef(new Animated.Value(levels[0].top + 12)).current;

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: false });
    }, 300);
  }, []);

  const moveCar = (levelId: number) => {
    setCurrentLevel(levelId);

    Animated.parallel([
      Animated.timing(carX, {
        toValue: levels[levelId - 1].left - 35,
        duration: 650,
        useNativeDriver: false,
      }),
      Animated.timing(carY, {
        toValue: levels[levelId - 1].top + 12,
        duration: 650,
        useNativeDriver: false,
      }),
      Animated.sequence([
        Animated.timing(carScale, {
          toValue: 1.25,
          duration: 160,
          useNativeDriver: true,
        }),
        Animated.timing(carScale, {
          toValue: 1,
          duration: 160,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.timing(carRotate, {
          toValue: 1,
          duration: 240,
          useNativeDriver: true,
        }),
        Animated.timing(carRotate, {
          toValue: 0,
          duration: 240,
          useNativeDriver: true,
        }),
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
          <TouchableOpacity style={styles.menuBtn}>
            <Text style={styles.menuText}>☰</Text>
          </TouchableOpacity>

          <View style={styles.profileCard}>
            <Text style={styles.avatar}>👦</Text>
            <View>
              <Text style={styles.name}>Dev Rathod</Text>
              <Text style={styles.levelSmall}>Level {currentLevel} Explorer</Text>
            </View>
            <Text style={styles.bell}>🔔</Text>
          </View>
        </View>

        <View style={styles.titleArea}>
          <Text style={styles.spark}>✨</Text>
          <Text style={styles.mainTitle}>Adventure</Text>
          <Text style={styles.mainSub}>Keep Learning, Keep Growing</Text>
        </View>

        <View style={styles.floatCards}>
          <View style={styles.floatCard}>
            <Text style={styles.floatIcon}>⭐</Text>
            <View>
              <Text style={styles.floatLabel}>Your Stars</Text>
              <Text style={styles.floatValue}>{currentLevel * 35}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>

          <View style={styles.floatCard}>
            <Text style={styles.floatIcon}>🔥</Text>
            <View>
              <Text style={styles.floatLabel}>Day Streak</Text>
              <Text style={styles.floatValue}>7</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>

          <View style={styles.floatCard}>
            <Text style={styles.floatIcon}>🎁</Text>
            <View>
              <Text style={styles.floatLabel}>Daily Reward</Text>
              <Text style={styles.floatValueSmall}>Claim now!</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>
        </View>

        <View style={styles.mapWrap}>
          <View style={styles.islandShadow} />
          <View style={styles.islandBase} />
          <View style={styles.islandShade1} />
          <View style={styles.islandShade2} />

          <View style={styles.water1} />
          <View style={styles.water2} />
          <View style={styles.water3} />
          <View style={styles.water4} />

          <View style={styles.lake}>
            <Text style={styles.lotus}>🪷</Text>
          </View>
          <Text style={styles.bridge}>🪵</Text>

          <Text style={styles.zone1}>🌳 Forest Zone</Text>
          <Text style={styles.zone2}>❄️ Snow Zone</Text>
          <Text style={styles.zone3}>🚀 Space Zone</Text>
          <Text style={styles.zone4}>🐉 Dragon Zone</Text>
          <Text style={styles.zone5}>🏰 Legend Zone</Text>

          <Text style={styles.castle}>🏰</Text>
          <Text style={styles.trophy}>🏆</Text>
          <Text style={styles.dragon}>🐉</Text>
          <Text style={styles.rocket}>🚀</Text>
          <Text style={styles.igloo}>🧊</Text>
          <Text style={styles.house}>🏠</Text>
          <Text style={styles.house2}>🏡</Text>
          <Text style={styles.house3}>🏘️</Text>
          <Text style={styles.flag1}>🚩</Text>
          <Text style={styles.flag2}>🎌</Text>
          <Text style={styles.balloon1}>🎈</Text>
          <Text style={styles.balloon2}>🎈</Text>
          <Text style={styles.cloud1}>☁️</Text>
          <Text style={styles.cloud2}>☁️</Text>
          <Text style={styles.cloud3}>☁️</Text>
          <Text style={styles.cloud4}>☁️</Text>
          <Text style={styles.birds}>⌁ ⌁ ⌁</Text>

          {Array.from({ length: 80 }).map((_, i) => (
            <Text
              key={`decor-${i}`}
              style={[
                styles.decor,
                {
                  top: 150 + i * 62,
                  left: i % 4 === 0 ? 55 : i % 4 === 1 ? 345 : i % 4 === 2 ? 105 : 300,
                  fontSize: i % 7 === 0 ? 38 : 28,
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
                ? "🌳"
                : i % 8 === 4
                ? "🌼"
                : i % 8 === 5
                ? "🌴"
                : i % 8 === 6
                ? "🍄"
                : "✨"}
            </Text>
          ))}

          <Svg width="100%" height={MAP_HEIGHT} style={StyleSheet.absoluteFillObject}>
            <Path
              d={roadPath}
              stroke="#7C4A1E"
              strokeWidth="112"
              fill="none"
              strokeLinecap="round"
              opacity={0.25}
            />
            <Path
              d={roadPath}
              stroke="#F7D787"
              strokeWidth="88"
              fill="none"
              strokeLinecap="round"
            />
            <Path
              d={roadPath}
              stroke="#FFF8DC"
              strokeWidth="8"
              strokeDasharray="20 18"
              fill="none"
              strokeLinecap="round"
            />
          </Svg>

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

          <Animated.Text
            style={[
              styles.smoke,
              {
                top: Animated.add(carY, 45),
                left: Animated.add(carX, -18),
              },
            ]}
          >
            💨
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
                    transform: [{ scale: active ? 1.18 : 1 }],
                    borderColor: active ? "#FFF7AD" : "#FFFFFF",
                    shadowColor: active ? item.color : "#000",
                    shadowOpacity: active ? 0.8 : 0.25,
                    shadowRadius: active ? 20 : 8,
                    elevation: active ? 25 : 12,
                  },
                ]}
              >
                {active && <View style={styles.glow} />}
                <Text style={styles.levelNumber}>{boss ? "👑" : item.id}</Text>
                <Text style={styles.star}>{completed ? "⭐⭐⭐" : "🔒"}</Text>

                {item.id % 5 === 0 && (
                  <View style={styles.levelTag}>
                    <Text style={styles.levelTagText}>
                      {completed ? item.title : "Locked 🔒"}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
  

        <View style={styles.goalCard}>
          <View style={styles.goalLeft}>
            <Text style={styles.goalTitle}>🎯 Today’s Goal</Text>
            <Text style={styles.goalSub}>Complete 2 activities</Text>

            <View style={styles.progressRow}>
              <View style={styles.progressBg}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${Math.min(currentLevel * 2, 100)}%` },
                  ]}
                />
              </View>
              <Text style={styles.percent}>{Math.min(currentLevel * 2, 100)}%</Text>
            </View>

            <Text style={styles.goalCount}>{currentLevel} / 50 completed</Text>
          </View>

          <View style={styles.rewardBox}>
            <Text style={styles.gift}>🎁</Text>
            <Text style={styles.rewardTitle}>Next Reward</Text>
            <Text style={styles.rewardSub}>Complete today's goal</Text>

            <TouchableOpacity style={styles.claimButton}>
              <Text style={styles.claimText}>Claim 🎁</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomNav}>
          <View style={styles.navItem}>
            <Text style={styles.navIcon}>🏠</Text>
            <Text style={styles.navText}>Home</Text>
          </View>

          <View style={styles.navItem}>
            <Text style={styles.navIcon}>📖</Text>
            <Text style={styles.navText}>Learn</Text>
          </View>

          <View style={styles.activeNav}>
            <Text style={styles.activeIcon}>🚗</Text>
            <Text style={styles.activeText}>Adventure</Text>
          </View>

          <View style={styles.navItem}>
            <Text style={styles.navIcon}>👤</Text>
            <Text style={styles.navText}>Profile</Text>
          </View>

          <View style={styles.navItem}>
            <Text style={styles.navIcon}>🛡️</Text>
            <Text style={styles.navText}>Parent</Text>
          </View>
        </View>

        <View style={{ height: 35 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#AEEBFF" },
  scroll: { paddingBottom: 20 },

  header: {
    paddingHorizontal: 20,
    paddingTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  menuBtn: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 12,
  },

  menuText: { fontSize: 26, fontWeight: "900", color: "#172554" },

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 12,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    elevation: 14,
  },

  avatar: {
    fontSize: 36,
    backgroundColor: "#EEF2FF",
    borderRadius: 22,
    padding: 4,
  },

  name: { fontWeight: "900", color: "#172554", fontSize: 15 },
  levelSmall: { color: "#64748B", fontSize: 12, fontWeight: "700" },
  bell: { fontSize: 22, marginLeft: 4 },

  titleArea: { paddingHorizontal: 22, marginTop: 18 },

  spark: {
    fontSize: 28,
    marginLeft: 230,
    marginBottom: -10,
  },

  mainTitle: {
    fontSize: 46,
    fontWeight: "900",
    color: "#172554",
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 0,
  },

  mainSub: {
    marginTop: 5,
    fontSize: 16,
    color: "#64748B",
    fontWeight: "800",
  },

  floatCards: {
    position: "absolute",
    top: 220,
    left: 18,
    zIndex: 100,
    gap: 14,
  },

  floatCard: {
    width: 170,
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 26,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    elevation: 14,
  },

  floatIcon: {
    fontSize: 31,
    backgroundColor: "#F5F3FF",
    padding: 8,
    borderRadius: 20,
  },

  floatLabel: { color: "#475569", fontWeight: "800", fontSize: 12 },
  floatValue: { color: "#6D28D9", fontSize: 26, fontWeight: "900" },

  floatValueSmall: {
    color: "#7C3AED",
    fontSize: 13,
    fontWeight: "900",
    marginTop: 4,
  },

  arrow: {
    marginLeft: "auto",
    fontSize: 28,
    color: "#94A3B8",
    fontWeight: "900",
  },

  mapWrap: {
    marginTop: 30,
    height: MAP_HEIGHT,
    width: MAP_WIDTH,
    alignSelf: "center",
    position: "relative",
    overflow: "hidden",
  },

  islandShadow: {
    position: "absolute",
    top: 95,
    left: 35,
    width: MAP_WIDTH - 50,
    height: MAP_HEIGHT - 160,
    backgroundColor: "#2E7D32",
    borderRadius: 220,
    opacity: 0.22,
  },

  islandBase: {
    position: "absolute",
    top: 80,
    left: 25,
    width: MAP_WIDTH - 50,
    height: MAP_HEIGHT - 160,
    backgroundColor: "#74D66D",
    borderRadius: 220,
    borderWidth: 10,
    borderColor: "#4CAF50",
    elevation: 20,
  },

  islandShade1: {
    position: "absolute",
    top: 900,
    left: 50,
    width: MAP_WIDTH - 100,
    height: 850,
    backgroundColor: "#8BE36A",
    borderRadius: 180,
    opacity: 0.5,
  },

  islandShade2: {
    position: "absolute",
    top: 3150,
    left: 45,
    width: MAP_WIDTH - 90,
    height: 900,
    backgroundColor: "#9AF279",
    borderRadius: 180,
    opacity: 0.42,
  },

  water1: {
    position: "absolute",
    top: 900,
    left: -75,
    width: 195,
    height: 320,
    backgroundColor: "#38BDF8",
    borderRadius: 100,
  },

  water2: {
    position: "absolute",
    top: 2400,
    right: -75,
    width: 205,
    height: 380,
    backgroundColor: "#38BDF8",
    borderRadius: 110,
  },

  water3: {
    position: "absolute",
    top: 3800,
    left: -65,
    width: 190,
    height: 340,
    backgroundColor: "#38BDF8",
    borderRadius: 95,
  },

  water4: {
    position: "absolute",
    bottom: 280,
    right: -65,
    width: 170,
    height: 260,
    backgroundColor: "#38BDF8",
    borderRadius: 95,
  },

  lake: {
    position: "absolute",
    bottom: 700,
    right: 40,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#38BDF8",
    borderWidth: 6,
    borderColor: "#7DD3FC",
    elevation: 12,
    zIndex: 18,
  },

  lotus: {
    position: "absolute",
    top: 40,
    left: 45,
    fontSize: 30,
  },

  bridge: {
    position: "absolute",
    bottom: 740,
    right: 145,
    fontSize: 42,
    zIndex: 30,
    transform: [{ rotate: "-18deg" }],
  },

  zone1: {
    position: "absolute",
    bottom: 560,
    left: 120,
    fontSize: 22,
    fontWeight: "900",
    color: "#166534",
    zIndex: 30,
  },

  zone2: {
    position: "absolute",
    bottom: 1550,
    left: 110,
    fontSize: 22,
    fontWeight: "900",
    color: "#2563EB",
    zIndex: 30,
  },

  zone3: {
    position: "absolute",
    bottom: 2550,
    left: 120,
    fontSize: 22,
    fontWeight: "900",
    color: "#7C3AED",
    zIndex: 30,
  },

  zone4: {
    position: "absolute",
    bottom: 3550,
    left: 110,
    fontSize: 22,
    fontWeight: "900",
    color: "#DC2626",
    zIndex: 30,
  },

  zone5: {
    position: "absolute",
    top: 120,
    left: 120,
    fontSize: 22,
    fontWeight: "900",
    color: "#F59E0B",
    zIndex: 30,
  },

  castle: {
    position: "absolute",
    top: 20,
    left: 145,
    fontSize: 92,
    zIndex: 20,
  },

  trophy: {
    position: "absolute",
    top: 118,
    left: 202,
    fontSize: 55,
    zIndex: 25,
  },

  dragon: {
    position: "absolute",
    top: 360,
    right: 42,
    fontSize: 60,
    zIndex: 20,
  },

  rocket: {
    position: "absolute",
    top: 1250,
    right: 70,
    fontSize: 60,
    zIndex: 20,
  },

  igloo: {
    position: "absolute",
    top: 2050,
    right: 70,
    fontSize: 56,
    zIndex: 20,
  },

  house: {
    position: "absolute",
    bottom: 90,
    left: 70,
    fontSize: 64,
    zIndex: 20,
  },

  house2: {
    position: "absolute",
    bottom: 980,
    right: 65,
    fontSize: 55,
    zIndex: 20,
  },

  house3: {
    position: "absolute",
    bottom: 2950,
    left: 60,
    fontSize: 55,
    zIndex: 20,
  },

  flag1: {
    position: "absolute",
    bottom: 340,
    left: 220,
    fontSize: 38,
    zIndex: 25,
  },

  flag2: {
    position: "absolute",
    top: 620,
    right: 90,
    fontSize: 38,
    zIndex: 25,
  },

  balloon1: {
    position: "absolute",
    top: 520,
    right: 35,
    fontSize: 48,
    zIndex: 30,
  },

  balloon2: {
    position: "absolute",
    bottom: 1650,
    left: 36,
    fontSize: 48,
    zIndex: 30,
  },

  cloud1: {
    position: "absolute",
    top: 600,
    left: 40,
    fontSize: 42,
    zIndex: 30,
  },

  cloud2: {
    position: "absolute",
    top: 2200,
    right: 30,
    fontSize: 46,
    zIndex: 30,
  },

  cloud3: {
    position: "absolute",
    top: 3900,
    left: 45,
    fontSize: 44,
    zIndex: 30,
  },

  cloud4: {
    position: "absolute",
    top: 170,
    right: 30,
    fontSize: 42,
    zIndex: 30,
  },

  birds: {
    position: "absolute",
    top: 280,
    left: 105,
    fontSize: 28,
    color: "#2563EB",
    zIndex: 30,
  },

  decor: {
    position: "absolute",
    zIndex: 15,
  },

  car: {
    position: "absolute",
    fontSize: 58,
    zIndex: 99,
  },

  smoke: {
    position: "absolute",
    fontSize: 24,
    zIndex: 80,
  },

  level: {
    position: "absolute",
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    shadowOffset: { width: 0, height: 7 },
    zIndex: 60,
  },

  bossLevel: {
    width: 82,
    height: 82,
    borderRadius: 41,
  },

  glow: {
    position: "absolute",
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: "#FFF7AD",
    opacity: 0.55,
  },

  levelNumber: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 26,
  },

  star: {
    fontSize: 9,
    marginTop: 2,
  },

  levelTag: {
    position: "absolute",
    left: 66,
    top: 20,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
    elevation: 10,
    minWidth: 92,
  },

  levelTagText: {
    fontSize: 10,
    fontWeight: "900",
    color: "#172554",
  },

  goalCard: {
    marginHorizontal: 18,
    marginTop: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 34,
    padding: 20,
    elevation: 16,
    flexDirection: "row",
    gap: 14,
  },

  goalLeft: { flex: 1 },

  goalTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#172554",
  },

  goalSub: {
    marginTop: 6,
    color: "#64748B",
    fontWeight: "800",
  },

  progressRow: {
    marginTop: 22,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  progressBg: {
    flex: 1,
    height: 14,
    backgroundColor: "#E5E7EB",
    borderRadius: 20,
  },

  progressFill: {
    height: 14,
    backgroundColor: "#22C55E",
    borderRadius: 20,
  },

  percent: {
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
    fontWeight: "900",
    color: "#475569",
  },

  goalCount: {
    marginTop: 18,
    fontSize: 21,
    fontWeight: "900",
    color: "#7C3AED",
  },

  rewardBox: {
    width: 125,
    backgroundColor: "#F5F3FF",
    borderRadius: 26,
    padding: 14,
    alignItems: "center",
  },

  gift: { fontSize: 42 },

  rewardTitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#6D28D9",
    fontWeight: "900",
    textAlign: "center",
  },

  rewardSub: {
    marginTop: 3,
    color: "#64748B",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
  },

  claimButton: {
    marginTop: 12,
    backgroundColor: "#7C3AED",
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 18,
    elevation: 10,
  },

  claimText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 10,
  },

  bottomNav: {
    marginHorizontal: 18,
    marginTop: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 34,
    paddingVertical: 14,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 16,
  },

  navItem: { alignItems: "center", gap: 4 },
  navIcon: { fontSize: 24, opacity: 0.55 },

  navText: {
    color: "#94A3B8",
    fontWeight: "900",
    fontSize: 11,
  },

  activeNav: {
    width: 96,
    height: 74,
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    marginTop: -38,
    alignItems: "center",
    justifyContent: "center",
    elevation: 18,
    borderWidth: 1,
    borderColor: "#EEF2FF",
  },

  activeIcon: { fontSize: 28 },

  activeText: {
    marginTop: 4,
    color: "#7C3AED",
    fontWeight: "900",
    fontSize: 12,
  },
});