// components/Demo.tsx
'use client';

import Link from 'next/link';

export default function Demo() {
  return (
    <section className="py-20 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">TransQR 실시간 통역 데모</h2>
      <p className="mb-4 text-gray-700">
        실시간 연설 번역을 체험해 보세요. 연설자의 음성을 실시간으로 텍스트 변환하고,
        자동 번역한 결과를 블루투스 이어폰으로 들을 수 있습니다.
      </p>
      <Link href="/translate" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
        지금 시작하기
      </Link>
    </section>
  );
}


