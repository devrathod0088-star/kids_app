import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import TeacherMascot from "../../../components/TeacherMascot";
import { useRouter } from "expo-router";

type CardType = {
  id: number;
  value: string;
  matched: boolean;
};

export default function Memory() {
  const router = useRouter();

  const [cards, setCards] = useState<CardType[]>([]);
  const [selected, setSelected] = useState<CardType[]>([]);

  // 🧠 CREATE SIMPLE MEMORY SET
  useEffect(() => {
    const items = ["🍎", "🐶", "🚗", "⭐"];

    const shuffled = [...items, ...items]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        id: index,
        value: item,
        matched: false,
      }));

    setCards(shuffled);
  }, []);

  // 🎯 HANDLE CARD PRESS
  const onPressCard = (card: CardType) => {
    if (card.matched || selected.length === 2) return;

    const newSelected = [...selected, card];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      checkMatch(newSelected);
    }
  };

  // 🔍 CHECK MATCH
  const checkMatch = (pair: CardType[]) => {
    setTimeout(() => {
      const [a, b] = pair;

      if (a.value === b.value && a.id !== b.id) {
        setCards(prev =>
          prev.map(c =>
            c.value === a.value ? { ...c, matched: true } : c
          )
        );
        Alert.alert("🎉 Great!", "You found a match!");
      }

      setSelected([]);
    }, 700);
  };

  // 🏆 CHECK WIN
  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.matched)) {
      Alert.alert("🏆 Amazing!", "You completed Memory Game!");
      setTimeout(() => {
        router.push("/foundation/level2/complete");
      }, 1000);
    }
  }, [cards]);

  return (
    <View style={styles.container}>

      {/* 👩‍🏫 TEACHER */}
      <TeacherMascot message="Let’s find matching pairs! Use your memory 🧠✨" />

      <Text style={styles.title}>🧠 Memory Learning Game</Text>

      <View style={styles.grid}>
        {cards.map(card => (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.card,
              card.matched && styles.matchedCard,
            ]}
            onPress={() => onPressCard(card)}
          >
            <Text style={styles.text}>
              {selected.includes(card) || card.matched ? card.value : "❓"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },

  card: {
    width: 70,
    height: 70,
    backgroundColor: "#4F46E5",
    margin: 8,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  matchedCard: {
    backgroundColor: "#22C55E",
  },

  text: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "900",
  },
});