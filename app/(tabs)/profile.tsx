import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import {
  Ionicons,
} from "@expo/vector-icons";

import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function ProfileScreen() {
  const router = useRouter();

  const profiles = [
    {
      name: "Riya",
      age: 6,
      stars: 1200,
      avatar:
        "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      color: "#EDE9FE",
    },
    {
      name: "Aarav",
      age: 9,
      stars: 850,
      avatar:
        "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
      color: "#DBEAFE",
    },
    {
      name: "Myra",
      age: 12,
      stars: 950,
      avatar:
        "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
      color: "#FFE4E6",
    },
  ];

  return (
    <LinearGradient
      colors={["#EEF2FF", "#F8FAFC", "#FFFFFF"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 140,
          }}
        >
          {/* HEADER */}

          <View style={styles.header}>
            <View>
              <Text style={styles.title}>
                Family Profiles 👨‍👩‍👧
              </Text>

              <Text style={styles.subtitle}>
                Choose who is learning today
              </Text>
            </View>

            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
              }}
              style={styles.mascot}
            />
          </View>

          {/* HERO CARD */}

          <LinearGradient
            colors={["#6C4DFF", "#8B5CF6"]}
            style={styles.heroCard}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.heroSmall}>
                Welcome Back 👋
              </Text>

              <Text style={styles.heroTitle}>
                KidVerse Family
              </Text>

              <Text style={styles.heroSub}>
                Safe learning adventures
                for every child.
              </Text>
            </View>

            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
              }}
              style={styles.heroImage}
            />
          </LinearGradient>

          {/* STATS */}

          <View style={styles.statsRow}>
            <View style={styles.statsCard}>
              <Text style={styles.statsEmoji}>
                🔥
              </Text>

              <Text style={styles.statsNumber}>
                18
              </Text>

              <Text style={styles.statsLabel}>
                Day Streak
              </Text>
            </View>

            <View style={styles.statsCard}>
              <Text style={styles.statsEmoji}>
                🏆
              </Text>

              <Text style={styles.statsNumber}>
                4250
              </Text>

              <Text style={styles.statsLabel}>
                Total XP
              </Text>
            </View>
          </View>

          {/* SECTION */}

          <Text style={styles.sectionTitle}>
            Kids Profiles
          </Text>

          {/* PROFILES */}

          {profiles.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.profileCard,
                {
                  backgroundColor:
                    item.color,
                },
              ]}
              onPress={() =>
                router.push("/(tabs)/home")
              }
            >
              <Image
                source={{
                  uri: item.avatar,
                }}
                style={styles.avatar}
              />

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>
                  {item.name}
                </Text>

                <Text style={styles.age}>
                  Age {item.age}
                </Text>

                <Text style={styles.stars}>
                  ⭐ {item.stars} XP
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={22}
                color="#0F172A"
              />
            </TouchableOpacity>
          ))}

          {/* ADD PROFILE */}

          <TouchableOpacity
            style={styles.addProfile}
            onPress={() =>
              router.push(
                "/(tabs)/parent-login"
              )
            }
          >
            <Ionicons
              name="add-circle"
              size={28}
              color="#6C4DFF"
            />

            <Text style={styles.addProfileText}>
              Add New Child Profile
            </Text>

            <Text style={styles.addProfileSub}>
              Parent verification required
            </Text>
          </TouchableOpacity>

          {/* PARENT CONTROLS */}

          <Text style={styles.sectionTitle}>
            Parent Controls
          </Text>

          <View style={styles.parentGrid}>
            <TouchableOpacity
              style={[
                styles.parentCard,
                {
                  backgroundColor:
                    "#6C4DFF",
                },
              ]}
            >
              <Ionicons
                name="time-outline"
                size={30}
                color="#fff"
              />

              <Text style={styles.parentText}>
                Screen Time
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.parentCard,
                {
                  backgroundColor:
                    "#22C55E",
                },
              ]}
            >
              <Ionicons
                name="analytics"
                size={30}
                color="#fff"
              />

              <Text style={styles.parentText}>
                Progress
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.parentCard,
                {
                  backgroundColor:
                    "#F97316",
                },
              ]}
            >
              <Ionicons
                name="shield-checkmark"
                size={30}
                color="#fff"
              />

              <Text style={styles.parentText}>
                Safety
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* BOTTOM NAV */}

        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() =>
              router.push("/(tabs)/home")
            }
          >
            <Ionicons
              name="home-outline"
              size={24}
              color="#94A3B8"
            />

            <Text style={styles.navText}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() =>
              router.push("/learn")
            }
          >
            <Ionicons
              name="book-outline"
              size={24}
              color="#94A3B8"
            />

            <Text style={styles.navText}>
              Learn
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
          >
            <Ionicons
              name="person"
              size={24}
              color="#6C4DFF"
            />

            <Text style={styles.activeNav}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0F172A",
  },

  subtitle: {
    marginTop: 6,
    color: "#64748B",
    fontSize: 15,
  },

  mascot: {
    width: 80,
    height: 80,
  },

  heroCard: {
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 30,
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
  },

  heroSmall: {
    color: "#E9D5FF",
    fontWeight: "700",
  },

  heroTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 8,
  },

  heroSub: {
    color: "#E9D5FF",
    marginTop: 10,
    lineHeight: 22,
  },

  heroImage: {
    width: 120,
    height: 120,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 24,
  },

  statsCard: {
    width: width * 0.42,
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 22,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  statsEmoji: {
    fontSize: 34,
  },

  statsNumber: {
    fontSize: 24,
    fontWeight: "900",
    marginTop: 10,
  },

  statsLabel: {
    marginTop: 6,
    color: "#64748B",
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 18,
    color: "#0F172A",
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 24,
    marginBottom: 16,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 16,
  },

  name: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
  },

  age: {
    marginTop: 4,
    color: "#64748B",
  },

  stars: {
    marginTop: 6,
    fontWeight: "700",
  },

  addProfile: {
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#A78BFA",
    borderRadius: 26,
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  addProfileText: {
    color: "#6C4DFF",
    fontWeight: "900",
    fontSize: 17,
    marginTop: 10,
  },

  addProfileSub: {
    color: "#64748B",
    marginTop: 6,
  },

  parentGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 12,
  },

  parentCard: {
    width: width * 0.27,
    height: width * 0.27,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  parentText: {
    color: "#fff",
    fontWeight: "800",
    marginTop: 10,
    fontSize: 12,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 10,
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    color: "#94A3B8",
    marginTop: 4,
    fontSize: 12,
  },

  activeNav: {
    color: "#6C4DFF",
    marginTop: 4,
    fontWeight: "800",
    fontSize: 12,
  },
});