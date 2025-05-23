'use client';

export default function Pricing() {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">요금제</h2>
      <h3 className="text-xl font-semibold">Starter</h3>
      <p className="text-xl mb-4">₩29,900 / 월</p>
      <ul className="list-inside text-left max-w-md mx-auto space-y-2">
        <li>✅ 월 10시간 통역 시간</li>
        <li>✅ 요약 기능 포함</li>
        <li>✅ 최대 2개 언어 지원</li>
      </ul>
    </section>
  );
}
