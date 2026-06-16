

export class RewardEngine {
  private rewards: string[] = [];

  checkReward(levelId: number) {
    if (levelId % 2 === 0) {
      this.rewards.push("🎁 Chest Unlocked!");
    }

    if (levelId === 5) {
      this.rewards.push("🏆 Big Bonus Reward!");
    }
  }

  getRewards() {
    return this.rewards;
  }

  clear() {
    this.rewards = [];
  }
}

export const rewardEngine = new RewardEngine();