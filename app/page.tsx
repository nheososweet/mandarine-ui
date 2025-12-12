"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Terminal,
  Download,
  Briefcase,
  Cpu,
  ArrowUpRight,
  Layers,
  Calendar,
  Phone,
  MapPin,
  Camera,
  Coffee,
  Building2,
  Trophy,
  Home,
  User,
  ShoppingCart,
  Globe,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// --- REACT BITS IMPORTS ---
import Squares from "@/components/Squares";
import SpotlightCard from "@/components/SpotlightCard";
import TiltedCard from "@/components/TiltedCard";
import DecryptedText from "@/components/DecryptedText";
import ShinyText from "@/components/ShinyText";
import CountUp from "@/components/CountUp";
import StarBorder from "@/components/StarBorder";
import Dock from "@/components/Dock";
import BlurText from "@/components/BlurText";
import ClickSpark from "@/components/ClickSpark";
import TextType from "@/components/TextType";
import GradientText from "@/components/GradientText";

// --- DATA ---
const PROFILE = {
  name: "Nheo So Sweet",
  role: "Fullstack Developer & AI Engineer",
  bio: "Lập trình viên Fullstack với tư duy sản phẩm. Tôi xây dựng các giải pháp công nghệ toàn diện, từ Backend vững chắc đến giao diện Next.js tinh tế và tích hợp AI thông minh.",
  details: {
    dob: "03/02/2001",
    phone: "0362.660.565",
    email: "tannv.3201@gmail.com",
    address: "Cầu Giấy, Hà Nội",
  },
  hobbies: [
    { name: "Anime/Manga", icon: <Layers className="w-3 h-3" /> },
    { name: "Photography", icon: <Camera className="w-3 h-3" /> },
    { name: "AI Research", icon: <Cpu className="w-3 h-3" /> },
    { name: "Coffee", icon: <Coffee className="w-3 h-3" /> },
  ],
  stats: [
    { label: "Years Exp", value: 3 },
    { label: "Projects", value: 35 }, // Tăng số lượng project
  ],
};

const WORK_HISTORY = [
  {
    company: "AI Global Tech",
    role: "Senior Frontend Developer",
    period: "2024 - Present",
    desc: "Lead team Frontend 5 người. Phát triển hệ thống RAG Chatbot nội bộ giúp giảm 40% thời gian tra cứu tài liệu.",
    tech: "Next.js 14, LangChain, Python",
  },
  {
    company: "Smart Solutions JSC",
    role: "Frontend Developer",
    period: "2022 - 2024",
    desc: "Xây dựng 10+ Landing Page chuyển đổi cao và hệ thống CRM quản lý khách hàng. Tối ưu Core Web Vitals đạt 95+ điểm.",
    tech: "React, Tailwind, Redux",
  },
  {
    company: "Freelance & Startup",
    role: "Fullstack Developer",
    period: "2021 - 2022",
    desc: "Tham gia phát triển MVP cho các startup về E-commerce và Booking. Xây dựng API với FastAPI.",
    tech: "Vue.js, FastAPI, PostgreSQL",
  },
];

