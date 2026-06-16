import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export class WorldEngine {
  getPosition(index: number) {
    return {
      x: index % 2 === 0 ? width * 0.55 : width * 0.25,
      y: 420 - index * 120,
    };
  }
}

export const worldEngine = new WorldEngine();