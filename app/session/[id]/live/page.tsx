// 이전 파일 경로: app/session/[id]/live/page.tsx
// 수정 후 경로에 맞는 코드로 유지

'use client';

import { useEffect, useRef, useState } from 'react';

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

      recognition.onresult = async (event: SpeechRecognitionEvent) => {
        const last = event.results.length - 1;
        const transcript = event.results[last][0].transcript;
        setOriginalText(transcript);

        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: transcript, target: 'en' }),
        });

        const data = await res.json();
        const translated = data?.data?.translations?.[0]?.translatedText || '번역 실패';
        setTranslatedText(translated);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const handleListen = () => {
    if (recognitionRef.current) {
      if (!listening) {
        recognitionRef.current.start();
      } else {
        recognitionRef.current.stop();
      }
      setListening(!listening);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">실시간 음성 인식 및 번역</h1>
      <button
        onClick={handleListen}
        className="mb-4 px-4 py-2 rounded bg-blue-600 text-white"
      >
        {listening ? '중지' : '시작'}
      </button>
      <div className="mb-4">
        <p className="text-sm text-gray-500">🎤 원문:</p>
        <p className="border rounded p-2 bg-gray-100 min-h-[48px]">{originalText}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">🌍 번역:</p>
        <p className="border rounded p-2 bg-green-50 min-h-[48px]">{translatedText}</p>
      </div>
    </div>
  );
}
