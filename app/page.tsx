'use client';

import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Demo from './components/Demo';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <Pricing />
      <Demo />
      <Contact />
    </main>
  );
}

