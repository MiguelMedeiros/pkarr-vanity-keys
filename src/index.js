import { search, verify } from "./vanity.js";
import { askVanity, searchMode } from "./helper.js";

const start = async () => {
  const vanity = await askVanity();
  const verified = verify(vanity);

  // If vanity string is invalid, restart the program
  if (!verified) {
    start();
    return;
  }

  const mode = await searchMode();
  search(vanity, mode);
};

start();
