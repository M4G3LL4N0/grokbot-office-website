import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const siteRoot = resolve(new URL('..', import.meta.url).pathname);
const dataPath = resolve(siteRoot, 'data/workforce.json');
const registryPath = resolve(siteRoot, '../grokbot-office/registry/roles.yaml');
const data = JSON.parse(readFileSync(dataPath, 'utf8'));
try {
  const registry = readFileSync(registryPath, 'utf8');
  const roleBlock = registry.split('roles:')[1] ?? '';
  const anchorBlock = registry.split('roles:')[0] ?? '';
  const roleCount = (roleBlock.match(/^  - id: "/gm) ?? []).length;
  const anchorCount = (anchorBlock.match(/^  - id: /gm) ?? []).length;
  if (roleCount !== 134 || anchorCount !== 3) {
    throw new Error(`unexpected canonical counts: ${roleCount} roles / ${anchorCount} anchors`);
  }
  data.counts.conceptualRoles = roleCount;
  data.counts.referenceSupervisors = data.roles.filter((role) => ['01', '02', '03'].includes(role.id)).length;
  data.counts.virtualRoles = roleCount - data.counts.referenceSupervisors;
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`);
console.log(`workforce data verified: ${data.counts.conceptualRoles} conceptual / ${data.counts.referenceSupervisors} reference / ${data.counts.virtualRoles} virtual`);
