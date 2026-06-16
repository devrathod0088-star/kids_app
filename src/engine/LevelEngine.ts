export type LevelStatus = "locked" | "open" | "done";

export type Level = {
  id: number;
  xp: number;
  status: LevelStatus;
};

export class LevelEngine {
  private levels: Level[] = [
    { id: 1, xp: 10, status: "done" },
    { id: 2, xp: 20, status: "open" },
    { id: 3, xp: 30, status: "locked" },
    { id: 4, xp: 40, status: "locked" },
    { id: 5, xp: 50, status: "locked" },
  ];

  getLevels() {
    return this.levels;
  }

  getLevel(id: number) {
    return this.levels.find(l => l.id === id);
  }

  completeLevel(id: number) {
    const index = this.levels.findIndex(l => l.id === id);

    if (index === -1) return null;

    this.levels[index].status = "done";

    // unlock next level
    if (this.levels[index + 1]) {
      this.levels[index + 1].status = "open";
    }

    return this.levels[index];
  }
}

export const levelEngine = new LevelEngine();