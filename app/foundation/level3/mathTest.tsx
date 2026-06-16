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

const testData: any = {
  multiplication: {
    title: "Multiplication Test",
    emoji: "✖️",
    color: ["#2563EB", "#7C3AED"],
    badge: "Multiplication Master Badge",
    questions: [
      { q: "6 × 5 = ?", options: ["25", "30", "35", "40"], answer: "30" },
      { q: "8 × 4 = ?", options: ["24", "28", "32", "36"], answer: "32" },
      { q: "9 × 3 = ?", options: ["18", "21", "27", "30"], answer: "27" },
      { q: "7 × 6 = ?", options: ["36", "40", "42", "48"], answer: "42" },
      { q: "10 × 9 = ?", options: ["80", "90", "100", "99"], answer: "90" },
      { q: "3 × 12 = ?", options: ["30", "36", "40", "42"], answer: "36" },
      { q: "11 × 2 = ?", options: ["20", "22", "24", "26"], answer: "22" },
      { q: "5 × 5 = ?", options: ["20", "25", "30", "35"], answer: "25" },
      { q: "4 × 9 = ?", options: ["32", "36", "40", "42"], answer: "36" },
      { q: "12 × 1 = ?", options: ["1", "10", "12", "21"], answer: "12" },
    ],
  },

  division: {
    title: "Division Test",
    emoji: "➗",
    color: ["#7C3AED", "#9333EA"],
    badge: "Division Quest Badge",
    questions: [
      { q: "25 ÷ 5 = ?", options: ["3", "4", "5", "6"], answer: "5" },
      { q: "36 ÷ 6 = ?", options: ["4", "5", "6", "7"], answer: "6" },
      { q: "49 ÷ 7 = ?", options: ["6", "7", "8", "9"], answer: "7" },
      { q: "100 ÷ 10 = ?", options: ["5", "10", "15", "20"], answer: "10" },
      { q: "18 ÷ 3 = ?", options: ["3", "6", "9", "12"], answer: "6" },
      { q: "40 ÷ 8 = ?", options: ["4", "5", "6", "8"], answer: "5" },
      { q: "12 ÷ 4 = ?", options: ["2", "3", "4", "6"], answer: "3" },
      { q: "27 ÷ 9 = ?", options: ["2", "3", "4", "5"], answer: "3" },
      { q: "16 ÷ 2 = ?", options: ["6", "7", "8", "9"], answer: "8" },
      { q: "50 ÷ 5 = ?", options: ["5", "10", "15", "20"], answer: "10" },
    ],
  },

  fraction: {
    title: "Fraction Test",
    emoji: "🥧",
    color: ["#F97316", "#FB7185"],
    badge: "Fraction World Badge",
    questions: [
      { q: "Half of 20 is?", options: ["5", "10", "15", "20"], answer: "10" },
      { q: "1/4 means?", options: ["One part of four", "Half", "Full", "Double"], answer: "One part of four" },
      { q: "Which is bigger?", options: ["1/2", "1/4", "1/8", "1/10"], answer: "1/2" },
      { q: "2/4 is equal to?", options: ["1/2", "1/3", "1/4", "1"], answer: "1/2" },
      { q: "A full object is called?", options: ["Half", "Quarter", "One whole", "Zero"], answer: "One whole" },
      { q: "1/2 + 1/2 = ?", options: ["1 whole", "1/4", "1/3", "0"], answer: "1 whole" },
      { q: "Quarter means?", options: ["1/2", "1/3", "1/4", "1"], answer: "1/4" },
      { q: "3/4 means?", options: ["Three parts of four", "One part", "Full only", "Zero"], answer: "Three parts of four" },
      { q: "Which is smaller?", options: ["1/8", "1/2", "1", "3/4"], answer: "1/8" },
      { q: "Half of 8 is?", options: ["2", "4", "6", "8"], answer: "4" },
    ],
  },

  decimal: {
    title: "Decimal Test",
    emoji: "🔢",
    color: ["#10B981", "#06B6D4"],
    badge: "Decimal Challenge Badge",
    questions: [
      { q: "Which is bigger?", options: ["0.8", "0.5", "0.3", "0.1"], answer: "0.8" },
      { q: "0.5 means?", options: ["Half", "Full", "Zero", "Ten"], answer: "Half" },
      { q: "₹1.50 means?", options: ["One rupee fifty paise", "Fifty rupees", "One paise", "Five rupees"], answer: "One rupee fifty paise" },
      { q: "Which is smaller?", options: ["0.1", "0.9", "1.0", "2.0"], answer: "0.1" },
      { q: "2.5 means?", options: ["Two and half", "Five", "Twenty five", "Half only"], answer: "Two and half" },
      { q: "0.25 is also called?", options: ["Quarter", "Half", "Full", "Double"], answer: "Quarter" },
      { q: "1.0 means?", options: ["One whole", "Zero", "Half", "Ten"], answer: "One whole" },
      { q: "Which is bigger?", options: ["0.75", "0.25", "0.10", "0.05"], answer: "0.75" },
      { q: "0.50 is equal to?", options: ["0.5", "5.0", "50", "0.05"], answer: "0.5" },
      { q: "3.25 means?", options: ["Three and quarter", "Two only", "Quarter only", "Zero"], answer: "Three and quarter" },
    ],
  },

  geometry: {
    title: "Geometry Test",
    emoji: "📐",
    color: ["#EC4899", "#8B5CF6"],
    badge: "Geometry Mission Badge",
    questions: [
      { q: "Triangle has how many sides?", options: ["2", "3", "4", "5"], answer: "3" },
      { q: "Square has how many sides?", options: ["2", "3", "4", "5"], answer: "4" },
      { q: "Circle has how many corners?", options: ["0", "1", "2", "4"], answer: "0" },
      { q: "Rectangle has how many sides?", options: ["2", "3", "4", "6"], answer: "4" },
      { q: "A shape with 5 sides is called?", options: ["Triangle", "Square", "Pentagon", "Circle"], answer: "Pentagon" },
      { q: "A shape with 6 sides is called?", options: ["Hexagon", "Circle", "Square", "Triangle"], answer: "Hexagon" },
      { q: "Which shape is round?", options: ["Circle", "Square", "Triangle", "Rectangle"], answer: "Circle" },
      { q: "Angle is measured in?", options: ["Degree", "Gram", "Liter", "Meter"], answer: "Degree" },
      { q: "A square has all sides?", options: ["Equal", "Different", "Curved", "Zero"], answer: "Equal" },
      { q: "A triangle has how many corners?", options: ["2", "3", "4", "5"], answer: "3" },
    ],
  },
};

