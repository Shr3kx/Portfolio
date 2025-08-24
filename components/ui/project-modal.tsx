"use client";

import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { X, ExternalLink, Lock } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { CardSpotlight } from "./card-spotlight";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  spotlightColor: string;
  tags: string[];
  achievements: string[];
  demoUrl?: string;
  isCompanyProject?: boolean;
}

// Set app element for accessibility
if (typeof window !== "undefined") {
  try {
    // Try different selectors for Next.js root element
    const appElement = document.querySelector("#__next") as HTMLElement || 
                      document.querySelector("body") as HTMLElement || 
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
  tags,
  achievements,
  demoUrl,
  isCompanyProject = false,
}: ProjectModalProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    isDark
                      ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tag}
                </span>
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
  tags,
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
        tags={tags}
        achievements={achievements}
        demoUrl={demoUrl}
        isCompanyProject={isCompanyProject}
      />
    </>
  );
}
