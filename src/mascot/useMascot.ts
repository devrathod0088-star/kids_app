import { useState } from "react";

export type MascotEmotion =
  | "idle"
  | "happy"
  | "excited"
  | "sad"
  | "thinking"
  | "celebrating";

export type MascotAction =
  | "correct_answer"
  | "wrong_answer"
  | "start_lesson"
  | "finish_lesson"
  | "reward";

export function useMascot() {
  const [emotion, setEmotion] = useState<MascotEmotion>("idle");

  const react = (action: MascotAction) => {
    let next: MascotEmotion = "idle";

    switch (action) {
      case "correct_answer":
        next = "happy";
        break;

      case "wrong_answer":
        next = "thinking";
        break;

      case "start_lesson":
        next = "excited";
        break;

      case "finish_lesson":
        next = "celebrating";
        break;

      case "reward":
        next = "happy";
        break;

      default:
        next = "idle";
    }

    setEmotion(next);

    setTimeout(() => {
      setEmotion("idle");
    }, 2000);
  };

  return {
    emotion,
    react,
  };
}