// app/page.tsx
"use client";

import Header from './components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Our Website</h1>
        <p className="mt-4 text-lg text-gray-500">
          Hover over the Products and Solutions in the header to see dropdown menus.
        </p>
      </div>
    </div>
  );
}
