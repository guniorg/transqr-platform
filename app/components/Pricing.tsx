// components/Pricing.tsx
'use client';

export default function Pricing() {
  return (
    <section className="bg-white py-16 px-4 text-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">요금제 비교</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">전통 통역 시스템</h3>
            <ul className="space-y-2 text-sm">
              <li>• 고가의 하드웨어 필요
              </li>
              <li>• 설치 및 유지보수 필요
              </li>
              <li>• 1회성 구매 비용 (수백~수천만 원)
              </li>
              <li>• 언어 추가 시 번역 인력 필요
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 shadow-md bg-blue-50">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">TransQR 시스템</h3>
            <ul className="space-y-2 text-sm">
              <li>• 고정비 없음, 장비 없음</li>
              <li>• 노트북 & 브라우저 기반</li>
              <li>• 참석자 수 기준 요금제</li>
              <li>• 40개+ 언어 자동 통역</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">기타 솔루션</h3>
            <ul className="space-y-2 text-sm">
              <li>• 통역 앱 (월 구독료 있음)</li>
              <li>• 통신 지연 및 음질 이슈</li>
              <li>• 블루투스 연동 불편</li>
              <li>• 별도 계정 가입 필요</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

