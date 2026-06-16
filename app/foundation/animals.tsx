import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as Speech from "expo-speech";

const animals = [
  {
    name: "Elephant",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg",
    fact: "Elephants are the biggest land animals in the world.",
  },
  {
    name: "Dog",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
    fact: "Dogs are friendly animals and love humans.",
  },
  {
    name: "Cow",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg",
    fact: "Cows give us milk.",
  },
  {
    name: "Bird",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/House_sparrow04.jpg",
    fact: "Birds can fly in the sky.",
  },
];

export default function AnimalsScreen() {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<"learn" | "quiz">("learn");
  const [score, setScore] = useState(0);

  const current = animals[index];

  // 🎤 Kid-friendly female-like voice
  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, {
      language: "en-US",
      rate: 0.85,
      pitch: 1.35,
    });
  };

  // 🧠 Auto speak in learn mode
  useEffect(() => {
    if (mode === "learn") {
      speak(`This is ${current.name}. ${current.fact}`);
    }
  }, [index, mode]);

  // ⬅ Previous animal
  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  // ➡ Next animal
  const next = () => {
    if (index < animals.length - 1) setIndex(index + 1);
  };

  // 🎯 Quiz options (no lion/cat included)
  const getOptions = () => {
    const correct = current.name;

    const wrong = animals
      .filter((a) => a.name !== correct)
      .slice(0, 2)
      .map((a) => a.name);

    return [...wrong, correct].sort(() => Math.random() - 0.5);
  };

  // ✅ Answer check
  const answer = (option: string) => {
    if (option === current.name) {
      setScore((s) => s + 1);
      speak("Correct! Good job!");
    } else {
      speak("Try again!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌍 Kids Animal World</Text>

      {/* Mode Switch */}
      <View style={styles.toggle}>
        <TouchableOpacity onPress={() => setMode("learn")}>
          <Text style={mode === "learn" ? styles.active : styles.inactive}>
            Learn
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMode("quiz")}>
          <Text style={mode === "quiz" ? styles.active : styles.inactive}>
            Quiz
          </Text>
        </TouchableOpacity>
      </View>

      {/* Animal Card */}
      <View style={styles.card}>
        <Image source={{ uri: current.image }} style={styles.image} />
        <Text style={styles.name}>{current.name}</Text>
      </View>

      {/* Navigation */}
      {mode === "learn" && (
        <View style={styles.nav}>
          <TouchableOpacity onPress={prev}>
            <Text style={styles.arrow}>⬅</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={next}>
            <Text style={styles.arrow}>➡</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Quiz Mode */}
      {mode === "quiz" && (
        <View style={styles.quiz}>
          <Text style={styles.question}>Which animal is this?</Text>

          {getOptions().map((opt, i) => (
            <TouchableOpacity
              key={i}
              style={styles.option}
              onPress={() => answer(opt)}
            >
              <Text style={styles.optionText}>{opt}</Text>
            </TouchableOpacity>
          ))}

          <Text style={styles.score}>⭐ Score: {score}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FAFF",
    alignItems: "center",
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2B4C7E",
    marginBottom: 20,
  },
  toggle: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  active: {
    backgroundColor: "#4A90E2",
    color: "#fff",
    padding: 8,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "700",
  },
  inactive: {
    fontSize: 16,
    color: "#888",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
  },
  nav: {
    flexDirection: "row",
    marginTop: 20,
    gap: 50,
  },
  arrow: {
    fontSize: 40,
    color: "#4A90E2",
  },
  quiz: {
    marginTop: 20,
    alignItems: "center",
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  option: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 5,
    width: 200,
    borderRadius: 10,
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
  },
  score: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "700",
  },
});