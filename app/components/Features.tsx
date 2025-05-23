'use client';

export default function Features() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">어떻게 작동하나요?</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div>
          <h3 className="text-lg font-semibold">📱 QR 코드 스캔으로 시작</h3>
          <p>설치 없이 QR 코드로 통역 세션에 참여할 수 있습니다.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">🌐 실시간 AI 통역</h3>
          <p>40개 이상의 언어를 AI로 실시간 통역합니다.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">🎧 블루투스 이어폰 연동</h3>
          <p>블루투스 이어폰으로 음성을 직접 들을 수 있습니다.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">📝 자동 요약</h3>
          <p>통역 후 AI가 대화 내용을 자동 요약합니다.</p>
        </div>
      </div>
    </section>
  );
}
