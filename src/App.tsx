/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowDown,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Trophy,
  Medal,
  Zap,
  Rocket,
  Code,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  size: 'tall' | 'wide' | 'base';
  rotation: number;
  link?: string;
  status?: 'working' | 'completed';
}

interface Milestone {
  year: string;
  title: string;
  color: string;
  icon: any;
  link?: string;
  details?: string;
  role?: string;
}

// --- Components ---

const Grain = () => <div className="grain pointer-events-none fixed inset-0 z-[9999] opacity-10" />;

const Nav = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <div className="bg-[#1A1A1A]/95 backdrop-blur-xl rounded-full px-2 py-1.5 flex items-center gap-1 shadow-2xl border border-white/5">
        <div className="px-2 py-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/assets/logo-final.png" className="w-8 h-8 object-contain rounded-full" alt="Logo" />
        </div>
        {[
          { name: 'Work', id: 'work' },
          { name: 'Achievements', id: 'journey' },
          { name: 'Story', id: 'story' },
          { name: 'Connect', id: 'connect' }
        ].map((item) => (
          <button 
            key={item.id} 
            onClick={() => scrollTo(item.id)}
            className="px-4 py-2 text-white/80 text-[13px] font-medium hover:text-white transition-colors cursor-pointer tracking-tight"
          >
            {item.name}
          </button>
        ))}
        <div className="flex items-center gap-2 px-2 border-l border-white/10 ml-2">
          {[
            { icon: Github, url: "https://github.com/faheem-1404" },
            { icon: Linkedin, url: "https://www.linkedin.com/in/faheem-abdullah-a-136479379?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
            { icon: Instagram, url: "https://www.instagram.com/faheem_1404" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-2 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
        <button 
          onClick={() => scrollTo('connect')}
          className="bg-[#E5C94B] hover:bg-[#FDE047] text-black px-5 py-2 rounded-full text-[13px] font-bold ml-1 transition-all"
        >
          Start project
        </button>
      </div>
    </nav>
  );
};

const LightBeams = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[140%] opacity-60">
      <div className="absolute top-0 left-0 w-full h-full bg-[#FDE047] rotate-[25deg] translate-x-[-30%] translate-y-[-20%] blur-[120px] opacity-80" />
      <div className="absolute top-0 left-0 w-full h-full bg-[#FDE047] rotate-[45deg] translate-x-[10%] translate-y-[-40%] blur-[150px] opacity-90" />
      <div className="absolute top-0 left-0 w-full h-full bg-[#FDE047] rotate-[-15deg] translate-x-[40%] translate-y-[-30%] blur-[100px] opacity-50" />
    </div>
    {/* Bottom smooth transition mask */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F9F9F9]" />
  </div>
);

const ExpertiseDoodle = () => (
  <div className="relative w-full max-w-sm aspect-video bg-white rounded-3xl p-8 border-2 border-zinc-100 shadow-sm overflow-hidden group">
    <div className="absolute top-4 left-4 flex gap-1">
      <div className="w-2 h-2 rounded-full bg-zinc-200" />
      <div className="w-2 h-2 rounded-full bg-zinc-200" />
      <div className="w-2 h-2 rounded-full bg-zinc-200" />
    </div>

    {/* The colorful connected scribbles */}
    <div className="relative mt-8 h-full">
      <motion.div
        whileHover={{ scale: 1.1, rotate: -2 }}
        className="absolute top-0 left-0 bg-blue-100 text-blue-600 px-4 py-1 rounded-sm rotate-[-8deg] font-bold text-lg border border-blue-200"
      >
        5+ Hackathons
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 2 }}
        className="absolute top-8 left-20 bg-green-100 text-green-600 px-4 py-1 rounded-sm rotate-[5deg] font-bold text-lg border border-green-200"
      >
        10+ Projects
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, rotate: -3 }}
        className="absolute top-16 left-4 bg-purple-100 text-purple-600 px-4 py-1 rounded-sm rotate-[-3deg] font-bold text-lg border border-purple-200"
      >
        Hardware + AI
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 3 }}
        className="absolute top-24 left-16 bg-pink-100 text-pink-600 px-4 py-1 rounded-sm rotate-[4deg] font-bold text-lg border border-pink-200"
      >
        Wearable Tech
      </motion.div>

      {/* Sketchy lines connecting them */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 200 150">
        <path d="M40,25 C80,25 100,50 120,60" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M40,55 C60,70 80,80 100,90" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M120,100 C140,110 160,115 180,120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <div className="absolute bottom-2 right-2 font-hand text-xl opacity-30">Faheem</div>
    </div>
  </div>
);

