'use client';
import { useEffect, useRef, useState } from 'react';

type SpeechRecognitionType =
  typeof window.SpeechRecognition | typeof window.webkitSpeechRecognition;

export default function LiveTranslationPage() {
  const [listening, setListening] = useState(false);
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const recognitionRef = useRef<InstanceType<SpeechRecognitionType> | null>(null);

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
    }
  }, []);

  return <div>실시간 통역 페이지</div>;
}




