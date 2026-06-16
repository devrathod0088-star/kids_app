import React from "react";
import { useRouter } from "expo-router";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Animated, {
  FadeInDown,
  FadeInRight,
  FadeInUp,
  BounceIn,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function RewardsScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#FFF7ED", "#FFFFFF", "#FEFCE8"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 140,
          }}
        >
          {/* HEADER */}

          <Animated.View
            entering={FadeInUp.duration(700)}
            style={styles.header}
          >
            <View>
              <Text style={styles.title}>
                Rewards & Achievements 🏆
              </Text>

              <Text style={styles.subtitle}>
                Earn stars, unlock badges & collect gifts
              </Text>
            </View>

            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2583/2583344.png",
              }}
              style={styles.headerImage}
            />
          </Animated.View>

          {/* HERO */}

          <Animated.View
            entering={FadeInDown.duration(800)}
          >
            <LinearGradient
              colors={["#F59E0B", "#F97316"]}
              style={styles.heroCard}
            >
              <View style={styles.circle1} />
              <View style={styles.circle2} />

              <View style={{ flex: 1 }}>
                <Text style={styles.heroSmall}>
                  Your Reward Progress
                </Text>

                <Text style={styles.heroTitle}>
                  Superstar Learner ⭐
                </Text>

                <Text style={styles.heroSub}>
                  2450 XP • Level 12
                </Text>

                <View style={styles.progressBg}>
                  <View style={styles.progressFill} />
                </View>

                <Text style={styles.progressText}>
                  80% To Next Level
                </Text>

                <TouchableOpacity
                  style={styles.claimBtn}
                >
                  <Text style={styles.claimText}>
                    Claim Reward
                  </Text>
                </TouchableOpacity>
              </View>

              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3468/3468377.png",
                }}
                style={styles.heroImage}
              />
            </LinearGradient>
          </Animated.View>

          {/* STATS */}

          <View style={styles.statsRow}>
            <Animated.View
              entering={FadeInRight.duration(700)}
              style={styles.statCard}
            >
              <Text style={styles.statEmoji}>
                ⭐
              </Text>

              <Text style={styles.statNumber}>
                2450
              </Text>

              <Text style={styles.statLabel}>
                Total XP
              </Text>
            </Animated.View>

            <Animated.View
              entering={FadeInRight.delay(150).duration(
                700
              )}
              style={styles.statCard}
            >
              <Text style={styles.statEmoji}>
                🔥
              </Text>

              <Text style={styles.statNumber}>
                7
              </Text>

              <Text style={styles.statLabel}>
                Day Streak
              </Text>
            </Animated.View>
          </View>

          {/* DAILY REWARDS */}

          <Text style={styles.sectionTitle}>
            Daily Rewards 🎁
          </Text>

          <View style={styles.rewardGrid}>
            <Animated.View
              entering={BounceIn.delay(100)}
            >
              <TouchableOpacity
                style={[
                  styles.rewardCard,
                  {
                    backgroundColor: "#FDE68A",
                  },
                ]}
              >
                <Text style={styles.rewardEmoji}>
                  🎁
                </Text>

                <Text style={styles.rewardTitle}>
                  Day 1
                </Text>

                <Text style={styles.rewardSub}>
                  50 XP
                </Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              entering={BounceIn.delay(200)}
            >
              <TouchableOpacity
                style={[
                  styles.rewardCard,
                  {
                    backgroundColor: "#BFDBFE",
                  },
                ]}
              >
                <Text style={styles.rewardEmoji}>
                  🪙
                </Text>

                <Text style={styles.rewardTitle}>
                  Day 2
                </Text>

                <Text style={styles.rewardSub}>
                  100 Coins
                </Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              entering={BounceIn.delay(300)}
            >
              <TouchableOpacity
                style={[
                  styles.rewardCard,
                  {
                    backgroundColor: "#DDD6FE",
                  },
                ]}
              >
                <Text style={styles.rewardEmoji}>
                  🏆
                </Text>

                <Text style={styles.rewardTitle}>
                  Day 3
                </Text>

                <Text style={styles.rewardSub}>
                  Badge
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>

          {/* ACHIEVEMENTS */}

          <Text style={styles.sectionTitle}>
            Achievements 🌟
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Animated.View
              entering={FadeInDown.delay(100).duration(
                700
              )}
              style={[
                styles.badgeCard,
                {
                  backgroundColor: "#FEF3C7",
                },
              ]}
            >
              <Text style={styles.badgeEmoji}>
                🥇
              </Text>

              <Text style={styles.badgeTitle}>
                Gold Champion
              </Text>

              <Text style={styles.badgeSub}>
                Completed 100 lessons
              </Text>
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(200).duration(
                700
              )}
              style={[
                styles.badgeCard,
                {
                  backgroundColor: "#DCFCE7",
                },
              ]}
            >
              <Text style={styles.badgeEmoji}>
                🚀
              </Text>

              <Text style={styles.badgeTitle}>
                Fast Learner
              </Text>

              <Text style={styles.badgeSub}>
                7 Day Streak
              </Text>
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(300).duration(
                700
              )}
              style={[
                styles.badgeCard,
                {
                  backgroundColor: "#E0E7FF",
                },
              ]}
            >
              <Text style={styles.badgeEmoji}>
                📚
              </Text>

              <Text style={styles.badgeTitle}>
                Reading Hero
              </Text>

              <Text style={styles.badgeSub}>
                Read 50 Stories
              </Text>
            </Animated.View>
          </ScrollView>

          {/* PREMIUM REWARDS */}

          <Text style={styles.sectionTitle}>
            Unlock Premium Rewards 💎
          </Text>

          <Animated.View
            entering={FadeInUp.duration(700)}
            style={styles.premiumCard}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              }}
              style={styles.premiumImage}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.premiumTitle}>
                VIP Learning Pass
              </Text>

              <Text style={styles.premiumSub}>
                Unlock exclusive avatars, games & advanced learning paths
              </Text>

              <TouchableOpacity
                style={styles.premiumBtn}
              >
                <Text style={styles.premiumBtnText}>
                  Unlock Now
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </ScrollView>

        {/* BOTTOM NAV */}

        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/")}
          >
            <Ionicons
              name="home-outline"
              size={24}
              color="#94A3B8"
            />

            <Text style={styles.navText}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() =>
              router.push("/learn")
            }
          >
            <Ionicons
              name="book-outline"
              size={24}
              color="#94A3B8"
            />

            <Text style={styles.navText}>
              Learn
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() =>
              router.push("/games")
            }
          >
            <Ionicons
              name="game-controller-outline"
              size={24}
              color="#94A3B8"
            />

            <Text style={styles.navText}>
              Games
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
          >
            <MaterialCommunityIcons
              name="trophy"
              size={24}
              color="#F59E0B"
            />

            <Text style={styles.activeNav}>
              Rewards
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() =>
              router.push("/profile")
            }
          >
            <Ionicons
              name="person-outline"
              size={24}
              color="#94A3B8"
            />

            <Text style={styles.navText}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0F172A",
    width: width * 0.65,
  },

  subtitle: {
    marginTop: 8,
    color: "#64748B",
    fontSize: 15,
    width: width * 0.6,
  },

  headerImage: {
    width: 80,
    height: 80,
  },

  heroCard: {
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 30,
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },

  circle1: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "rgba(255,255,255,0.12)",
    top: -20,
    right: -20,
  },

  circle2: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.12)",
    bottom: -20,
    left: -10,
  },

  heroSmall: {
    color: "#FEF3C7",
    fontWeight: "700",
  },

  heroTitle: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "800",
    marginTop: 10,
  },

  heroSub: {
    color: "#FFEDD5",
    marginTop: 6,
  },

  progressBg: {
    width: 160,
    height: 8,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 20,
    marginTop: 18,
  },

  progressFill: {
    width: "80%",
    height: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
  },

  progressText: {
    color: "#fff",
    marginTop: 8,
    fontWeight: "700",
  },

  claimBtn: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 18,
  },

  claimText: {
    color: "#F97316",
    fontWeight: "800",
  },

  heroImage: {
    width: 120,
    height: 120,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 24,
  },

  statCard: {
    width: width * 0.42,
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 22,
    alignItems: "center",
    elevation: 5,
  },

  statEmoji: {
    fontSize: 36,
  },

  statNumber: {
    fontSize: 26,
    fontWeight: "800",
    marginTop: 10,
  },

  statLabel: {
    marginTop: 5,
    color: "#64748B",
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    marginHorizontal: 20,
    marginTop: 34,
    color: "#0F172A",
  },

  rewardGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  rewardCard: {
    width: width * 0.27,
    height: width * 0.30,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  rewardEmoji: {
    fontSize: 34,
  },

  rewardTitle: {
    fontWeight: "800",
    marginTop: 10,
    fontSize: 16,
  },

  rewardSub: {
    marginTop: 5,
    color: "#475569",
    fontWeight: "700",
    fontSize: 12,
  },

  badgeCard: {
    width: 190,
    borderRadius: 30,
    padding: 24,
    marginLeft: 20,
    marginTop: 18,
  },

  badgeEmoji: {
    fontSize: 44,
  },

  badgeTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 14,
    color: "#0F172A",
  },

  badgeSub: {
    marginTop: 8,
    color: "#64748B",
    lineHeight: 20,
  },

  premiumCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 22,
    borderRadius: 32,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    elevation: 6,
  },

  premiumImage: {
    width: 100,
    height: 100,
  },

  premiumTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#0F172A",
  },

  premiumSub: {
    marginTop: 8,
    color: "#64748B",
    lineHeight: 20,
  },

  premiumBtn: {
    backgroundColor: "#F59E0B",
    alignSelf: "flex-start",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 14,
  },

  premiumBtnText: {
    color: "#fff",
    fontWeight: "800",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 12,
  },

  navItem: {
    alignItems: "center",
  },

  activeNav: {
    color: "#F59E0B",
    marginTop: 4,
    fontWeight: "800",
    fontSize: 12,
  },

  navText: {
    color: "#94A3B8",
    marginTop: 4,
    fontSize: 12,
  },
});