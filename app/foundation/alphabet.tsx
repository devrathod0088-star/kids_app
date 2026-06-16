import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

import * as Speech from "expo-speech";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ALPHABETS = [
  {
    letter: "A",
    word: "Apple",
    image:
      "https://cdn-icons-png.flaticon.com/512/415/415733.png",
  },
  {
    letter: "B",
    word: "Ball",
    image:
      "https://cdn-icons-png.flaticon.com/512/3082/3082037.png",
  },
  {
    letter: "C",
    word: "Cat",
    image:
      "https://cdn-icons-png.flaticon.com/512/616/616430.png",
  },
  {
    letter: "D",
    word: "Dog",
    image:
      "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    letter: "E",
    word: "Elephant",
    image:
      "https://cdn-icons-png.flaticon.com/512/1998/1998627.png",
  },
];

export default function AlphabetGame() {
  const [index, setIndex] = useState(0);
  const [stars, setStars] = useState(1250);
  const [mode, setMode] = useState<"learn" | "quiz">(
    "learn"
  );

  const isPlayingRef = useRef(false);

  const current = ALPHABETS[index];

  // 🔊 SPEAK
  const speak = (text: string) => {
    Speech.stop();

    Speech.speak(text, {
      rate: 0.85,
      pitch: 1.2,
      language: "en-US",
    });
  };

  // ▶ AUTO PLAY
  const startAuto = () => {
    isPlayingRef.current = true;

    const play = (i: number) => {
      if (!isPlayingRef.current || i >= ALPHABETS.length)
        return;

      setIndex(i);

      speak(
        `${ALPHABETS[i].letter} is for ${ALPHABETS[i].word}`
      );

      setTimeout(() => {
        play(i + 1);
      }, 2500);
    };

    play(index);
  };

  // ⛔ STOP
  const stopAuto = () => {
    isPlayingRef.current = false;
    Speech.stop();
  };

  // QUIZ OPTIONS
  const getOptions = () => {
    const correct = current.word;

    const wrong = ALPHABETS
      .filter((a) => a.word !== correct)
      .slice(0, 2)
      .map((a) => a.word);

    return [...wrong, correct].sort(
      () => Math.random() - 0.5
    );
  };

  // ANSWER
  const answer = (opt: string) => {
    if (opt === current.word) {
      speak("Correct Great Job");

      setStars((s) => s + 10);
    } else {
      speak("Try Again");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <Ionicons
              name="arrow-back"
              size={28}
              color="#7C3AED"
            />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <LinearGradient
              colors={["#8B5CF6", "#7C3AED"]}
              style={styles.logo}
            >
              <Text style={styles.logoText}>ABC</Text>
            </LinearGradient>

            <View>
              <Text style={styles.title}>
                Alphabet
              </Text>

              <Text style={styles.subtitle}>
                Learn letters from A to Z
              </Text>
            </View>
          </View>

          <View style={styles.headerRight}>
            <View style={styles.coinBox}>
              <Ionicons
                name="star"
                size={22}
                color="#F59E0B"
              />

              <Text style={styles.coinText}>
                {stars}
              </Text>
            </View>

            <TouchableOpacity style={styles.heartBtn}>
              <Ionicons
                name="heart"
                size={24}
                color="#EF4444"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* LETTER ROW */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.lettersRow}
        >
          {ALPHABETS.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.letterBtn,
                index === i && styles.activeLetter,
              ]}
              onPress={() => setIndex(i)}
            >
              <Text
                style={[
                  styles.letterText,
                  index === i && {
                    color: "#fff",
                  },
                ]}
              >
                {item.letter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* MAIN CARD */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.soundBtn}
            onPress={() =>
              speak(
                `${current.letter} is for ${current.word}`
              )
            }
          >
            <Ionicons
              name="volume-high"
              size={30}
              color="#7C3AED"
            />
          </TouchableOpacity>

          <Text style={styles.bigLetter}>
            {current.letter}
          </Text>

          <View style={styles.wordArea}>
            <Text style={styles.aIsFor}>
              {current.letter} is for
            </Text>

            <Text style={styles.wordMain}>
              {current.word}
            </Text>
          </View>

          <Image
            source={{ uri: current.image }}
            style={styles.mainImage}
          />

          <View style={styles.bottomBox}>
            <Text style={styles.bottomText}>
              {current.word} is very healthy and fun
              to learn!
            </Text>

            <TouchableOpacity
              onPress={() =>
                speak(
                  `${current.letter} is for ${current.word}`
                )
              }
            >
              <Ionicons
                name="volume-high"
                size={28}
                color="#7C3AED"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* CONTROLS */}
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.navBtn}
            onPress={() =>
              setIndex((i) => Math.max(i - 1, 0))
            }
          >
            <Ionicons
              name="arrow-back"
              size={26}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navBtn}
            onPress={() =>
              setIndex((i) =>
                Math.min(i + 1, ALPHABETS.length - 1)
              )
            }
          >
            <Ionicons
              name="arrow-forward"
              size={26}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* MODE */}
        <View style={styles.modeRow}>
          <TouchableOpacity
            style={[
              styles.modeBtn,
              mode === "learn" &&
                styles.activeMode,
            ]}
            onPress={() => setMode("learn")}
          >
            <Text
              style={[
                styles.modeText,
                mode === "learn" && {
                  color: "#fff",
                },
              ]}
            >
              Learn
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.modeBtn,
              mode === "quiz" &&
                styles.activeMode,
            ]}
            onPress={() => setMode("quiz")}
          >
            <Text
              style={[
                styles.modeText,
                mode === "quiz" && {
                  color: "#fff",
                },
              ]}
            >
              Quiz
            </Text>
          </TouchableOpacity>
        </View>

        {/* QUIZ */}
        {mode === "quiz" && (
          <View style={styles.quizBox}>
            <Text style={styles.quizTitle}>
              What starts with{" "}
              {current.letter} ?
            </Text>

            {getOptions().map((opt, i) => (
              <TouchableOpacity
                key={i}
                style={styles.option}
                onPress={() => answer(opt)}
              >
                <Text style={styles.optionText}>
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* AUTO PLAY */}
        <View style={styles.autoRow}>
          <TouchableOpacity
            style={styles.autoBtn}
            onPress={startAuto}
          >
            <Text style={styles.autoText}>
              ▶ Start
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.autoBtn,
              {
                backgroundColor: "#EF4444",
              },
            ]}
            onPress={stopAuto}
          >
            <Text style={styles.autoText}>
              ⏹ Stop
            </Text>
          </TouchableOpacity>
        </View>

        {/* PRACTICE */}
        <Text style={styles.practiceTitle}>
          Let's Practice!
        </Text>

        <View style={styles.practiceRow}>
          {/* TRACE */}
          <TouchableOpacity
            style={styles.practiceCard}
            activeOpacity={0.9}
            onPress={() =>
              speak(
                `Trace the letter ${current.letter}`
              )
            }
          >
            <View
              style={styles.practiceIconCircle}
            >
              <Ionicons
                name="create"
                size={34}
                color="#7C3AED"
              />
            </View>

            <Text style={styles.practiceText}>
              Trace Letter
            </Text>

            <Text
              style={styles.practiceSubText}
            >
              Draw and learn
            </Text>
          </TouchableOpacity>

          {/* FIND */}
          <TouchableOpacity
            style={styles.practiceCard}
            activeOpacity={0.9}
            onPress={() =>
              speak(
                `Find the letter ${current.letter}`
              )
            }
          >
            <View
              style={styles.practiceIconCircle}
            >
              <Ionicons
                name="search"
                size={34}
                color="#7C3AED"
              />
            </View>

            <Text style={styles.practiceText}>
              Find Letter
            </Text>

            <Text
              style={styles.practiceSubText}
            >
              Search quickly
            </Text>
          </TouchableOpacity>

          {/* LISTEN */}
          <TouchableOpacity
            style={styles.practiceCard}
            activeOpacity={0.9}
            onPress={() =>
              speak(
                `${current.letter} is for ${current.word}`
              )
            }
          >
            <View
              style={styles.practiceIconCircle}
            >
              <Ionicons
                name="headset"
                size={34}
                color="#7C3AED"
              />
            </View>

            <Text style={styles.practiceText}>
              Listen & Choose
            </Text>

            <Text
              style={styles.practiceSubText}
            >
              Hear and answer
            </Text>
          </TouchableOpacity>
        </View>

        {/* NEXT BUTTON */}
        <TouchableOpacity
          onPress={() =>
            setIndex((i) =>
              Math.min(i + 1, ALPHABETS.length - 1)
            )
          }
        >
          <LinearGradient
            colors={["#8B5CF6", "#7C3AED"]}
            style={styles.nextBtn}
          >
            <Text style={styles.nextText}>
              Next Letter
            </Text>

            <Ionicons
              name="arrow-forward"
              size={24}
              color="#fff"
            />
          </LinearGradient>
        </TouchableOpacity>

        {/* BOTTOM SPACE */}
        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* STYLES */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4FF",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  backBtn: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  logo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
  },

  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#111827",
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  coinBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    gap: 8,
  },

  coinText: {
    fontSize: 20,
    fontWeight: "900",
  },

  heartBtn: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  lettersRow: {
    paddingLeft: 20,
    marginBottom: 20,
  },

  letterBtn: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  activeLetter: {
    backgroundColor: "#7C3AED",
  },

  letterText: {
    fontSize: 28,
    fontWeight: "900",
    color: "#9CA3AF",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 35,
    padding: 20,
    elevation: 5,
  },

  soundBtn: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#F5F3FF",
    justifyContent: "center",
    alignItems: "center",
  },

  bigLetter: {
    fontSize: 180,
    fontWeight: "900",
    color: "#EF4444",
    alignSelf: "center",
  },

  wordArea: {
    position: "absolute",
    top: 120,
    right: 40,
  },

  aIsFor: {
    fontSize: 26,
    fontWeight: "700",
  },

  wordMain: {
    fontSize: 52,
    fontWeight: "900",
    color: "#EF4444",
  },

  mainImage: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: -40,
  },

  bottomBox: {
    backgroundColor: "#F5F3FF",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bottomText: {
    width: "80%",
    fontSize: 18,
    fontWeight: "600",
    color: "#374151",
  },

  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },

  navBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#7C3AED",
    justifyContent: "center",
    alignItems: "center",
  },

  modeRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 25,
  },

  modeBtn: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 20,
  },

  activeMode: {
    backgroundColor: "#7C3AED",
  },

  modeText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#7C3AED",
  },

  quizBox: {
    marginTop: 25,
    alignItems: "center",
  },

  quizTitle: {
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 15,
  },

  option: {
    backgroundColor: "#fff",
    width: width - 60,
    padding: 18,
    borderRadius: 18,
    marginBottom: 12,
    alignItems: "center",
  },

  optionText: {
    fontSize: 18,
    fontWeight: "800",
  },

  autoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },

  autoBtn: {
    backgroundColor: "#10B981",
    width: 140,
    paddingVertical: 15,
    borderRadius: 18,
    alignItems: "center",
  },

  autoText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },

  practiceTitle: {
    fontSize: 28,
    fontWeight: "900",
    marginLeft: 20,
    marginTop: 35,
    marginBottom: 20,
  },

  practiceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  practiceCard: {
    width: width / 3.5,
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingVertical: 24,
    paddingHorizontal: 12,
    alignItems: "center",

    shadowColor: "#7C3AED",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    elevation: 5,
  },

  practiceIconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#F5F3FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  practiceText: {
    marginTop: 4,
    textAlign: "center",
    fontWeight: "900",
    fontSize: 15,
    color: "#1F2937",
  },

  practiceSubText: {
    marginTop: 6,
    fontSize: 12,
    color: "#9CA3AF",
    fontWeight: "600",
    textAlign: "center",
  },

  nextBtn: {
    marginHorizontal: 20,
    marginTop: 35,
    borderRadius: 25,
    paddingVertical: 22,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },

  nextText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
  },
}); 