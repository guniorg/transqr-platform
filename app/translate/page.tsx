'use client'

import { useState, useEffect, useRef } from 'react'

export default function TranslatePage() {
  const [text, setText] = useState('')
  const [translated, setTranslated] = useState('')
  const [isListening, setIsListening] = useState(false)
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (!SpeechRecognition) {
        alert('이 브라우저는 음성 인식을 지원하지 않습니다.')
        return
      }

      const recognition = new SpeechRecognition()
      recognition.lang = 'ko-KR'
      recognition.continuous = true
      recognition.interimResults = true

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let transcript = ''
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript
        }
        setText(transcript)

        // 마침표 등 문장 끝났을 때만 번역
        if (/[.!?\\u3002]$/.test(transcript.trim())) {
          handleTranslate(transcript)
        }
      }

      recognitionRef.current = recognition
    }
  }, [])

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start()
      setIsListening(true)
    }
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const handleTranslate = async (inputText: string) => {
    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: inputText,
        target: 'en',
      }),
    })

    const data = await res.json()
    const translatedText = data?.data?.translations?.[0]?.translatedText || '번역 실패'
    setTranslated(translatedText)

    // TTS
    const utterance = new SpeechSynthesisUtterance(translatedText)
    utterance.lang = 'en-US'
    speechSynthesis.speak(utterance)
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎙️ 실시간 통역 테스트</h1>

      <button
        onClick={isListening ? stopListening : startListening}
        className={`px-4 py-2 rounded ${
          isListening ? 'bg-red-500' : 'bg-blue-600'
        } text-white font-semibold`}
      >
        {isListening ? '🛑 중지' : '🎤 시작'}
      </button>

      <div className="mt-6">
        <p className="text-gray-500 text-sm mb-1">🎧 입력한 텍스트</p>
        <textarea
          rows={3}
          className="w-full p-2 border rounded mb-3"
          value={text}
          readOnly
        />
        <p className="text-gray-500 text-sm mb-1">🌐 번역 결과</p>
        <div className="w-full p-2 border rounded bg-gray-100 min-h-[60px]">{translated}</div>
      </div>
    </div>
  )
}









