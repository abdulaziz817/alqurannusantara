// src/components/SplashScreen.js
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Book } from "lucide-react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    // Getaran lembut seperti aplikasi mobile
    if (window.navigator.vibrate) window.navigator.vibrate(50);

    const timer = setTimeout(() => {
      onFinish && onFinish();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-b from-indigo-50 to-white text-gray-800 relative overflow-hidden">
      {/* Efek cahaya lembut di tengah */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        className="absolute w-[300px] h-[300px] rounded-full bg-indigo-200 blur-3xl"
      />

      {/* Ikon kitab */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10"
      >
        <Book size={72} className="text-indigo-600" />
      </motion.div>

      {/* Nama aplikasi */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-3xl font-semibold text-gray-800 mt-4"
      >
        Qur’an Digital
      </motion.h1>

      {/* Subteks dengan transisi lembut */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-gray-500 text-sm mt-2"
      >
        Tenangkan hati, dekatkan diri ✨
      </motion.p>

      {/* Fade out lembut sebelum masuk halaman utama */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1] }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="absolute inset-0 bg-white"
      />
    </div>
  );
}
