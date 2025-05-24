// app/session/[id]/live/page.tsx
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
      recognition.interimResults = false;
      recognition.continuous = true;

      recognition.onresult = async (event: SpeechRecognitionEvent) => {
        const lastResult = event.results[event.results.length - 1];
        const sentence = lastResult[0].transcript;
        setOriginalText(sentence);

        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: sentence, target: 'vi' }),
        });

        const data = await res.json();
        const result = data?.data?.translations?.[0]?.translatedText;
        setTranslatedText(result || '번역 실패');
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center mb-6">실시간 통역</h1>

        <div className="space-y-4">
          <button
            onClick={listening ? stopListening : startListening}
            className={`w-full py-2 rounded text-white font-semibold transition ${
              listening ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {listening ? '중지하기' : '지금 시작하기'}
          </button>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-500">원문:</p>
            <p className="text-lg text-black min-h-[2rem]">{originalText}</p>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-500">번역 결과:</p>
            <p className="text-lg text-green-600 min-h-[2rem]">{translatedText}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
