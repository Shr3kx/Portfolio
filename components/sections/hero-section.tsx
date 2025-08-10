"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Code, Terminal } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToAbout = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
    >
      {/* Enhanced floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-1/4 left-1/4 ${
            isDark ? "text-violet-500/20" : "text-violet-600/30"
          }`}
          variants={floatingVariants}
          animate="animate"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <Code size={40} />
        </motion.div>
        <motion.div
          className={`absolute top-1/3 right-1/4 ${
            isDark ? "text-teal-500/20" : "text-teal-600/30"
          }`}
          variants={floatingVariants}
          animate="animate"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Terminal size={35} />
        </motion.div>
        <motion.div
          className={`absolute bottom-1/3 left-1/3 ${
            isDark ? "text-emerald-500/20" : "text-emerald-600/30"
          }`}
          variants={floatingVariants}
          animate="animate"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Terminal-style greeting with typewriter effect */}
          <motion.div
            className={`font-mono text-sm mb-4 opacity-80 ${
              isDark ? "text-emerald-400" : "text-emerald-600"
            }`}
            variants={itemVariants}
          >
            <motion.span
              className={isDark ? "text-violet-400" : "text-violet-600"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              $
            </motion.span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              {" whoami"}
            </motion.span>
          </motion.div>

          {/* Enhanced name animation */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={titleVariants}
          >
            <motion.span
              className="bg-gradient-to-r from-violet-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "200% center" }}
              animate={{ backgroundPosition: "0% center" }}
              transition={{ delay: 1.2, duration: 2, ease: "easeOut" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Shrey Kuvera
            </motion.span>
          </motion.h1>

          {/* Role with enhanced animation */}
          <motion.div
            className={`font-mono text-lg md:text-xl mb-8 opacity-90 ${
              isDark ? "text-slate-300" : "text-gray-600"
            }`}
            variants={itemVariants}
          >
            <motion.span
              className={isDark ? "text-violet-400" : "text-violet-600"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              {"<"}
            </motion.span>
            <motion.span
              className={isDark ? "text-teal-400" : "text-teal-600"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              Frontend Engineer
            </motion.span>
            <motion.span
              className={isDark ? "text-violet-400" : "text-violet-600"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              {" />"}
            </motion.span>
          </motion.div>

          {/* Description with word-by-word animation */}
          <motion.div
            className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-slate-400" : "text-gray-500"
            }`}
            variants={itemVariants}
          >
            {[
              "Crafting",
              "modern",
              "web",
              "experiences",
              "with",
              "React,",
              "Next.js,",
              "and",
              "cutting-edge",
              "technologies.",
              "Passionate",
              "about",
              "building",
              "efficient,",
              "scalable",
              "solutions",
              "that",
              "make",
              "a",
              "difference.",
            ].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + index * 0.1, duration: 0.5 }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Enhanced button animations */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 text-white px-8 py-3 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 font-mono"
                onClick={scrollToAbout}
              >
                <Terminal className="h-4 w-4 mr-2" />
                ./explore_work
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.2, duration: 0.6 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://www.github.com/ShreyKuvera05",
                  color: "violet",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/shrey-kuvera-163261142/",
                  color: "teal",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4.4 + index * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className={`transition-all duration-300 ${
                      isDark
                        ? `border-slate-600 hover:border-${social.color}-400 hover:text-${social.color}-400 hover:shadow-lg hover:shadow-${social.color}-500/25 bg-transparent`
                        : `border-gray-300 hover:border-${social.color}-500 hover:text-${social.color}-500 hover:shadow-lg hover:shadow-${social.color}-500/25 bg-transparent`
                    }`}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToAbout}
                className={`transition-colors duration-300 ${
                  isDark
                    ? "text-slate-400 hover:text-violet-400"
                    : "text-gray-500 hover:text-violet-500"
                }`}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowDown className="h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
