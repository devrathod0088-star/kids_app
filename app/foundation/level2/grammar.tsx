import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import LearnCard from "./LearnCard";
import { useRouter } from "expo-router";

export default function Grammar() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const data = [
    {
      title: "Word Learning",
      emoji: "📖",
      word: "Cat",
      description: "A cat is a small animal that meows.",
    },
    {
      title: "Sentence Learning",
      emoji: "📝",
      word: "The cat is sleeping",
      description: "A sentence tells us something clearly.",
    },
    {
      title: "Action Words",
      emoji: "🏃",
      word: "Run, Jump, Eat",
      description: "Action words tell what someone is doing.",
    },
    {
      title: "Opposites",
      emoji: "🔁",
      word: "Big / Small",
      description: "Opposites are words with different meanings.",
    },
  ];

  return (
    <ScrollView style={{ padding: 20 }}>

      {/* TITLE */}
      <Text style={{ fontSize: 22, fontWeight: "900", marginBottom: 10 }}>
        📘 Grammar Learning
      </Text>

      {/* TEACHING TEXT */}
      <Text style={{ color: "#6B7280", marginBottom: 10 }}>
        Let’s learn English step by step with examples 👩‍🏫
      </Text>

      {/* LEARN CARD */}
      <LearnCard {...data[step]} />

      {/* NEXT BUTTON */}
      <View style={{ marginTop: 10 }}>

        {step < data.length - 1 ? (
          <TouchableOpacity
            onPress={() => setStep(step + 1)}
            style={{
              backgroundColor: "#4F46E5",
              padding: 14,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "900" }}>
              Next ▶
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => router.push("/foundation/level2/complete")}
            style={{
              backgroundColor: "#22C55E",
              padding: 14,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "900" }}>
              Finish 🎉
            </Text>
          </TouchableOpacity>
        )}

      </View>

    </ScrollView>
  );
}