import { select, input } from "@inquirer/prompts";

import { verify, search } from "./vanity.js";

const vanity = await input({ message: "Enter your vanity string" });

verify(vanity);

const searchMode = await select({
  message: "Select a package manager",
  choices: [
    {
      name: "start",
      value: "start",
    },
    {
      name: "end",
      value: "end",
    },
    {
      name: "anywhere",
      value: "anywhere",
    },
  ],
});

search(vanity, searchMode);
