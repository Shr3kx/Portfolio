"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { X, ExternalLink, Lock } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { CardSpotlight } from "./card-spotlight";
import StackIcon from "tech-stack-icons";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  spotlightColor: string;
  techTags: Array<{ name: string; icon: string }>;
  textTags: string[];
  achievements: string[];
  demoUrl?: string;
  isCompanyProject?: boolean;
}

// Set app element for accessibility
if (typeof window !== "undefined") {
  try {
    // Try different selectors for Next.js root element
    const appElement =
      (document.querySelector("#__next") as HTMLElement) ||
      (document.querySelector("body") as HTMLElement) ||
      document.documentElement;
    if (appElement) {
      Modal.setAppElement(appElement as HTMLElement);
    }
  } catch (error) {
    // Fallback to body if selectors fail
    Modal.setAppElement("body");
  }
}

export function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  icon,
  color,
  spotlightColor,
  techTags,
  textTags,
  achievements,
  demoUrl,
  isCompanyProject = false,
}: ProjectModalProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
    },
    content: {
      position: "relative" as const,
      inset: "auto",
      border: "none",
      background: "transparent",
      overflow: "visible",
      borderRadius: "0",
      outline: "none",
      padding: "0",
      maxWidth: "42rem",
      width: "100%",
      maxHeight: "90vh",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
      closeTimeoutMS={300}
      className="focus:outline-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className={`w-full max-h-[90vh] overflow-y-auto scrollbar-hide rounded-xl backdrop-blur-sm ${
          isDark
            ? "bg-gray-900/95 border-gray-800"
            : "bg-white/95 border-gray-200"
        } border`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 p-6 border-b border-gray-800 bg-inherit rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${color}`}>
                {icon}
              </div>
              <h2
                className={`text-2xl font-bold ${
                  isDark ? "text-slate-200" : "text-gray-800"
                }`}
              >
                {title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? "hover:bg-gray-800 text-gray-400"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p
            className={`text-lg leading-relaxed ${
              isDark ? "text-slate-300" : "text-gray-700"
            }`}
          >
            {description}
          </p>

          <div>
            <h4
              className={`text-lg font-semibold mb-3 ${
                isDark ? "text-slate-200" : "text-gray-800"
              }`}
            >
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {achievements.map((achievement, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 ${
                    isDark ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`text-lg font-semibold mb-3 ${
                isDark ? "text-slate-200" : "text-gray-800"
              }`}
            >
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-3">
              {techTags.map((tag, i) => (
                <motion.div
                  key={i}
                  className="relative group flex justify-center"
                  onMouseEnter={() => setHoveredTech(tag.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isDark
                        ? "bg-gray-800/50 hover:bg-gray-700/70 border border-gray-700/50 hover:border-purple-500/50"
                        : "bg-white/70 hover:bg-white/90 border border-gray-200/50 hover:border-purple-400/50"
                    } backdrop-blur-sm hover:scale-110 hover:shadow-lg ${
                      isDark
                        ? "hover:shadow-purple-500/25"
                        : "hover:shadow-purple-400/25"
                    } hover:z-10 relative ${
                      hoveredTech && hoveredTech !== tag.name
                        ? "blur-[2px] opacity-50"
                        : ""
                    }`}
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9">
                      <StackIcon
                        name={tag.icon}
                        variant={isDark ? "dark" : "light"}
                      />
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div
                    className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 pointer-events-none z-20 ${
                      hoveredTech === tag.name
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    } ${
                      isDark
                        ? "bg-gray-800 text-gray-200 border border-gray-700"
                        : "bg-white text-gray-800 border border-gray-200 shadow-lg"
                    }`}
                  >
                    {tag.name}
                    {/* Tooltip arrow */}
                    <div
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                        isDark ? "border-t-gray-800" : "border-t-white"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Text Tags - Pill Style */}
              {textTags &&
                textTags.length > 0 &&
                textTags.map((tag, i) => (
                  <div
                    key={`text-${i}`}
                    className={`px-3 py-2 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer opacity-60 ${
                      isDark
                        ? "bg-gray-800/40 border border-gray-700/40"
                        : "bg-white/40 border border-gray-200/40"
                    } backdrop-blur-sm ${
                      hoveredTech ? "blur-[1px] opacity-60" : ""
                    }`}
                  >
                    <span
                      className={`text-sm font-medium whitespace-nowrap ${
                        isDark ? "text-slate-400" : "text-gray-500"
                      }`}
                    >
                      {tag}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Demo Button Section */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            {isCompanyProject ? (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <Lock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <div>
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                    Company Project
                  </p>
                  <p className="text-xs text-amber-600 dark:text-amber-400">
                    Demo not available due to confidentiality
                  </p>
                </div>
              </div>
            ) : demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isDark
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                } hover:shadow-lg hover:scale-105`}
              >
                <ExternalLink className="h-4 w-4" />
                View Live Demo
              </a>
            ) : (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="h-5 w-5 rounded-full bg-gray-400 dark:bg-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Demo Coming Soon
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Live demo will be available shortly
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Modal>
  );
}

export function ProjectCard({
  title,
  description,
  icon,
  color,
  spotlightColor,
  techTags,
  textTags,
  achievements,
  demoUrl,
  isCompanyProject,
}: Omit<ProjectModalProps, "isOpen" | "onClose">) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <motion.div
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <CardSpotlight
          className="p-6 h-48 flex flex-col justify-between backdrop-blur-sm"
          spotlightColor={spotlightColor}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`p-2 rounded-lg bg-gradient-to-r ${color} flex-shrink-0`}
            >
              {icon}
            </div>
            <h3
              className={`font-semibold text-lg leading-tight ${
                isDark ? "text-slate-200" : "text-gray-800"
              }`}
            >
              {title}
            </h3>
          </div>
          <p
            className={`text-sm leading-relaxed line-clamp-3 ${
              isDark ? "text-slate-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>
          <div className="mt-3">
            <span
              className={`text-xs ${
                isDark ? "text-slate-400" : "text-gray-500"
              }`}
            >
              Click to expand →
            </span>
          </div>
        </CardSpotlight>
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        icon={icon}
        color={color}
        spotlightColor={spotlightColor}
        techTags={techTags}
        textTags={textTags}
        achievements={achievements}
        demoUrl={demoUrl}
        isCompanyProject={isCompanyProject}
      />
    </>
  );
}
