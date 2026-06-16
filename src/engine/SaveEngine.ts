import AsyncStorage from "@react-native-async-storage/async-storage";

export class SaveEngine {
  async save(key: string, data: any) {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  }

  async load(key: string) {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  async clear() {
    await AsyncStorage.clear();
  }
}

export const saveEngine = new SaveEngine();