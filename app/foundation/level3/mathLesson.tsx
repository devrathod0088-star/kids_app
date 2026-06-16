import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { mathLessons } from "../../../data/level3/math";

export default function MathLesson() {
  const { topic, mode } = useLocalSearchParams();
  const [result, setResult] = useState("");

  const topicKey = String(topic) as keyof typeof mathLessons;
  const modeKey = String(mode) as "learn" | "practice" | "test";

  const lesson = mathLessons[topicKey];
  const content = lesson?.[modeKey];

  if (!lesson || !content) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Content not found</Text>
      </SafeAreaView>
    );
  }

  const isQuiz = modeKey === "practice" || modeKey === "test";
  const quiz = typeof content === "object" ? content : null;

  const checkAnswer = (option: string) => {
    if (!quiz) return;
    setResult(option === quiz.answer ? "✅ Correct Answer!" : "❌ Wrong Answer");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{topicKey.toUpperCase()}</Text>
      <Text style={styles.mode}>{modeKey.toUpperCase()} MODE</Text>

      <View style={styles.card}>
        {isQuiz && quiz ? (
          <>
            <Text style={styles.question}>{quiz.question}</Text>

            {quiz.options.map((option: string, index: number) => (
              <TouchableOpacity
                key={index}
                style={styles.optionBtn}
                onPress={() => checkAnswer(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}

            {result !== "" && <Text style={styles.result}>{result}</Text>}
          </>
        ) : (
          <Text style={styles.text}>{String(content)}</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F5F7FB" },
  title: { fontSize: 28, fontWeight: "bold", marginTop: 20 },
  mode: { fontSize: 18, color: "#6B7280", marginBottom: 20 },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },
  text: { fontSize: 18, lineHeight: 28 },
  question: { fontSize: 22, fontWeight: "900", marginBottom: 20 },
  optionBtn: {
    backgroundColor: "#EEF2FF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
  },
  optionText: { fontSize: 18, fontWeight: "800", color: "#111827" },
  result: { fontSize: 20, fontWeight: "900", marginTop: 15 },
});