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
    }, 800);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '2rem',
        background: 'linear-gradient(to bottom, #0070f3, #0a0a23)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>
        실시간 AI 통역으로<br />언어의 장벽을 허물다
      </h1>
      <p style={{ marginTop: '1rem', fontSize: '1.1rem', opacity: 0.9 }}>
        QR 코드 하나로 시작하는 통역 서비스
      </p>

      <button
        onClick={handleStart}
        disabled={loading}
        style={{
          marginTop: '2rem',
          padding: '0.75rem 2rem',
          fontSize: '1.1rem',
          fontWeight: 600,
          borderRadius: '8px',
          backgroundColor: '#fff',
          color: '#0070f3',
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          transform: loading ? 'scale(0.97)' : 'scale(1)',
        }}
      >
        {loading ? (
          <>
            <span
              style={{
                width: '18px',
                height: '18px',
                border: '2px solid #0070f3',
                borderTop: '2px solid transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
            로딩 중...
          </>
        ) : (
          '지금 시작하기'
        )}
      </button>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <section style={{ marginTop: '4rem', textAlign: 'left', maxWidth: '600px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📌 어떻게 작동하나요?</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          <li>📱 <strong>QR 코드 스캔으로 시작:</strong> 설치 없이 바로 참여 가능</li>
          <li>🌐 <strong>실시간 AI 통역:</strong> 40개 이상의 언어를 즉시 번역</li>
          <li>🎧 <strong>블루투스 이어폰 연동:</strong> 번역된 음성을 개인에게 전달</li>
          <li>📝 <strong>자동 요약:</strong> 통역 후 AI가 핵심 내용 요약</li>
        </ul>
      </section>
    </main>
  );
}









