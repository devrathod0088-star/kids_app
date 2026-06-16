import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Mascot() {
  return (
    <Image
      source={{
        uri: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
      }}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    position: "absolute",
    bottom: 120,
    right: 20,
  },
});

