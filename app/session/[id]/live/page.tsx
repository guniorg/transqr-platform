'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}
type SpeechRecognition = any;

export default function LiveTranslationPage() {
  const [listening, setListening] = useState(false);
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        alert('이 브라우저는 음성 인식을 지원하지 않습니다.');
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = 'ko-KR';
      recognition.continuous = true;
      recognition.interimResults = false;

      recognition.onresult = async (event: any) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        setOriginalText(transcript);

        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: transcript,
            target: 'en',
          }),
        });

        const data = await res.json();
        const translated = data?.data?.translations?.[0]?.translatedText;
        setTranslatedText(translated);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🎙️ 실시간 AI 통역</h2>
      <button onClick={toggleListening}>
        {listening ? '⏹️ 중지' : '▶️ 시작'}
      </button>
      <div>
        <h3>🗣 원문:</h3>
        <p>{originalText}</p>
        <h3>🌐 번역:</h3>
        <p>{translatedText}</p>
      </div>
    </div>
  );
}

