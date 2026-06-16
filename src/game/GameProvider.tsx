import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

/* ================= TYPES ================= */

type LevelStatus =
  | "locked"
  | "open"
  | "done";

type Level = {
  id: number;
  status: LevelStatus;
  stars: number;
  world: number;
};

type GameContextType = {
  levels: Level[];
  xp: number;
  coins: number;
  currentWorld: number;
  loading: boolean;

  completeLevel: (
    id: number
  ) => void;

  resetProgress: () => void;

  unlockWorld: (
    world: number
  ) => void;
};

/* ================= CONTEXT ================= */

const GameContext =
  createContext<
    GameContextType | undefined
  >(undefined);

const STORAGE_KEY =
  "GAME_PROGRESS_V2";

/* ================= CREATE LEVELS ================= */

const createLevels = (): Level[] => {
  return Array.from(
    { length: 20 },
    (_, i) => ({
      id: i + 1,

      status:
        i === 0
          ? "open"
          : "locked",

      stars: 0,

      world:
        i < 10 ? 1 : 2,
    })
  );
};

/* ================= PROVIDER ================= */

export const GameProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [levels, setLevels] =
    useState<Level[]>([]);

  const [xp, setXp] =
    useState<number>(0);

  const [coins, setCoins] =
    useState<number>(0);

  const [currentWorld, setCurrentWorld] =
    useState<number>(1);

  const [loading, setLoading] =
    useState(true);

  /* ================= LOAD GAME ================= */

  useEffect(() => {
    const init = async () => {
      try {
        const saved =
          await AsyncStorage.getItem(
            STORAGE_KEY
          );

        if (saved) {
          const data =
            JSON.parse(saved);

          setLevels(
            data.levels ??
              createLevels()
          );

          setXp(data.xp ?? 0);

          setCoins(
            data.coins ?? 0
          );

          setCurrentWorld(
            data.currentWorld ??
              1
          );
        } else {
          setLevels(
            createLevels()
          );

          setXp(0);

          setCoins(100);

          setCurrentWorld(1);
        }
      } catch (e) {
        console.log(
          "Load Error:",
          e
        );

        setLevels(
          createLevels()
        );
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  /* ================= SAVE GAME ================= */

  useEffect(() => {
    if (!levels.length) return;

    AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        levels,
        xp,
        coins,
        currentWorld,
      })
    ).catch((e) =>
      console.log(
        "Save Error:",
        e
      )
    );
  }, [
    levels,
    xp,
    coins,
    currentWorld,
  ]);

  /* ================= COMPLETE LEVEL ================= */

  const completeLevel = (
    id: number
  ) => {
    setLevels((prev) =>
      prev.map((lvl) => {
        /* COMPLETE CURRENT LEVEL */

        if (
          lvl.id === id &&
          lvl.status === "open"
        ) {
          return {
            ...lvl,
            status: "done",
            stars: 3,
          };
        }

        /* UNLOCK NEXT LEVEL */

        if (
          lvl.id === id + 1 &&
          lvl.status === "locked"
        ) {
          return {
            ...lvl,
            status: "open",
          };
        }

        return lvl;
      })
    );

    /* REWARDS */

    setXp((x) => x + 25);

    setCoins((c) => c + 50);

    /* WORLD 2 UNLOCK */

    if (id === 10) {
      unlockWorld(2);
    }
  };

  /* ================= UNLOCK WORLD ================= */

  const unlockWorld = (
    world: number
  ) => {
    setCurrentWorld(world);

    setLevels((prev) =>
      prev.map((lvl) => {
        if (
          lvl.world === world &&
          lvl.id === 11
        ) {
          return {
            ...lvl,
            status: "open",
          };
        }

        return lvl;
      })
    );
  };

  /* ================= RESET ================= */

  const resetProgress =
    async () => {
      try {
        await AsyncStorage.removeItem(
          STORAGE_KEY
        );

        setLevels(
          createLevels()
        );

        setXp(0);

        setCoins(100);

        setCurrentWorld(1);
      } catch (e) {
        console.log(
          "Reset Error:",
          e
        );
      }
    };

  /* ================= PROVIDER ================= */

  return (
    <GameContext.Provider
      value={{
        levels,
        xp,
        coins,
        currentWorld,
        loading,

        completeLevel,

        resetProgress,

        unlockWorld,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useGame = () => {
  const context =
    useContext(GameContext);

  if (!context) { 
    throw new Error(
      "useGame must be used inside GameProvider"
    );
  }

  return context;
};