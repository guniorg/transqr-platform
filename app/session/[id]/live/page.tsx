'use client';

import { useEffect, useRef, useState } from 'react';

// 타입 오류 방지용 선언
type SpeechRecognition = typeof window.SpeechRecognition;

export default function LiveTranslationPage() {
  const [listening, setListening] = useState(false);
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        alert('이 브라우저는 음성 인식을 지원하지 않습니다.');
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = 'ko-KR';
      recognition.interimResults = true;
      recognition.continuous = true;

      recognition.onstart = () => setListening(true);
      recognition.onend = () => setListening(false);

      recognition.onresult = async (event: any) => {
        const lastTranscript = event.results[event.results.length - 1][0].transcript;
        setOriginalText(lastTranscript);

        try {
          const res = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: lastTranscript, target: 'en' }),
          });

          const data = await res.json();
          const translated = data?.data?.translations?.[0]?.translatedText || '번역 실패';
          setTranslatedText(translated);
        } catch (err) {
          console.error('Translation error:', err);
          setTranslatedText('번역 실패');
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const handleToggle = () => {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎙️ 실시간 AI 통역</h1>

      <button
        onClick={handleToggle}
        className="mb-6 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        {listening ? '🛑 중지하기' : '▶️ 시작하기'}
      </button>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-semibold">🎧 원문</h2>
        <p className="text-gray-800">{originalText || '음성 인식 대기 중...'}</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold">🌐 번역 결과</h2>
        <p className="text-gray-800">{translatedText || '번역 대기 중...'}</p>
      </div>
    </div>
  );
}


