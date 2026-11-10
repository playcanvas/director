// a director folder of the test file's own, set before any server module reads it
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

process.env.DIRECTOR_DIR = mkdtempSync(join(tmpdir(), 'director-test-'));
