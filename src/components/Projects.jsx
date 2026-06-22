import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'Một trang web bán hàng trực tuyến với giỏ hàng, thanh toán và quản lý sản phẩm. Được xây dựng bằng React và Tailwind CSS.',
      techs: ['React', 'Tailwind', 'Redux'],
      link: '#',
      github: '#',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'TechCare API',
      description: 'Hệ thống API RESTful mạnh mẽ phục vụ cho nền tảng TechCare, quản lý dữ liệu, xác thực người dùng và tích hợp các dịch vụ.',
      techs: ['Node.js', 'Express', 'MongoDB'],
      link: 'https://github.com/Phucnguyen8625/TechCareAPI',
      github: 'https://github.com/Phucnguyen8625/TechCareAPI',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Weather Dashboard',
      description: 'Bảng điều khiển thời tiết sử dụng OpenWeather API để hiển thị dự báo thời tiết cho các thành phố trên thế giới.',
      techs: ['JavaScript', 'API', 'HTML/CSS'],
      link: 'https://weather-dashboard-mocha-gamma.vercel.app/',
      github: 'https://github.com/Phucnguyen8625/Weather-dashboard.git',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10 bg-slate-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Dự Án Nổi Bật</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] shadow-sm transition-all duration-300 hover:-translate-y-2">
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <a href={project.github} className="text-slate-500 hover:text-slate-800 flex items-center text-sm transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Code
                  </a>
                  <a href={project.link} className="text-blue-600 hover:text-blue-500 flex items-center text-sm transition-colors">
                    Xem Demo
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
