// src/components/SplashScreen.js
"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book } from "lucide-react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    if ("vibrate" in navigator) navigator.vibrate(50);
    const timer = setTimeout(() => onFinish && onFinish(), 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-b from-indigo-100 via-white to-indigo-50 overflow-hidden select-none"
      >
        {/* Efek cahaya lembut */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-[280px] h-[280px] bg-indigo-300/40 rounded-full blur-3xl"
        />

        {/* Partikel lembut floating */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.25, 0], y: [-15, 15, -15] }}
            transition={{
              delay: i * 0.4,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-2.5 h-2.5 bg-indigo-400/40 rounded-full"
            style={{
              top: `${20 + i * 12}%`,
              left: `${15 + i * 12}%`,
            }}
          />
        ))}

        {/* Ikon kitab dengan efek pop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="z-10 drop-shadow-xl"
        >
          <Book size={80} className="text-indigo-600" />
        </motion.div>

        {/* Nama aplikasi */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl sm:text-4xl font-bold font-sans text-gray-800 mt-5 tracking-wide text-center leading-tight"
        >
          Al-Qur’an Digital <br />
          <span className="text-indigo-600">Nusantara</span>
        </motion.h1>

        {/* Subteks */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-gray-500 text-sm mt-3"
        >
          Tenangkan hati, dekatkan diri ✨
        </motion.p>

        {/* Transisi keluar lembut */}
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
