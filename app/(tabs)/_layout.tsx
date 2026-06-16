import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { GameProvider } from "../../src/game/GameProvider";

export default function TabLayout() {
  return (
    <GameProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#7C3AED",
          tabBarInactiveTintColor: "#94A3B8",
          tabBarStyle: {
            height: 70,
            paddingBottom: 8,
            paddingTop: 8,
            backgroundColor: "#FFFFFF",
            borderTopWidth: 0,
            elevation: 10,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "700",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="explore"
          options={{
            title: "Learn",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="games"
          options={{
            title: "Adventure",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="car-sport" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="parent-login"
          options={{
            title: "Parent",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="shield-checkmark" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </GameProvider>
  );
}