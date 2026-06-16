import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function AIScreen() {
  const [xp, setXp] = useState(0);

  const missions = [
    { title: "What is AI?", icon: "hardware-chip-outline", color: "#8B5CF6", desc: "Understand artificial intelligence in simple real-life examples." },
    { title: "AI in Daily Life", icon: "phone-portrait-outline", color: "#06B6D4", desc: "Discover how AI works in phones, apps and smart tools." },
    { title: "Machine Learning Basics", icon: "analytics-outline", color: "#10B981", desc: "Learn how machines improve from data and patterns." },
    { title: "AI Ethics", icon: "shield-checkmark-outline", color: "#F97316", desc: "Understand safe, fair and responsible AI use." },
    { title: "Future Tech Challenge", icon: "rocket-outline", color: "#EC4899", desc: "Create an idea for an AI tool that helps people." },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={["#4C1D95", "#8B5CF6"]} style={styles.hero}>
        <Text style={styles.emoji}>🤖</Text>
        <Text style={styles.title}>AI & Future Tech</Text>
        <Text style={styles.subtitle}>Explore AI, smart tools and future technology.</Text>
        <View style={styles.xpBox}><Text style={styles.xpText}>⭐ XP: {xp}</Text></View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>🤖 AI Missions</Text>

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

      <LinearGradient colors={["#8B5CF6", "#6D28D9"]} style={styles.rewardCard}>
        <Text style={styles.rewardTitle}>🏅 Future Tech Certificate</Text>
        <Text style={styles.rewardText}>Complete all AI missions to unlock your Future Tech Certificate.</Text>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F3FF" },
  hero: { padding: 25, borderBottomLeftRadius: 35, borderBottomRightRadius: 35, alignItems: "center" },
  emoji: { fontSize: 70 },
  title: { color: "#fff", fontSize: 28, fontWeight: "900", marginTop: 10, textAlign: "center" },
  subtitle: { color: "#EDE9FE", textAlign: "center", marginTop: 10, fontSize: 15 },
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
  rewardText: { color: "#EDE9FE", marginTop: 10, lineHeight: 24 },
});