'use client';

import { useEffect, useRef, useState } from 'react';

// ✅ 타입 오류 방지용 선언 추가
type SpeechRecognition = any;

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
      recognitionRef.current = recognition;

      recognition.onresult = async (event: any) => {
        const lastResult = event.results[event.results.length - 1][0].transcript;
        setOriginalText(lastResult);

        try {
          const res = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: lastResult, target: 'en' }),
          });
          const data = await res.json();
          const translated = data?.data?.translations?.[0]?.translatedText || '번역 실패';
          setTranslatedText(translated);
        } catch (err) {
          setTranslatedText('번역 실패');
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
      };
    }
  }, []);

  return (
    <div>
      <h1>실시간 통역</h1>
      <p>원문: {originalText}</p>
      <p>번역: {translatedText}</p>
    </div>
  );
}

