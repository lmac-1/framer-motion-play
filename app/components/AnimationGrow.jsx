"use client";
import { motion } from "framer-motion";

export const AnimationGrow = () => (
  <motion.div
    className="bg-blue-500 rounded-full w-20 h-20"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
  />
);
