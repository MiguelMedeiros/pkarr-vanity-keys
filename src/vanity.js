import { Pkarr, z32 } from "pkarr";

const ALPHABET = "ybndrfg8ejkmcpqxot1uwisza345h769";

export const generateNewKeyPair = () => {
  const seed = Pkarr.generateSeed();
  return Pkarr.generateKeyPair(Buffer.from(seed, "hex"));
};

export const getPublicKey = (key) => {
  return z32.encode(key.publicKey);
};

export const getSecretKey = (key) => {
  return z32.encode(key.secretKey);
};

export const verify = (vanity) => {
  for (let char of vanity.split("")) {
    if (!ALPHABET.includes(char)) {
      console.log(
        `
Invalid character: ${char}

Valid characters are: ${ALPHABET}
    `
      );

      process.exit(1);
    }
  }
};
