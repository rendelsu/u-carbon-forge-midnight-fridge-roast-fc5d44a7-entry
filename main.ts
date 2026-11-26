import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, "My smart fridge won't open after midnight, so I'm begging a stainless-steel bouncer to let me visit my own lasagna.\n", "utf8");
chmodSync(outFile, 0o644);
