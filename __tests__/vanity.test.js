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

  it("should log error and call process.exit(1) for invalid characters", () => {
    const vanity = "miguel"; // assuming 'miguel' contains invalid characters for your case
    const logSpy = jest.spyOn(console, "log");
    const exitSpy = jest.spyOn(process, "exit").mockImplementation(() => {});

    verify(vanity);

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("Invalid character")
    );
    expect(exitSpy).toHaveBeenCalledWith(1);

    // Restore the original implementations so other tests are not affected
    logSpy.mockRestore();
    exitSpy.mockRestore();
  });
});
