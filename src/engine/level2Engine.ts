// src/engine/level2Engine.ts

export type Level2Module =
  | "math"
  | "grammar"
  | "science"
  | "memory"
  | "puzzles";

export type Level2Status = "locked" | "open" | "done";

export type Level2Level = {
  id: number;
  module: Level2Module;
  title: string;
  status: Level2Status;
  score: number;
};

export const createLevel2 = (): Level2Level[] => {
  return [
    {
      id: 1,
      module: "math",
      title: "Math Adventure",
      status: "open",
      score: 0,
    },
    {
      id: 2,
      module: "grammar",
      title: "Grammar Quest",
      status: "locked",
      score: 0,
    },
    {
      id: 3,
      module: "science",
      title: "Science Lab",
      status: "locked",
      score: 0,
    },
    {
      id: 4,
      module: "memory",
      title: "Memory Boost",
      status: "locked",
      score: 0,
    },
    {
      id: 5,
      module: "puzzles",
      title: "Puzzle World",
      status: "locked",
      score: 0,
    },
  ];
};

/* unlock next level */
export const unlockNextLevel = (
  levels: Level2Level[],
  currentId: number
) => {
  return levels.map((lvl) => {
    if (lvl.id === currentId) {
      return { ...lvl, status: "done" };
    }

    if (lvl.id === currentId + 1) {
      return { ...lvl, status: "open" };
    }

    return lvl;
  });
};