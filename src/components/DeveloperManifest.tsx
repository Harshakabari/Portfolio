import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Github, Linkedin, Mail, Code2, Briefcase, User,
  GraduationCap, FolderOpen, MessageSquare, ExternalLink, Clock as ClockIcon,
  ShieldCheck, Terminal, Cpu, Globe, Zap, Sun, Moon, Monitor, FileDown
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiNextdotjs,
  SiMongodb, SiHtml5, SiCss3, SiPostgresql, SiPython, SiCplusplus,
  SiTailwindcss, SiDocker, SiGit, SiNginx, SiRedux, SiPostman, SiBootstrap, SiSupabase, SiAmazon, SiX,
  SiPrisma, SiDrizzle, SiReactquery, SiOpenai
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

// --- Helpers ---
const playClick = () => {
  try {
    const AudioContextClass = (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
    const audioContext = new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.04);

    gain.gain.setValueAtTime(0.08, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.04);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.04);
  } catch (e) {
    console.error("Audio not supported or interaction required");
  }
};

// --- Real Data ---
const PROJECTS = [
  {
    title: "Study Notion",
    desc: "An EdTech platform facilitating targeted advertising by analyzing user behavior. Built with dynamic content delivery and real-time data processing.",
    href: "https://github.com/Harshakabari/studynotion",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Career Hub",
    desc: "Comprehensive job portal featuring advanced search filters, secure authentication, and an intuitive dashboard for recruiters and job seekers.",
    href: "https://github.com/Harshakabari/Career-Hub",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Daily Digest",
    desc: "Dynamic news application providing a curated selection of daily articles with an efficient management system for staying updated.",
    href: "https://github.com/Harshakabari/Daily-Digest",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
];

const EXPERIENCES = [
  {
    company: "nftech",
    designation: "Full Stack Developer",
    startDate: "Nov 2025",
    endDate: "Present",
    desc: "Led the transition of the platform from a single-tenant to a multi-tenant architecture, including structured data migration, tenant isolation, and schema-level design to support scalable growth. Designed and implemented a secure authentication and authorization system (JWT-based with role-based access control) to manage tenant-level permissions. Built and optimized scalable backend services and complex front-end interfaces, integrating real-time data streaming for enhanced user experience. Improved overall system performance through query optimization, efficient state management, and scalable API design for high-traffic environments.",
    stack: ["React.js", "TypeScript", "Supabase", "Redux", "AWS", "Multi-Tenant Architecture", "JWT Auth", "RBAC"],
  },
  {
    company: "Ywork.ai",
    designation: "Full Stack Developer",
    startDate: "May 2025",
    endDate: "Oct 2025",
    desc: "Played a key role in building and optimizing the core platform by developing dynamic and scalable front-end applications. Designed and implemented complex UI components using Next.js and Redux, ensuring efficient state management and seamless user experience. Integrated real-time features using WebSockets to enable live updates and improve interactivity. Collaborated closely with backend teams to integrate REST APIs, ensuring data consistency and smooth client-server communication. Focused on performance optimization, responsiveness, and maintaining high-quality production standards.",
    stack: ["Next.js", "Redux", "WebSockets", "REST APIs", "Performance Optimization"],
  },
  {
    company: "Tatvasoft",
    designation: "Full Stack Developer Intern",
    startDate: "Jan 2025",
    endDate: "April 2025",
    desc: "Developed a full-stack Kitchen Order Ticket (KOT) system called 'PizzaShop' to streamline restaurant operations and order management. Designed and implemented the application architecture using .NET MVC and PostgreSQL, ensuring efficient communication between frontend and backend. Built features for real-time order tracking, kitchen coordination, and status updates to improve operational efficiency. Gained hands-on experience in end-to-end development, database design, and deploying production-ready applications.",
    stack: [".NET MVC", "PostgreSQL", "System Design", "API Development"],
  },
];

const SKILLS = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Javascript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React Js", Icon: SiReact },
  { name: "NextJs", Icon: SiNextdotjs },
  { name: "Redux", Icon: SiRedux },
  { name: "Node Js", Icon: SiNodedotjs },
  { name: "Express Js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Supabase", Icon: SiSupabase },
  { name: "TanStack Query", Icon: SiReactquery },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Drizzle ORM", Icon: SiDrizzle },
  { name: "Generative AI", Icon: SiOpenai },
  { name: "AWS", Icon: SiAmazon },
  { name: "Git", Icon: SiGit },
  { name: "Postman", Icon: SiPostman },
];

