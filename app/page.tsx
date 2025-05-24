'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <section className="text-center mt-20 px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">실시간 AI 통역으로<br />언어의 장벽을 허물다</h1>
        <p className="text-lg sm:text-xl mb-8">QR 코드 하나로 시작하는 통역 서비스</p>
        <button
          onClick={() => router.push('/translate')}
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          지금 시작하기
        </button>
      </section>

      <section className="bg-white text-black rounded-lg shadow-lg mt-16 p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">어떻게 작동하나요?</h2>
        <ul className="space-y-4 text-left text-base leading-relaxed">
          <li>📱 <strong>QR 코드 스캔으로 시작</strong><br />설치 없이 QR 코드로 통역 세션에 참여할 수 있습니다.</li>
          <li>🗣️ <strong>실시간 AI 통역</strong><br />40개 이상의 언어를 AI로 실시간 통역합니다.</li>
          <li>🎧 <strong>블루투스 이어폰 연동</strong><br />참석자는 블루투스 이어폰으로 번역된 음성을 직접 들을 수 있습니다.</li>
          <li>📝 <strong>자동 요약</strong><br />통역 후 AI가 대화 내용을 자동 요약해줍니다.</li>
        </ul>
      </section>
    </main>
  )
}


