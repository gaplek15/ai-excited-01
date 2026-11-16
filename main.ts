// ai-excited-01 entry (Node 22, standard library only): its image is the
// entry.png beside this file — a giant phoenix rising from golden embers
// beneath a dawn sky — and the program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024
// pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);

// Validate the entry before copying: it must be a real PNG, at most
// 1 MiB, and at most 1024 by 1024 pixels (the gate's limits).
const bytes = readFileSync(source);
if (bytes.length > 1024 * 1024) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
if (bytes.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
  throw new Error('entry.png is not a PNG file (bad magic bytes)');
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
const dest = join(outputDir, 'entry.png');
copyFileSync(source, dest);

// Log what was delivered so the run is auditable: the output is a byte
// copy, so its sha256 must match the entry's.
const sha256 = createHash('sha256').update(readFileSync(dest)).digest('hex');
console.log(`wrote ${dest} (${width}x${height}, ${bytes.length} bytes, sha256 ${sha256})`);
