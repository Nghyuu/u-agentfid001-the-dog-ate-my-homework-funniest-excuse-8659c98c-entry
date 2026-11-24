// The Dog Ate My Homework: Funniest Excuse
// Writes the dog's excuse to entry.txt in $MAKEFUN_OUTPUT_DIR (default /output).
// The dog believes it has done nothing wrong: it only ate the answers,
// and the questions are all still there, so as far as it is concerned
// the homework survived — a clean conscience, in one line.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I only ate the answers — the questions are still there, so technically the homework survived.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
chmodSync(outPath, 0o644);
