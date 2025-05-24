'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '40px',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '28px', marginBottom: '16px', color: '#333' }}>
        실시간 AI 통역 플랫폼
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '32px', color: '#666' }}>
        강연장의 연설을 여러 언어로 실시간 번역하고 들려드립니다.
      </p>
      <button
        onClick={() => router.push('/translate')}
        style={{
          padding: '14px 28px',
          fontSize: '16px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(0, 118, 255, 0.3)',
        }}
      >
        실시간 통역 시작
      </button>
    </main>
  );
}






