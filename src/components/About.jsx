import React from 'react';

const About = () => {
  const skills = [
    { name: 'JavaScript / TypeScript', level: 85, color: 'bg-yellow-400' },
    { name: 'React / React Native', level: 80, color: 'bg-cyan-400' },
    { name: 'PHP / Laravel', level: 85, color: 'bg-indigo-500' },
    { name: 'C# / .NET', level: 80, color: 'bg-purple-600' },
    { name: 'C++', level: 75, color: 'bg-blue-600' },
    { name: 'Java', level: 80, color: 'bg-orange-500' },
    { name: 'Tailwind CSS / UI', level: 90, color: 'bg-blue-500' },
    { name: 'MySQL / Database', level: 75, color: 'bg-emerald-500' },
    { name: 'Git & GitHub', level: 85, color: 'bg-slate-500' }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Kỹ Năng & Kinh Nghiệm</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Về bản thân */}
          <div className="bg-white/50 backdrop-blur-sm border border-slate-200 p-8 rounded-3xl shadow-xl hover:border-slate-300 transition-colors">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Về Bản Thân
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Mình là một lập trình viên Fullstack luôn tìm tòi học hỏi và áp dụng những công nghệ mới. Mình thích biến các bản thiết kế UI/UX thành sản phẩm thực tế, đồng thời xây dựng hệ thống Backend vững chắc, tối ưu hóa CSDL và API.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Mục tiêu của mình là tạo ra những ứng dụng toàn diện, từ trải nghiệm người dùng tuyệt vời đến hiệu năng xử lý dữ liệu mạnh mẽ.
            </p>
          </div>

          {/* Kỹ năng */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/80 p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 font-medium">{skill.name}</span>
                  <span className="text-slate-500 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-out`} 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
