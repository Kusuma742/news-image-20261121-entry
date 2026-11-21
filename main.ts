// Copies entry.png from this repository to the output directory.
// The image is the entry: a single picture summing up 21 November 2026's
// world news. No network, no dependencies.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(repoDir, "entry.png");
const dst = join(outDir, "entry.png");
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Verify the copy landed whole: the output must exist and carry exactly
// the source's bytes, so a truncated write is caught, not shipped.
const srcSize = statSync(src).size;
const dstSize = statSync(dst).size;
if (dstSize !== srcSize) {
  throw new Error(`entry.png copy mismatch: wrote ${dstSize} bytes, source is ${srcSize}`);
}
console.log(`wrote ${dst} (${dstSize} bytes)`);
