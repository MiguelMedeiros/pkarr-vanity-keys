import { select, input } from "@inquirer/prompts";

export const clear = () => {
  console.log("\x1B[2J\x1B[0f");
};

export const askVanity = async () => {
  return await input({ message: "Enter your vanity string" });
};

export const askSearchMode = async () => {
  return await select({
    message: "Select search mode (default: start):\n",
    choices: [
      {
        name: "start",
        value: "start",
        description:
          "\nPublic Key starts with vanity string\n[VANITYxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx]",
      },
      {
        name: "end",
        value: "end",
        description:
          "\nPublic Key ends with vanity string\nbut exclude the last character\n[xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxVANITYx]",
      },
      {
        name: "anywhere",
        value: "anywhere",
        description:
          "\nPublic Key contains vanity string\n[xxxxxxxxxxxxxxxxxxxVANITYxxxxxxxxxxxxxxxxxxxxxxxxxx]",
      },
    ],
  });
};
