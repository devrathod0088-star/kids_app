import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TeacherMascot from "../../components/TeacherMascot";
import * as Speech from "expo-speech";
import { useRouter } from "expo-router";

export default function Music() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const sounds = [
    {
      name: "Drum",
      emoji: "🥁",
      fact: "Drums make a strong beat sound",
      speak: "This is a drum sound. Boom boom 🥁",
    },
    {
      name: "Piano",
      emoji: "🎹",
      fact: "Piano makes soft and beautiful music",
      speak: "This is a piano sound. Ding ding 🎹",
    },
    {
      name: "Guitar",
      emoji: "🎸",
      fact: "Guitar is used in songs",
      speak: "This is a guitar sound. Strum strum 🎸",
    },
    {
      name: "Bell",
      emoji: "🔔",
      fact: "Bell makes a ringing sound",
      speak: "This is a bell sound. Ring ring 🔔",
    },
  ];

  const playSound = (item: any) => {
    Speech.stop();

    setMessage(item.fact);

    Speech.speak(item.speak, {
      rate: 0.9,
      pitch: 1.2,
    });
  };

  return (
    <View style={styles.container}>

      {/* 👩‍🏫 TEACHER */}
      <TeacherMascot message="Let’s explore fun musical sounds together 🎵✨" />

      {/* TITLE */}
      <Text style={styles.title}>🎵 Music Learning World</Text>

      {/* SOUND CARDS */}
      <View style={styles.grid}>

        {sounds.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => playSound(item)}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        ))}

      </View>

      {/* MESSAGE */}
      {message !== "" && (
        <Text style={styles.message}>💡 {message}</Text>
      )}

      {/* NEXT BUTTON */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/foundation/level2/complete")}
      >
        <Text style={styles.btnText}>Finish Music 🎉</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },

  card: {
    width: "47%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },

  emoji: {
    fontSize: 50,
  },

  name: {
    fontSize: 16,
    fontWeight: "800",
    marginTop: 10,
  },

  message: {
    marginTop: 15,
    textAlign: "center",
    fontWeight: "700",
    color: "#374151",
  },

  btn: {
    backgroundColor: "#4F46E5",
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "900",
  },
});