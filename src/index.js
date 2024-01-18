import {
  generateNewKeyPair,
  getPublicKey,
  getSecretKey,
  verify,
} from "./vanity.js";

const args = process.argv.slice(2);
const vanity = args.length ? args[0] : "133t";
const startTimestamp = new Date().toISOString();

let count = 0;

verify(vanity);

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
