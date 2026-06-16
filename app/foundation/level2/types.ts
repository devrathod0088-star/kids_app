import { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";

export type IconName = ComponentProps<typeof Ionicons>["name"];

export type LessonItem = {
  title: string;
  subtitle: string;
  icon: IconName;
  colors: [string, string];
  route: "/foundation/level2/math" |
         "/foundation/level2/grammar" |
         "/foundation/level2/science" |
         "/foundation/level2/puzzles" |
         "/foundation/level2/memory";
};