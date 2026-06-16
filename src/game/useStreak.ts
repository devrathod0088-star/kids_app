import { useState } from "react";

export default function useStreak() {
  const [streak, setStreak] = useState(1);

  const increaseStreak = () => {
    setStreak(prev => prev + 1);
  };

  return {
    streak,
    increaseStreak,
  };
}