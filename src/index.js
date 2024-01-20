import { select, input } from "@inquirer/prompts";

import { verify, search } from "./vanity.js";
import { clear } from "./helper.js";

clear();

const vanity = await input({ message: "Enter your vanity string" });

console.log("vanity", vanity);

verify(vanity);

const searchMode = await select({
  message: "Select a package manager:\n",
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

search(vanity, searchMode);
