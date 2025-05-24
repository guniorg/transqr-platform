'use client';

import { useEffect, useState } from 'react';

export default function STTRecorder() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const SpeechRecognition =
      typeof window !== 'undefined' &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);

    if (!SpeechRecognition) {
      alert('이 브라우저는 음성 인식을 지원하지 않습니다.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ko-KR'; // 한국어
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const result = Array.from(event.results)
        .map((res) => res[0].transcript)
        .join('');
      setTranscript(result);
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => recognition.stop();
  }, [isListening]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>🎤 Speech to Text (STT)</h2>
      <button onClick={() => setIsListening((prev) => !prev)}>
        {isListening ? '⏹ 중지' : '🎙 시작'}
      </button>
      <p><strong>음성 텍스트:</strong> {transcript}</p>
    </div>
  );
}
