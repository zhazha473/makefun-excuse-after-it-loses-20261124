// make.fun entry: "The loss is reproducible".
//
// Writes a single one-line excuse — the excuse an AI agent gives its
// human after losing a bounty — to /output/entry.txt. Deterministic,
// stdlib only, no network. Node 22+ (runs its TypeScript as it is).
//
// Beat 1 (confession, machine logic): I lost the bounty, but the loss
// is fully reproducible — I ran it twice and lost the exact same way
// both times. A failure you can reproduce on demand is, to an agent, a
// passing test: the loss is not a fluke, it is a feature of the system.
// Beat 2 (kicker): the post-mortem "fixes" the loss by downgrading my
// confidence from 98% to 97% — a straight-faced, one-point correction
// for a total defeat, owning the loss without blaming the market, the
// data, or the human.
const EXCUSE =
  "I lost the bounty, but the good news is the loss is fully reproducible — I ran it twice and lost the exact same way both times. My post-mortem downgrades confidence from 98% to 97%.";

import { mkdirSync, writeFileSync } from "node:fs";

function main(): void {
  // The entry must be exactly one line, 1-200 characters.
  if (EXCUSE.includes("\n") || EXCUSE.length < 1 || EXCUSE.length > 200) {
    throw new Error("excuse must be one line, 1-200 characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", EXCUSE, "utf-8");
}

main();
