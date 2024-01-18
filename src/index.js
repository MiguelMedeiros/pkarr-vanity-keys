import { verify, search } from "./vanity.js";

const args = process.argv.slice(2);
const vanity = args.length ? args[0] : "133t";

verify(vanity);
search(vanity);
