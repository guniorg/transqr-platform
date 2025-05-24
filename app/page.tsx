'use client';

import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
      <Demo />
      <Pricing />
      <Contact />
    </main>
  );
}








