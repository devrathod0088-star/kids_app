import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "KIDS_PROGRESS";

export const saveProgress = async (level: string, step: number) => {
  const data = await getProgress();
  data[level] = step;
  await AsyncStorage.setItem(KEY, JSON.stringify(data));
};

export const getProgress = async () => {
  const res = await AsyncStorage.getItem(KEY);
  return res ? JSON.parse(res) : {};
};