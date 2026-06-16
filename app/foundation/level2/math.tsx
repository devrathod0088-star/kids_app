import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import LearnCard from "./LearnCard";
import TeacherMascot from "../../../components/TeacherMascot";
import { saveProgress, getProgress } from "../../../utils/progress";
import { useRouter } from "expo-router";

export default function Math() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const data = [
    {
      title: "Number One",
      emoji: "🍎",
      word: "One Apple",
      description: "1 means single object",
    },
    {
      title: "Number Two",
      emoji: "🍎🍎",
      word: "Two Apples",
      description: "2 means two objects",
    },
    {
      title: "Number Three",
      emoji: "🍎🍎🍎",
      word: "Three Apples",
      description: "3 means more than two",
    },
  ];

  // LOAD SAVED PROGRESS
  useEffect(() => {
    (async () => {
      const saved = await getProgress();
      if (saved.math !== undefined) {
        setStep(saved.math);
      }
    })();
  }, []);

  // SAVE PROGRESS
  useEffect(() => {
    saveProgress("math", step);
  }, [step]);

  // AUTO NEXT
  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < data.length - 1) {
        setStep(step + 1);
      } else {
        router.push("/foundation/level2/complete");
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <ScrollView style={{ padding: 20 }}>

      {/* TEACHER */}
      <TeacherMascot message="Let’s learn numbers step by step!" />

      <Text style={{ fontSize: 20, fontWeight: "900", marginBottom: 10 }}>
        🧠 Learning Math
      </Text>

      <LearnCard {...data[step]} />

      <Text style={{ textAlign: "center", marginTop: 10, color: "#6B7280" }}>
        Learning automatically... relax & watch 👀
      </Text>

    </ScrollView>
  );
}