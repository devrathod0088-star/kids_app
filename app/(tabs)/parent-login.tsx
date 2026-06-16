import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function KidsLoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LinearGradient
      colors={["#6C4DFF", "#8B5CF6", "#A855F7"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      {/* 🌈 Floating Shapes */}
      <View style={styles.topBubble} />
      <View style={styles.bottomBubble} />
      <View style={styles.smallBubble} />

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {/* 🧸 HERO */}
          <View style={styles.hero}>
            <View style={styles.logoWrapper}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
                }}
                style={styles.mascot}
              />
            </View>

            <Text style={styles.title}>KidVerse</Text>

            <Text style={styles.subtitle}>
              Fun learning adventures for curious young minds 🚀
            </Text>

            {/* ⭐ Features */}
            <View style={styles.featuresRow}>
              <View style={styles.featureChip}>
                <Text style={styles.featureText}>🎮 Games</Text>
              </View>

              <View style={styles.featureChip}>
                <Text style={styles.featureText}>📚 Learning</Text>
              </View>

              <View style={styles.featureChip}>
                <Text style={styles.featureText}>🏆 Rewards</Text>
              </View>
            </View>
          </View>

          {/* 💎 LOGIN CARD */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Login 👨</Text>

            {/* 📧 EMAIL */}
            <View style={styles.inputContainer}>
              <View style={styles.iconBox}>
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color="#7C3AED"
                />
              </View>

              <TextInput
                placeholder="Email or Phone Number"
                placeholderTextColor="#94A3B8"
                style={styles.input}
              />
            </View>

            {/* 🔒 PASSWORD */}
            <View style={styles.inputContainer}>
              <View style={styles.iconBox}>
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#7C3AED"
                />
              </View>

              <TextInput
                placeholder="Password"
                placeholderTextColor="#94A3B8"
                secureTextEntry={!showPassword}
                style={styles.input}
              />

              <TouchableOpacity
                onPress={() =>
                  setShowPassword(!showPassword)
                }
              >
                <Ionicons
                  name={
                    showPassword
                      ? "eye-off-outline"
                      : "eye-outline"
                  }
                  size={20}
                  color="#64748B"
                />
              </TouchableOpacity>
            </View>

            {/* 🔗 FORGOT */}
            <TouchableOpacity>
              <Text style={styles.forgot}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* 🚀 LOGIN BUTTON */}
            <TouchableOpacity activeOpacity={0.85}>
              <LinearGradient
                colors={["#22C55E", "#16A34A"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.loginBtn}
              >
                <Text style={styles.loginText}>
                  Start Learning 🚀
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* 🌍 DIVIDER */}
            <View style={styles.dividerRow}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>
                or continue with
              </Text>
              <View style={styles.divider} />
            </View>

            {/* 🌐 SOCIAL */}
            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialBtn}>
                <Ionicons
                  name="logo-google"
                  size={22}
                  color="#DB4437"
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialBtn}>
                <Ionicons
                  name="logo-apple"
                  size={22}
                  color="#111"
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialBtn}>
                <Ionicons
                  name="logo-facebook"
                  size={22}
                  color="#1877F2"
                />
              </TouchableOpacity>
            </View>

            {/* 🛡️ TRUST */}
            <View style={styles.trustBox}>
              <MaterialIcons
                name="verified-user"
                size={18}
                color="#22C55E"
              />

              <Text style={styles.trustText}>
                Safe & secure parent authentication
              </Text>
            </View>

            {/* 📝 SIGNUP */}
            <Text style={styles.signup}>
              New to KidVerse?{" "}
              <Text style={styles.signupLink}>
                Create Account
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* 🌈 Floating Shapes */
  topBubble: {
    position: "absolute",
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "rgba(255,255,255,0.08)",
    top: -80,
    right: -80,
  },

  bottomBubble: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(255,255,255,0.06)",
    bottom: 120,
    left: -70,
  },

  smallBubble: {
    position: "absolute",
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "rgba(255,255,255,0.08)",
    top: 160,
    left: 30,
  },

  /* 🧸 HERO */
  hero: {
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: 24,
  },

  logoWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  mascot: {
    width: 120,
    height: 120,
  },

  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#fff",
    letterSpacing: 1,
  },

  subtitle: {
    color: "#E9D5FF",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 24,
    paddingHorizontal: 10,
  },

  featuresRow: {
    flexDirection: "row",
    marginTop: 22,
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  featureChip: {
    backgroundColor: "rgba(255,255,255,0.16)",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 30,
  },

  featureText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  /* 💎 CARD */
  card: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 35,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
    minHeight: 520,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 24,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 12,
    height: 62,
    marginBottom: 18,
  },

  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#EEF2FF",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: "#0F172A",
    fontWeight: "500",
  },

  forgot: {
    textAlign: "right",
    color: "#7C3AED",
    fontWeight: "700",
    marginBottom: 26,
  },

  loginBtn: {
    height: 62,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#22C55E",
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },

  loginText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "800",
    letterSpacing: 0.4,
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 28,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2E8F0",
  },

  dividerText: {
    marginHorizontal: 10,
    color: "#64748B",
    fontSize: 13,
    fontWeight: "500",
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
  },

  socialBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  trustBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
    gap: 8,
  },

  trustText: {
    color: "#64748B",
    fontSize: 13,
    fontWeight: "500",
  },

  signup: {
    textAlign: "center",
    marginTop: 28,
    color: "#64748B",
    fontSize: 14,
  },

  signupLink: {
    color: "#7C3AED",
    fontWeight: "800",
  },
});