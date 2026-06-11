import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-4000"></div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-12 rounded-3xl shadow-2xl max-w-3xl w-full text-center transform transition-all duration-500 hover:scale-[1.02]">
        <div className="inline-block p-4 rounded-full bg-blue-500/20 text-blue-400 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 tracking-tight">
          Tailwind CSS <br/> đã hoạt động! 🚀
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          Bây giờ chúng ta đã sẵn sàng để xây dựng <span className="font-semibold text-white">Portfolio</span> siêu đẹp.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
            Bắt đầu thiết kế
          </button>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-full font-semibold transition-all duration-300">
            Xem thành phần
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
