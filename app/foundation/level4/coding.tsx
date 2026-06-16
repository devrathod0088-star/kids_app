import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function CodingScreen() {
  const [xp, setXp] = useState(0);

  const missions = [
    { title: "HTML Structure", icon: "code-slash-outline", color: "#2563EB", desc: "Learn how web pages are built using HTML." },
    { title: "CSS Styling", icon: "color-palette-outline", color: "#7C3AED", desc: "Design layouts, colors, buttons and cards." },
    { title: "JavaScript Logic", icon: "terminal-outline", color: "#F97316", desc: "Understand variables, functions and conditions." },
    { title: "Mini Website Project", icon: "globe-outline", color: "#10B981", desc: "Build a small personal website project." },
    { title: "Final Coding Challenge", icon: "trophy-outline", color: "#EC4899", desc: "Complete the coding challenge to earn your certificate." },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={["#1E3A8A", "#2563EB"]} style={styles.hero}>
        <Text style={styles.emoji}>💻</Text>
        <Text style={styles.title}>Coding & Web Development</Text>
        <Text style={styles.subtitle}>Learn web basics and build real projects.</Text>
        <View style={styles.xpBox}><Text style={styles.xpText}>⭐ XP: {xp}</Text></View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>💻 Coding Missions</Text>

      {missions.map((m, i) => (
        <TouchableOpacity key={i} activeOpacity={0.85} onPress={() => setXp(xp + 30)}>
          <View style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: m.color }]}>
              <Ionicons name={m.icon as any} size={30} color="#fff" />
            </View>
            <View style={styles.content}>
              <Text style={styles.cardTitle}>{m.title}</Text>
              <Text style={styles.desc}>{m.desc}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <LinearGradient colors={["#2563EB", "#1D4ED8"]} style={styles.rewardCard}>
        <Text style={styles.rewardTitle}>🏅 Coding Certificate</Text>
        <Text style={styles.rewardText}>Complete all missions to unlock your Web Creator Certificate.</Text>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EFF6FF" },
  hero: { padding: 25, borderBottomLeftRadius: 35, borderBottomRightRadius: 35, alignItems: "center" },
  emoji: { fontSize: 70 },
  title: { color: "#fff", fontSize: 28, fontWeight: "900", marginTop: 10, textAlign: "center" },
  subtitle: { color: "#DBEAFE", textAlign: "center", marginTop: 10, fontSize: 15 },
  xpBox: { marginTop: 15, backgroundColor: "rgba(255,255,255,0.2)", paddingHorizontal: 18, paddingVertical: 10, borderRadius: 20 },
  xpText: { color: "#fff", fontWeight: "800", fontSize: 16 },
  sectionTitle: { fontSize: 24, fontWeight: "900", color: "#111827", margin: 20 },
  card: { flexDirection: "row", backgroundColor: "#fff", marginHorizontal: 20, marginBottom: 15, borderRadius: 24, padding: 18, elevation: 4 },
  iconBox: { width: 65, height: 65, borderRadius: 18, justifyContent: "center", alignItems: "center" },
  content: { flex: 1, marginLeft: 15, justifyContent: "center" },
  cardTitle: { fontSize: 18, fontWeight: "900", color: "#111827" },
  desc: { marginTop: 5, color: "#64748B", lineHeight: 22 },
  rewardCard: { margin: 20, borderRadius: 25, padding: 25, marginBottom: 40 },
  rewardTitle: { color: "#fff", fontSize: 22, fontWeight: "900" },
  rewardText: { color: "#DBEAFE", marginTop: 10, lineHeight: 24 },
});