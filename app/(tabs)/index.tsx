import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const scale = (size: number) => (width / 375) * size;

/* ---------------- SAFE LOTTIE ---------------- */

let LottieView: any = null;

if (Platform.OS !== "web") {
  LottieView = require("lottie-react-native").default;
}

/* ---------------- MAIN SCREEN ---------------- */

export default function SplashScreen() {
  const router = useRouter();

  const opacity = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeIn = Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    });

    const popIn = Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    });

    fadeIn.start();
    popIn.start();

    const floating = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -12,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );

    floating.start();

    Animated.timing(progressAnim, {
      toValue: 100,
      duration: 3500,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
    router.replace("/")
    }, 4000);

    return () => {
      clearTimeout(timer);
      floating.stop();
      opacity.stopAnimation();
      scaleAnim.stopAnimation();
      floatAnim.stopAnimation();
      progressAnim.stopAnimation();
    };
  }, []);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* BACKGROUND */}
      <LinearGradient
        colors={["#0B1023", "#2D1B69", "#5B2EFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* GLOW */}
      <View style={styles.glow1} />
      <View style={styles.glow2} />

      {/* STARS */}
      <View style={[styles.star, { top: 120, left: 40 }]} />
      <View style={[styles.star, { top: 180, right: 80 }]} />
      <View style={[styles.star, { top: 320, left: 100 }]} />
      <View style={[styles.star, { top: 420, right: 50 }]} />

      {/* BADGE */}
      <Animated.View
        style={[
          styles.topBadge,
          {
            opacity,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Ionicons name="star" size={18} color="#FFD84D" />
        <Text style={styles.badgeText}>KidVerse Premium</Text>
      </Animated.View>

      {/* ANIMATION */}
      <Animated.View
        style={[
          styles.animationWrapper,
          {
            opacity,
            transform: [
              { translateY: floatAnim },
              { scale: scaleAnim },
            ],
          },
        ]}
      >
        {LottieView ? (
          <LottieView
            source={require("../../assets/animations/rocket.json")}
            autoPlay
            loop
            style={styles.lottie}
          />
        ) : (
          <Text style={styles.rocketEmoji}>🚀</Text>
        )}
      </Animated.View>

      {/* CONTENT */}
      <Animated.View
        style={[
          styles.content,
          {
            opacity,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Text style={styles.title}>KidVerse</Text>

        <Text style={styles.subtitle}>
          Learn • Play • Explore
        </Text>

        <Text style={styles.smallText}>
          International Learning Experience For Kids
        </Text>

        {/* FEATURES */}
        <View style={styles.featureRow}>
          <View style={styles.featureCard}>
            <MaterialCommunityIcons
              name="rocket-launch"
              size={24}
              color="#5B2EFF"
            />
            <Text style={styles.featureText}>Fun Games</Text>
          </View>

          <View style={styles.featureCard}>
            <Ionicons name="book" size={24} color="#5B2EFF" />
            <Text style={styles.featureText}>ABC Learning</Text>
          </View>

          <View style={styles.featureCard}>
            <Ionicons name="color-palette" size={24} color="#5B2EFF" />
            <Text style={styles.featureText}>Creativity</Text>
          </View>
        </View>
      </Animated.View>

      {/* LOADING */}
      <Animated.View
        style={[styles.loadingCard, { opacity }]}
      >
        <View style={styles.loadingHeader}>
          <Text style={styles.loadingTitle}>
            Preparing Your Adventure
          </Text>

          <Text style={styles.loadingPercent}>Loading...</Text>
        </View>

        <View style={styles.progressContainer}>
          <Animated.View
            style={[
              styles.progressBar,
              { width: progressWidth },
            ]}
          />
        </View>
      </Animated.View>

      {/* SKIP */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.skipButton}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: { flex: 1 },

  glow1: {
    position: "absolute",
    width: width * 1.2,
    height: width * 1.2,
    borderRadius: width,
    backgroundColor: "#7C5CFF20",
    top: -width * 0.5,
    alignSelf: "center",
  },

  glow2: {
    position: "absolute",
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width,
    backgroundColor: "#FFD84D20",
    bottom: -120,
    right: -80,
  },

  star: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 20,
    backgroundColor: "#fff",
    opacity: 0.8,
  },

  topBadge: {
    position: "absolute",
    top: 70,
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.12)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },

  badgeText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "700",
  },

  animationWrapper: {
    marginTop: height * 0.12,
    alignItems: "center",
  },

  lottie: {
    width: width * 0.72,
    height: width * 0.72,
  },

  rocketEmoji: {
    fontSize: 140,
  },

  content: {
    alignItems: "center",
    marginTop: -20,
    paddingHorizontal: 24,
  },

  title: {
    color: "#fff",
    fontSize: scale(48),
    fontWeight: "900",
  },

  subtitle: {
    marginTop: 12,
    color: "#E0D9FF",
    fontSize: scale(20),
    fontWeight: "700",
  },

  smallText: {
    marginTop: 10,
    color: "#FFFFFFAA",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
  },

  featureRow: {
    flexDirection: "row",
    marginTop: 35,
    justifyContent: "space-between",
    gap: 12,
  },

  featureCard: {
    backgroundColor: "#FFFFFF",
    width: 105,
    paddingVertical: 18,
    borderRadius: 24,
    alignItems: "center",
    marginHorizontal: 6,
  },

  featureText: {
    marginTop: 10,
    fontWeight: "700",
    color: "#111827",
    fontSize: 13,
  },

  loadingCard: {
    position: "absolute",
    bottom: 120,
    alignSelf: "center",
    width: width * 0.86,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 26,
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },

  loadingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  loadingTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  loadingPercent: {
    color: "#FFD84D",
    fontWeight: "800",
  },

  progressContainer: {
    height: 10,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#FFD84D",
    borderRadius: 20,
  },

  skipButton: {
    position: "absolute",
    bottom: 45,
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingHorizontal: 42,
    paddingVertical: 16,
    borderRadius: 30,
    elevation: 5,
  },

  skipText: {
    color: "#5B2EFF",
    fontSize: 16,
    fontWeight: "800",
  },
});

