// app/session/[id]/live/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function LiveTranslationPage() {
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        window.SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        alert('이 브라우저는 음성 인식을 지원하지 않습니다.');
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = 'ko-KR';
      recognition.interimResults = false;
      recognition.continuous = true;

      recognition.onresult = async (event: SpeechRecognitionEvent) => {
        const lastResult = event.results[event.results.length - 1][0].transcript;
        setOriginalText((prev) => prev + '\n' + lastResult);

        try {
          const response = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: lastResult, target: 'vi' })
          });

          const data = await response.json();
          const result = data?.data?.translations?.[0]?.translatedText || '번역 실패';
          setTranslatedText((prev) => prev + '\n' + result);
        } catch (err) {
          console.error('번역 실패:', err);
        }
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const startRecognition = () => {
    recognitionRef.current?.start();
  };

  const stopRecognition = () => {
    recognitionRef.current?.stop();
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">실시간 통역 (한국어 → 베트남어)</h1>
      <div className="space-x-2 mb-4">
        <button onClick={startRecognition} className="bg-blue-600 text-white py-2 px-4 rounded">시작하기</button>
        <button onClick={stopRecognition} className="bg-gray-400 text-white py-2 px-4 rounded">중지하기</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold">원문 (한국어)</h2>
          <div className="min-h-[150px] border p-2 rounded bg-white whitespace-pre-wrap">{originalText}</div>
        </div>
        <div>
          <h2 className="font-semibold">번역문 (베트남어)</h2>
          <div className="min-h-[150px] border p-2 rounded bg-white whitespace-pre-wrap">{translatedText}</div>
        </div>
      </div>
    </div>
  );
}