const TESTIMONIALS = [
  {
    text: "Manu is so great with his work, our production was shut down within the first day itself. Highly recommended.",
    author: "Elon Musk",
  },
  {
    text: "Working with Manu was a game-changer for our startup. His technical expertise and problem-solving skills are unmatched.",
    author: "Mark Zuckerberg",
  },
  {
    text: "Manu delivered our project ahead of schedule and exceeded all expectations. His attention to detail is remarkable.",
    author: "Sundar Pichai",
  },
  {
    text: "The quality of Manu's code is exceptional. He built a scalable solution that has been critical to our business growth.",
    author: "Jeff Bezos",
  },
];

type TabType = "HOME" | "SKILLS" | "EXPERIENCE" | "PROJECTS" | "ABOUT" | "CONTACT";

const DeveloperManifest = ({ id }: { id?: string }) => {
  const [activeTab, setActiveTab] = useState<TabType>("HOME");
  const contentRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tabs: TabType[] = ["HOME", "SKILLS", "EXPERIENCE", "PROJECTS", "ABOUT", "CONTACT"];

  const handleSetTheme = (newTheme: string) => {
    setTheme(newTheme);
    playClick();
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    playClick();
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id={id} className="w-full max-w-7xl mx-auto p-4 md:p-8 transition-colors duration-500">
      <div className="border-[4px] md:border-[6px] border-border bg-card text-card-foreground font-mono overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] dark:shadow-[15px_15px_0px_0px_rgba(255,255,255,0.15)] sm:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 border-b-[4px] md:border-b-[6px] border-border dark:bg-black/40">
          <div className="flex flex-col w-full md:w-auto">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-2 text-center md:text-left">
              Developer Identity
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
              <p className="text-[10px] md:text-xs font-bold opacity-70 dark:opacity-90 flex items-center gap-2">
                <Zap size={14} className="text-yellow-600 dark:text-yellow-400 shrink-0" /> SYSTEM_REV_4.2_STABLE // HARSH_AKABARI
              </p>
              <div className="flex items-center gap-2 bg-primary px-2 py-0.5 text-[9px] font-black text-primary-foreground uppercase animate-pulse">
                <Briefcase size={10} /> FREELANCE: OPEN_FOR_ORDERS
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right flex flex-col items-center md:items-end gap-3">
            <div className="flex flex-col items-center md:items-end">
              {/* <span className="text-lg md:text-2xl font-black uppercase tracking-widest leading-none">
                KANBAN // HARS
              </span> */}
              <div className="flex gap-4 mt-2">
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-bold opacity-50 uppercase">STABLE</span>
                  <div className="w-12 h-1 bg-black/20 dark:bg-white/20 mt-1">
                    <div className="w-full h-full bg-green-500" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-bold opacity-50 uppercase">ACTIVE</span>
                  <div className="w-12 h-1 bg-black/20 dark:bg-white/20 mt-1">
                    <div className="w-3/4 h-full bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Integrated Theme Toggle */}
            <div className="flex items-center gap-1.5 p-1 bg-black/5 dark:bg-white/5 border-[2px] border-border">
              <button
                onClick={() => handleSetTheme("light")}
                className={`p-1.5 transition-all ${theme === "light" ? "bg-black text-white dark:bg-white dark:text-black" : "hover:bg-black/10 dark:hover:bg-white/10"}`}
                title="Light Mode"
              >
                <Sun size={14} />
              </button>
              <button
                onClick={() => handleSetTheme("dark")}
                className={`p-1.5 transition-all ${theme === "dark" ? "bg-black text-white dark:bg-white dark:text-black" : "hover:bg-black/10 dark:hover:bg-white/10"}`}
                title="Dark Mode"
              >
                <Moon size={14} />
              </button>
              <button
                onClick={() => handleSetTheme("system")}
                className={`p-1.5 transition-all ${theme === "system" ? "bg-black text-white dark:bg-white dark:text-black" : "hover:bg-black/10 dark:hover:bg-white/10"}`}
                title="System Preference"
              >
                <Monitor size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Info Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b-[4px] border-border text-[9px] md:text-xs dark:bg-black/10">
          <div className="p-3 border-r-[2px] border-b-[2px] md:border-b-0 border-border md:[&:nth-child(2)]:border-r-[2px]">
            <p className="uppercase opacity-70 mb-1 flex items-center gap-1"><Cpu size={10} /> Origin</p>
            <p className="font-black uppercase truncate">FS-ENG-STACK</p>
          </div>
          <div className="p-3 border-b-[2px] md:border-b-0 md:border-r-[2px] border-border">
            <p className="uppercase opacity-70 mb-1 flex items-center gap-1"><Globe size={10} /> Target</p>
            <p className="font-black uppercase truncate">GLOBAL-V4.NET</p>
          </div>
          <div className="p-3 border-r-[2px] border-border">
            <p className="uppercase opacity-70 mb-1">Status</p>
            <p className="font-black uppercase text-green-600 dark:text-green-400 flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse shrink-0" /> ONLINE
            </p>
          </div>
          <div className="p-3 border-border">
            <p className="uppercase opacity-70 mb-1">UID_VERIF</p>
            <p className="font-black uppercase tracking-tight truncate">AKB-998-ALPHA</p>
          </div>
        </div>

        {/* Directory Navigation */}
        <div className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 text-[9px] font-black uppercase tracking-[0.2em] border-b-[2px] border-black">
          Directory Routing Array // Internal_Control
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border-t-[4px] border-border text-center overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`py-3 md:py-4 transition-all uppercase font-black text-[9px] md:text-xs tracking-tighter relative group overflow-hidden border-b-[2px] border-border 
                border-r-[2px] 
                [&:nth-child(2n)]:border-r-0 
                sm:[&:nth-child(2n)]:border-r-[2px] sm:[&:nth-child(3n)]:border-r-0 
                md:[&:nth-child(3n)]:border-r-[2px] md:[&:nth-child(6n)]:border-r-0 
                ${activeTab === tab
                ? "bg-black text-white dark:bg-white dark:text-black shadow-inner"
                : "hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/20"
                }`}
            >
              {activeTab === tab && (
                <motion.div layoutId="activeUnderline" className="absolute left-0 right-0 bottom-0 h-0.5 bg-current mx-2 md:mx-4" />
              )}
              {tab}
              <span className="absolute top-0.5 right-0.5 text-[7px] opacity-30 md:opacity-0 md:group-hover:opacity-100 dark:md:group-hover:opacity-80 transition-opacity">.{tabs.indexOf(tab) + 1}</span>
            </button>
          ))}
        </div>

        {/* Main Interface Content */}
        <div ref={contentRef} className="min-h-[450px] flex flex-col relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="flex-1"
            >
              {activeTab === "HOME" && (
                <div className="flex flex-col h-full">
                  {/* Top Row: Name + Image */}
                  <div className="flex flex-col lg:flex-row border-b-[4px] border-border items-stretch">
                    <div className="flex-1 p-6 md:p-12 flex flex-col justify-center bg-card">
                      <p className="text-[10px] font-black opacity-70 uppercase mb-4 tracking-[3px]">— Primary Identifier</p>
                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                        Harsh Akabari
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-lg md:text-2xl font-black uppercase text-yellow-600 dark:text-yellow-400 italic">
                        <span className="whitespace-nowrap">Software Engineer</span>
                        <span className="opacity-20 text-black dark:text-white font-light tracking-[0.2em] hidden sm:inline">// 0xC4.01</span>
                      </div>
                    </div>

                    <div className="hidden lg:flex w-[202.5px] lg:border-l-[6px] border-border overflow-hidden grayscale transition-all duration-700 hover:grayscale-0 relative group">
                      <img
                        src="/portrait.jpeg"
                        alt="Harsh Akabari"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent" />
                    </div>
                  </div>

                  {/* Bottom Row: Specs + Socials (Full Width) */}
                  <div className="p-6 md:p-12 space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                      <div className="lg:col-span-8">
                        <p className="text-[11px] font-black opacity-60 uppercase mb-4 italic">Specifications</p>
                        <p className="text-sm md:text-lg leading-relaxed font-black uppercase max-w-4xl tracking-tight">
                          Full-stack specialist focused on building scalable, production-ready applications. Experienced in solving complex problems through robust system design, clean and maintainable code, and reliable architectures that deliver efficient, real-world solutions.
                        </p>
                      </div>

                      <div className="lg:col-span-4 flex flex-col justify-end gap-6">
                        <a
                          href="/resume.pdf"
                          download="Harsh_Akabari_Resume.pdf"
                          onClick={() => playClick()}
                          className="group border-[3px] border-border hover:bg-foreground hover:text-background transition-all px-8 py-4 text-left flex items-center justify-between gap-3 bg-transparent active:scale-95 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1 w-full"
                        >
                          <span className="text-xs font-black uppercase tracking-widest leading-none">FETCH_RESUME_BLOB</span>
                          <FileDown size={20} className="group-hover:translate-y-1 transition-transform shrink-0" />
                        </a>
                      </div>
                    </div>

                    <div className="pt-12 border-t border-black/10 dark:border-white/10">
                      <p className="text-[10px] font-black opacity-40 uppercase mb-6 tracking-widest italic">Social_Mesh_Nodes</p>
                      <div className="flex flex-wrap gap-4 md:gap-6">
                        {[
                          { icon: Github, link: "https://github.com/harshakabari", name: "GitHub" },
                          { icon: Linkedin, link: "https://linkedin.com/in/harshakabari", name: "LinkedIn" },
                          { icon: SiX, link: "https://x.com/hars_o5", name: "X" }
                        ].map((social) => (
                          <a
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 border-[3px] border-border hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1 group"
                          >
                            <social.icon size={22} className="group-hover:rotate-12 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{social.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "SKILLS" && (
                <div className="p-6 md:p-12">
                  <p className="text-[11px] font-black opacity-60 uppercase mb-6 underline">Modular_Stack</p>
                  <h3 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tight">Tech Stack</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                    {SKILLS.map((skill) => (
                      <div key={skill.name} className="border-[2px] md:border-[3px] border-border p-4 flex flex-col items-center justify-center gap-2 bg-muted/50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                        <skill.Icon className="text-2xl md:text-3xl" />
                        <span className="text-[9px] md:text-[10px] font-black uppercase text-center leading-none">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "EXPERIENCE" && (
                <div className="p-6 md:p-12">
                  <p className="text-[11px] font-black opacity-60 uppercase mb-6 underline">Career_Log</p>
                  <h3 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tight">Timeline</h3>
                  <div className="flex flex-col gap-8">
                    {EXPERIENCES.map((exp, i) => (
                      <div key={i} className="group border-[4px] border-border p-6 relative hover:bg-muted/50 transition-colors">
                        <div className="absolute -top-3 left-6 bg-black text-white dark:bg-white dark:text-black px-3 py-0.5 font-black text-[10px] italic">
                          REF_L0{EXPERIENCES.length - i}
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                          <div className="flex items-center gap-4">
                            <div>
                              <h4 className="text-xl md:text-3xl font-black uppercase leading-none mb-1">{exp.company}</h4>
                              <p className="text-xs font-black text-yellow-600 dark:text-yellow-400 uppercase italic">{exp.designation}</p>
                            </div>
                          </div>
                          <p className="mt-2 md:mt-0 font-black text-[10px] md:text-xs border-2 border-border px-3 py-1 bg-muted/50 uppercase whitespace-nowrap">
                            {exp.startDate} — {exp.endDate}
                          </p>
                        </div>
                        <p className="text-sm font-bold leading-[1.3] mb-6 max-w-4xl uppercase opacity-90">{exp.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.stack.map(s => <span key={s} className="text-[9px] font-black border border-border px-2 py-0.5">{s}</span>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "PROJECTS" && (
                <div className="p-6 md:p-12">
                  <p className="text-[11px] font-black opacity-60 uppercase mb-6 underline">Active_Units</p>
                  <h3 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tight">Deployed</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((proj, i) => (
                      <div key={i} className="border-[3px] md:border-[4px] border-border bg-muted/50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col">
                        <div className="aspect-video bg-muted/50 border-b-[3px] border-border overflow-hidden relative group">
                          <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 shadow-lg" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60">
                            <a href={proj.href} onClick={(e) => { e.stopPropagation(); playClick(); }} className="border-2 border-white p-2 text-white font-black text-xs hover:bg-white hover:text-black transition-all">CODE_VIEW</a>
                          </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <h4 className="text-lg font-black uppercase mb-2 leading-none italic">{proj.title}</h4>
                          <p className="text-[10px] font-bold opacity-80 leading-tight mb-4 uppercase line-clamp-3">{proj.desc}</p>
                          <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-black/10 dark:border-white/10">
                            {proj.tags.map(t => <span key={t} className="text-[8px] bg-foreground text-background px-1.5 py-0.5 font-black uppercase tracking-tighter">{t}</span>)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "ABOUT" && (
                <div className="p-6 md:p-12">
                  <p className="text-[11px] font-black opacity-60 uppercase mb-6 underline">Subject_ID</p>
                  <h3 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tight">About</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-12">
                      <div className="text-lg md:text-2xl font-black uppercase leading-none space-y-8 py-4">
                        <p className="border-l-[6px] border-yellow-500 pl-6 italic">Transforming ideas into impactful digital experiences through robust engineering.</p>
                        <p className="text-sm md:text-base lowercase leading-snug">Deeply committed to excellence and delivering production-ready solutions. Collaborative team player focused on achieving collective success through continuous learning and innovative web development.</p>
                      </div>

                      <div className="border-[4px] border-border p-6 bg-muted/30">
                        <p className="text-[11px] font-black opacity-60 uppercase mb-6 flex items-center gap-2 italic">
                          <GraduationCap size={16} /> Academic_Uplink
                        </p>
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xl font-black uppercase tracking-tighter leading-none mb-1">Bachelor of Technology</h4>
                            <p className="text-[10px] font-black opacity-70 uppercase mb-2">Computer Engineering // LDRP-IT</p>
                            <div className="flex flex-wrap gap-3">
                              <span className="text-[11px] font-black bg-foreground text-background px-3 py-0.5 italic">2021_2025</span>
                              <span className="text-[11px] font-black bg-primary text-primary-foreground px-3 py-0.5 italic">8.07_CGPA</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-8">
                      <div className="border-[6px] border-border p-6 md:p-8 bg-foreground text-background flex flex-col justify-between h-fit">
                        <div>
                          <p className="text-[10px] font-black mb-4 flex items-center gap-2 italic tracking-widest leading-none text-background/60">
                            <ShieldCheck size={24} className="shrink-0" /> AUTH_V_AKABARI
                          </p>
                          <h5 className="text-3xl font-black uppercase italic tracking-tighter leading-none mb-6">Experience Certified_</h5>
                        </div>
                        <div className="space-y-2 opacity-60 font-black text-[9px] uppercase">
                          <p>— COLLABORATIVE_MINDSET :: TRUE</p>
                          <p>— DEPLOYMENT_READY :: AWS/VERCEL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "CONTACT" && (
                <div className="p-6 md:p-12">
                  <p className="text-[11px] font-black opacity-60 uppercase mb-6 underline">Comm_Logic</p>
                  <h3 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tight">Initiate Uplink</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Primary Email Channel */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                      <div className="border-[4px] border-border p-6 md:p-10 bg-foreground text-background flex flex-col justify-between group transition-all hover:opacity-90 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.15)] relative overflow-hidden h-full">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 dark:bg-black/5 -mr-16 -mt-16 rotate-45 pointer-events-none" />
                        <div className="flex justify-between items-start mb-12 z-10">
                          <div className="bg-white/10 dark:bg-black/10 p-4 border border-current">
                            <Mail size={40} />
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] font-black uppercase border-2 border-border px-3 py-1 bg-primary text-primary-foreground">PRIORITY_UPLINK</span>
                            <p className="text-[8px] font-black opacity-40 mt-2 italic uppercase">Est_Response: &lt; 24H</p>
                          </div>
                        </div>
                        <div className="z-10">
                          <p className="text-[11px] font-black uppercase opacity-60 mb-2 tracking-[0.3em] italic">Protocol :: Secure_Email</p>
                          <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter truncate mb-10 selection:bg-primary selection:text-primary-foreground">HARSHAKABARI7@GMAIL.COM</h4>
                          <a
                            href="mailto:harshakabari7@gmail.com"
                            onClick={() => playClick()}
                            className="inline-flex items-center gap-4 bg-background text-foreground px-8 py-4 text-xs md:text-sm font-black uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] transition-all group/btn border-2 border-border"
                          >
                            Execute_Command: Send_Mail
                            <ArrowRight size={20} className="group-hover/btn:translate-x-3 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Meta Channels */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                      <div className="border-[3px] border-border p-6 bg-muted/50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full">
                        <p className="text-[10px] font-black opacity-50 uppercase mb-4 flex items-center gap-2 italic"><Globe size={12} /> GEO_LOCATION</p>
                        <p className="text-xl font-black uppercase italic leading-none">Gujarat, India</p>
                        <p className="text-[9px] font-bold opacity-60 mt-3 uppercase tracking-tighter border-t border-black/10 dark:border-white/10 pt-2">Availability: Remote / Hybrid // Worldwide</p>
                      </div>
                      <div className="border-[3px] border-border p-6 bg-muted/50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full">
                        <p className="text-[10px] font-black opacity-50 uppercase mb-4 flex items-center gap-2 italic"><ShieldCheck size={12} /> VOICE_PROTOCOL</p>
                        <p className="text-xl font-black uppercase italic leading-none">+91 88661-87179</p>
                        <p className="text-[9px] font-bold opacity-60 mt-3 uppercase tracking-tighter border-t border-black/10 dark:border-white/10 pt-2">Encryption: RSA_AES_256_STABLE</p>
                      </div>
                    </div>

                    {/* Full Width Terminal */}
                    <div className="lg:col-span-12">
                      <div className="border-[4px] border-border bg-neutral-900 p-6 font-mono text-[10px] md:text-[11px] leading-relaxed relative overflow-hidden group shadow-[10px_10px_0px_0px_rgba(0,0,1,0.1)]">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-green-500/30 animate-pulse z-20" style={{ animationDuration: '2s' }} />
                        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-3">
                          <div className="flex gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                          </div>
                          <span className="text-[9px] text-white/40 uppercase font-black tracking-widest italic">Comm_Link_Status: ACTIVE // LOG_VAR_STREAM</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2 text-green-400 font-bold overflow-hidden">
                          <p className="flex gap-2"><span className="text-white/20 select-none">[0.01]</span> <span className="text-white">SYS:</span> INITIALIZING_HANDSHAKE...</p>
                          <p className="flex gap-2"><span className="text-white/20 select-none">[0.04]</span> <span className="text-white">SYS:</span> RSA_ENCRYPTION_SET: 2048_BIT</p>
                          <p className="flex gap-2"><span className="text-white/20 select-none">[0.08]</span> <span className="text-white">SYS:</span> UPLINK_STABLE_882MB/S_TLS_1.3</p>
                          <p className="flex gap-2"><span className="text-white/20 select-none">[0.12]</span> <span className="text-white">SYS:</span> HANDSHAKE_VERIFIED: HARSH_UNIT</p>
                          <p className="flex gap-2"><span className="text-white/20 select-none">[0.15]</span> <span className="text-white">SYS:</span> PORT_8080_OPEN_LISTENING</p>
                          <p className="flex gap-2"><span className="text-white/20 select-none">[0.21]</span> <span className="text-white">SYS:</span> FIREWALL_BYPASS_DETECTED... SKIP</p>
                          <p className="flex gap-2"><span className="text-white/20 select-none">[0.28]</span> <span className="text-white">SYS:</span> ENCRYPTED_TUNNEL_ESTABLISHED</p>
                          <p className="flex gap-2"><span className="text-white/20 select-none">[0.35]</span> <span className="text-white">SYS:</span> NODE_LOCATION: GUJARAT_IN</p>
                          <p className="flex gap-2"><span className="text-white/20 select-none">[0.42]</span> <span className="text-white">SYS:</span> DUAL_STACK_IPV6_READY</p>
                          <p className="flex gap-2"><span className="text-white/20 select-none">[0.49]</span> <span className="text-white">SYS:</span> PING_STABILITY: 12MS_EST</p>
                          <p className="flex gap-2 animate-pulse"><span className="text-white/20 select-none">[CUR]</span> <span className="text-white">SYS:</span> WAITING_FOR_UPLINK_INPUT_</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Mesh Nodes */}
                  <div className="mt-16">
                    <div className="flex items-center gap-6 mb-10 overflow-hidden">
                      <p className="text-[11px] font-black opacity-60 uppercase underline shrink-0 italic">Social_Nodes</p>
                      <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {[
                        { name: "_GIT_REPOSITORY", icon: Github, sub: "SOURCE_CONTROL", link: "https://github.com/harshakabari" },
                        { name: "_LINKED_UPLINK", icon: Linkedin, sub: "PROFESSIONAL_NET", link: "https://linkedin.com/in/harshakabari" },
                        { icon: SiX, name: "_X_TERMINAL", sub: "SOCIAL_MESH", link: "https://x.com/hars_o5" }
                      ].map((social) => (
                        <a
                          key={social.name}
                          href={social.link}
                          target="_blank"
                          onClick={() => playClick()}
                          className="group border-[4px] border-border p-8 flex flex-col gap-10 transition-all bg-muted/50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-foreground hover:text-background"
                        >
                          <div className="flex justify-between items-start text-inherit">
                            <social.icon size={44} className="group-hover:scale-110 group-hover:rotate-6 transition-all" />
                            <div className="p-1 border-2 border-border opacity-20 group-hover:opacity-100">
                              <ExternalLink size={16} />
                            </div>
                          </div>
                          <div className="text-inherit">
                            <p className="text-[10px] font-black uppercase opacity-40 mb-2 italic tracking-tighter group-hover:text-inherit group-hover:opacity-60">{social.sub}</p>
                            <span className="text-xl md:text-2xl font-black uppercase underline decoration-4 underline-offset-8 tracking-widest leading-none italic">{social.name}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Status Feedback */}
        {/* <div className="bg-foreground text-background px-6 py-1.5 text-[8px] md:text-[9px] font-black uppercase border-t-[4px] border-border flex justify-between items-center">
          <div className="flex items-center gap-4 truncate mr-2">
            <span className="truncate">Routing_Status :: {activeTab}_INITIALIZED</span>
            <span className="hidden sm:inline opacity-40">|</span>
            <span className="hidden sm:inline animate-pulse">AVAILABILITY :: ACCEPTING_ORDERS</span>
          </div>
          <span className="animate-pulse shrink-0">STABLE_V4.2</span>
        </div> */}

        {/* Testimonials Global Marquee - NOW INSIDE THE CARD */}
        {/* <div className="py-6 border-t-[4px] border-border bg-muted/50 overflow-hidden relative">
          <div className="flex animate-marquee-slower whitespace-nowrap gap-12 md:gap-20 items-stretch h-24 md:h-32">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="flex flex-col justify-between min-w-[280px] md:min-w-[400px] py-1 border-l-2 border-black/10 dark:border-white/10 pl-6">
                <p className="text-[11px] md:text-sm italic font-black uppercase leading-tight whitespace-normal line-clamp-3">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="h-[1px] w-6 bg-black dark:bg-white opacity-30" />
                  <p className="text-[9px] font-black uppercase opacity-60 tracking-widest">
                    {t.author.replace(' ', '_')}_UNIT
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}


        {/* Barcode / Asset Identifier */}
        <div className="p-6 md:p-8 border-t-[4px] border-border flex flex-col items-center group relative">
          <div className="w-full flex justify-center gap-[1px] h-12 md:h-16 mb-4 items-stretch opacity-90">
            {/* Generating a "Meaningful" variable-width barcode */}
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="bg-foreground h-full transition-all duration-300 group-hover:opacity-70"
                style={{
                  width: `${[2, 1, 4, 1, 2, 6, 1, 3, 2, 1][i % 10]}px`,
                  opacity: i % 7 === 0 ? 0.3 : 1
                }}
              />
            ))}
          </div>
          <p className="text-[7px] md:text-sm tracking-[0.2em] sm:tracking-[0.6em] md:tracking-[0.8em] font-black uppercase opacity-80 flex items-center gap-2 md:gap-4 truncate px-2 text-center">
            § H R S H - A K B R - F S D - 2 0 2 6 §
          </p>
          <div className="absolute top-2 right-4 text-[8px] font-black opacity-20 group-hover:opacity-100 transition-opacity uppercase">
            Encrypted_Asset_ID // 0x45B2C
          </div>
        </div>


        {/* System Terminal Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 font-black uppercase text-[9px] border-t-[4px] border-border overflow-hidden">
          <div className="p-4 flex flex-col justify-center border-r-[2px] md:border-r-[4px] border-b-2 md:border-b-0 border-border">
            <p className="opacity-40 mb-1 italic leading-none">Network</p>
            <div className="flex items-center gap-2 truncate">
              <Globe size={14} className="text-blue-500 animate-spin-slow shrink-0" />
              <span className="truncate">SECURE_ACTIVE</span>
            </div>
          </div>
          <div className="p-4 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-[4px] border-border">
            <p className="opacity-40 mb-1 italic leading-none">Clock</p>
            <Clock />
          </div>
          <div className="p-4 flex flex-col justify-center border-r-[2px] md:border-r-[4px] border-border">
            <p className="opacity-40 mb-1 italic leading-none">Encryption</p>
            <div className="flex items-center gap-2 truncate">
              <ShieldCheck size={14} className="text-green-500 shrink-0" />
              <span className="truncate">AES_VALID</span>
            </div>
          </div>
          <div className="p-4 flex items-center justify-center md:justify-end">
            <div className="w-10 h-10 grid grid-cols-4 grid-rows-4 gap-0.5 transform scale-110 shrink-0 text-foreground dark:text-white">
              {[...Array(16)].map((_, i) => (
                <div key={i} className={`${(i + Math.floor(i / 4)) % 2 === 0 ? 'bg-current' : 'bg-transparent'} w-full h-full animate-pulse`}
                  style={{ animationDelay: `${i * 0.08}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-slower {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slower {
          animation: marquee-slower 45s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex items-center gap-2 truncate">
      <ClockIcon size={14} className="text-red-500 shrink-0" />
      <span className="text-[10px] font-black tracking-widest truncate">{time.toLocaleTimeString()} [UTC+5:30]</span>
    </div>
  );
}

export default DeveloperManifest;
