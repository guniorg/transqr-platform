'use client';
import { useEffect, useState } from 'react';

// ✅ 이 부분 추가
declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

export default function STTRecorder() {
  const [text, setText] = useState('');

  useEffect(() => {
    const SpeechRecognition =
      typeof window !== 'undefined' &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);

    if (!SpeechRecognition) {
      alert('이 브라우저는 음성 인식을 지원하지 않습니다.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ko-KR';
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setText((prev) => prev + '\n' + transcript);
    };

    recognition.start();

    return () => recognition.stop();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>🎤 음성 텍스트 출력</h2>
      <textarea
        rows={6}
        style={{ width: '100%' }}
        value={text}
        readOnly
        placeholder="말하면 텍스트로 표시됩니다"
      />
    </div>
  );
}

