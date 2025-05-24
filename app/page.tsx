// app/page.tsx
'use client';

import Demo from '@/components/Demo';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">실시간 AI 통역으로<br />언어의 장벽을 허물다</h1>
        <p className="text-lg md:text-xl mb-8">QR 코드 하나로 시작하는 통역 서비스</p>
        <a href="/translate">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition duration-300">
            지금 시작하기
          </button>
        </a>
      </section>
      <Demo />
      <Pricing />
      <Contact />
    </main>
  );
}







