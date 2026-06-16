import React from "react";
import { useRouter } from "expo-router";
import type { ComponentProps } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import Animated, {
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

type IconName = ComponentProps<typeof Ionicons>["name"];

const navItems: {
  icon: IconName;
  label: string;
  route?: string;
  active?: boolean;
}[] = [
  { icon: "home-outline", label: "Home", route: "/" },
  { icon: "book", label: "Learn", active: true },
  { icon: "game-controller-outline", label: "Games", route: "/games" },
  { icon: "person-outline", label: "Profile", route: "/profile" },
];

export default function LearnScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#F6F8FF", "#F9FAFB", "#FFFFFF"]}
      style={styles.wrapper}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          {/* HEADER */}
          <Animated.View entering={FadeInUp.duration(600)} style={styles.header}>
            <View>
              <Text style={styles.title}>Learn & Grow ✨</Text>
              <Text style={styles.subtitle}>
                Smart learning made fun & simple
              </Text>
            </View>

            <View style={styles.avatarWrap}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
                }}
                style={styles.avatar}
              />
            </View>
          </Animated.View>

          {/* SEARCH */}
          <Animated.View entering={FadeInDown.duration(600)} style={styles.searchBox}>
            <Ionicons name="search" size={20} color="#94A3B8" />
            <TextInput
              placeholder="Search lessons, topics..."
              placeholderTextColor="#94A3B8"
              style={styles.searchInput}
            />
          </Animated.View>

          {/* HERO */}
          <Animated.View entering={FadeInUp.duration(700)} style={styles.heroCard}>
            <LinearGradient
              colors={["#6D5EF7", "#4C38F5"]}
              style={styles.heroGradient}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.heroSmall}>Continue Journey</Text>
                <Text style={styles.heroTitle}>English Mastery 📚</Text>
                <Text style={styles.heroSub}>
                  Reading • Grammar • Vocabulary
                </Text>

                <View style={styles.progressBar}>
                  <View style={styles.progressFill} />
                </View>

                <Text style={styles.progressText}>75% Completed</Text>

                <TouchableOpacity style={styles.heroBtn}>
                  <Text style={styles.heroBtnText}>Resume</Text>
                </TouchableOpacity>
              </View>

              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/2436/2436874.png",
                }}
                style={styles.heroImg}
              />
            </LinearGradient>
          </Animated.View>

          {/* FEATURED */}
          <Text style={styles.sectionTitle}>Featured Learning ⭐</Text>

          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>Interactive Learning Hub</Text>
              <Text style={styles.cardSub}>
                Games, quizzes & animations for faster learning.
              </Text>

              <TouchableOpacity style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>Explore</Text>
              </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 44 }}>🚀</Text>
          </View>

          {/* DAILY */}
          <Text style={styles.sectionTitle}>Daily Challenge 🔥</Text>

          <View style={styles.taskCard}>
            <View>
              <Text style={styles.taskTitle}>Solve 5 Quiz Questions</Text>
              <Text style={styles.taskReward}>+100 XP Reward</Text>
            </View>

            <TouchableOpacity style={styles.playBtn}>
              <Text style={styles.playBtnText}>Play</Text>
            </TouchableOpacity>
          </View>

          {/* FOUNDATION */}
          <Text style={styles.sectionTitle}>Foundation Stage 🌱</Text>
          <Text style={styles.sectionSub}>Ages 3–8 learning path</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foundationCard}>
              <Text style={styles.bigEmoji}>🔤</Text>
              <Text style={styles.levelTag}>LEVEL 1</Text>
              <Text style={styles.foundationTitle}>Alphabet Fun</Text>

              <Text style={styles.foundationDesc}>
                Learn ABC with sounds & tracing.
              </Text>

              <View style={styles.barBg}>
                <View style={styles.barFill} />
              </View>

              <Text style={styles.percent}>70% Complete</Text>

              <TouchableOpacity
                style={styles.startBtn}
                onPress={() => router.push("/foundation/alphabet")}
              >
                <Text style={styles.startText}>Start Learning</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* PREMIUM */}
          <Text style={styles.sectionTitle}>Premium Courses 🌍</Text>

          <View style={styles.courseCard}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              }}
              style={styles.courseImg}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.courseTitle}>Coding for Kids</Text>
              <Text style={styles.courseSub}>
                Build games & animations while learning coding.
              </Text>

              <TouchableOpacity style={styles.courseBtn}>
                <Text style={styles.courseBtnText}>Start</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* BOTTOM NAV */}
        <View style={styles.bottomNav}>
          {navItems.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.navItem}
              onPress={() => router.push("/foundation/level3" as any)}
            >
              <Ionicons
                name={item.icon}
                size={22}
                color={item.active ? "#6D5EF7" : "#94A3B8"}
              />
              <Text
                style={[
                  styles.navText,
                  item.active && {
                    color: "#6D5EF7",
                    fontWeight: "700",
                  },
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: { flex: 1 },

  scroll: { paddingBottom: 120 },

  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0F172A",
  },

  subtitle: {
    color: "#64748B",
    marginTop: 6,
  },

  avatarWrap: {
    backgroundColor: "#EEF2FF",
    padding: 10,
    borderRadius: 20,
  },

  avatar: { width: 50, height: 50 },

  searchBox: {
    marginHorizontal: 20,
    marginTop: 18,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 18,
    elevation: 3,
  },

  searchInput: { marginLeft: 10, flex: 1 },

  heroCard: {
    margin: 20,
    borderRadius: 28,
    overflow: "hidden",
  },

  heroGradient: {
    flexDirection: "row",
    padding: 22,
    alignItems: "center",
  },

  heroSmall: { color: "#E9E7FF" },

  heroTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "800",
    marginTop: 6,
  },

  heroSub: { color: "#E0DBFF", marginTop: 6 },

  progressBar: {
    height: 8,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 10,
    marginTop: 14,
    width: 160,
  },

  progressFill: {
    width: "75%",
    height: 8,
    backgroundColor: "#FFD43B",
    borderRadius: 10,
  },

  progressText: {
    color: "#fff",
    marginTop: 6,
    fontWeight: "600",
  },

  heroBtn: {
    marginTop: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 16,
  },

  heroBtnText: {
    color: "#4C38F5",
    fontWeight: "800",
  },

  heroImg: { width: 100, height: 100 },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginHorizontal: 20,
    marginTop: 26,
    color: "#0F172A",
  },

  sectionSub: {
    marginHorizontal: 20,
    color: "#64748B",
    marginTop: 4,
  },

  card: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    elevation: 3,
  },

  cardTitle: { fontSize: 18, fontWeight: "800" },

  cardSub: { marginTop: 8, color: "#64748B" },

  primaryBtn: {
    marginTop: 14,
    backgroundColor: "#6D5EF7",
    padding: 12,
    borderRadius: 14,
  },

  primaryBtnText: { color: "#fff", fontWeight: "700" },

  taskCard: {
    margin: 20,
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  taskTitle: { fontWeight: "800" },

  taskReward: { marginTop: 6, color: "#64748B" },

  playBtn: {
    backgroundColor: "#6D5EF7",
    padding: 12,
    borderRadius: 14,
  },

  playBtnText: { color: "#fff", fontWeight: "700" },

  foundationCard: {
    width: 260,
    backgroundColor: "#FFF7ED",
    marginLeft: 20,
    padding: 20,
    borderRadius: 24,
  },

  bigEmoji: { fontSize: 40 },

  levelTag: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "800",
  },

  foundationTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginTop: 10,
  },

  foundationDesc: { marginTop: 6, color: "#475569" },

  barBg: {
    height: 8,
    backgroundColor: "#F3E8FF",
    borderRadius: 10,
    marginTop: 12,
  },

  barFill: {
    width: "70%",
    height: 8,
    backgroundColor: "#F59E0B",
    borderRadius: 10,
  },

  percent: { marginTop: 8, fontWeight: "700" },

  startBtn: {
    marginTop: 14,
    backgroundColor: "#F59E0B",
    padding: 12,
    borderRadius: 14,
  },

  startText: { color: "#fff", fontWeight: "800" },

  courseCard: {
    margin: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 18,
    borderRadius: 20,
    elevation: 3,
  },

  courseImg: { width: 80, height: 80 },

  courseTitle: { fontSize: 18, fontWeight: "800" },

  courseSub: { marginTop: 6, color: "#64748B" },

  courseBtn: {
    marginTop: 12,
    backgroundColor: "#6D5EF7",
    padding: 12,
    borderRadius: 14,
  },

  courseBtnText: { color: "#fff", fontWeight: "700" },

  bottomNav: {
    position: "absolute",
    bottom: 14,
    left: 14,
    right: 14,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingVertical: 14,
    borderRadius: 22,
    elevation: 10,
  },

  navItem: { alignItems: "center" },

  navText: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 4,
  },
});