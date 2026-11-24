// Make the AI Judge Laugh: Developer Excuses — make.fun entry.
// Writes one funny single-line excuse a developer gives when code breaks
// in production (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Prod didn't break — it finally read my TODO that said 'fix before release' and took it as a roadmap.";

// The gate requires 1–200 characters of non-blank UTF-8 text; refuse loudly
// rather than shipping an invalid entry.
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${TEXT.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
