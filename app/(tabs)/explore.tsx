import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="compass" size={60} color="#4F46E5" />

        <Text style={styles.title}>Explore 🚀</Text>

        <Text style={styles.subtitle}>
          Learn • Discover • Play
        </Text>

        <Text style={styles.xp}>
          ⭐ 60 XP Explorer
        </Text>
      </View>

      {/* CARD 1 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📁 Routing System</Text>
        <Text style={styles.cardText}>
          Your app uses Expo Router with file-based navigation.
        </Text>

        <View style={styles.codeBox}>
          <Text style={styles.codeText}>
            app/(tabs)/index.tsx{"\n"}
            app/(tabs)/explore.tsx
          </Text>
        </View>
      </View>

      {/* CARD 2 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📱 Platform Support</Text>
        <Text style={styles.cardText}>
          Works on Android, iOS and Web (press "w" in terminal).
        </Text>

        {Platform.OS === "web" && (
          <Text style={styles.webNote}>
            🌐 Web mode active
          </Text>
        )}
      </View>

      {/* CARD 3 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🖼️ Images</Text>

        <Image
          source={require("../../assets/images/react-logo.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.cardText}>
          Images work using React Native Image system.
        </Text>
      </View>

      {/* CARD 4 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎨 UI Ready</Text>
        <Text style={styles.cardText}>
          Clean, safe, and fully Expo-compatible screen.
        </Text>

        <Text style={styles.success}>
          ✅ No missing dependencies
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
  },

  content: {
    padding: 20,
    gap: 16,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#fff",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#A5B4FC",
    marginTop: 5,
  },

  xp: {
    marginTop: 8,
    fontSize: 14,
    color: "#FBBF24",
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#111833",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#1F2A4A",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },

  cardText: {
    fontSize: 14,
    color: "#C7D2FE",
    lineHeight: 20,
  },

  codeBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#0A0F1F",
    borderRadius: 8,
  },

  codeText: {
    color: "#A78BFA",
    fontSize: 12,
  },

  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginVertical: 10,
  },

  webNote: {
    marginTop: 10,
    color: "#60A5FA",
    fontSize: 12,
  },

  success: {
    marginTop: 10,
    color: "#34D399",
    fontSize: 13,
    fontWeight: "600",
  },
});

