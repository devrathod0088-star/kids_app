import * as Speech from "expo-speech";

export const speak = (text: string) => {
  Speech.stop();

  Speech.speak(text, {
    language: "en-US",
    pitch: 1.4,
    rate: 0.85,
  });
};

export const stopSpeak = () => {
  Speech.stop();
};