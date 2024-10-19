export const formatDate = (dateString) => {
  const date = new Date(dateString); // Convert the string to a Date object

  // Helper function to add leading zeros
  const pad = (num) => num.toString().padStart(2, "0");

  // Extract and format the date parts
  const formattedDate = `${pad(date.getDate())}/${pad(
    date.getMonth() + 1
  )}/${date.getFullYear()}`;

  // Extract and format the time parts
  const formattedTime = `${pad(date.getHours())}:${pad(date.getMinutes())}`;

  return `${formattedDate} ${formattedTime}`;
};

import CryptoJS from 'crypto-js';

// Function to encrypt data
export function encrypt(data) {
  try {
    const password = 'edp@$3#drishti';
    const salt = 'dRishtI';

    // Deriving key and IV using PBKDF2
    const keySize = 256 / 32;  // 256-bit key
    const iterations = 128;

    const keyAndIV = CryptoJS.PBKDF2(password, CryptoJS.enc.Utf8.parse(salt), {
      keySize: keySize + (128 / 32), // 256-bit key + 128-bit IV (32 bytes total)
      iterations: iterations,
    });

    const key = CryptoJS.lib.WordArray.create(keyAndIV.words.slice(4, 12)); // AES key (32 bytes)
    const iv = CryptoJS.lib.WordArray.create(keyAndIV.words.slice(0, 4));   // IV (16 bytes)

    // Encrypt the data using AES
    const cipher = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    // Return the encrypted data as a base64 encoded string
    return cipher.toString();
  } catch (error) {
    console.log(`encrypt error: ${error}`);
    return false;
  }
}
