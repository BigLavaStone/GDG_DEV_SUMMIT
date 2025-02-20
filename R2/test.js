
function encryptAES256(data, password) {
  const key = crypto.createHash('sha256').update(password).digest(); // Derive key using SHA-256
  const iv = crypto.randomBytes(16); // Generate a random initialization vector (IV)

  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  // Return the encrypted data and IV as a string
  return { encryptedData: encrypted, iv: iv.toString('hex') };
}