// FIX 2 & FIX 1: Mockup nhiều project & Đổi màu sang RGBA chuẩn
const PROJECTS = [
  {
    title: "DreamStream GenAI",
    desc: "Nền tảng tạo ảnh nghệ thuật từ văn bản sử dụng Stable Diffusion và ControlNet.",
    tag: "Generative AI",
    tech: "Python • PyTorch • React",
    color: "rgba(236, 72, 153, 0.15)", // Pink
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Voice Command Hub",
    desc: "Trợ lý ảo điều khiển Smart Home bằng giọng nói tiếng Việt độ trễ thấp.",
    tag: "AI / Voice",
    tech: "Next.js • Whisper API",
    color: "rgba(59, 130, 246, 0.15)", // Blue
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Crypto Analytics Pro",
    desc: "Dashboard theo dõi thị trường Crypto realtime với biểu đồ nến và AI dự đoán.",
    tag: "Web3",
    tech: "Next.js • Recharts • WebSocket",
    color: "rgba(16, 185, 129, 0.15)", // Emerald
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Kimetsu RAG Knowledge",
    desc: "Hệ thống hỏi đáp thông minh về Anime sử dụng Vector Database và LLM.",
    tag: "RAG System",
    tech: "LangChain • Pinecone • FastAPI",
    color: "rgba(168, 85, 247, 0.15)", // Purple
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Banking Microservices",
    desc: "Hệ thống backend xử lý giao dịch ngân hàng chịu tải cao (10k TPS).",
    tag: "Backend",
    tech: "Go • Kafka • Docker",
    color: "rgba(245, 158, 11, 0.15)", // Amber
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "SaaS Marketing Page",
    desc: "Landing page chuyển đổi cao với hiệu ứng 3D Interactive.",
    tag: "UI/UX",
    tech: "React • Framer Motion • Spline",
    color: "rgba(6, 182, 212, 0.15)", // Cyan
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cyber Security Monitor",
    desc: "Dashboard giám sát an ninh mạng và phát hiện tấn công DDoS.",
    tag: "Security",
    tech: "Elasticsearch • Kibana",
    color: "rgba(239, 68, 68, 0.15)", // Red
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Social Connect App",
    desc: "Mạng xã hội nội bộ cho doanh nghiệp tích hợp Video Call.",
    tag: "Fullstack",
    tech: "WebRTC • Socket.io • Node.js",
    color: "rgba(99, 102, 241, 0.15)", // Indigo
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
  },
];

