import crypto from 'crypto'
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
const ans=decryptSymmetric('Am4+Kz1+tsKCUzTXgFUH7iCR9TcXd2I7+DOm7NzM8QI=','gRBWAn68PGZexkPFHLD2tlXelQDo5muOUDzI2Ka3','X/0wymTVAu216e5j','OCn0P5n64BJXkQ1c/BBnAg==')
console.log(ans);
