import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Dimensions,
  Pressable,
} from "react-native";

import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const router = useRouter();
  const [progress] = useState(0.68);

  const categories = useMemo(
    () => [
      { title: "Alphabet", icon: "🔤", color: "#7C3AED", route: "/foundation/alphabet" },
      { title: "Numbers", icon: "123", color: "#2563EB", route: "/foundation/numbers" },
      { title: "Colors", icon: "🎨", color: "#EC4899", route: "/foundation/colors" },
      { title: "Animals", icon: "🦁", color: "#F97316", route: "/foundation/animals" },
      { title: "Music", icon: "🎵", color: "#10B981", route: "/foundation/music" },
      { title: "Stories", icon: "📖", color: "#0EA5E9", route: "/foundation/stories" },
    ],
    []
  );

  return (
    <LinearGradient colors={["#EEF2FF", "#F8FAFC", "#FFFFFF"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* HEADER */}
          <Animated.View entering={FadeInUp.duration(500)} style={styles.header}>
            <View>
              <Text style={styles.title}>Let’s Learn ✨</Text>
              <Text style={styles.subTitle}>Choose what you want to learn today!</Text>
            </View>

            <View style={styles.coinBox}>
              <Ionicons name="star" size={16} color="#FACC15" />
              <Text style={styles.coinText}>1250</Text>
            </View>
          </Animated.View>
<View style={styles.levelRow}>

  {/* LEVEL 1 */}
  <TouchableOpacity
    onPress={() => router.push("/foundation/alphabet" as any)}
    style={styles.levelCard}
  >
    <Text style={[styles.levelText, { color: "#22C55E" }]}>L1</Text>
  </TouchableOpacity>

  {/* LEVEL 2 */}
  <TouchableOpacity
    onPress={() => router.push("/foundation/level2" as any)}
    style={styles.levelCard}
  >
    <Text style={[styles.levelText, { color: "#3B82F6" }]}>L2</Text>
  </TouchableOpacity>

  {/* LEVEL 3 */}
  <TouchableOpacity
    onPress={() => router.push("/foundation/level3" as any)}
    style={styles.levelCard}
  >
    <Text style={[styles.levelText, { color: "#A855F7" }]}>L3</Text>
  </TouchableOpacity>

  {/* LEVEL 4 */}
  <TouchableOpacity
    onPress={() => router.push("/foundation/level4" as any)}
    style={styles.levelCard}
  >
    <Text style={[styles.levelText, { color: "#F97316" }]}>L4</Text>
  </TouchableOpacity>

</View>
          {/* CONTINUE LEARNING */}
          <Animated.View entering={FadeInDown.duration(600)}>
            <LinearGradient colors={["#6D28D9", "#4F46E5"]} style={styles.heroCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.heroSmall}>Continue Learning</Text>
                <Text style={styles.heroTitle}>Alphabet: Letter A</Text>

                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
                </View>

                <View style={styles.metaRow}>
                  <Text style={styles.metaText}>8 min left</Text>
                  <Text style={styles.metaText}>+25 XP</Text>
                </View>

                <TouchableOpacity
                  onPress={() => router.push("/foundation/alphabet")}
                  style={styles.continueBtn}
                >
                  <Text style={{ color: "#fff", fontWeight: "900" }}>
                    Continue ▶
                  </Text>
                </TouchableOpacity>
              </View>

              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/2436/2436636.png" }}
                style={styles.heroImage}
              />
            </LinearGradient>
          </Animated.View>

          {/* EXPLORE GRID */}
          <View style={styles.grid}>
            {categories.map((c, i) => (
              <Pressable
                key={i}
                onPress={() => router.push(c.route as any)}
                style={[styles.gridItem, { backgroundColor: c.color }]}
              >
                <Text style={{ fontSize: 28 }}>{c.icon}</Text>
                <Text style={styles.gridText}>{c.title}</Text>
              </Pressable>
            ))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  header: { padding: 20 },

  title: {
    fontSize: 26,
    fontWeight: "900",
  },

  subTitle: {
    color: "#64748B",
    marginTop: 4,
  },

  coinBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "flex-end",
  },

  coinText: { fontWeight: "900" },

  levelRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    paddingHorizontal: 10,
  },

  levelCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
    width: "20%",
    alignItems: "center",
    elevation: 2,
  },

  levelText: {
    fontWeight: "900",
    fontSize: 16,
  },

  heroCard: {
    margin: 20,
    borderRadius: 25,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  heroSmall: { color: "#E9D5FF" },

  heroTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },

  progressBar: {
    height: 6,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 10,
    marginTop: 10,
  },

  progressFill: {
    height: 6,
    backgroundColor: "#FACC15",
    borderRadius: 10,
  },

  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  metaText: {
    color: "#E9D5FF",
    fontSize: 11,
  },

  continueBtn: {
    marginTop: 10,
  },

  heroImage: {
    width: 80,
    height: 80,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },

  gridItem: {
    width: "30%",
    height: 90,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  gridText: {
    color: "#fff",
    fontWeight: "800",
    marginTop: 5,
  },
});