import { useState } from "react";

export default function useXP() {
  const [xp, setXP] = useState(0);

  const addXP = (value: number) => {
    setXP((prev) => prev + value);
  };

  return { xp, addXP };
} 