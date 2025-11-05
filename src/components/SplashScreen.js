// src/components/SplashScreen.js
"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    if ("vibrate" in navigator) navigator.vibrate(20);
    const timer = setTimeout(() => onFinish && onFinish(), 2300);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-b from-indigo-100 via-white to-indigo-50 select-none"
      >
        {/* Lingkaran lembut tanpa blur */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute w-[250px] h-[250px] bg-indigo-300/30 rounded-full"
        />

        {/* Logo kitab */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="z-10 flex flex-col items-center"
        >
          <div className="bg-white shadow-md p-5 rounded-xl">
            <BookOpen
              size={60}
              strokeWidth={1.4}
              className="text-indigo-600"
            />
          </div>
        </motion.div>

        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-3xl font-extrabold text-gray-800 mt-6 text-center leading-snug"
        >
          Al-Qur’an Digital <br />
          <span className="text-indigo-600">Nusantara</span>
        </motion.h1>

        {/* Subjudul */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gray-500 text-sm mt-2 text-center"
        >
          Tenangkan hati, Dekatkan diri ✨
        </motion.p>

        {/* Garis halus */}
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          animate={{ width: "55%", opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="h-[2px] bg-indigo-500/40 rounded-full mt-6"
        />
      </motion.div>
    </AnimatePresence>
  );
}
