export type Level2Type =
  | "grammar"
  | "math"
  | "memory"
  | "puzzles"
  | "science";

export interface Level2 {
  id: number;
  title: string;
  type: Level2Type;
  xpReward: number;
  status: "locked" | "open" | "done";
}

export const Level2Data: Level2[] = [
  {
    id: 1,
    title: "Grammar Basics",
    type: "grammar",
    xpReward: 20,
    status: "open",
  },
  {
    id: 2,
    title: "Fun Math",
    type: "math",
    xpReward: 25,
    status: "locked",
  },
  {
    id: 3,
    title: "Memory Boost",
    type: "memory",
    xpReward: 30,
    status: "locked",
  },
  {
    id: 4,
    title: "Puzzle World",
    type: "puzzles",
    xpReward: 35,
    status: "locked",
  },
  {
    id: 5,
    title: "Mini Science",
    type: "science",
    xpReward: 40,
    status: "locked",
  },
];