const containerVar: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVar: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export default function PortfolioFixed() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    // FIX 3: ClickSpark cần wrap div full màn hình và set style block
    // Nếu ClickSpark của bạn render ra span, ta cần đảm bảo nó chiếm không gian
    <div className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-purple-500/30 relative overflow-hidden">
      {/* ClickSpark bao trùm toàn bộ nội dung */}
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={20}
        sparkCount={8}
        duration={400}
      >
        {/* Lớp giả lập full height để ClickSpark bắt được sự kiện */}
        <div className="w-full min-h-screen">
          <style jsx global>{`
            html {
              scroll-behavior: smooth;
            }
          `}</style>

          {/* BACKGROUND */}
          <div className="fixed inset-0 z-0 h-screen w-screen pointer-events-none">
            <Squares
              direction="diagonal"
              speed={0.5}
              borderColor="#222"
              squareSize={40}
              hoverFillColor="#222"
            />
          </div>
          <div className="fixed inset-0 z-0 bg-linear-to-b from-[#09090b] via-transparent to-[#09090b] pointer-events-none" />

          {/* --- MAIN CONTENT --- */}
          <main className="relative z-10 container mx-auto px-4 py-12 pb-32 max-w-6xl pointer-events-none">
            {/* Bật pointer-events-auto cho các phần tử con tương tác được */}
            <div className="pointer-events-auto">
              {/* HERO SECTION */}
              <section
                id="hero"
                className="mb-10 flex flex-col md:flex-row justify-between md:items-end gap-6 pt-10"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
                      Available for hire
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
                    <ShinyText text={PROFILE.name} disabled={false} speed={3} />
                  </h1>
                  <div className="text-xl md:text-2xl text-zinc-400 flex items-center gap-2 h-8">
                    <Terminal className="w-5 h-5 text-purple-500" />
                    <DecryptedText
                      text={PROFILE.role}
                      speed={70}
                      className="text-purple-400 font-medium"
                    />
                  </div>
                </div>
                <div className="hidden md:block">
                  {/* <StarBorder
                    as="button"
                    color="cyan"
                    speed="4s"
                    className="p-[px]"
                  >
                    <div className="px-6 py-3 bg-[#09090b] rounded-[20px] text-white flex items-center gap-2">
                      <Download className="w-4 h-4" />{" "}
                      <span className="font-semibold">Download CV</span>
                    </div>
                  </StarBorder> */}
                </div>
              </section>

              {/* BENTO GRID */}
              <section id="about">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(160px,auto)]"
                  variants={containerVar}
                  initial="hidden"
                  animate="show"
                >
                  {/* 1. PERSONAL ID CARD */}
                  <motion.div
                    className="md:col-span-5 md:row-span-2"
                    variants={itemVar}
                  >
                    <SpotlightCard
                      className="h-full bg-zinc-900/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden"
                      spotlightColor="rgba(168, 85, 247, 0.2)"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-20 h-20 rounded-2xl border border-white/10 overflow-hidden bg-black/50 shadow-2xl">
                          <TiltedCard
                            imageSrc="/avatar.png"
                            altText="Avatar"
                            containerHeight="100%"
                            containerWidth="100%"
                            imageHeight="100%"
                            imageWidth="100%"
                            rotateAmplitude={15}
                            scaleOnHover={1.1}
                            showTooltip={false}
                            displayOverlayContent={false}
                          />
                        </div>
                        <div className="text-right">
                          <h3 className="text-xl font-bold text-white">
                            Welcome to my portfolio!
                            {/* <TextType
                              text={[
                                "Hello, I'm Dev!",
                                "Nheo So Sweet",
                                "Frontend & AI Engineer",
                                "Welcome to my portfolio!",
                              ]}
                              typingSpeed={80}
                              pauseDuration={4000}
                              showCursor={true}
                              cursorCharacter="|"
                            /> */}
                          </h3>
                          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                            Fullstack ID: 84-290
                          </p>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-b border-white/5 pb-4">
                        {PROFILE.bio}
                      </p>

                      <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm mb-6">
                        <div className="flex items-center gap-2 text-zinc-400">
                          <Calendar className="w-4 h-4 text-purple-500" />{" "}
                          <span>{PROFILE.details.dob}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400">
                          <Phone className="w-4 h-4 text-purple-500" />{" "}
                          <span>{PROFILE.details.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400">
                          <Mail className="w-4 h-4 text-purple-500" />{" "}
                          <span className="truncate">
                            {PROFILE.details.email}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400">
                          <MapPin className="w-4 h-4 text-purple-500" />{" "}
                          <span>{PROFILE.details.address}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {PROFILE.hobbies.map((hobby, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-300 hover:bg-purple-500/20 hover:border-purple-500/30 transition-colors cursor-default"
                          >
                            {hobby.icon} {hobby.name}
                          </div>
                        ))}
                      </div>
                    </SpotlightCard>
                  </motion.div>

                  {/* 2. STATS */}
                  <motion.div
                    className="md:col-span-3 md:row-span-1"
                    variants={itemVar}
                  >
                    <SpotlightCard
                      className="h-full bg-zinc-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-center"
                      spotlightColor="rgba(59, 130, 246, 0.2)"
                    >
                      <div className="flex items-center gap-2 mb-3 text-blue-400">
                        <Trophy className="w-5 h-5" />
                        <span className="text-xs uppercase font-bold tracking-wider">
                          Achievement
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-white">
                          <CountUp
                            from={0}
                            to={PROFILE.stats[1].value}
                            separator=","
                          />
                        </span>
                        <span className="text-xl text-zinc-500">+</span>
                      </div>
                      <p className="text-zinc-400 text-sm mt-1">
                        Total Projects
                      </p>
                    </SpotlightCard>
                  </motion.div>

                  {/* 3. TECH STACK MINI */}
                  <motion.div
                    className="md:col-span-4 md:row-span-1"
                    variants={itemVar}
                  >
                    <SpotlightCard
                      className="h-full bg-zinc-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
                      spotlightColor="rgba(236, 72, 153, 0.2)"
                    >
                      <div className="flex items-center gap-2 mb-4 text-pink-400">
                        <Cpu className="w-5 h-5" />
                        <span className="text-xs uppercase font-bold tracking-wider">
                          Core Stack
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Next.js", "Python", "RAG", "FastAPI"].map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="text-zinc-300 border-white/10"
                          >
                            {t}
                          </Badge>
                        ))}
                        <span className="text-xs text-zinc-500 flex items-center">
                          +5 more
                        </span>
                      </div>
                    </SpotlightCard>
                  </motion.div>

                  {/* 4. CAREER TIMELINE */}
                  <motion.div
                    className="md:col-span-7 md:row-span-1"
                    variants={itemVar}
                  >
                    <SpotlightCard
                      className="h-full bg-zinc-900/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-center"
                      spotlightColor="rgba(16, 185, 129, 0.2)"
                    >
                      <div className="flex items-center gap-2 mb-6 text-green-400">
                        <Briefcase className="w-5 h-5" />
                        <h3 className="text-lg font-bold">Career History</h3>
                      </div>

                      <div className="space-y-6 relative border-l border-white/10 ml-2 pl-6">
                        {WORK_HISTORY.map((job, idx) => (
                          <div key={idx} className="relative group">
                            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-zinc-900 bg-zinc-600 group-hover:bg-green-500 group-hover:scale-125 transition-all" />

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                              <h4 className="font-bold text-zinc-200 group-hover:text-green-400 transition-colors">
                                {job.role}
                              </h4>
                              <span className="text-xs font-mono text-zinc-500">
                                {job.period}
                              </span>
                            </div>
                            <div className="text-sm text-zinc-400 font-medium mb-1 flex items-center gap-1">
                              <Building2 className="w-3 h-3" /> {job.company}
                            </div>
                            <p className="text-xs text-zinc-500 leading-relaxed max-w-lg">
                              {job.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                </motion.div>
              </section>

              {/* PROJECTS SECTION */}
              <section id="projects" className="mt-16">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-8 px-2"
                >
                  <Layers className="w-6 h-6 text-purple-500" />
                  <BlurText
                    text="Featured Projects"
                    className="text-3xl font-bold"
                    delay={50}
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {PROJECTS.map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {/* Fix 1: SpotlightColor dùng RGBA string */}
                      <SpotlightCard
                        className="h-full bg-zinc-900/60 border border-white/10 rounded-3xl p-5 backdrop-blur-xl group hover:border-white/30 transition-all flex flex-col"
                        spotlightColor={project.color as any}
                      >
                        <div className="w-full h-40 rounded-2xl mb-5 relative overflow-hidden border border-white/5">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-black/60 backdrop-blur border-white/10 text-xs">
                              {project.tag}
                            </Badge>
                          </div>
                          <div className="absolute bottom-3 right-3 p-2 bg-white text-black rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                          {project.title}
                        </h3>
                        <p className="text-zinc-500 text-xs mb-4 line-clamp-2">
                          {project.desc}
                        </p>
                      </SpotlightCard>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </main>

          {/* DOCK MENU */}
          <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <Dock
                items={[
                  {
                    icon: <Home className="w-5 h-5" />,
                    label: "Home",
                    onClick: () => scrollToSection("hero"),
                  },
                  {
                    icon: <User className="w-5 h-5" />,
                    label: "Profile",
                    onClick: () => scrollToSection("about"),
                  },
                  {
                    icon: <Briefcase className="w-5 h-5" />,
                    label: "Work",
                    onClick: () => scrollToSection("about"),
                  },
                  {
                    icon: <Layers className="w-5 h-5" />,
                    label: "Projects",
                    onClick: () => scrollToSection("projects"),
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: "Contact",
                    onClick: () =>
                      (window.location.href = "mailto:dev@example.com"),
                  },
                ]}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
              />
            </div>
          </div>
        </div>
      </ClickSpark>
    </div>
  );
}
