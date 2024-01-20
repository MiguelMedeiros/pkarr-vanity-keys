import { verify, search } from "./vanity.js";

const args = process.argv.slice(2);
const vanity = args.length > 0 ? args[0] : "133t";
const searchModeInput = args.length > 1 ? args[1] : "start"; // Default to 'start' if not provided

// Validate searchMode
const validSearchModes = ["start", "end", "anywhere"];
const searchMode = validSearchModes.includes(searchModeInput)
  ? searchModeInput
  : "start";

verify(vanity);
search(vanity, searchMode);
