import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useXP from "../../../src/game/useXP";

const numbers = [1, 2, 3, 4, 5];

const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;

export default function Level2() {
  const router = useRouter();
  const { addXP } = useXP();

  const [target] = useState(getRandomNumber());
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState<number | null>(null);

  const handlePress = (num: number) => {
    setSelected(num);

    if (num === target) {
      setMessage("🎉 Great Job! You counted correctly!");
      addXP(25);

      setTimeout(() => {
        router.back();
      }, 1200);
    } else {
      setMessage("😊 Try again! Count carefully!");
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.level}>LEVEL 2</Text>
      <Text style={styles.title}>🔢 Count & Tap</Text>

      {/* VISUAL OBJECTS */}
      <View style={styles.objectBox}>
        <Text style={styles.objects}>
          {"🍎 ".repeat(target)}
        </Text>
      </View>

      <Text style={styles.question}>
        How many apples do you see?
      </Text>

      {/* OPTIONS */}
      <View style={styles.grid}>
        {numbers.map((n) => (
          <TouchableOpacity
            key={n}
            style={[
              styles.button,
              selected === n && styles.selected
            ]}
            onPress={() => handlePress(n)}
          >
            <Text style={styles.buttonText}>{n}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.message}>{message}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  level: {
    fontSize: 16,
    color: "#777",
    marginBottom: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FB8C00",
    marginBottom: 20,
  },

  objectBox: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
  },

  objects: {
    fontSize: 40,
  },

  question: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#444",
  },

  grid: {
    flexDirection: "row",
    gap: 10,
  },

  button: {
    backgroundColor: "#FFB300",
    padding: 18,
    borderRadius: 15,
  },

  selected: {
    backgroundColor: "#66BB6A",
    transform: [{ scale: 1.1 }],
  },

  buttonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },

  message: {
    marginTop: 25,
    fontSize: 18,
    textAlign: "center",
  },
});
