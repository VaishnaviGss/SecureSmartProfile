import CryptoJs from 'crypto-js';
const SECRET_KEY = 'my-secret-key';
export const encryptData = async (
  data: string,
): Promise<string | undefined> => {
  try {
    return CryptoJs.AES.encrypt(data, SECRET_KEY).toString();
  } catch (error) {
    console.log('failed to encrypt the data: error : ', error);
  }
};

export const decryptData = async (
  cipher: string,
): Promise<string | undefined> => {
  try {
    const bytes = CryptoJs.AES.decrypt(cipher, SECRET_KEY);
    return bytes.toString(CryptoJs.enc.Utf8);
  } catch (error) {
    console.log('failed to decrypt the data: error : ', error);
  }
};
