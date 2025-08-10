"use client";

import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { useTheme } from "@/contexts/theme-context";
import { useState } from "react";
import { FocusCards, FocusCard } from "@/components/ui/focus-cards";

export function TechStackSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  <StackIcon name="v0" />;
  const technologies = [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "js" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Bootstrap", icon: "bootstrap5" },
    { name: "GitHub", icon: "github" },
    { name: "V0", icon: "v0" },
    { name: "WindSurf", icon: "windsurf" },
    { name: "Claude", icon: "claude" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="tech-stack"
      className={`py-20 px-4 transition-colors duration-300 ${
        isDark ? "bg-gray-900/20" : "bg-gray-50/50"
      }`}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <FocusCards>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 md:gap-6"
            >
              {technologies.map((tech, index) => (
                <FocusCard key={index} index={index}>
                  <motion.div
                    variants={itemVariants}
                    className="relative group flex justify-center"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        isDark
                          ? "bg-gray-800/50 hover:bg-gray-700/70 border border-gray-700/50 hover:border-purple-500/50"
                          : "bg-white/70 hover:bg-white/90 border border-gray-200/50 hover:border-purple-400/50"
                      } backdrop-blur-sm hover:scale-110 hover:shadow-lg ${
                        isDark
                          ? "hover:shadow-purple-500/25"
                          : "hover:shadow-purple-400/25"
                      } hover:z-10 relative`}
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11">
                        <StackIcon
                          name={tech.icon}
                          variant={isDark ? "dark" : "light"}
                        />
                      </div>
                    </div>

                    {/* Tooltip */}
                    <div
                      className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 pointer-events-none z-20 ${
                        hoveredTech === tech.name
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      } ${
                        isDark
                          ? "bg-gray-800 text-gray-200 border border-gray-700"
                          : "bg-white text-gray-800 border border-gray-200 shadow-lg"
                      }`}
                    >
                      {tech.name}
                      {/* Tooltip arrow */}
                      <div
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                          isDark ? "border-t-gray-800" : "border-t-white"
                        }`}
                      />
                    </div>
                  </motion.div>
                </FocusCard>
              ))}
            </motion.div>
          </FocusCards>
        </div>

        {/* Optional: Add a note about continuous learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p
            className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}
          >
            Always exploring new technologies and staying up-to-date with the
            latest trends
          </p>
        </motion.div>
      </div>
    </section>
  );
}
