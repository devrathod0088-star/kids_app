import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";

const practiceData: any = {
  multiplication: {
    title: "Multiplication Practice",
    emoji: "✖️",
    color: ["#2563EB", "#7C3AED"],
    questions: [
      { q: "5 × 6 = ?", options: ["25", "30", "35", "40"], answer: "30" },
      { q: "4 × 3 = ?", options: ["7", "12", "14", "16"], answer: "12" },
      { q: "9 × 2 = ?", options: ["18", "16", "12", "20"], answer: "18" },
      { q: "7 × 5 = ?", options: ["30", "35", "40", "45"], answer: "35" },
      { q: "10 × 8 = ?", options: ["60", "70", "80", "90"], answer: "80" },
    ],
  },
  division: {
    title: "Division Practice",
    emoji: "➗",
    color: ["#7C3AED", "#9333EA"],
    questions: [
      { q: "20 ÷ 5 = ?", options: ["2", "3", "4", "5"], answer: "4" },
      { q: "12 ÷ 3 = ?", options: ["2", "4", "6", "8"], answer: "4" },
      { q: "30 ÷ 10 = ?", options: ["2", "3", "4", "5"], answer: "3" },
      { q: "18 ÷ 6 = ?", options: ["2", "3", "4", "6"], answer: "3" },
      { q: "40 ÷ 8 = ?", options: ["4", "5", "6", "8"], answer: "5" },
    ],
  },
  fraction: {
    title: "Fraction Practice",
    emoji: "🥧",
    color: ["#F97316", "#FB7185"],
    questions: [
      { q: "Which is bigger?", options: ["1/2", "1/4", "1/8", "1/10"], answer: "1/2" },
      { q: "Half of 10 is?", options: ["2", "5", "8", "10"], answer: "5" },
      { q: "1/4 means?", options: ["One part of four", "Four parts", "Half", "Full"], answer: "One part of four" },
      { q: "2/4 is equal to?", options: ["1/2", "1/3", "1/4", "1"], answer: "1/2" },
      { q: "A full pizza is?", options: ["1/2", "1/4", "1 whole", "0"], answer: "1 whole" },
    ],
  },
  decimal: {
    title: "Decimal Practice",
    emoji: "🔢",
    color: ["#10B981", "#06B6D4"],
    questions: [
      { q: "Which is bigger?", options: ["0.2", "0.5", "0.1", "0.05"], answer: "0.5" },
      { q: "0.5 means?", options: ["Half", "Full", "Zero", "Ten"], answer: "Half" },
      { q: "₹2.50 means?", options: ["Two rupees fifty paise", "Five rupees", "Two paise", "Fifty rupees"], answer: "Two rupees fifty paise" },
      { q: "Which is smaller?", options: ["0.1", "0.9", "1.0", "2.0"], answer: "0.1" },
      { q: "1.5 means?", options: ["One and half", "Five", "Fifteen", "Half only"], answer: "One and half" },
    ],
  },
  geometry: {
    title: "Geometry Practice",
    emoji: "📐",
    color: ["#EC4899", "#8B5CF6"],
    questions: [
      { q: "Square has how many sides?", options: ["2", "3", "4", "5"], answer: "4" },
      { q: "Triangle has how many sides?", options: ["2", "3", "4", "5"], answer: "3" },
      { q: "Circle has corners?", options: ["0", "1", "2", "4"], answer: "0" },
      { q: "Rectangle has how many sides?", options: ["2", "3", "4", "6"], answer: "4" },
      { q: "A shape with 5 sides is called?", options: ["Triangle", "Square", "Pentagon", "Circle"], answer: "Pentagon" },
    ],
  },
};

export default function MathPractice() {
  const router = useRouter();
  const { topic } = useLocalSearchParams();

  const topicKey = String(topic || "multiplication");
  const data = practiceData[topicKey] || practiceData.multiplication;

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [xp, setXp] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = data.questions[current];

  const chooseAnswer = (option: string) => {
    if (selected) return;

    setSelected(option);

    if (option === question.answer) {
      setXp((prev) => prev + 10);
    }
  };

  const nextQuestion = () => {
    if (current < data.questions.length - 1) {
      setCurrent((prev) => prev + 1);
      setSelected("");
    } else {
      setFinished(true);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={data.color} style={styles.hero}>
        <Text style={styles.emoji}>{data.emoji}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subtitle}>🧩 Practice Mode</Text>
        <Text style={styles.xp}>⭐ XP: {xp}</Text>
      </LinearGradient>

      {!finished ? (
        <View style={styles.card}>
          <Text style={styles.progress}>
            Question {current + 1} / {data.questions.length}
          </Text>

          <Text style={styles.question}>{question.q}</Text>

          {question.options.map((option: string, index: number) => {
            const isCorrect = option === question.answer;
            const isSelected = option === selected;

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  selected &&
                    isCorrect && {
                      backgroundColor: "#DCFCE7",
                      borderColor: "#22C55E",
                    },
                  selected &&
                    isSelected &&
                    !isCorrect && {
                      backgroundColor: "#FEE2E2",
                      borderColor: "#EF4444",
                    },
                ]}
                onPress={() => chooseAnswer(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            );
          })}

          {selected !== "" && (
            <Text style={styles.result}>
              {selected === question.answer
                ? "✅ Correct! +10 XP"
                : "❌ Wrong! Correct answer: " + question.answer}
            </Text>
          )}

          {selected !== "" && (
            <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
              <Text style={styles.buttonText}>
                {current < data.questions.length - 1 ? "Next Question →" : "Finish Practice"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.completeEmoji}>🎉</Text>
          <Text style={styles.completeTitle}>Practice Complete!</Text>
          <Text style={styles.completeText}>You earned ⭐ {xp} XP</Text>

          <TouchableOpacity
            style={styles.testButton}
            onPress={() =>
              router.push({
                pathname: "/foundation/level3/mathTest",
                params: { topic: topicKey },
              } as any)
            }
          >
            <Text style={styles.buttonText}>Start Test 🏆</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EEF4FF" },
  hero: {
    padding: 28,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: "center",
  },
  emoji: { fontSize: 68 },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFFFFF",
    marginTop: 8,
    textAlign: "center",
  },
  subtitle: {
    color: "#E0E7FF",
    fontWeight: "900",
    fontSize: 16,
    marginTop: 8,
  },
  xp: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
    marginTop: 12,
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    borderRadius: 24,
    padding: 22,
    elevation: 4,
  },
  progress: {
    fontSize: 15,
    fontWeight: "900",
    color: "#64748B",
    marginBottom: 10,
  },
  question: {
    fontSize: 23,
    fontWeight: "900",
    color: "#111827",
    marginBottom: 20,
  },
  option: {
    backgroundColor: "#F8FAFC",
    borderWidth: 2,
    borderColor: "#E2E8F0",
    padding: 15,
    borderRadius: 16,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
  },
  result: {
    fontSize: 17,
    fontWeight: "900",
    marginTop: 8,
    color: "#111827",
  },
  nextButton: {
    backgroundColor: "#10B981",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 18,
  },
  testButton: {
    backgroundColor: "#F97316",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },
  completeEmoji: {
    fontSize: 70,
    textAlign: "center",
  },
  completeTitle: {
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
    color: "#111827",
    marginTop: 10,
  },
  completeText: {
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
    color: "#64748B",
    marginTop: 10,
  },
  backButton: {
    marginHorizontal: 20,
    marginBottom: 40,
    alignItems: "center",
  },
  backText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#4F46E5",
  },
});