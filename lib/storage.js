// lib/storage.js
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Guarda una cadena de texto simple en el almacenamiento.
 */
export const saveString = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error("Error saving string:", error);
    return false;
  }
};

/**
 * Guarda un objeto o arreglo convirtiéndolo a JSON.
 */
export const save = async (key, value) =>
  saveString(key, JSON.stringify(value));

/**
 * Obtiene y parsea un elemento del almacenamiento.
 */
export const get = async (key) => {
  try {
    const itemString = await AsyncStorage.getItem(key);
    if (itemString) {
      return JSON.parse(itemString);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting item:", error);
    return null;
  }
};

export default {
  saveString,
  save,
  get,
};
