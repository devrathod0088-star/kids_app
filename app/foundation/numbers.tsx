import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

/* ✅ CORRECT IMPORTS */
import { numbers } from "../../data/Level1/numbers";
import { speak, stopSpeak } from "../../utils/speech";

export default function NumbersScreen() {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<"learn" | "quiz">("learn");
  const [score, setScore] = useState(0);
  const [opts, setOpts] = useState<number[]>([]);

  const timer = useRef<NodeJS.Timeout | null>(null);

  const current = numbers[index];

  /* ---------------- GENERATE OPTIONS ---------------- */
  const generateOptions = (currentNumber: number) => {
    const correct = currentNumber;

    const wrong = numbers
      .filter((n) => n.number !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)
      .map((n) => n.number);

    return [...wrong, correct].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (current) {
      setOpts(generateOptions(current.number));
    }
  }, [index]);

  /* ---------------- SPEAK ---------------- */
  const speakCurrent = () => {
    if (current) {
      speak(`${current.number} is ${current.word}`);
    }
  };

  /* ---------------- AUTO PLAY ---------------- */
  const start = () => {
    stop();

    let i = index;

    const loop = () => {
      if (i >= numbers.length) {
        stop();
        return;
      }

      setIndex(i);
      speak(`${numbers[i].number} is ${numbers[i].word}`);

      i++;

      timer.current = setTimeout(loop, 2500);
    };

    loop();
  };

  /* ---------------- STOP ---------------- */
  const stop = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }

    stopSpeak();
  };

  /* ---------------- ANSWER ---------------- */
  const answer = (num: number) => {
    if (num === current.number) {
      setScore((prev) => prev + 1);

      speak("Correct! Amazing!");

      setTimeout(() => {
        setIndex((prev) =>
          Math.min(numbers.length - 1, prev + 1)
        );
      }, 800);
    } else {
      speak("Try again!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* TITLE */}
        <Text style={styles.title}>🔢 Numbers Learning World</Text>

        {/* MODE */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => setMode("learn")}>
            <Text style={mode === "learn" ? styles.active : styles.btn}>
              Learn
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMode("quiz")}>
            <Text style={mode === "quiz" ? styles.active : styles.btn}>
              Quiz
            </Text>
          </TouchableOpacity>
        </View>

        {/* NUMBER CARD */}
        <View style={styles.card}>
          <Text style={styles.number}>{current?.number}</Text>
          <Text style={styles.word}>{current?.word}</Text>
        </View>

        {/* LEARN MODE */}
        {mode === "learn" && (
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() =>
                setIndex((prev) => Math.max(0, prev - 1))
              }
            >
              <Text style={styles.nav}>⬅</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={speakCurrent}>
              <Text style={styles.nav}>🔊</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                setIndex((prev) =>
                  Math.min(numbers.length - 1, prev + 1)
                )
              }
            >
              <Text style={styles.nav}>➡</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* QUIZ */}
        {mode === "quiz" && (
          <View style={styles.quiz}>
            <Text style={styles.q}>Pick the correct number</Text>

            {opts.map((n, i) => (
              <TouchableOpacity
                key={i}
                style={styles.opt}
                onPress={() => answer(n)}
              >
                <Text style={styles.optText}>{n}</Text>
              </TouchableOpacity>
            ))}

            <Text style={styles.score}>⭐ Score: {score}</Text>
          </View>
        )}

        {/* CONTROLS */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.start} onPress={start}>
            <Text style={styles.white}>▶ Start</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.stop} onPress={stop}>
            <Text style={styles.white}>⏹ Stop</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F9FF",
    paddingTop: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    color: "#0F172A",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 15,
  },

  btn: {
    fontSize: 18,
    color: "#64748B",
    fontWeight: "700",
    padding: 10,
  },

  active: {
    backgroundColor: "#0EA5E9",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
    fontWeight: "900",
    fontSize: 18,
  },

  card: {
    backgroundColor: "#FEF08A",
    marginHorizontal: 20,
    paddingVertical: 50,
    borderRadius: 30,
    alignItems: "center",
    elevation: 5,
  },

  number: {
    fontSize: 100,
    fontWeight: "900",
    color: "#0F172A",
  },

  word: {
    fontSize: 28,
    fontWeight: "700",
    color: "#334155",
    marginTop: 10,
  },

  nav: {
    fontSize: 42,
  },

  quiz: {
    alignItems: "center",
    marginTop: 25,
  },

  q: {
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 15,
    color: "#0F172A",
  },

  opt: {
    width: 220,
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginVertical: 8,
    elevation: 3,
  },

  optText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0F172A",
  },

  score: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "900",
    color: "#0EA5E9",
  },

  start: {
    backgroundColor: "#16A34A",
    paddingVertical: 15,
    paddingHorizontal: 28,
    borderRadius: 18,
  },

  stop: {
    backgroundColor: "#DC2626",
    paddingVertical: 15,
    paddingHorizontal: 28,
    borderRadius: 18,
  },

  white: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },
});
