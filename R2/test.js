import crypto from 'crypto'
function decryptAESGCM(ciphertext, key, iv, tag) {
  try {
    // Decode the inputs from base64
    const decipherKey = Buffer.from(key, 'base64');
    const decipherIv = Buffer.from(iv, 'base64');
    const decipherTag = Buffer.from(tag, 'base64');
    const decipheredCiphertext = Buffer.from(ciphertext, 'base64');

    // Create the AES-GCM decipher object
    const decipher = crypto.createDecipheriv('aes-256-gcm', decipherKey, decipherIv);

    // Set the authentication tag (needed for AES-GCM)
    decipher.setAuthTag(decipherTag);

    // Decrypt the ciphertext
    let decrypted = decipher.update(decipheredCiphertext, undefined, 'utf8');
    decrypted += decipher.final('utf8'); // Finalize the decryption process

    return decrypted; // Return the decrypted plaintext
  } catch (error) {
    console.error('Decryption failed:', error);
    return null; // In case of error
  }
}
