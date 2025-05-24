'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      router.push('/translate');
    }, 500); // 부드러운 전환을 위한 약간의 딜레이
  };

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        실시간 AI 통역으로<br />언어의 장벽을 허물다
      </h1>
      <p style={{ margin: '1rem 0' }}>QR 코드 하나로 시작하는 통역 서비스</p>

      <button
        onClick={handleStart}
        disabled={loading}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.6 : 1,
          transition: 'all 0.3s ease',
          transform: loading ? 'scale(0.98)' : 'scale(1)',
        }}
      >
        {loading ? '로딩 중...' : '지금 시작하기'}
      </button>

      <section style={{ marginTop: '4rem', textAlign: 'left', maxWidth: '600px', marginInline: 'auto' }}>
        <h2>어떻게 작동하나요?</h2>
        <ul>
          <li>📱 QR 코드 스캔으로 시작</li>
          <li>🌐 실시간 AI 통역</li>
          <li>🎧 블루투스 이어폰 연동</li>
          <li>📝 자동 요약</li>
        </ul>
      </section>
    </main>
  );
}








