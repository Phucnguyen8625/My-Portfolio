import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-72 md:w-96 h-72 md:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 md:w-96 h-72 md:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-1/2 w-72 md:w-96 h-72 md:h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-4000"></div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-6 border border-blue-500/20 backdrop-blur-md">
            👋 Xin chào, mình là
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 tracking-tight leading-tight">
            Nguyễn Huy Phúc
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            Fullstack Developer
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl leading-relaxed mb-10">
            Đam mê xây dựng các hệ thống web toàn diện từ Frontend đến Backend, mang lại trải nghiệm người dùng tuyệt vời và kiến trúc phần mềm vững chắc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] text-center">
              Xem Dự Án
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/80 hover:bg-slate-50 backdrop-blur-sm text-slate-700 border border-slate-200 rounded-full font-semibold transition-all duration-300 text-center">
              Liên Hệ Ngay
            </a>
          </div>
        </div>

        {/* Right side visual element */}
        <div className="flex-1 hidden md:flex justify-center relative">
          <div className="w-72 h-72 lg:w-96 lg:h-96 relative">
            {/* Vòng tròn viền xoay */}
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-slate-300 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-blue-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* Ảnh đại diện hoặc Avatar */}
            <div className="absolute inset-8 rounded-full bg-slate-100 border-4 border-slate-200 overflow-hidden shadow-2xl flex items-center justify-center">
              <img src="https://github.com/Phucnguyen8625.png" alt="Phúc Nguyễn" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
