import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as Speech from "expo-speech";

export default function MathLearn() {
  const router = useRouter();
  const { topic } = useLocalSearchParams();

  const topicKey = String(topic || "multiplication");
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState("");
  const [xp, setXp] = useState(20);

  const screens = useMemo(() => {
    return [
      {
        emoji: "🚀",
        title: "Welcome to Mission!",
        text: "Today we will learn multiplication step by step with Leo.",
        visual:
          "🎯 Mission Goal\n\nLearn groups\nLearn repeated addition\nSolve mini challenge\nEarn badge",
        teacher:
          "Hi Champ! I am Leo, your AI teacher. Today we will learn multiplication like a fun game.",
      },
      {
        emoji: "🍎",
        title: "What is Multiplication?",
        text: "Multiplication means repeated addition.",
        visual:
          "🍎 🍎 🍎 🍎\n🍎 🍎 🍎 🍎\n🍎 🍎 🍎 🍎\n\n3 groups of 4 apples\n\n4 + 4 + 4 = 12\n3 × 4 = 12",
        teacher:
          "Look carefully. We have 3 groups. Each group has 4 apples. So 3 times 4 equals 12.",
      },
      {
        emoji: "🐶",
        title: "Count the Groups",
        text: "First count the groups, then count items in each group.",
        visual:
          "🐶 🐶\n🐶 🐶\n🐶 🐶\n\n3 groups of 2 dogs\n\n2 + 2 + 2 = 6\n3 × 2 = 6",
        teacher:
          "First count the rows. Then count how many items are in each row.",
      },
      {
        emoji: "🟦",
        title: "Repeated Addition",
        text: "4 × 5 means 5 is added 4 times.",
        visual:
          "🟦 🟦 🟦 🟦 🟦\n🟦 🟦 🟦 🟦 🟦\n🟦 🟦 🟦 🟦 🟦\n🟦 🟦 🟦 🟦 🟦\n\n5 + 5 + 5 + 5 = 20\n4 × 5 = 20",
        teacher:
          "Multiplication is a shortcut. Instead of adding again and again, we multiply.",
      },
      {
        emoji: "🎯",
        title: "Table Trick",
        text: "For the 2 times table, skip count by 2.",
        visual:
          "2 × 1 = 2\n2 × 2 = 4\n2 × 3 = 6\n2 × 4 = 8\n2 × 5 = 10\n\nSkip count:\n2, 4, 6, 8, 10",
        teacher:
          "Here is a smart trick. For 2 times table, jump by 2 numbers.",
      },
      {
        emoji: "🍫",
        title: "Real Life Example",
        text: "Multiplication helps us count things faster in real life.",
        visual:
          "🍫 🍫 🍫\n🍫 🍫 🍫\n🍫 🍫 🍫\n🍫 🍫 🍫\n\n4 packets × 3 chocolates\n= 12 chocolates",
        teacher:
          "When you buy packets, multiplication helps you count the total quickly.",
      },
      {
        emoji: "🧠",
        title: "Mini Challenge",
        text: "Choose the correct answer.",
        visual: "🍎 🍎 🍎\n🍎 🍎 🍎\n\nHow many apples?",
        teacher:
          "Now it is your turn. Count all apples and choose the correct answer.",
        quiz: {
          options: ["4", "5", "6", "8"],
          answer: "6",
        },
      },
      {
        emoji: "🎉",
        title: "Mission Complete!",
        text: "You completed Multiplication Learning.",
        visual:
          "🏅 Multiplication Explorer Badge\n⭐ +20 XP\n🔥 Streak Protected\n\nNow you are ready for practice!",
        teacher:
          "Amazing work! You learned multiplication. Now let us practice like a champion.",
      },
    ];
  }, [topicKey]);

  const current = screens[step];
  const isLast = step === screens.length - 1;
  const isChallenge = !!current.quiz;

  const stopVoice = () => {
    void Speech.stop();
  };

  const speakTeacher = () => {
    stopVoice();
    Speech.speak(`${current.teacher} ${current.text}`, {
      language: "en-US",
      pitch: 1.1,
      rate: 0.85,
    });
  };

  useEffect(() => {
    speakTeacher();
    return () => stopVoice();
  }, [step]);

  const chooseAnswer = (option: string) => {
    setSelected(option);

    if (option === current.quiz?.answer) {
      setXp((prev) => prev + 5);
      Speech.speak("Great job! Correct answer. You earned 5 XP.", {
        language: "en-US",
        pitch: 1.1,
        rate: 0.85,
      });
    } else {
      Speech.speak("Try again. Count carefully.", {
        language: "en-US",
        pitch: 1.1,
        rate: 0.85,
      });
    }
  };

  const nextStep = () => {
    if (isChallenge && selected !== current.quiz?.answer) return;

    if (!isLast) {
      stopVoice();
      setStep((prev) => prev + 1);
      setSelected("");
    } else {
      stopVoice();
      router.push({
        pathname: "/foundation/level3/mathPractice",
        params: { topic: topicKey },
      } as any);
    }
  };

  const previousStep = () => {
    stopVoice();
    if (step > 0) {
      setStep((prev) => prev - 1);
      setSelected("");
    } else {
      router.back();
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={["#1D4ED8", "#7C3AED"]} style={styles.hero}>
        <Text style={styles.heroEmoji}>{current.emoji}</Text>
        <Text style={styles.heroTitle}>Multiplication Mission</Text>
        <Text style={styles.heroSub}>Level 3 • Space Academy</Text>

        <View style={styles.statsRow}>
          <Text style={styles.statPill}>⭐ XP: {xp}</Text>
          <Text style={styles.statPill}>🔥 Streak: 3</Text>
          <Text style={styles.statPill}>🏅 Badge: 1</Text>
        </View>

        <View style={styles.progressOuter}>
          <View
            style={[
              styles.progressInner,
              { width: `${((step + 1) / screens.length) * 100}%` },
            ]}
          />
        </View>

        <Text style={styles.stepText}>
          Step {step + 1} / {screens.length}
        </Text>
      </LinearGradient>

      <View style={styles.card}>
        <View style={styles.teacherBox}>
          <Text style={styles.teacherEmoji}>🤖</Text>

          <View style={styles.speechBubble}>
            <Text style={styles.teacherName}>Leo AI Teacher</Text>
            <Text style={styles.teacherText}>{current.teacher}</Text>

            <View style={styles.teacherActions}>
              <TouchableOpacity style={styles.listenBtn} onPress={speakTeacher}>
                <Text style={styles.listenText}>🔊 Listen</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.askBtn}>
                <Text style={styles.askText}>💬 Ask Leo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.cardTitle}>{current.title}</Text>
        <Text style={styles.mainText}>{current.text}</Text>

        <View style={styles.visualBox}>
          <Text style={styles.visualText}>{current.visual}</Text>
        </View>

        {isChallenge && (
          <View style={styles.optionWrap}>
            {current.quiz?.options.map((option: string) => {
              const isCorrect = option === current.quiz?.answer;
              const isSelected = selected === option;

              return (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.option,
                    isSelected && {
                      backgroundColor: isCorrect ? "#DCFCE7" : "#FEE2E2",
                      borderColor: isCorrect ? "#22C55E" : "#EF4444",
                    },
                  ]}
                  onPress={() => chooseAnswer(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              );
            })}

            {selected !== "" && (
              <Text style={styles.feedback}>
                {selected === current.quiz?.answer
                  ? "🎉 Great Job! +5 XP"
                  : "🤖 Leo says: Try counting again!"}
              </Text>
            )}
          </View>
        )}
      </View>

      <View style={styles.navRow}>
        <TouchableOpacity style={styles.prevButton} onPress={previousStep}>
          <Text style={styles.prevText}>← Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.nextButton,
            isChallenge &&
              selected !== current.quiz?.answer && {
                opacity: 0.5,
              },
          ]}
          onPress={nextStep}
        >
          <Text style={styles.nextText}>
            {isLast ? "Start Practice 🧩" : "Next →"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EEF4FF" },

  hero: {
    padding: 30,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    alignItems: "center",
  },

  heroEmoji: { fontSize: 70 },

  heroTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "900",
    marginTop: 8,
    textAlign: "center",
  },

  heroSub: {
    color: "#E0E7FF",
    fontSize: 15,
    fontWeight: "800",
    marginTop: 6,
  },

  statsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 16,
    justifyContent: "center",
  },

  statPill: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "900",
    backgroundColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 18,
  },

  progressOuter: {
    width: "90%",
    height: 13,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 20,
    marginTop: 22,
    overflow: "hidden",
  },

  progressInner: {
    height: "100%",
    backgroundColor: "#FACC15",
    borderRadius: 20,
  },

  stepText: {
    marginTop: 9,
    color: "#E0E7FF",
    fontWeight: "900",
  },

  card: {
    margin: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 22,
    elevation: 5,
  },

  teacherBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  teacherEmoji: {
    fontSize: 86,
    marginRight: 14,
  },

  speechBubble: {
    flex: 1,
    backgroundColor: "#EEF2FF",
    borderRadius: 24,
    padding: 16,
    borderWidth: 2,
    borderColor: "#C7D2FE",
  },

  teacherName: {
    fontSize: 16,
    fontWeight: "900",
    color: "#4F46E5",
    marginBottom: 6,
  },

  teacherText: {
    fontSize: 15,
    color: "#334155",
    fontWeight: "800",
    lineHeight: 23,
  },

  teacherActions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
    flexWrap: "wrap",
  },

  listenBtn: {
    backgroundColor: "#4F46E5",
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 14,
  },

  listenText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 13,
  },

  askBtn: {
    backgroundColor: "#E0E7FF",
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 14,
  },

  askText: {
    color: "#4338CA",
    fontWeight: "900",
    fontSize: 13,
  },

  cardTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#111827",
    marginBottom: 10,
  },

  mainText: {
    fontSize: 18,
    color: "#475569",
    lineHeight: 29,
    fontWeight: "800",
  },

  visualBox: {
    backgroundColor: "#F8FAFC",
    borderRadius: 26,
    padding: 22,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#E0E7FF",
  },

  visualText: {
    fontSize: 23,
    fontWeight: "900",
    color: "#111827",
    textAlign: "center",
    lineHeight: 38,
  },

  optionWrap: { marginTop: 20 },

  option: {
    backgroundColor: "#F8FAFC",
    borderWidth: 2,
    borderColor: "#E2E8F0",
    padding: 17,
    borderRadius: 20,
    marginBottom: 12,
  },

  optionText: {
    fontSize: 19,
    fontWeight: "900",
    color: "#111827",
    textAlign: "center",
  },

  feedback: {
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 10,
    color: "#111827",
  },

  navRow: {
    flexDirection: "row",
    gap: 12,
    marginHorizontal: 20,
    marginBottom: 40,
  },

  prevButton: {
    flex: 1,
    backgroundColor: "#E0E7FF",
    padding: 18,
    borderRadius: 22,
    alignItems: "center",
  },

  prevText: {
    color: "#4338CA",
    fontSize: 16,
    fontWeight: "900",
  },

  nextButton: {
    flex: 1,
    backgroundColor: "#10B981",
    padding: 18,
    borderRadius: 22,
    alignItems: "center",
  },

  nextText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
});