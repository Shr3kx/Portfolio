"use client";

import { motion } from "framer-motion";
import { Shield, Database, Calendar, BarChart3, Zap, Package, Map } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { ProjectCard } from "@/components/ui/project-modal";
import { FocusCards, FocusCard } from "@/components/ui/focus-cards";

export function ProjectsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const projects = [
    {
      title: "SesameUI 🎨",
      description:
        "A modern, accessible component library built with React and TypeScript. Provides beautifully designed, customizable UI components with a focus on developer experience and accessibility.",
      icon: <Package className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600",
      spotlightColor: isDark
        ? "rgba(168, 85, 247, 0.15)"
        : "rgba(168, 85, 247, 0.1)",
      techTags: [
        { name: "React", icon: "react" },
        { name: "TypeScript", icon: "typescript" },
        { name: "TailwindCSS", icon: "tailwindcss" },
        { name: "Framer Motion", icon: "framer" },
      ],
      textTags: [
        "Component Library",
        "MDX Documentation",
        "Accessible Design",
        "Developer-Friendly",
      ],
      achievements: [
        "Fully typed components with TypeScript",
        "WCAG 2.1 accessibility standards",
        "Customizable theming system",
        "MDX-powered comprehensive documentation",
        "Tree-shakeable for optimal bundle size",
      ],
      demoUrl: "https://sesame-ui.netlify.app/",
      isInDevelopment: true,
    },
    {
      title: "ProjectMap.io 🗺️",
      description:
        "A beautiful, lightweight roadmap tool for indie developers, students, and small teams. Transform messy project plans into clean, shareable visual roadmaps without the complexity of enterprise tools.",
      icon: <Map className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-600",
      spotlightColor: isDark
        ? "rgba(59, 130, 246, 0.15)"
        : "rgba(59, 130, 246, 0.1)",
      techTags: [
        { name: "NextJs", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "TailwindCSS", icon: "tailwindcss" },
        { name: "Framer Motion", icon: "framer" },
      ],
      textTags: [
        "Visual Roadmaps",
        "Convex Database",
        "Gemini AI",
        "Real-time Collaboration",
        "Shareable Links",
      ],
      achievements: [
        "Beautiful timeline & Kanban-style views",
        "AI-powered roadmap generation with Gemini",
        "Real-time sync with Convex backend",
        "Milestone tracking with task breakdown",
        "Embeddable roadmap widgets",
        "Public roadmaps for transparency",
      ],
      demoUrl: "https://projectmapio.vercel.app/",
      isInDevelopment: true,
    },
    {
      title: "SocialPing 🚀",
      description:
        "A modern, full-stack social media application built with the MERN stack. Enables users to connect, share posts, send real-time messages, and discover new connections.",
      icon: <Zap className="h-6 w-6" />,
      color: "from-pink-500 to-rose-600",
      spotlightColor: isDark
        ? "rgba(236, 72, 153, 0.15)"
        : "rgba(236, 72, 153, 0.1)",
      techTags: [
        { name: "NextJs", icon: "nextjs" },
        { name: "Node.js", icon: "nodejs" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Express", icon: "expressjs" },
        { name: "Redux Toolkit", icon: "redux" },
        { name: "Framer Motion", icon: "framer" },
        { name: "TailwindCSS", icon: "tailwindcss" },
      ],
      textTags: [
        "MERN Stack",
        "Clerk Authentication",
        "Server-Sent Events (SSE)",
      ],
      achievements: [
        "Real-time messaging with SSE",
        "Full authentication & user profiles with Clerk",
        "Social feed with posts, likes, stories",
        "Responsive UI with dark/light theme",
        "Built as a passion project to master modern MERN stack practices",
      ],
      demoUrl: "https://social-ping.vercel.app/",
    },
    {
      title: "🚀 Modern Analytics Dashboard Theme",
      description:
        "A comprehensive, interactive analytics dashboard built with Next.js 14, React, TypeScript, and Tailwind CSS. Features real-time data visualization, interactive charts, global mapping, and a beautiful dark/light theme system.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-cyan-500 to-sky-600",
      spotlightColor: isDark
        ? "rgba(6, 182, 212, 0.15)"
        : "rgba(6, 182, 212, 0.1)",
      techTags: [
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Shadcn", icon: "shadcnui" },
        { name: "TailwindCSS", icon: "tailwindcss" },
        { name: "Framer Motion", icon: "framer" },
        { name: "V0", icon: "v0" },
        { name: "Claude", icon: "claude" },
      ],
      textTags: ["Recharts"],
      achievements: [
        "Interactive charts and visualizations",
        "Global mapping with region-based insights",
        "Dynamic report generation (PDF, CSV, JSON)",
        "Dark/Light theme system with smooth transitions",
        "Real-time notifications & collapsible sidebar navigation",
      ],
      demoUrl: "https://analytics-dashboard-theme.vercel.app/overview",
    },
    {
      title: "KYC Verification System",
      description:
        "Built a secure web app for digital identity verification. Reduced manual verification time by 50% through real-time document status updates and user-friendly flows.",
      icon: <Shield className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-600",
      spotlightColor: isDark
        ? "rgba(16, 185, 129, 0.15)"
        : "rgba(16, 185, 129, 0.1)",
      techTags: [
        { name: "React", icon: "react" },
        { name: "bootstrap", icon: "bootstrap5" },
      ],
      textTags: ["Context API + useReducer", "CryptoJS"],
      achievements: [
        "50% reduction in verification time",
        "Real-time status updates",
        "Secure document handling",
        "User-friendly interface",
      ],
      isCompanyProject: true,
    },
    {
      title: "API Management Platform",
      description:
        "Developed a centralized platform to organize and manage APIs used across multiple projects, with project-specific categorization and sidebar navigation.",
      icon: <Database className="h-6 w-6" />,
      color: "from-violet-500 to-purple-600",
      spotlightColor: isDark
        ? "rgba(139, 92, 246, 0.15)"
        : "rgba(124, 58, 237, 0.1)",
      techTags: [
        { name: "React", icon: "react" },
        { name: "bootstrap", icon: "bootstrap5" },
        { name: "Framer Motion", icon: "framer" },
      ],
      textTags: [
        "API Management",
        "Custom Doc UI",
        "Role-Based Access Control (RBAC)",
      ],
      achievements: [
        "Centralized API management",
        "Project-specific categorization",
        "Improved documentation",
      ],
      isCompanyProject: true,
      demoUrl: undefined,
    },
    {
      title: "Dual-Sector Scheduling Dashboard",
      description:
        "Developed a dual-purpose platform for internal company use and hospital operations, replacing manual processes with digital solutions.",
      icon: <Calendar className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-600",
      spotlightColor: isDark
        ? "rgba(59, 130, 246, 0.15)"
        : "rgba(59, 130, 246, 0.1)",
      techTags: [
        { name: "React", icon: "react" },
        { name: "bootstrap", icon: "bootstrap5" },
      ],
      textTags: ["Custom Context-based authentication", "AG-Grid", "CryptoJs"],
      achievements: [
        "35% reduction in scheduling conflicts",
        "Dual-sector functionality",
        "Digital process automation",
      ],
      isCompanyProject: true,
    },
    {
      title: "ERP-Integrated Vendor Portal",
      description:
        "Delivered an ERP-integrated web portal to automate vendor reporting and reduce manual handling. Adopted by 3 enterprise clients for analytics and reporting.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-amber-500 to-orange-600",
      spotlightColor: isDark
        ? "rgba(245, 158, 11, 0.15)"
        : "rgba(217, 119, 6, 0.1)",
      techTags: [
        { name: "React", icon: "react" },
        { name: "bootstrap", icon: "bootstrap5" },
      ],
      textTags: ["ERP Integration", "xlsx", "CryptoJS", "Axios"],
      achievements: [
        "Used by 2 enterprise clients",
        "Automated vendor reporting",
        "Enhanced data security",
      ],
      isCompanyProject: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of projects that demonstrate my expertise in building
            scalable, efficient web solutions
          </motion.p>
        </motion.div>

        <FocusCards>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <FocusCard index={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      icon={project.icon}
                      color={project.color}
                      spotlightColor={project.spotlightColor}
                      techTags={project.techTags}
                      textTags={project.textTags}
                      achievements={project.achievements}
                      demoUrl={project.demoUrl}
                      isCompanyProject={project.isCompanyProject}
                      isInDevelopment={project.isInDevelopment}
                    />
                  </motion.div>
                </FocusCard>
              </motion.div>
            ))}
          </motion.div>
        </FocusCards>
      </div>
    </section>
  );
}
