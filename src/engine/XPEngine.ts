export class XPEngine {
  private xp = 0;

  addXP(value: number) {
    this.xp += value;
  }

  getXP() {
    return this.xp;
  }

  getLevel() {
    return Math.floor(this.xp / 100) + 1;
  }
}

export const xpEngine = new XPEngine();