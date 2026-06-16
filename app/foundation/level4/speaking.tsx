import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function SpeakingScreen() {
  const [xp, setXp] = useState(0);

  const missions = [
    { title: "Confidence Building", icon: "happy-outline", color: "#F97316", desc: "Learn how to speak with confidence and clear voice." },
    { title: "Presentation Skills", icon: "easel-outline", color: "#2563EB", desc: "Create and present ideas in a simple, powerful way." },
    { title: "Debate Basics", icon: "chatbubbles-outline", color: "#8B5CF6", desc: "Learn how to explain opinions with respect and logic." },
    { title: "Body Language", icon: "body-outline", color: "#10B981", desc: "Understand eye contact, posture and gestures." },
    { title: "Speech Challenge", icon: "trophy-outline", color: "#EC4899", desc: "Complete a final short speech challenge." },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={["#EA580C", "#F97316"]} style={styles.hero}>
        <Text style={styles.emoji}>🎤</Text>
        <Text style={styles.title}>Public Speaking</Text>
        <Text style={styles.subtitle}>Build confidence, presentation and debate skills.</Text>
        <View style={styles.xpBox}><Text style={styles.xpText}>⭐ XP: {xp}</Text></View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>🎤 Speaking Missions</Text>

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

      <LinearGradient colors={["#F97316", "#C2410C"]} style={styles.rewardCard}>
        <Text style={styles.rewardTitle}>🏅 Confident Speaker Certificate</Text>
        <Text style={styles.rewardText}>Complete all missions to unlock your Public Speaking Certificate.</Text>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF7ED" },
  hero: { padding: 25, borderBottomLeftRadius: 35, borderBottomRightRadius: 35, alignItems: "center" },
  emoji: { fontSize: 70 },
  title: { color: "#fff", fontSize: 28, fontWeight: "900", marginTop: 10, textAlign: "center" },
  subtitle: { color: "#FFEDD5", textAlign: "center", marginTop: 10, fontSize: 15 },
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
  rewardText: { color: "#FFEDD5", marginTop: 10, lineHeight: 24 },
});