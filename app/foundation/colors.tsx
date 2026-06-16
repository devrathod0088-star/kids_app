import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";

import { useRouter } from "expo-router";

import Animated, {
  FadeInDown,
  BounceIn,
} from "react-native-reanimated";

import * as Speech from "expo-speech";

import { colors } from "../../data/Level1/colors";

const { width } = Dimensions.get("window");

export default function ColorsScreen() {
  const router = useRouter();

  const [playing, setPlaying] =
    useState(false);

  // SPEAK SINGLE COLOR
  const speakColor = (
    color: string,
    object: string
  ) => {
    Speech.speak(
      `${color}. ${object}`,
      {
        language: "en-US",
        pitch: 1.2,
        rate: 0.8,
      }
    );
  };

  // START AUTO LEARNING
  const startLearning = () => {
    setPlaying(true);

    // stop previous speech
    Speech.stop();

    colors.forEach((item, index) => {
      setTimeout(() => {
        Speech.speak(
          `${item.color}. ${item.object}`,
          {
            language: "en-US",
            pitch: 1.2,
            rate: 0.8,
          }
        );

        // stop after last color
        if (
          index === colors.length - 1
        ) {
          setTimeout(() => {
            setPlaying(false);
          }, 3000);
        }
      }, index * 3000);
    });
  };

  // STOP LEARNING
  const stopLearning = () => {
    Speech.stop();
    setPlaying(false);
  };

  return (
    <LinearGradient
      colors={["#EEF2FF", "#FFFFFF"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        {/* HEADER */}

        <Animated.View
          entering={FadeInDown.duration(600)}
          style={styles.header}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color="#111827"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Learn Colors 🎨
          </Text>

          <View style={{ width: 40 }} />
        </Animated.View>

        {/* TOP CARD */}

        <Animated.View
          entering={BounceIn.duration(1000)}
          style={styles.topCard}
        >
          <Text style={styles.topEmoji}>
            🌈
          </Text>

          <Text style={styles.topTitle}>
            Fun With Colors
          </Text>

          <Text style={styles.topSub}>
            Tap and learn amazing colors
          </Text>

          {/* BUTTONS */}

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.startButton}
              onPress={startLearning}
            >
              <Ionicons
                name="play"
                size={20}
                color="#fff"
              />

              <Text style={styles.buttonText}>
                Start
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.stopButton}
              onPress={stopLearning}
            >
              <Ionicons
                name="stop"
                size={20}
                color="#fff"
              />

              <Text style={styles.buttonText}>
                Stop
              </Text>
            </TouchableOpacity>
          </View>

          {playing && (
            <Text style={styles.playingText}>
              🔊 Speaking Colors...
            </Text>
          )}
        </Animated.View>

        {/* COLOR LIST */}

        <FlatList
          data={colors}
          keyExtractor={(item) =>
            item.color
          }
          showsVerticalScrollIndicator={
            false
          }
          contentContainerStyle={{
            paddingBottom: 40,
            paddingTop: 10,
          }}
          renderItem={({
            item,
            index,
          }) => (
            <Animated.View
              entering={FadeInDown.delay(
                index * 100
              )}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() =>
                  speakColor(
                    item.color,
                    item.object
                  )
                }
                style={[
                  styles.card,
                  {
                    backgroundColor:
                      item.hex,
                  },
                ]}
              >
                <View
                  style={styles.cardLeft}
                >
                  <Text
                    style={styles.emoji}
                  >
                    {item.emoji}
                  </Text>

                  <View>
                    <Text
                      style={
                        styles.colorName
                      }
                    >
                      {item.color}
                    </Text>

                    <Text
                      style={
                        styles.objectText
                      }
                    >
                      {item.object}
                    </Text>
                  </View>
                </View>

                <Ionicons
                  name="volume-high"
                  size={34}
                  color="#fff"
                />
              </TouchableOpacity>
            </Animated.View>
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:
      "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "900",
    color: "#111827",
  },

  topCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 30,
    paddingVertical: 28,
    alignItems: "center",
    backgroundColor: "#6C4DFF",
  },

  topEmoji: {
    fontSize: 60,
  },

  topTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 10,
  },

  topSub: {
    color: "#E9D5FF",
    fontSize: 16,
    marginTop: 8,
    fontWeight: "600",
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
    gap: 14,
  },

  startButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#22C55E",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 20,
  },

  stopButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EF4444",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "800",
    marginLeft: 8,
    fontSize: 16,
  },

  playingText: {
    color: "#fff",
    marginTop: 16,
    fontWeight: "700",
    fontSize: 16,
  },

  card: {
    marginHorizontal: 20,
    marginBottom: 18,
    borderRadius: 28,
    paddingVertical: 24,
    paddingHorizontal: 22,

    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
  },

  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  emoji: {
    fontSize: 48,
    marginRight: 18,
  },

  colorName: {
    fontSize: 28,
    fontWeight: "900",
    color: "#fff",
  },

  objectText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    marginTop: 6,
  },
});