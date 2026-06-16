import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TeacherMascot from "../../../components/TeacherMascot";
import * as Speech from "expo-speech";
import { useRouter } from "expo-router";

export default function Science() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const lessons = [
    {
      title: "Sun & Heat",
      emoji: "☀️",
      word: "Sun gives us light",
      description: "The sun helps plants grow and gives us warmth.",
      fact: "Without sun, life cannot exist 🌱",
      teacher: "Let’s learn about the Sun! It gives us light and energy ☀️",
    },
    {
      title: "Water Cycle",
      emoji: "💧",
      word: "Rain comes from clouds",
      description: "Water goes up, forms clouds, and comes back as rain.",
      fact: "This is called the water cycle 🌧️",
      teacher: "Water moves in a circle in nature 💧",
    },
    {
      title: "Animals",
      emoji: "🐘",
      word: "Animals are living beings",
      description: "Animals eat, sleep, and move just like us.",
      fact: "Some animals live on land, some in water 🌍",
      teacher: "Animals are part of our world 🐘",
    },
    {
      title: "Air",
      emoji: "🌬️",
      word: "We cannot see air",
      description: "But we need air to breathe and live.",
      fact: "Plants also need air 🌿",
      teacher: "Air is everywhere around us 🌬️",
    },
  ];

  // 🔊 AUTO SPEECH ON EACH STEP
  useEffect(() => {
    const current = lessons[step];

    Speech.stop();

    const timer = setTimeout(() => {
      Speech.speak(
        `${current.title}. ${current.word}. ${current.description}. ${current.fact}`,
        {
          rate: 0.9,
          pitch: 1.2,
        }
      );
    }, 400);

    return () => {
      clearTimeout(timer);
      Speech.stop();
    };
  }, [step]);

  const handleNext = () => {
    if (step < lessons.length - 1) {
      setStep(step + 1);
    } else {
      router.push("/foundation/level2/complete");
    }
  };

  return (
    <View style={styles.container}>

      {/* 👩‍🏫 TEACHER (DYNAMIC MESSAGE) */}
      <TeacherMascot message={lessons[step].teacher} />

      {/* TITLE */}
      <Text style={styles.title}>🔬 Science Learning</Text>

      {/* CARD */}
      <View style={styles.card}>

        <Text style={styles.emoji}>{lessons[step].emoji}</Text>

        <Text style={styles.lessonTitle}>
          {lessons[step].title}
        </Text>

        <Text style={styles.word}>
          {lessons[step].word}
        </Text>

        <Text style={styles.desc}>
          {lessons[step].description}
        </Text>

        <Text style={styles.fact}>
          💡 {lessons[step].fact}
        </Text>

      </View>

      {/* PROGRESS TEXT */}
      <Text style={styles.progress}>
        Step {step + 1} / {lessons.length}
      </Text>

      {/* BUTTON */}
      <TouchableOpacity style={styles.btn} onPress={handleNext}>
        <Text style={styles.btnText}>
          {step < lessons.length - 1 ? "Next ▶" : "Finish 🎉"}
        </Text>
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
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#fff",
    padding: 22,
    borderRadius: 18,
    marginTop: 20,
    alignItems: "center",
    elevation: 5,
  },

  emoji: {
    fontSize: 70,
    marginBottom: 10,
  },

  lessonTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 8,
  },

  word: {
    fontSize: 18,
    fontWeight: "800",
    color: "#4F46E5",
    textAlign: "center",
  },

  desc: {
    marginTop: 10,
    textAlign: "center",
    color: "#6B7280",
    fontSize: 14,
  },

  fact: {
    marginTop: 12,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
  },

  progress: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "700",
    color: "#6B7280",
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