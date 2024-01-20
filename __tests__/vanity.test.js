import {
  generateNewKeyPair,
  getPublicKey,
  getSecretKey,
  verify,
} from "../src/vanity.js";
import jest from "jest-mock";

describe("vanity functions", () => {
  it("should return a keypair", () => {
    const keypair = generateNewKeyPair();
    expect(keypair).toHaveProperty("publicKey");
    expect(keypair).toHaveProperty("secretKey");
    expect(keypair.publicKey).toHaveLength(32);
    expect(keypair.secretKey).toHaveLength(64);
  });

  it("should get a public key", () => {
    const keypair = generateNewKeyPair();
    const publicKey = getPublicKey(keypair);
    expect(publicKey).toHaveLength(52);
  });

  it("should get a secret key", () => {
    const keypair = generateNewKeyPair();
    const secretKey = getSecretKey(keypair);
    expect(secretKey).toHaveLength(103);
  });

  it("should not throw error for valid characters", () => {
    const vanity = "ybndrfg8ejkmcpqxot1uwisza345h769";
    expect(() => verify(vanity)).not.toThrow();
  });
});
