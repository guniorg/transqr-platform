// app/session/[id]/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// ✅ 타입을 명확하게 정의
interface Params {
  id: string;
}

interface Props {
  params: Params;
}

export default function SessionEntry({ params }: Props) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const sessionId = params.id;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('참석 세션:', sessionId);
    console.log('입력된 이메일:', email);
    setSubmitted(true);
    // 필요한 경우 페이지 이동
    // router.push(`/session/${sessionId}/live`);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6 border p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center">TransQR 세미나 참석</h1>
        {submitted ? (
          <div className="text-center">
            <p className="text-green-600 font-semibold">✅ 참석이 확인되었습니다.</p>
            <p className="text-sm mt-2">곧 통역이 시작됩니다. 이어폰을 착용해 주세요.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-gray-700 text-center">
              아래에 이메일을 입력하면, 발표 요약본이 세션 종료 후 자동으로 발송됩니다.
            </p>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              세션 참여하기
            </button>
          </form>
        )}
      </div>
    </main>
  );
}





