'use client';

export default function Demo() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl font-bold mb-4">데모 체험</h2>
      <p className="mb-6">아래 QR 코드를 스캔해보세요. 실제 통역 데모를 체험할 수 있습니다.</p>
      <div className="flex justify-center">
        <img
          src="/qr-demo.png"
          alt="QR 데모"
          className="w-48 h-48 object-contain"
        />
      </div>
          </section>
  );
}