export default function MathTest() {
  const router = useRouter();
  const { topic } = useLocalSearchParams();

  const topicKey = String(topic || "multiplication");
  const data = testData[topicKey] || testData.multiplication;

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = data.questions[current];

  const chooseAnswer = (option: string) => {
    if (selected) return;

    setSelected(option);

    if (option === question.answer) {
      setScore((prev) => prev + 1);
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

  const percent = Math.round((score / data.questions.length) * 100);
  const passed = percent >= 70;
  const rewardXP = passed ? 100 : 30;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={data.color} style={styles.hero}>
        <Text style={styles.emoji}>{data.emoji}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subtitle}>🏆 Test Mode</Text>
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
                ? "✅ Correct!"
                : "❌ Wrong! Correct answer: " + question.answer}
            </Text>
          )}

          {selected !== "" && (
            <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
              <Text style={styles.buttonText}>
                {current < data.questions.length - 1
                  ? "Next Question →"
                  : "Finish Test"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.completeEmoji}>{passed ? "🎉" : "💪"}</Text>

          <Text style={styles.completeTitle}>
            {passed ? "Test Passed!" : "Try Again!"}
          </Text>

          <Text style={styles.scoreText}>
            Score: {score} / {data.questions.length}
          </Text>

          <Text style={styles.scoreText}>Percentage: {percent}%</Text>

          <Text style={styles.message}>
            {passed
              ? `🏅 ${data.badge} unlocked!\n⭐ You earned ${rewardXP} XP`
              : `You earned ${rewardXP} XP. Practice again and you can pass!`}
          </Text>

          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => router.replace("/foundation/level3/math" as any)}
          >
            <Text style={styles.buttonText}>Back to Math Path</Text>
          </TouchableOpacity>

          {!passed && (
            <TouchableOpacity
              style={styles.retryButton}
              onPress={() =>
                router.replace({
                  pathname: "/foundation/level3/mathPractice",
                  params: { topic: topicKey },
                } as any)
              }
            >
              <Text style={styles.buttonText}>Practice Again 🧩</Text>
            </TouchableOpacity>
          )}
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
    backgroundColor: "#F97316",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 18,
  },

  mainButton: {
    backgroundColor: "#4F46E5",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 20,
  },

  retryButton: {
    backgroundColor: "#10B981",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },

  completeEmoji: {
    fontSize: 72,
    textAlign: "center",
  },

  completeTitle: {
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    color: "#111827",
    marginTop: 10,
  },

  scoreText: {
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    color: "#334155",
    marginTop: 10,
  },

  message: {
    fontSize: 17,
    fontWeight: "800",
    textAlign: "center",
    color: "#64748B",
    lineHeight: 26,
    marginTop: 15,
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