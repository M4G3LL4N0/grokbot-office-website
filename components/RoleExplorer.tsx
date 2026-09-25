'use client';

import { useMemo, useState } from 'react';
import data from '../data/workforce.json';

type Role = (typeof data.roles)[number];

export function RoleExplorer() {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('All groups');
  const groups = ['All groups', ...Array.from(new Set(data.roles.map((role) => role.group)))];
  const roles = useMemo(() => data.roles.filter((role) => {
    const matchesGroup = group === 'All groups' || role.group === group;
    const haystack = `${role.id} ${role.name} ${role.description} ${role.skills}`.toLowerCase();
    return matchesGroup && haystack.includes(query.toLowerCase());
  }), [group, query]);

  return (
    <section aria-labelledby="role-explorer-title" className="border border-black/15 bg-[var(--paper)]">
      <div className="flex flex-col gap-5 border-b border-black/15 p-5 sm:p-7 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow text-[var(--signal)]">Role catalog / sanitized reference data</p>
          <h2 id="role-explorer-title" className="font-display mt-2 text-4xl uppercase">Role ≠ Bot</h2>
        </div>
        <div className="flex w-full max-w-xl flex-col gap-2 sm:flex-row">
          <label className="sr-only" htmlFor="role-search">Search roles</label>
          <input id="role-search" className="focus-ring min-h-11 flex-1 border border-black/25 bg-transparent px-3 text-sm" onChange={(event) => setQuery(event.target.value)} placeholder="Search role, skill, or mission" type="search" value={query} />
          <label className="sr-only" htmlFor="role-group">Filter by group</label>
          <select id="role-group" className="focus-ring min-h-11 border border-black/25 bg-transparent px-3 text-sm" onChange={(event) => setGroup(event.target.value)} value={group}>
            {groups.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>
      <div className="grid gap-px bg-black/15 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => <RoleCard key={role.id} role={role} />)}
      </div>
      {roles.length === 0 ? <p className="p-8 font-mono text-sm">No roles match that filter.</p> : null}
      <div className="border-t border-black/15 p-5 font-mono text-xs uppercase tracking-[0.12em] text-black/60">
        {data.counts.conceptualRoles} conceptual roles / {data.counts.referenceSupervisors} local reference supervisors / {data.counts.virtualRoles} virtual by default
      </div>
    </section>
  );
}

function RoleCard({ role }: { role: Role }) {
  return (
    <article className="bg-[var(--paper)] p-5 transition hover:bg-[var(--mint)]">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-[var(--signal)]">{role.id}</span>
        <span className="border border-black/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em]">{role.defaultForm}</span>
      </div>
      <h3 className="font-display mt-4 text-2xl uppercase">{role.name}</h3>
      <p className="mt-2 text-sm leading-6 text-black/70">{role.description}</p>
      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-black/15 pt-4 font-mono text-[11px] uppercase tracking-[0.08em]">
        <div><dt className="text-black/50">Group</dt><dd className="mt-1">{role.group}</dd></div>
        <div><dt className="text-black/50">Parent</dt><dd className="mt-1">{role.parent}</dd></div>
        <div className="col-span-2"><dt className="text-black/50">Capability form</dt><dd className="mt-1 normal-case tracking-normal">{role.skills}</dd></div>
      </dl>
    </article>
  );
}
