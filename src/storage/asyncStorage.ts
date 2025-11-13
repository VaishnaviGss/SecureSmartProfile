import { decryptData, encryptData } from '../utils/encryption';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const saveEncryptedItem = async (key: string, value: string) => {
  try {
    const encrypted = await encryptData(value);
    if (!encrypted) {
      console.log('Failed to encrypt data');
      return;
    }
    await AsyncStorage.setItem(key, encrypted);
  } catch (error) {
    console.log('Failed to save the data in local storage: ' + error);
  }
};

export const getDecryptedItem = async (
  key: string,
): Promise<string | undefined> => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (!data) {
      console.log(
        'there is no data stored in the local storage with the key: ' + key,
      );
    } else {
      const decrypted = decryptData(data);
      return decrypted;
    }
  } catch (error) {
    console.log('failed get the item with the key : ' + key);
    console.log('Error is :' + error);
  }
};
