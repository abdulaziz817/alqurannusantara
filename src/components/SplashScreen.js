// src/components/SplashScreen.js
"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function SplashScreen({ onFinish }) {
  // Durasi splash sebelum lanjut
  useEffect(() => {
    if ("vibrate" in navigator) navigator.vibrate(25);
    const timer = setTimeout(() => onFinish && onFinish(), 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-b from-indigo-100 via-white to-indigo-50 overflow-hidden select-none"
      >
        {/* Latar belakang lingkaran lembut */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute w-[300px] h-[300px] bg-indigo-300/40 rounded-full blur-2xl"
        />

        {/* Logo utama (ikon kitab) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 flex flex-col items-center"
        >
          <div className="bg-white shadow-lg shadow-indigo-100 p-5 rounded-2xl">
            <BookOpen
              size={64}
              strokeWidth={1.5}
              className="text-indigo-600 drop-shadow-sm"
            />
          </div>
        </motion.div>

        {/* Judul aplikasi */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-3xl sm:text-4xl font-extrabold font-sans text-gray-800 mt-6 text-center leading-snug"
        >
          Al-Qur’an Digital <br />
          <span className="text-indigo-600"> Nusantara</span>
        </motion.h1>

        {/* Subjudul inspiratif */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-500 text-sm sm:text-base mt-3 text-center"
        >
          Tenangkan hati,Dekatkan diri ✨
        </motion.p>

        {/* Garis halus transisi di bawah */}
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          animate={{ width: "60%", opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
          className="h-[2px] bg-indigo-500/40 rounded-full mt-8"
        />

        {/* Fade out halus sebelum berpindah */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-white pointer-events-none"
        />
      </motion.div>
    </AnimatePresence>
  );
}
