"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { CardSpotlight } from "./card-spotlight";

interface ExpandableCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  spotlightColor: string;
  tags: string[];
  achievements: string[];
  children?: React.ReactNode;
}

export function ExpandableCard({
  title,
  description,
  icon,
  color,
  spotlightColor,
  tags,
  achievements,
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

  const handleCardClick = () => {
    setIsExpanded(true);
  };

  return (
    <>
      {/* Compact Card */}
      <motion.div
        layoutId={`card-${title}`}
        onClick={handleCardClick}
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

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <motion.div
              ref={cardRef}
              layoutId={`card-${title}`}
              className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl backdrop-blur-sm ${
                isDark
                  ? "bg-gray-900/95 border-gray-800"
                  : "bg-white/95 border-gray-200"
              } border`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
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
                    onClick={() => setIsExpanded(false)}
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
