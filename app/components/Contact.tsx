'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">문의하기</h2>
        <form action="https://formspree.io/f/movdzdaq" method="POST" className="space-y-4">
          <input name="name" placeholder="이름" required className="w-full border p-2 rounded" />
          <input name="email" type="email" placeholder="이메일" required className="w-full border p-2 rounded" />
          <textarea name="message" placeholder="메시지" required className="w-full border p-2 rounded" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">보내기</button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          <p>인퍼스트테크놀로지 주식회사</p>
          <p>베트남 대표자: 이승구 (Director)</p>
          <p>주소: 경기도 화성시 동탄첨단산업1로 51-9, 1104,1105호 (동탄엠타워지식산업센터)</p>
          <p>전화: 베트남 +84-904-590-085 / 한국 +82-10-5364-1195</p>
          <p>이메일: sk.lee@infirst.co.kr</p>
        </div>
      </div>
    </section>
  );
}
