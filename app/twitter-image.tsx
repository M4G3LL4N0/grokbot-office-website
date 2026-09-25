import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'GrokBot Office control-plane mark';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#111318', color: '#f3f0e8', padding: 70, fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', fontSize: 24, letterSpacing: 5, color: '#b8e7d1' }}>GROKBOT / OFFICE</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
         <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 0.95 }}>GrokBot should run</div>
         <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 0.95 }}>your workforce.</div>
         <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 0.95, color: '#e85d3f' }}>Not be your entire workforce.</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#b8e7d1' }}><span>role ≠ bot</span><span>verified output ÷ total resource cost</span></div>
    </div>,
    { ...size }
  );
}
