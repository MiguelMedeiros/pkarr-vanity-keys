import { Pkarr, z32 } from "pkarr";
import { clear } from "./helper.js";

export const ALPHABET = "ybndrfg8ejkmcpqxot1uwisza345h769";

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
  if (vanity.length === 0) {
    console.log(`Empty vanity string`);

    process.exit(1);
  }

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

export const search = (vanity, searchMode = "start") => {
  let count = 0;
  const startTimestamp = new Date().toISOString();

  clear();

  while (true) {
    const currentTimestamp = new Date().toISOString();
    const key = generateNewKeyPair();
    const pk = getPublicKey(key);
    const sk = getSecretKey(key);
    count++;

    clear();

    console.log(
      `
pk vanity search: ${vanity}
search mode: ${searchMode}
count:  ${count}

started at: ${startTimestamp}
current at: ${currentTimestamp}

public key: ${pk}
secret key: ${sk}
    `
    );

    let found = false;
    switch (searchMode) {
      case "start":
        found = pk.startsWith(vanity);
        break;
      case "end":
        // endswith but exclude the last character
        found = pk.slice(0, -1).endsWith(vanity);
        break;
      case "anywhere":
        found = pk.includes(vanity);
        break;
      default:
        throw new Error(`Invalid search mode: ${searchMode}`);
    }

    if (found) {
      console.log("Vanity string found!");

      return {
        message: "Vanity string found!",
        vanity,
        searchMode,
        count,
        startTimestamp,
        currentTimestamp,
        publicKey: pk,
        secretKey: sk,
      };
    }
  }
};
