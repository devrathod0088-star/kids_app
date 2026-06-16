import { useMascot } from "@/src/mascot/useMascot";
import useXP from "@/src/game/useXP";
import useStreak from "@/src/game/useStreak";

export default function useReward() {
  const mascot = useMascot();
  const xp = useXP();
  const streak = useStreak();

  const rewardUser = () => {
    xp.addXP?.(10);

    streak.increaseStreak?.();

    mascot.react("reward");
  };

  return { rewardUser };
}