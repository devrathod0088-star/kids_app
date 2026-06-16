import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function DesignScreen() {
  const [xp, setXp] = useState(0);

  const missions = [
    { title: "Graphic Design Basics", icon: "color-palette-outline", color: "#EC4899", desc: "Learn layout, color, typography and visual balance." },
    { title: "Brand Identity", icon: "sparkles-outline", color: "#8B5CF6", desc: "Understand logos, colors and brand style." },
    { title: "UI/UX Design", icon: "phone-portrait-outline", color: "#2563EB", desc: "Design app screens that are simple and useful." },
    { title: "Poster Project", icon: "image-outline", color: "#F97316", desc: "Create a modern poster concept with clear message." },
    { title: "Design Challenge", icon: "trophy-outline", color: "#10B981", desc: "Complete a final creative design task." },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={["#BE185D", "#EC4899"]} style={styles.hero}>
        <Text style={styles.emoji}>🎨</Text>
        <Text style={styles.title}>Design & Creativity</Text>
        <Text style={styles.subtitle}>Learn graphic design, branding and UI/UX thinking.</Text>
        <View style={styles.xpBox}><Text style={styles.xpText}>⭐ XP: {xp}</Text></View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>🎨 Design Missions</Text>

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

      <LinearGradient colors={["#EC4899", "#BE185D"]} style={styles.rewardCard}>
        <Text style={styles.rewardTitle}>🏅 Young Designer Certificate</Text>
        <Text style={styles.rewardText}>Complete all design missions to unlock your Young Designer Certificate.</Text>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FDF2F8" },
  hero: { padding: 25, borderBottomLeftRadius: 35, borderBottomRightRadius: 35, alignItems: "center" },
  emoji: { fontSize: 70 },
  title: { color: "#fff", fontSize: 28, fontWeight: "900", marginTop: 10, textAlign: "center" },
  subtitle: { color: "#FCE7F3", textAlign: "center", marginTop: 10, fontSize: 15 },
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
  rewardText: { color: "#FCE7F3", marginTop: 10, lineHeight: 24 },
});