const Doodle = ({ className, delay = 0, children }: { className?: string; delay?: number; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

const ScribbleUnderline = () => (
  <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-yellow/80" viewBox="0 0 100 10" preserveAspectRatio="none">
    <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CircleDoodle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <motion.circle
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      cx="50" cy="50" r="40" strokeLinecap="round" strokeDasharray="10 5"
    />
  </svg>
);

const ArrowDoodle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1 }}
      d="M10,90 Q50,90 90,10"
    />
    <motion.path
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      d="M70,10 L90,10 L90,30"
    />
  </svg>
);

const Marquee = ({ items }: { items: string[] }) => (
  <div className="relative flex overflow-x-hidden bg-white py-4">
    <div className="animate-scroll flex whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="mx-12 text-5xl md:text-7xl font-display uppercase text-zinc-100 hover:text-brand-blue transition-colors duration-500 cursor-default">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects: Project[] = [
    {
      title: "Vision X — AI Smart Glasses",
      description: "AI-powered smart glasses designed to help visually impaired individuals through real-time navigation, obstacle detection, and smart environmental awareness using embedded AI and computer vision technologies.",
      tags: ["Python", "Raspberry Pi", "IoT", "OpenCV", "AI/ML", "Embedded Systems"],
      image: "/assets/vision-x.jpg",
      size: 'tall',
      rotation: -1,
      status: 'working'
    },
    {
      title: "Unmuted — Smart Communication Wearable",
      description: "AI-powered smart wearable that translates hand gestures into real-time speech and text, helping bridge communication gaps for the deaf and mute community using computer vision and embedded AI.",
      tags: ["Hardware", "Model Training", "OpenCV", "TensorFlow", "AI/ML", "Arduino", "IoT", "Sensors"],
      image: "/assets/unmuted.png",
      size: 'wide',
      rotation: 2,
      link: "https://drive.google.com/drive/folders/1oVbNQIhGyuUcE_0Dt_l44jAfrK2fWcdu?usp=drive_link",
      status: 'working'
    },
    {
      title: "Smart Ergonomic Posture Monitor",
      description: "Developed an AI-powered wearable system that monitors sitting and standing posture in real time to help prevent back pain, neck strain, and poor spinal alignment through intelligent posture correction alerts.",
      tags: ["Hardware Prototyping", "Monitoring", "Wearables", "Ergonomics", "Health Tech"],
      image: "/assets/ergonomic.png",
      size: 'base',
      rotation: -2,
      link: "https://youtu.be/CY1iC34K0yU?si=vp9UW2eyfao8NbLZ",
      status: 'completed'
    },
    {
      title: "Smart Water Quality Monitoring Device",
      description: "Developed an IoT-based smart water quality monitoring system with a custom Flutter mobile application for real-time water analysis, sensor monitoring, and contamination alerts.",
      tags: ["IoT Development", "Flutter", "Mobile App", "Real-Time Monitoring", "Water Quality", "Hardware"],
      image: "/assets/aquasense.png",
      size: 'base',
      rotation: 1,
      status: 'completed'
    },
    {
      title: "STUDYPAY — AI Study Reward App",
      description: "Developed an AI-powered productivity application that tracks user focus and study behavior in real time using intelligent detection systems, helping students stay disciplined through smart monitoring and motivational rewards.",
      tags: ["Flutter", "AI Integration", "Computer Vision", "Focus Detection", "UI/UX", "Smart Notifications"],
      image: "/assets/studypay.png",
      size: 'tall',
      rotation: -1,
      status: 'working'
    },
    {
      title: "Fast Electric Scooter",
      description: "Built an electric scooter prototype in 7th grade, gaining practical experience in EV technology, battery systems, microprocessors, and embedded electronics while exploring sustainable transportation engineering.",
      tags: ["EV Systems", "Battery Management", "Circuits", "Microprocessors", "Embedded Systems", "Hardware", "DC Motors", "Welding"],
      image: "/assets/scooter.png",
      size: 'wide',
      rotation: 1.5,
      link: "https://drive.google.com/drive/folders/1hbaV9yntjSVuMikprN4mKtB3JT8TgK6b",
      status: 'completed'
    },
    {
      title: "Smart Shepherd Stick",
      description: "AI-powered smart stick for intelligent livestock assistance and environmental monitoring using IoT and embedded systems.",
      tags: ["Python", "AI/ML", "IoT", "ESP32", "Raspberry Pi", "OpenCV"],
      image: "/assets/shepherd-stick.png",
      size: 'base',
      rotation: -1.5,
      status: 'working'
    },
  ];

  const milestones: Milestone[] = [
    { 
      year: "9th Dec 2025", 
      title: "Glitch Hackathon — 2nd Place", 
      color: "bg-yellow-400", 
      icon: Trophy,
      link: "https://www.linkedin.com/posts/faheem-abdullah-a-136479379_glytch-vitchennai-hackathon-activity-7417654873221038080-TzdA?utm_source=share&utm_medium=member_android&rcm=ACoAAF2B9HoBXX6bxpRoqpK63-B3cxklKoDF8dw",
      details: "🥈 2nd Prize – Hardware Category\nAwarded 2nd place in the Hardware category for developing AI-powered Smart Glasses designed to assist visually impaired individuals with navigation, obstacle detection, and environmental awareness. Contributed to the hardware assembly and final device integration during the hackathon build. Hosted at VIT Chennai in 2025."
    },
    { 
      year: "9th Jan 2026", 
      title: "Vortex Hackathon — 2nd Place + ₹7K Prize", 
      color: "bg-slate-400", 
      icon: Zap,
      details: "🥈 Excited to share that our team secured 2nd place at the V-Vortex Hackathon!\nContributed as part of the Hardware Team, working on device development and integration through three technical review rounds focused on innovation and implementation. A great learning experience in teamwork, problem-solving, and technical pitching.",
      link: "https://www.linkedin.com/posts/faheem-abdullah-a-136479379_vvortex-hackathon-teamwork-activity-7418011295674839040-L4dP?utm_source=share&utm_medium=member_android&rcm=ACoAAF2B9HoBXX6bxpRoqpK63-B3cxklKoDF8dw"
    },
    { 
      year: "30th Jan 2026", 
      title: "National Hackathon — Top 3 among 900 Teams + ₹25K Prize", 
      color: "bg-blue-400", 
      icon: Medal,
      details: "🥉 Excited to share that our team secured 3rd place at the THREX National-Level Hackathon 2026!\nCompeted among 900+ teams through multiple elimination rounds, advancing to the final top 3 teams nationwide. Worked on building and presenting our solution under intense timelines, making the experience highly rewarding and insightful.",
      link: "https://www.linkedin.com/posts/faheem-abdullah-a-136479379_threx-hackathon-48hourhackathon-activity-7426675499885793280-yAym?utm_source=share&utm_medium=member_android&rcm=ACoAAF2B9HoBXX6bxpRoqpK63-B3cxklKoDF8dw"
    },
    { 
      year: "5th Feb 2026", 
      title: "OnlyFounders 2026 — 2nd Place", 
      color: "bg-white", 
      icon: Rocket,
      details: "🥈 Excited to share that our team secured 2nd place at OnlyFounders 2026 – Grand Finale!\nCompeted among 50 shortlisted teams from 15+ colleges and advanced through multiple pitching and investment-based rounds to reach the finals. Our team ranked Top 1 in the investor round with ₹18 lakhs in virtual funding, which secured our place in the final stage at the MG Auditorium.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7431299367438888960/"
    },
    { 
      year: "17th Mar 2026", 
      title: "Zyphra Vision — Company Founded", 
      color: "bg-zinc-900", 
      icon: Code,
      details: "We are building AI-powered healthcare products designed to make everyday life more intelligent and accessible, starting with smart glasses. Zyphra Vision focuses on empowering individuals through smart wearables, IoT, and integrated software solutions to enhance global independence and safety.",
      role: "CEO & Founder"
    },
    { 
      year: "15th May 2026", 
      title: "SJCIT National Level Hackathon — 3rd Place + ₹25K Cash Prize", 
      color: "bg-red-500", 
      icon: Trophy,
      details: "🥉 3rd Prize – Secured 3rd place at the National-Level Hackathon held at SJCIT, Bangalore, Karnataka. Awarded ₹25,000 as cash prize."
    },
  ];

  const techStack = [
    "Python", "Arduino", "ESP32", "Blender", "SolidWorks", "Next.js",
    "Tailwind CSS", "Framer Motion", "OpenCV", "Firebase", "Blynk",
    "IoT", "Embedded Systems"
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-yellow">
      <Grain />
      <Nav />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden px-8 pb-12 md:px-12 md:pb-20">
        <LightBeams />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 w-full"
        >
          <div className="max-w-5xl mb-12 relative z-20">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6 border border-zinc-200"
            >
              Hello Everyone!
            </motion.span>

            <div className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-8 flex flex-col gap-6">
              <span className="text-zinc-900 relative inline-block w-fit">
                Student Founder, CEO & Product Builder
                <div className="absolute bottom-2 left-0 w-full h-[6px] bg-[#E5C94B]/40 -z-10" />
              </span>

              <span className="text-zinc-400 block">
                Building AI-powered hardware,<br />
                assistive technology &<br />
                human-centered innovation.
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-12">
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-[13px] uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                View My Work
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://drive.google.com/uc?export=download&id=1CK_sKCRq-Znu5QNOy3FZyEmsAGBBV23V"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-bold text-[13px] uppercase tracking-widest hover:bg-zinc-50 transition-all cursor-pointer"
              >
                <ArrowDown className="w-4 h-4" /> Download Resume
              </motion.a>

              <div className="flex items-center gap-6 ml-4">
                {[
                  { icon: Github, url: "https://github.com/faheem-1404" },
                  { icon: Linkedin, url: "https://www.linkedin.com/in/faheem-abdullah-a-136479379?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                  { icon: Instagram, url: "https://www.instagram.com/faheem_1404" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <h1 className="font-display text-[clamp(4rem,13vw,22rem)] leading-[0.75] tracking-tighter uppercase whitespace-nowrap -ml-[2vw] relative z-10">
            FAHEEM ABDULLAH A
          </h1>
        </motion.div>

        {/* Floating Background Doodles */}
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
          <svg className="absolute top-20 right-[15%] w-32 h-32 text-zinc-400 rotate-12" viewBox="0 0 100 100">
            <path d="M10,50 Q50,0 90,50 T10,50" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-40 left-[10%] w-48 h-48 text-zinc-300 -rotate-12" viewBox="0 0 100 100">
            <path d="M20,20 L80,80 M20,80 L80,20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Scroll</span>
          <ArrowDown className="w-5 h-5 text-zinc-400" />
        </motion.div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <p className="font-hand text-2xl text-zinc-400 mb-2">from 2007 'til today</p>
          <h2 className="font-display text-4xl md:text-8xl uppercase tracking-tighter mb-4">
            MY LATEST WORK
          </h2>
          <p className="text-zinc-500 font-medium max-w-md mx-auto">
            A collection of products, prototypes, patents, experiments, and startup ideas I’ve worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1], // Cinematic ease-out
                delay: (idx % 2) * 0.1 // Slight stagger for pairs
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ x: 12, scale: 1.01, rotate: 0 }}
              style={{ rotate: idx % 2 === 0 ? 3 : -3 }}
              className={`group relative bg-white border border-zinc-200 rounded-[32px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] ${project.title.includes("Shepherd") ? 'md:col-span-2 md:max-w-3xl md:mx-auto w-full' : ''}`}
            >
              {/* Cinematic image window: Blurred cover background + Crisp contain foreground */}
              <div className="aspect-video overflow-hidden bg-white relative flex items-center justify-center">
                {/* Background Blur Layer - Hidden for clean-logo/specific projects */}
                {!(project.title.includes("Unmuted") || project.title.includes("Ergonomic") || project.title.includes("Electric") || project.title.includes("STUDYPAY")) && (
                  <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110"
                  />
                )}
                {/* Crisp Foreground Layer */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative z-10 w-full h-full object-contain p-0 scale-[1.05] transition-transform duration-700 group-hover:scale-[1.15]"
                />
                
                {/* Status Badge Overlay */}
                {project.status && (
                  <div className="absolute top-4 right-4 z-20 bg-brand-yellow text-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rotate-12 shadow-lg border border-zinc-900">
                    {project.status}
                  </div>
                )}
              </div>

              <div className="p-8 md:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-2.5 py-1 bg-zinc-50 rounded-full border border-zinc-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-zinc-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-900 font-bold text-lg uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hover:text-brand-blue"
                  >
                    🔗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section id="journey" className="py-32 bg-zinc-50 border-y border-zinc-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-4">
              THE JOURNEY SO FAR
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Icons - Row 1 */}
            <div className="relative mb-12">
              <div className="flex justify-between items-start relative z-10">
                {milestones.slice(0, 5).map((ms, i) => (
                  <div key={i} className="flex flex-col items-center group relative w-16 lg:w-24">
                    {ms.title === "National Hackathon — Top 3 among 900 Teams + ₹25K Prize" && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
                      >
                        <span className="font-hand text-brand-blue text-sm rotate-[-5deg] block">Click ↓</span>
                      </motion.div>
                    )}
                    <motion.div
                      onMouseEnter={() => {
                        if (!isLocked && ms.details) setSelectedMilestone(ms);
                      }}
                      onMouseLeave={() => {
                        if (!isLocked) setSelectedMilestone(null);
                      }}
                      onClick={() => {
                        if (ms.details) {
                          setSelectedMilestone(ms);
                          setIsLocked(true);
                        }
                      }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className={`w-16 h-16 lg:w-24 lg:h-24 rounded-full ${ms.color} border-4 border-white shadow-xl flex items-center justify-center flex-shrink-0 cursor-pointer transition-transform`}
                    >
                      <ms.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${(ms.color.includes('zinc-900') || ms.color.includes('red-500')) ? 'text-white' : 'text-zinc-800'}`} />
                    </motion.div>
                    <div className="text-center hidden lg:block absolute top-[80px] lg:top-[112px] w-[180px] lg:w-[220px] left-1/2 -translate-x-1/2">
                      <span className="font-hand text-xl lg:text-3xl block text-zinc-400 rotate-[-5deg] mb-2">{ms.year}</span>
                      <div className="max-w-[120px] lg:max-w-[150px] flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity mx-auto">
                        <div className="font-bold text-[10px] uppercase tracking-tighter">
                          {ms.title}
                        </div>
                      </div>
                    </div>
                    {i === 4 && (
                      <div className="absolute top-[180px] left-1/2 -translate-x-1/2 flex flex-col items-center group/red z-10 hidden lg:flex w-16 lg:w-24">
                        <motion.div
                          onMouseEnter={() => {
                            if (!isLocked && milestones[5].details) setSelectedMilestone(milestones[5]);
                          }}
                          onMouseLeave={() => {
                            if (!isLocked) setSelectedMilestone(null);
                          }}
                          onClick={() => {
                            if (milestones[5].details) {
                              setSelectedMilestone(milestones[5]);
                              setIsLocked(true);
                            }
                          }}
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          className={`w-16 h-16 lg:w-24 lg:h-24 rounded-full ${milestones[5].color} border-4 border-white shadow-xl flex items-center justify-center flex-shrink-0 cursor-pointer transition-transform`}
                        >
                          <Trophy className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                        </motion.div>
                        <div className="text-center hidden lg:block absolute top-[80px] lg:top-[112px] w-[180px] lg:w-[220px] left-1/2 -translate-x-1/2">
                          <span className="font-hand text-xl lg:text-3xl block text-zinc-400 rotate-[-5deg] mb-2">{milestones[5].year}</span>
                          <div className="max-w-[120px] lg:max-w-[150px] flex flex-col items-center gap-2 opacity-0 group-hover/red:opacity-100 transition-opacity mx-auto">
                            <div className="font-bold text-[10px] uppercase tracking-tighter">
                              {milestones[5].title}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Squiggly Connecting Line that bends down to the red milestone */}
              <svg 
                className="absolute top-[8px] h-[220px] pointer-events-none z-0 hidden lg:block overflow-visible" 
                style={{ left: '48px', right: '48px', width: 'calc(100% - 96px)' }}
                viewBox="0 0 1000 220" 
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  d="M0,40 Q125,0 250,40 T500,40 T750,40 T1000,40 Q970,85 1000,130 T1000,220"
                  fill="none"
                  stroke="#d1d1d1"
                  strokeWidth="3"
                  strokeDasharray="10 10"
                />
              </svg>
            </div>

            {/* Spacer to reserve vertical height on desktop for the absolutely positioned red milestone */}
            <div className="hidden lg:block h-[260px]" />
          </div>

          {/* Mobile Labels */}
          <div className="lg:hidden space-y-6 mt-12 bg-white p-6 rounded-2xl border border-zinc-200">
            {milestones.map((milestone, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-4 h-4 rounded-full ${milestone.color} border border-zinc-200`} />
                <div>
                  <span className="text-zinc-500 font-medium text-sm mb-1 block">{milestone.year}</span>
                  <h4 className="text-lg font-bold text-zinc-900 leading-snug">{milestone.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="story" className="py-8 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-20"
          >
            <h2 className="font-display text-5xl md:text-8xl uppercase tracking-tighter leading-[0.8] mb-12">
              ABOUT ME<br />
              <span className="text-outline">STORY & VISION.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <ArrowDoodle className="absolute top-[20%] right-[5%] w-32 h-32 text-zinc-200 -rotate-45 hidden 2xl:block" />
            {/* Collage Column 1 */}
            <div className="col-span-1 md:col-span-4 space-y-8">
              <ExpertiseDoodle />

              <motion.div
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="bg-brand-yellow p-8 rounded-3xl rotate-[-2deg] shadow-lg border-2 border-black"
              >
                <h3 className="text-3xl font-display uppercase italic mb-4">Founder Mindset</h3>
                <p className="text-sm font-bold leading-relaxed">
                  "Trying never truly fails. Every idea, risk, and small step teaches something valuable. In a world full of limits, the freedom to try, build, and create is the greatest independence."
                </p>
              </motion.div>


            </div>

            {/* Collage Column 2 */}
            <div className="col-span-1 md:col-span-4 space-y-8 md:pt-20">
              <div className="p-8 bg-zinc-900 text-white rounded-[40px] shadow-2xl relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center border-2 border-zinc-900 overflow-hidden">
                  <img src="/assets/logo-final.png" className="w-full h-full object-cover" alt="Badge" />
                </div>
                <p className="font-medium text-lg leading-snug">
                  Currently obsessed with: AI wearables, assistive technology, futuristic UI systems, smart hardware, and startup storytelling.
                </p>
              </div>

              <div className="aspect-square bg-zinc-100 rounded-full border-4 border-dashed border-zinc-300 flex items-center justify-center p-12 text-center group overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                  <p className="font-display uppercase text-4xl leading-none">Creative Engineer</p>
                </div>
                <div className="group-hover:opacity-0 transition-opacity">
                  <Code className="w-16 h-16 text-zinc-400 mb-4 mx-auto" />
                  <p className="font-bold uppercase text-[10px] tracking-[.3em] text-zinc-500">Multidisciplinary</p>
                </div>
              </div>
            </div>

            {/* Collage Column 3 */}
            <div className="col-span-1 md:col-span-4 space-y-8 md:pt-40">
              <motion.div
                whileHover={{ y: -10 }}
                className="relative group p-8 bg-white border border-zinc-200 shadow-xl rounded-3xl rotate-[3deg]"
              >
                <p className="font-hand text-2xl text-center text-zinc-600 leading-relaxed">
                  "Hackathon chaos is the best kind of chaos — late-night discussions, rapid prototyping, debugging under pressure, and building alongside brilliant people who turn random ideas into reality."
                </p>
              </motion.div>

              <Doodle className="bg-zinc-50 p-6 border-b-4 border-brand-blue rounded-xl font-medium text-sm">
                <p>Based in Chennai, studying at VIT. Building for the world.</p>
                <ArrowRight className="mt-4 text-brand-blue" />
              </Doodle>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS MARQUEE --- */}
      <section className="py-6">
        <Marquee items={techStack} />
      </section>

      {/* --- FOOTER / NOTEBOOK --- */}
      <footer id="connect" className="pt-8 pb-12 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl relative mb-24 cursor-pointer"
          >
            <div className="text-center mb-8">
              <p className="font-hand text-2xl text-zinc-400">From sketches to prototypes =)</p>
            </div>
            {/* Notebook Placeholder Effect */}
            <div className="relative group perspective-1000 group/note">
              <div className="w-full aspect-[16/10] bg-brand-yellow rounded-xl shadow-2xl border-l-[30px] border-zinc-800 rotate-[-4deg] flex flex-col p-12 overflow-hidden transition-transform duration-500 group-hover:rotate-0">
                <div className="w-full h-full border border-black/10 rounded-sm p-8 bg-[radial-gradient(#00000010_1px,transparent_1px)] bg-[size:20px_20px] relative">
                  
                  {/* Animated Arrow - Now Inside */}
                  <div className="absolute top-8 right-32">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      <span className="font-hand text-brand-blue text-3xl rotate-[-10deg] block mb-2">Look at me!</span>
                      <ArrowDown className="w-16 h-16 text-brand-blue animate-bounce" />
                    </motion.div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="font-hand text-4xl text-zinc-800 space-y-4">
                      <p>Build.</p>
                      <p>Break.</p>
                      <p>Learn.</p>
                      <p className="relative inline-block hover:text-brand-blue transition-colors cursor-help">
                        Repeat.
                        <ScribbleUnderline />
                      </p>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                  </div>

                  {/* Pop-up Image Card - Now Inside/Above Notebook */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/note:opacity-100 transition-all duration-500 pointer-events-none z-[200]">
                    <div className="bg-white p-3 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-zinc-50 rotate-3 scale-50 group-hover/note:scale-110 transition-transform duration-500 origin-center">
                      <img src="/assets/faheem-photo.jpg" className="w-48 h-64 object-cover rounded-[16px]" alt="Faheem Abdullah" />
                      <div className="mt-3 font-hand text-zinc-500 text-center text-lg italic">
                        Hey! It's me.
                      </div>
                    </div>
                  </div>

                  <Doodle className="absolute bottom-12 right-12 opacity-40">
                    <img src="/assets/logo-final.png" className="w-48 h-48 object-contain rounded-3xl transition-all duration-500" alt="Logo" />
                  </Doodle>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.a
            href="mailto:faheemabdullah.a2025@vitstudent.ac.in"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 bg-zinc-900 text-white px-12 py-6 rounded-full text-xl font-bold uppercase tracking-widest shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-all mb-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 group-hover:text-black transition-colors">Let's Connect</span>
            <ChevronRight className="w-6 h-6 relative z-10 group-hover:text-black transition-colors group-hover:translate-x-2 transition-transform" />
          </motion.a>

          <div className="flex gap-8 mb-16">
            {[
              { icon: Github, label: "GitHub", url: "https://github.com/faheem-1404" },
              { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/faheem-abdullah-a-136479379?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
              { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/faheem_1404" },
              { icon: Mail, label: "Email", url: "mailto:faheemabdullah.a2025@vitstudent.ac.in" }
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.2 }}
                className="w-12 h-12 flex items-center justify-center bg-white border border-zinc-200 rounded-full shadow-sm hover:shadow-md transition-all text-zinc-600 hover:text-zinc-900"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="text-zinc-400 font-bold uppercase text-[10px] tracking-[.5em]">
            Designed & built by Faheem Abdullah. © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
      {/* --- MILESTONE MODAL --- */}
      <AnimatePresence>
        {selectedMilestone && (
          <div className={`fixed inset-0 z-[100] flex items-center justify-center p-6 ${!isLocked ? 'pointer-events-none' : ''}`}>
            {isLocked && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setSelectedMilestone(null);
                  setIsLocked(false);
                }}
                className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm cursor-pointer"
              />
            )}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[32px] p-10 shadow-[0_30px_100px_rgba(0,0,0,0.2)] overflow-hidden pointer-events-auto border border-zinc-200"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 rounded-full ${selectedMilestone.color} flex items-center justify-center`}>
                  <selectedMilestone.icon className={`w-8 h-8 ${selectedMilestone.color === 'bg-white' ? 'text-zinc-800' : 'text-white'}`} />
                </div>
                {selectedMilestone.role && (
                  <span className="bg-brand-yellow text-zinc-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-zinc-900 shadow-sm">
                    {selectedMilestone.role}
                  </span>
                )}
              </div>
              <span className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-2 block">{selectedMilestone.year}</span>
              <h3 className="text-3xl font-bold mb-4 leading-tight">{selectedMilestone.title}</h3>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                {selectedMilestone.details}
              </p>
              
              <div className="flex items-center gap-4">
                {selectedMilestone.link && (
                  <a 
                    href={selectedMilestone.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-blue transition-colors"
                  >
                    LinkedIn Post <ArrowRight className="w-4 h-4" />
                  </a>
                )}
                <button 
                  onClick={() => {
                    setSelectedMilestone(null);
                    setIsLocked(false);
                  }}
                  className="text-zinc-400 font-bold text-xs uppercase tracking-widest hover:text-zinc-900 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
