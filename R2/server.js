import e from 'express';
import axios from 'axios';
import cors from 'cors';  
import crypto from 'crypto';

const app = e();
app.use(cors());

// Encrypt function
const encryptSymmetric = (key, plaintext) => {
  const iv = crypto.randomBytes(12);  // Initialization Vector (12 bytes for AES-GCM)
  const cipher = crypto.createCipheriv(
    "aes-256-gcm", 
    Buffer.from(key, 'base64'), 
    iv
  );
  
  let ciphertext = cipher.update(plaintext, 'utf8', 'base64');
  ciphertext += cipher.final('base64');
  const tag = cipher.getAuthTag();  // Authentication tag

  return { ciphertext, tag: tag.toString('base64'), iv: iv.toString('base64') };
};

// Decryption method (will be shared with participants)
const decryptSymmetric = (key, ciphertext, iv, tag) => {
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm", 
    Buffer.from(key, 'base64'),
    Buffer.from(iv, 'base64')
  );

  decipher.setAuthTag(Buffer.from(tag, 'base64'));

  let plaintext = decipher.update(ciphertext, 'base64', 'utf8');
  plaintext += decipher.final('utf8');

  return plaintext;
}

const port = 3000;
app.get('/', async (req, res) => {
  try {
    // Simulating getting a message (replace with actual API call as needed)
    const response = await axios.get('https://mocki.io/v1/22de06f9-5a6a-47e9-9c18-216253b9f310');
    console.log(response.data.msg);

    // Generate a random encryption key
    const key = crypto.randomBytes(32).toString('base64'); // Random key generation
    const { ciphertext, tag, iv } = encryptSymmetric(key, response.data.msg);

    // Sending the encrypted data (including IV, ciphertext, and tag) to the participant
    res.json({
      data: {
        ciphertext,
        tag,
        iv,  // IV is included in the response now
        key,  // Optionally provide the key (if you want the participant to decrypt directly)
        message: 'You need to decrypt the message using the AES-256-GCM decryption method below.'
      }
    });  
  } catch (error) {
    console.error('Error occurred while fetching data:', error.message);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
