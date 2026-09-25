'use client';

import { useMemo, useState } from 'react';

type TaskId = 'repo' | 'repeat' | 'research' | 'cloud' | 'city';

type Task = {
  id: TaskId;
  label: string;
  kicker: string;
  path: string[];
  result: string;
  workerCalls: string;
  note: string;
};

const tasks: Task[] = [
  {
    id: 'repo', label: 'Inspect a repository', kicker: 'SOURCE CHANGE', path: ['request', 'cache state', 'changed files', 'OpenCode', 'tests', 'verifier', 'cache', 'result'],
    result: 'Compact audit + evidence', workerCalls: '1 worker', note: 'The second request can retrieve the verified artifact when the source hash is unchanged.'
  },
  {
    id: 'repeat', label: 'Repeat a known task', kicker: 'CACHE HIT', path: ['request', 'artifact lookup', 'freshness check', 'verifier', 'result'],
    result: 'Reuse without repeating planning', workerCalls: '0 workers', note: 'A cache hit is only useful when freshness, scope, and evidence still pass.'
  },
  {
    id: 'research', label: 'Research an ecosystem change', kicker: 'DELTA ROUTE', path: ['request', 'prior artifact', 'delta', 'triage', 'research worker', 'source check', 'lesson'],
    result: 'New evidence, smaller context', workerCalls: 'smallest team', note: 'Research is a specialist path, not the default identity of the control layer.'
  },
  {
    id: 'cloud', label: 'Use an authenticated website', kicker: 'EXTERNAL BOUNDARY', path: ['request', 'local unavailable', 'approval', 'persistent worker', 'result/evidence', 'state'],
    result: 'Reviewed external result', workerCalls: '1 approved worker', note: 'Illustrative architecture only. No live authenticated task is run here.'
  },
  {
    id: 'city', label: 'Return to a city', kicker: 'SKILL / WORKFLOW', path: ['request', 'place artifact', 'deterministic facts', 'options', 'human confirms'],
    result: 'Decision support, not autonomous action', workerCalls: '0 model workers', note: 'Specialized software and workflows can handle facts while a supervisor owns judgment.'
  }
];

export function ControlMap() {
  const [activeId, setActiveId] = useState<TaskId>('repo');
  const [showCache, setShowCache] = useState(false);
  const active = useMemo(() => tasks.find((task) => task.id === activeId) ?? tasks[0], [activeId]);
  const path = showCache && active.id === 'repo' ? ['request', 'cache hit', 'delta', 'verifier', 'result'] : active.path;

  return (
    <section aria-labelledby="control-map-title" className="dark-panel overflow-hidden border border-black/15">
      <div className="grid-paper flex flex-col gap-3 border-b border-white/15 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow text-[var(--mint)]">Interactive architecture simulation</p>
          <h2 id="control-map-title" className="font-display mt-1 text-3xl uppercase">One core. Many possible edges.</h2>
        </div>
        <label className="flex cursor-pointer items-center gap-3 font-mono text-xs uppercase tracking-[0.12em]">
          <input className="h-4 w-4 accent-[var(--signal)]" type="checkbox" checked={showCache} onChange={(event) => setShowCache(event.target.checked)} />
          show second-pass cache
        </label>
      </div>
      <div className="grid gap-0 lg:grid-cols-[240px_1fr]">
        <div className="border-b border-white/15 p-3 lg:border-b-0 lg:border-r" role="tablist" aria-label="Task simulations">
          {tasks.map((task) => (
            <button
              aria-selected={task.id === active.id}
              className={`focus-ring mb-1 w-full border px-3 py-3 text-left transition ${task.id === active.id ? 'border-[var(--signal)] bg-[var(--signal)] text-[var(--ink)]' : 'border-transparent hover:border-white/30'}`}
              key={task.id}
              onClick={() => setActiveId(task.id)}
              role="tab"
              type="button"
            >
              <span className="eyebrow block opacity-70">{task.kicker}</span>
              <span className="mt-1 block text-sm font-semibold">{task.label}</span>
            </button>
          ))}
        </div>
        <div className="p-5 sm:p-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-[var(--mint)]">Selected route / {active.kicker}</p>
              <h3 className="font-display mt-2 max-w-xl text-4xl uppercase sm:text-5xl">{active.label}</h3>
            </div>
            <div className="border border-white/25 px-3 py-2 text-right font-mono text-xs uppercase tracking-[0.12em] text-[var(--mint)]">
              <span className="block text-[var(--paper)]">{active.workerCalls}</span>
              worker calls
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label="Illustrative task path">
            {path.map((node, index) => (
              <div className="relative" key={`${node}-${index}`}>
                <div className="min-h-20 border border-white/20 bg-white/5 p-3">
                  <span className="font-mono text-[10px] text-[var(--signal)]">{String(index + 1).padStart(2, '0')}</span>
                  <p className="mt-2 text-sm font-semibold">{node}</p>
                </div>
                {index < path.length - 1 ? <span aria-hidden="true" className="absolute -right-2 top-1/2 z-10 hidden h-px w-2 bg-[var(--signal)] sm:block" /> : null}
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_1fr]">
            <div className="border-l-2 border-[var(--signal)] pl-4">
              <p className="eyebrow text-[var(--mint)]">Illustrative result</p>
              <p className="mt-1 text-lg font-semibold">{active.result}</p>
            </div>
            <p className="text-sm leading-6 text-white/70">{active.note}</p>
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">Architecture simulation / not live execution evidence</p>
        </div>
      </div>
    </section>
  );
}
