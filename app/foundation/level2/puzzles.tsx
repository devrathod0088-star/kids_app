import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TeacherMascot from "../../../components/TeacherMascot";
import { useRouter } from "expo-router";

export default function Puzzles() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState("");

  const puzzles = [
    {
      question: "🍎 + 🍎 = ?",
      options: ["🍎🍎", "🍎", "🍌"],
      answer: "🍎🍎",
      explain: "Two apples make 2 apples 🍎🍎",
    },
    {
      question: "🐶 belongs to?",
      options: ["Car", "Animal", "Fruit"],
      answer: "Animal",
      explain: "Dog is an animal 🐶",
    },
    {
      question: "Which comes next? 1, 2, ?",
      options: ["3", "5", "10"],
      answer: "3",
      explain: "Counting order goes 1, 2, 3 🔢",
    },
    {
      question: "🌞 is hot or cold?",
      options: ["Hot", "Cold", "Ice"],
      answer: "Hot",
      explain: "Sun gives heat ☀️",
    },
  ];

  const checkAnswer = (option: string) => {
    const current = puzzles[step];

    if (option === current.answer) {
      setMessage("🎉 Correct! " + current.explain);

      setTimeout(() => {
        if (step < puzzles.length - 1) {
          setStep(step + 1);
          setMessage("");
        } else {
          router.push("/foundation/level2/complete");
        }
      }, 1200);
    } else {
      setMessage("❌ Try again with thinking 🤔");
    }
  };

  return (
    <View style={styles.container}>

      {/* 👩‍🏫 TEACHER */}
      <TeacherMascot message="Let’s solve fun puzzles together! Think carefully 🧠✨" />

      {/* TITLE */}
      <Text style={styles.title}>🧩 Thinking Puzzles</Text>

      {/* QUESTION CARD */}
      <View style={styles.card}>
        <Text style={styles.question}>
          {puzzles[step].question}
        </Text>

        {/* OPTIONS */}
        {puzzles[step].options.map((opt, i) => (
          <TouchableOpacity
            key={i}
            style={styles.option}
            onPress={() => checkAnswer(opt)}
          >
            <Text style={styles.optionText}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* MESSAGE */}
      {message !== "" && (
        <Text style={styles.message}>{message}</Text>
      )}

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
    padding: 20,
    borderRadius: 18,
    marginTop: 20,
    elevation: 4,
  },

  question: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 20,
  },

  option: {
    backgroundColor: "#4F46E5",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  optionText: {
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
    fontSize: 16,
  },

  message: {
    marginTop: 15,
    textAlign: "center",
    fontWeight: "700",
    color: "#374151",
  },
});