import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const workforce = JSON.parse(readFileSync(new URL('../data/workforce.json', import.meta.url), 'utf8'));

test('workforce reference counts are explicit and non-fabricated', () => {
  assert.equal(workforce.counts.conceptualRoles, 134);
  assert.equal(workforce.counts.referenceSupervisors, 3);
  assert.equal(workforce.counts.virtualRoles, 131);
  assert.match(workforce.notice, /not a requirement/i);
});

test('public dataset contains no private execution claims', () => {
  const serialized = JSON.stringify(workforce).toLowerCase();
  assert.doesNotMatch(serialized, /access[_-]?token|api[_-]?key|password|cookie|session/);
  assert.match(serialized, /reference configuration/);
});
