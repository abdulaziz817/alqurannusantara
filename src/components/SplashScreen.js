// src/components/SplashScreen.js
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Book } from "lucide-react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    // Getaran lembut jika didukung
    if ("vibrate" in navigator) {
      navigator.vibrate(50);
    }

    const timer = setTimeout(() => {
      onFinish && onFinish();
    }, 3000); // lebih smooth 3 detik

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-b from-indigo-50 to-white text-gray-800 relative overflow-hidden">
      
      {/* Efek cahaya lembut di tengah */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1.1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-[300px] h-[300px] rounded-full bg-indigo-200 blur-3xl"
      />

      {/* Partikel lembut floating */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ opacity: [0, 0.2, 0], y: [-10, 10, -10] }}
          transition={{ delay: i * 0.3, duration: 3, repeat: Infinity }}
          className="absolute w-3 h-3 bg-indigo-300 rounded-full"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
          }}
        />
      ))}

      {/* Ikon kitab dengan efek pop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10"
      >
        <Book size={72} className="text-indigo-600 drop-shadow-lg" />
      </motion.div>

      {/* Nama aplikasi dengan animasi typing-like */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-3xl font-semibold text-gray-800 mt-4 tracking-wider"
      >
        Qur’an Digital
      </motion.h1>

      {/* Subteks dengan transisi lembut */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-gray-500 text-sm mt-2"
      >
        Tenangkan hati, dekatkan diri ✨
      </motion.p>

      {/* Fade out lembut sebelum masuk halaman utama */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="absolute inset-0 bg-white"
      />
    </div>
  );
}
