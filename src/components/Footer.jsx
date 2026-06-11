import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-8 border-t border-slate-200 relative z-10 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Nguyễn Huy Phúc. Thiết kế và code với 💙 & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
