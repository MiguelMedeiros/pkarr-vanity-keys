import { search, verify } from "./vanity.js";
import { askVanity, askSearchMode } from "./helper.js";

const start = async () => {
  const vanity = await askVanity();
  const verified = verify(vanity);

  // If vanity string is invalid, restart the program
  if (!verified) {
    start();
    return;
  }

  const mode = await askSearchMode();
  search(vanity, mode);
};

start();
