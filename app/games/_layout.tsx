import React, { useEffect, useState } from "react";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

import "react-native-reanimated";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { GameProvider } from "../../src/game/GameProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [appReady, setAppReady] = useState(false);

  const [fontsLoaded] = useFonts({
    ...Ionicons.font,
  });

  useEffect(() => {
    const prepare = async () => {
      try {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
          setAppReady(true);
        }
      } catch (e) {
        console.warn(e);
        setAppReady(true);
      }
    };

    prepare();
  }, [fontsLoaded]);

  if (!appReady) return null;

  return (
    <GameProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <StatusBar style="auto" />

        {/* ✅ CLEAN STACK (IMPORTANT FIX) */}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>

      </ThemeProvider>
    </GameProvider>
  );
}