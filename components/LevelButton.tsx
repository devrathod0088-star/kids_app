import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

type LevelStatus = "locked" | "open" | "done";

type Level = {
  id: number;
  status: LevelStatus;
  stars?: number;
};

type Props = {
  level: Level;
  onPress: () => void;
};

export default function LevelButton({ level, onPress }: Props) {
  const isLocked = level.status === "locked";
  const isDone = level.status === "done";

  const renderStars = () => {
    if (isLocked) return "🔒";
    if (isDone) return "⭐⭐⭐";
    return "⭐";
  };

  return (
    <TouchableOpacity
      disabled={isLocked}
      onPress={onPress}
      style={[
        styles.btn,
        isLocked && styles.locked,
        isDone && styles.done,
      ]}
    >
      <Text style={styles.text}>Level {level.id}</Text>

      <View style={styles.row}>
        <Text style={styles.stars}>{renderStars()}</Text>
        <Text style={styles.sub}>{level.status}</Text>
      </View>
    </TouchableOpacity>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  btn: {
    padding: 16,
    borderRadius: 18,
    marginVertical: 10,
    backgroundColor: "#1F2A4A",
    borderWidth: 1,
    borderColor: "#2E3A66",
  },

  locked: {
    opacity: 0.4,
  },

  done: {
    backgroundColor: "#14532D",
    borderColor: "#22C55E",
  },

  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },

  sub: {
    color: "#A5B4FC",
    fontSize: 12,
    marginLeft: 8,
  },

  stars: {
    fontSize: 14,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
});