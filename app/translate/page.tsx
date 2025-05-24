'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        실시간 AI 통역으로<br />언어의 장벽을 허물다
      </h1>
      <p style={{ margin: '1rem 0' }}>QR 코드 하나로 시작하는 통역 서비스</p>
      
      <Link href="/translate">
        <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer' }}>
          지금 시작하기
        </button>
      </Link>

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







