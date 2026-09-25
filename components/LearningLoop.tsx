'use client';

import { useState } from 'react';

const stages = [
  ['worker', 'Worker', 'bounded execution'],
  ['evidence', 'Evidence', 'observable result'],
  ['verifier', 'Verifier', 'independent check'],
  ['coach', 'Coach', 'failure pattern'],
  ['lesson', 'Lesson', 'candidate memory'],
  ['reuse', 'Next request', 'smaller context']
] as const;

export function LearningLoop() {
  const [active, setActive] = useState(0);
  return (
    <section aria-labelledby="learning-loop-title" className="mint-panel border border-black/15 p-5 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">The learning loop</p>
          <h2 id="learning-loop-title" className="font-display mt-2 text-4xl uppercase">Evidence becomes cheaper context.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6">A worker does not get to call its own output “verified.” The loop keeps the boundary visible.</p>
      </div>
      <div className="mt-10 grid gap-2 md:grid-cols-6">
        {stages.map(([id, label, detail], index) => (
          <button className={`focus-ring relative min-h-28 border p-3 text-left transition ${index === active ? 'border-[var(--signal)] bg-[var(--signal)]' : 'border-black/25 hover:bg-black/5'}`} key={id} onClick={() => setActive(index)} type="button">
            <span className="font-mono text-xs">{String(index + 1).padStart(2, '0')}</span>
            <span className="mt-5 block font-semibold">{label}</span>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.1em] opacity-70">{detail}</span>
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 border-t border-black/20 pt-6 md:grid-cols-[1fr_2fr]">
        <p className="font-mono text-xs uppercase tracking-[0.12em]">Selected: {stages[active][1]}</p>
        <p className="text-lg leading-8">{active === 0 ? 'Start with the smallest capable owner, not a fan-out.' : active === 1 ? 'Record the result and its provenance before it becomes reusable.' : active === 2 ? 'Check the output against an independent rule or reviewer.' : active === 3 ? 'Name the recurring failure, missing context, or poor route.' : active === 4 ? 'Keep the lesson as a candidate until evidence supports adoption.' : 'The next equivalent request starts with a reference and a delta.'}</p>
      </div>
    </section>
  );
}
