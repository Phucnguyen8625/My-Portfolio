import React, { useState } from 'react';

const Navbar = () => {
    // State quản lý trạng thái đóng/mở của menu mobile
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Nguyễn Huy Phúc
                        </a>
                    </div>

                    {/* Menu Desktop (Ẩn trên màn hình nhỏ) */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#home" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Trang chủ</a>
                            <a href="#about" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Kỹ năng</a>
                            <a href="#projects" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Dự án</a>
                            <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                Liên hệ
                            </a>
                        </div>
                    </div>

                    {/* Nút Hamburger Menu (Chỉ hiện trên Mobile) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    // Icon dấu X khi menu đang mở
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    // Icon 3 dấu gạch ngang khi menu đang đóng
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu thả xuống cho Mobile */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">Trang chủ</a>
                        <a href="#about" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">Kỹ năng</a>
                        <a href="#projects" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">Dự án</a>
                        <a href="#contact" className="text-blue-600 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Liên hệ</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;