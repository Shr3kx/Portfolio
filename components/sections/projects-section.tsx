"use client";

import { motion } from "framer-motion";
import { Shield, Database, Calendar, BarChart3, Zap } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { ProjectCard } from "@/components/ui/project-modal";
import { FocusCards, FocusCard } from "@/components/ui/focus-cards";

export function ProjectsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const projects = [
    {
      title: "SocialPing 🚀",
      description:
        "A modern, full-stack social media application built with the MERN stack. Enables users to connect, share posts, send real-time messages, and discover new connections.",
      icon: <Zap className="h-6 w-6" />,
      color: "from-pink-500 to-rose-600",
      spotlightColor: isDark
        ? "rgba(236, 72, 153, 0.15)"
        : "rgba(236, 72, 153, 0.1)",
      tags: [
        "MERN Stack",
        "Clerk Authentication",
        "Redux Toolkit",
        "Framer Motion",
        "TailwindCSS",
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
      title: "KYC Verification System",
      description:
        "Built a secure web app for digital identity verification. Reduced manual verification time by 50% through real-time document status updates and user-friendly flows.",
      icon: <Shield className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-600",
      spotlightColor: isDark
        ? "rgba(16, 185, 129, 0.15)"
        : "rgba(16, 185, 129, 0.1)",
      tags: ["ReactJS", "Context API + useReducer", "CryptoJS"],
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
      tags: [
        "API Management",
        "Framer Motion",
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
      tags: ["Custom Context-based authentication", "AG-Grid", "CryptoJs"],
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
      tags: ["ERP Integration", "Analytics", "xlsx", "Axios"],
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
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
                      tags={project.tags}
                      achievements={project.achievements}
                      demoUrl={project.demoUrl}
                      isCompanyProject={project.isCompanyProject}
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
