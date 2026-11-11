"use client";

import React, { useState } from "react";
import { Mail, ExternalLink, Code, Layout, Cpu, Sun, Moon } from "lucide-react";
import GridCanvas from "./components/GridCanvas";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    { name: "HTML5", category: "Frontend", level: "Advanced" },
    { name: "CSS3", category: "Frontend", level: "Advanced" },
    { name: "JavaScript", category: "Language", level: "Advanced" },
    { name: "React.js", category: "Frontend", level: "Advanced" },
    { name: "Next.js", category: "Framework", level: "Advanced" },
    { name: "TypeScript", category: "Language", level: "Advanced" },
    { name: "Redux", category: "State Management", level: "Advanced" },
    { name: "CSS Modules", category: "Styling", level: "Advanced" },
    { name: "REST API", category: "API Integration", level: "Advanced" },
    { name: "JWT Auth", category: "Authentication", level: "Advanced" },
    { name: "Git", category: "Version Control", level: "Advanced" },
    { name: "GitHub", category: "Version Control", level: "Advanced" },
    { name: "Sass", category: "Styling", level: "Advanced" },
    { name: "Bootstrap", category: "UI Framework", level: "Advanced" },
    { name: "Vercel", category: "Deployment", level: "Advanced" },
    { name: "Docker", category: "DevOps", level: "Intermediate" },
    { name: "Node.js", category: "Backend", level: "Intermediate" },
    { name: "MongoDB", category: "Database", level: "Intermediate" },
  ];

  const experiences = [
    {
      role: "React Developer Intern",
      company: "Wynxio Technologies",
      location: "Trivandrum, Kerala, India",
      period: "Sep 2025 – Present",
      desc: "Developed modern and responsive web applications using React.js and Next.js. Built reusable UI components, integrated APIs and worked with modern frontend development practices.",
    },
    {
      role: "Relationship Manager",
      company: "Access Insurance Broking Pvt. Ltd.",
      location: "Kochi, Kerala, India",
      period: "Dec 2024 – Sep 2025",
      desc: "Managing client relationships, business operations, customer requirements and insurance-related processes while ensuring service quality and business growth.",
    },
    {
      role: "Process Associate",
      company: "M Squared Software and Services",
      location: "Trivandrum, Kerala, India",
      period: "Jun 2022 – Oct 2022",
      desc: "Processed medical billing, claims management and Revenue Cycle Management (RCM) activities to ensure timely reimbursement. Verified patient demographics, insurance coverage, eligibility and authorization details prior to claim submission. Performed payment posting, account reconciliation and claims follow-up while maintaining accuracy and compliance standards.",
    },
    {
      role: "Data Processing Executive",
      company: "Standout IT Solutions",
      location: "Technopark, Trivandrum, Kerala, India",
      period: "Jan 2018 – Apr 2022",
      desc: "Handled data processing, verification and business operations while maintaining accuracy, productivity and quality standards.",
    },
  ];

  const certifications = [
    {
      number: "01",
      title: "DevOps & Cloud – The Future of Software Engineering",
      issuer: "Wynxio Technologies",
      desc: "Certification focused on modern DevOps practices, cloud technologies and software delivery.",
    },
    {
      number: "02",
      title: "Front End Development Internship",
      issuer: "Wynxio Technologies",
      desc: "Hands-on experience in frontend development, React.js, responsive UI development and modern web application practices.",
    },
    {
      number: "03",
      title: "Developer Essentials",
      issuer: "Kerala Blockchain Academy",
      desc: "Certification covering essential concepts and fundamentals related to modern software and blockchain technologies.",
    },
  ];

  const projects = [
    {
      title: "Kanzas Tours & Travels",
      category: "Fullstack",
      url: "kanzastours.com",
      link: "https://www.kanzastours.com",
      desc: "Tourism site for Lakshadweep travel packages with a JWT-secured admin dashboard, MongoDB enquiries, and SEO routing.",
      tags: ["Next.js", "React.js", "MongoDB", "JWT"],
    },
    {
      title: "Wyntees E-Commerce",
      category: "Fullstack",
      url: "wyntees.in",
      link: "https://www.wyntees.in",
      desc: "Full-stack Cash-on-Delivery T-shirt store with product/category CRUD, JWT-secured admin login, and order management.",
      tags: ["Next.js", "TypeScript", "MongoDB"],
    },
    {
      title: "Alma Elite Construction",
      category: "Corporate",
      url: "almaeliteksa.com",
      link: "https://www.almaeliteksa.com",
      desc: "Corporate site for a Saudi-based construction firm featuring dynamic admin content modules and SEO-optimized UI.",
      tags: ["Next.js", "React.js", "MongoDB"],
    },
    {
      title: "Wynxio Corporate Revamp",
      category: "Corporate",
      url: "wynxiotech.com",
      link: "https://www.wynxiotech.com",
      desc: "Migrated the company site from ASP.NET MVC to a modern Next.js/React architecture, boosting performance.",
      tags: ["Next.js", "React.js", "MongoDB"],
    },
    {
      title: "Digital Wedding Invitation",
      category: "Interactive",
      url: "wedding.ssakhildath.com",
      link: "https://wedding.ssakhildath.com",
      desc: "Interactive digital wedding invitation featuring bilingual content, live countdown, RSVP, music, and Kerala-inspired design.",
      tags: ["React.js", "TypeScript", "Tailwind", "Vite"],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeTab.toLowerCase(),
        );

  return (
    <div className={`${darkMode ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"} font-sans min-h-screen relative overflow-x-hidden selection:bg-orange-500 selection:text-white transition-colors duration-300`}>
      {/* 42Square Interactive Canvas Dots Background */}
      <GridCanvas />

      {/* Announcement Bar */}
      <div className="relative z-50 bg-slate-900 text-white text-center py-2.5 px-4 text-xs font-medium flex justify-center items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
        <span>Building Out Loud</span>
        <span className="text-slate-600">•</span>
        <a href="#projects" className="text-orange-400 hover:underline">
          Explore Production Projects &rarr;
        </a>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 ${darkMode ? "bg-slate-950/80 border-slate-800" : "bg-white/80 border-slate-100"} backdrop-blur-md border-b transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a
            href="#"
            className={`text-2xl font-black tracking-tighter ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            aneej<span className="text-orange-500">.</span>
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-400">
            <a href="#about" className="hover:text-orange-500 transition">
              About Me
            </a>
            <a href="#experience" className="hover:text-orange-500 transition">
              Experience
            </a>
            <a href="#skills" className="hover:text-orange-500 transition">
              Skills
            </a>
            <a href="#certifications" className="hover:text-orange-500 transition">
              Certifications
            </a>
            <a href="#projects" className="hover:text-orange-500 transition">
              Projects
            </a>
          </div>
          <div className="flex items-center gap-3">
            {/* Dark/Light Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-lg border ${
                darkMode 
                  ? "border-slate-800 bg-slate-900 text-orange-400 hover:bg-slate-800" 
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              } transition`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="https://github.com/aneejrs"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 ${darkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition`}
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/aneej-r-suku-ba6959217/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 ${darkMode ? "text-slate-300 hover:text-blue-400" : "text-slate-600 hover:text-blue-600"} transition`}
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:aneejrs619@gmail.com"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition shadow-sm hidden sm:block"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="relative z-10 pt-20 pb-20 px-6 max-w-5xl mx-auto"
      >
        <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
          Hello World,
        </p>
        <h1 className={`text-5xl md:text-7xl font-extrabold ${darkMode ? "text-white" : "text-slate-900"} tracking-tight leading-none mb-8`}>
          Find the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
            escape velocity
          </span>{" "}
          of your ideas
        </h1>
        <p className={`text-xl ${darkMode ? "text-slate-300" : "text-slate-600"} max-w-3xl leading-relaxed mb-6`}>
          I'm <strong>Aneej R Suku</strong>, a React & Next.js Frontend
          Developer. I build high-performance, scalable web applications,
          responsive UIs, and full-stack solutions.
        </p>
        <p className={`text-base ${darkMode ? "text-slate-400" : "text-slate-500"} max-w-3xl leading-relaxed mb-10`}>
          Bringing diverse professional experience across frontend development,
          business operations, data processing, and client relationship
          management.
        </p>

        <div className="flex gap-4 flex-wrap items-center mb-16">
          <a
            href="#projects"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg shadow-orange-500/20 transition"
          >
            View Projects
          </a>
          {/* Direct download link from public/ folder */}
          <a
            href="/Aneej_R_Suku_Developer_Resume.pdf"
            download="Aneej_R_Suku_Developer_Resume.pdf"
            className={`font-bold px-8 py-4 rounded-lg transition border ${
              darkMode 
                ? "bg-slate-900 border-slate-800 text-white hover:bg-slate-800" 
                : "bg-slate-100 border-slate-200 text-slate-900 hover:bg-slate-200"
            }`}
          >
            Download Resume
          </a>
        </div>

        {/* About Me Summary Card */}
        <div className={`p-8 md:p-10 rounded-3xl border ${darkMode ? "bg-slate-900/90 border-slate-800 shadow-2xl" : "bg-white border-slate-200/80 shadow-lg"} relative overflow-hidden transition-colors duration-300`}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
          <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">
            About Me
          </p>
          <h3 className={`text-2xl md:text-3xl font-extrabold ${darkMode ? "text-white" : "text-slate-900"} mb-6`}>
            Turning ideas into useful products.
          </h3>
          <p className={`${darkMode ? "text-slate-300" : "text-slate-600"} text-base md:text-lg leading-relaxed mb-6`}>
            I'm a frontend developer passionate about creating modern,
            responsive and intuitive web experiences. My primary focus is
            React.js and Next.js, with experience building reusable components,
            responsive interfaces, dashboards and API-driven applications.
          </p>
          <p className={`${darkMode ? "text-slate-300" : "text-slate-600"} text-base md:text-lg leading-relaxed mb-8`}>
            I enjoy solving practical problems through clean code, thoughtful UI
            and modern frontend technologies.
          </p>

          <div className={`grid md:grid-cols-3 gap-6 pt-6 border-t ${darkMode ? "border-slate-800" : "border-slate-100"}`}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`font-bold ${darkMode ? "text-white" : "text-slate-900"} text-base mb-1`}>
                  Clean Code
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Reusable and maintainable frontend architecture.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`font-bold ${darkMode ? "text-white" : "text-slate-900"} text-base mb-1`}>
                  Modern UI
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Responsive interfaces built for real users.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`font-bold ${darkMode ? "text-white" : "text-slate-900"} text-base mb-1`}>
                  Problem Solving
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Practical solutions focused on business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`relative z-10 border-y ${darkMode ? "border-slate-800 bg-slate-900/50" : "border-slate-100 bg-slate-50/50"} py-12 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className={`text-4xl font-extrabold ${darkMode ? "text-white" : "text-slate-900"}`}>5+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
              Years Career Span
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-orange-500">1+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
              Year of Frontend Development Experience
            </div>
          </div>
          <div>
            <div className={`text-4xl font-extrabold ${darkMode ? "text-white" : "text-slate-900"}`}>4+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
              Years of Operational & Business Experience
            </div>
          </div>
          <div>
            <div className={`text-4xl font-extrabold ${darkMode ? "text-white" : "text-slate-900"}`}>100%</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
              Quality Standards
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey / Experience Section */}
      <section
        id="experience"
        className="relative z-10 py-24 max-w-5xl mx-auto px-6"
      >
        <div className="mb-16">
          <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">
            Career History
          </p>
          <h2 className={`text-3xl md:text-4xl font-extrabold ${darkMode ? "text-white" : "text-slate-900"}`}>
            Professional Journey
          </h2>
        </div>

        <div className="space-y-8 border-l-2 border-orange-500/30 pl-6 md:pl-10 ml-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200/80"} shadow-sm hover:shadow-md transition`}
            >
              <span className={`absolute -left-[35px] md:-left-[51px] top-8 w-4 h-4 rounded-full bg-orange-500 border-4 ${darkMode ? "border-slate-950" : "border-white"} shadow`} />

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {exp.role}
                  </h3>
                  <p className="text-orange-500 font-semibold text-sm mt-0.5">
                    {exp.company}{" "}
                    <span className="text-slate-400 font-normal">
                      • {exp.location}
                    </span>
                  </p>
                </div>
                <span className={`text-xs font-bold ${darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"} px-3 py-1 rounded-full mt-2 md:mt-0 w-fit`}>
                  {exp.period}
                </span>
              </div>

              <p className={`${darkMode ? "text-slate-300" : "text-slate-600"} text-sm leading-relaxed mt-4`}>
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`relative z-10 py-24 max-w-7xl mx-auto px-6 border-y ${darkMode ? "border-slate-800 bg-slate-900/50" : "border-slate-100 bg-slate-50/50"} transition-colors duration-300`}
      >
        <div className="mb-16">
          <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">
            Technical Proficiency
          </p>
          <h2 className={`text-3xl md:text-4xl font-extrabold ${darkMode ? "text-white" : "text-slate-900"}`}>
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((item, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl border ${darkMode ? "bg-slate-900 border-slate-800 hover:border-orange-500/50" : "bg-white border-slate-200/80 hover:border-orange-500/40"} hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <span
                  className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                    item.level === "Advanced"
                      ? "bg-orange-500/20 text-orange-400"
                      : darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {item.level}
                </span>
                <h3 className={`font-bold ${darkMode ? "text-white" : "text-slate-900"} text-base mt-3`}>
                  {item.name}
                </h3>
              </div>
              <p className="text-xs font-medium text-slate-400 mt-2">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="relative z-10 py-24 max-w-7xl mx-auto px-6"
      >
        <div className="mb-16">
          <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">
            Continuous Learning
          </p>
          <h2 className={`text-3xl md:text-4xl font-extrabold ${darkMode ? "text-white" : "text-slate-900"}`}>
            Certifications
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Professional certifications and continuous learning that complement
            my technical skills and frontend development experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200/80"} hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <span className="text-3xl font-black text-orange-500/40 group-hover:text-orange-500 transition">
                  {cert.number}
                </span>
                <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"} mt-4 mb-2`}>
                  {cert.title}
                </h3>
                <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-4">
                  {cert.issuer}
                </p>
                <p className={`${darkMode ? "text-slate-300" : "text-slate-600"} text-sm leading-relaxed`}>
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Works */}
      <section
        id="projects"
        className={`relative z-10 py-24 max-w-7xl mx-auto px-6 border-t ${darkMode ? "border-slate-800 bg-slate-900/50" : "border-slate-100 bg-slate-50/50"} transition-colors duration-300`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">
              Selected Works
            </p>
            <h2 className={`text-3xl md:text-4xl font-extrabold ${darkMode ? "text-white" : "text-slate-900"}`}>
              Real-World Projects
            </h2>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0">
            {["all", "fullstack", "corporate", "interactive"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition ${
                  activeTab === tab
                    ? "bg-orange-500 text-white"
                    : darkMode ? "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800" : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200/80"} hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"} mt-2 mb-3 group-hover:text-orange-500 transition`}>
                  {project.title}
                </h3>
                <p className={`${darkMode ? "text-slate-300" : "text-slate-600"} text-sm leading-relaxed mb-6`}>
                  {project.desc}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-400 mb-6">
                  {project.tags.map((t, i) => (
                    <span key={i} className={`${darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"} px-3 py-1 rounded-md`}>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-bold text-sm ${darkMode ? "text-white hover:text-orange-400" : "text-slate-900 hover:text-orange-500"} transition`}
                >
                  View Live Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 py-12 border-t ${darkMode ? "border-slate-800 bg-slate-950 text-slate-400" : "border-slate-100 bg-white text-slate-500"} text-center text-sm transition-colors duration-300`}>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/aneejrs"
            target="_blank"
            rel="noopener noreferrer"
            className={`${darkMode ? "text-slate-400 hover:text-white" : "text-slate-400 hover:text-slate-900"} transition`}
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aneej-r-suku-ba6959217/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="mailto:aneejrs619@gmail.com"
            className="text-slate-400 hover:text-orange-500 transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className={`font-bold ${darkMode ? "text-white" : "text-slate-900"} text-base mb-1`}>Don't Panic</p>
        <p>© 2026 Aneej R Suku • All rights reserved</p>
      </footer>
    </div>
  );
}