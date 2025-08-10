"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

export function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const achievements = [
    {
      title: "Boosted App Efficiency",
      description:
        "Increased web application efficiency by 30% through integration of REST APIs",
      icon: "🚀",
    },
    {
      title: "ERP Report Solution",
      description:
        "Developed an ERP-linked report application used by 3 major clients",
      icon: "📊",
    },
    {
      title: "Enhanced KYC Compliance",
      description:
        "Streamlined KYC compliance process, reducing verification time by 50%",
      icon: "🔐",
    },
    {
      title: "Project Management Success",
      description:
        "Led project from start to finish, saving 20% in development time",
      icon: "⚡",
    },
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightCardVariants = {
    hidden: { opacity: 0, x: 50, rotateY: 15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Curious about how things work under the hood. Drawn to building
            things that feel real, usable, and grounded in purpose—not just
            polished on the surface.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card
              className={`backdrop-blur-sm h-full transition-all duration-500 hover:scale-[1.02] ${
                isDark
                  ? "bg-gray-900/50 border-gray-800 hover:border-purple-500/50"
                  : "bg-white/70 border-gray-200 hover:border-purple-400/50"
              }`}
            >
              <CardContent className="p-6">
                <motion.h3
                  className="text-xl font-semibold mb-4 text-purple-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  My Developer Journey
                </motion.h3>

                <motion.div
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    {
                      title: "The Spark",
                      description:
                        "Started with curiosity about how websites work, ended up falling in love with creating digital experiences",
                      color: "purple",
                    },
                    {
                      title: "The Deep Dive",
                      description:
                        "Immersed myself in React ecosystem, learned by building, breaking, and rebuilding projects",
                      color: "blue",
                    },
                    {
                      title: "The Real World",
                      description:
                        "Turned passion into profession, solving real problems for real users in production environments",
                      color: "cyan",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`w-2 h-2 bg-${item.color}-400 rounded-full mt-2 flex-shrink-0`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                        viewport={{ once: true }}
                      />
                      <div>
                        <p
                          className={`font-medium ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {item.title}
                        </p>
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Stats section with enhanced animations */}
                <motion.div
                  className={`mt-6 pt-6 border-t ${
                    isDark ? "border-gray-800" : "border-gray-200"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { value: "1+", label: "Years Coding", color: "purple" },
                      { value: "7+", label: "Projects Built", color: "blue" },
                      { value: "∞", label: "Coffee Cups", color: "cyan" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <p
                          className={`text-2xl font-bold text-${stat.color}-400`}
                        >
                          {stat.value}
                        </p>
                        <p
                          className={`text-xs ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Experience section */}
                <motion.div
                  className="space-y-4 mt-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    {
                      icon: Briefcase,
                      title: "Front-end Developer",
                      subtitle: "Excellent Softwares • Aug 2023 - Dec 2024",
                      color: "purple",
                    },
                    {
                      icon: GraduationCap,
                      title: "MCA - Bennett University",
                      subtitle: "2024 - Present",
                      color: "blue",
                    },
                    {
                      icon: MapPin,
                      title: "Noida, Uttar Pradesh",
                      subtitle: "",
                      color: "cyan",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-3 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                      variants={itemVariants}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <item.icon className={`h-5 w-5 text-${item.color}-400`} />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        {item.subtitle && (
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={rightCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-semibold mb-6 text-blue-400"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              What Drives Me
            </motion.h3>

            <motion.div
              className="grid gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  emoji: "🧩",
                  title: "Component-First Thinking",
                  description:
                    "I treat every interface element as an opportunity for abstraction. From dynamic form elements to layout scaffolding, I build reusable components that cut repetition and speed up development.",
                  color: "purple",
                },
                {
                  emoji: "🧠",
                  title: "UI with a Logical Backbone",
                  description:
                    "Behind every polished interface is well-structured logic. I focus on predictable state, smart prop flow, and clean separation of concerns to make complex interfaces feel effortless.",
                  color: "blue",
                },
                {
                  emoji: "⚡",
                  title: "Performance Is Product",
                  description:
                    "Fast experiences aren't just a bonus—they're expected. I optimize everything from bundle sizes and lazy-loading strategies to render cycles and network payloads.",
                  color: "cyan",
                },
                {
                  emoji: "🤖",
                  title: "Inspired by the AI Shift",
                  description:
                    "Continuously exploring how AI advancements—like LLMs, intelligent tooling, and model-driven interfaces—can reshape development workflows, augment logic, and transform how users interact with digital systems.",
                  color: "indigo",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={achievementVariants}
                  whileHover={{ scale: 1.03, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`backdrop-blur-sm transition-all duration-300 ${
                      isDark
                        ? `bg-gray-900/50 border-${item.color}-700/50 hover:border-${item.color}-500/70 hover:shadow-lg hover:shadow-${item.color}-500/20`
                        : `bg-white/70 border-${item.color}-300/50 hover:border-${item.color}-400/70 hover:shadow-lg hover:shadow-${item.color}-400/20`
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="text-3xl"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.2 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          {item.emoji}
                        </motion.div>
                        <div>
                          <motion.h4
                            className={`font-semibold mb-2 ${
                              isDark
                                ? `text-${item.color}-300`
                                : `text-${item.color}-600`
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.3 + index * 0.1,
                            }}
                            viewport={{ once: true }}
                          >
                            {item.title}
                          </motion.h4>
                          <motion.p
                            className={`text-sm leading-relaxed ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.4 + index * 0.1,
                            }}
                            viewport={{ once: true }}
                          >
                            {item.description}
                          </motion.p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
