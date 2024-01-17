import { Pkarr, z32 } from "pkarr";

const generateNewKeyPair = () => {
  const seed = Pkarr.generateSeed();
  return Pkarr.generateKeyPair(Buffer.from(seed, "hex"));
};

const getPublicKey = (key) => {
  return z32.encode(key.publicKey);
};

const getSecretKey = (key) => {
  return z32.encode(key.secretKey);
};

const args = process.argv.slice(2);
const vanity = args.length ? args : "l33t";
const startTimestamp = new Date().toISOString();
let count = 0;

while (true) {
  const currentTimestamp = new Date().toISOString();
  const key = generateNewKeyPair();
  const pk = getPublicKey(key);
  const sk = getSecretKey(key);
  count++;

  console.log(
    `
pk vanity search: ${vanity}
count:  ${count}

started at: ${startTimestamp}
current at: ${currentTimestamp}

public key: ${pk}
secret key: ${sk}
`
  );

  if (pk.startsWith(vanity)) {
    break;
  }
}
