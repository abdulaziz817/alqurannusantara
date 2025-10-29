"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function Tentang() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white flex flex-col items-center justify-center px-6 py-10 text-center relative font-sans overflow-hidden">

      {/* Tombol Kembali */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-8 left-6"
      >
        <Link
          href="/home"
          className="flex items-center gap-2 bg-white/70 backdrop-blur-md border border-indigo-100 shadow-sm px-4 py-2 rounded-full hover:bg-indigo-100/80 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-700">Kembali</span>
        </Link>
      </motion.div>

      {/* Efek shimmer + transisi halus ke card */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="shimmer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-full max-w-md mt-20 rounded-3xl border border-indigo-100 overflow-hidden shadow-md bg-white/50 backdrop-blur-sm relative"
          >
            <div className="relative p-8 space-y-4 overflow-hidden">
              {/* shimmer gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[shimmer_1.6s_infinite]"></div>
              <div className="h-6 bg-indigo-100 rounded w-2/3 mx-auto"></div>
              <div className="h-3 bg-indigo-100 rounded w-1/4 mx-auto"></div>
              <div className="space-y-2 mt-6">
                <div className="h-3 bg-indigo-100 rounded w-5/6 mx-auto"></div>
                <div className="h-3 bg-indigo-100 rounded w-4/6 mx-auto"></div>
                <div className="h-3 bg-indigo-100 rounded w-3/5 mx-auto"></div>
              </div>
              <div className="h-10 bg-indigo-100 rounded-lg w-3/4 mx-auto mt-8"></div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1], // iOS feel
            }}
            className="relative z-10 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 sm:p-10 max-w-md w-full border border-indigo-100 mt-16"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-3">
              Tentang Aplikasi
            </h1>
            <p className="text-gray-500 text-sm mb-6">Versi 1.4.2</p>

            <p className="text-gray-700 leading-relaxed text-base sm:text-[1rem] mb-6 text-justify indent-8">
              <span className="font-semibold text-indigo-700">Al-Qur’an Digital Nusantara</span>{" "}
              membantu umat Islam membaca, memahami, dan menghafal Al-Qur’an dengan tampilan yang
              bersih, ringan, serta mudah digunakan. Didesain agar nyaman dilihat dan mudah dipahami,
              bahkan oleh pengguna baru.
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">
                Dibuat oleh{" "}
                <span className="font-semibold text-indigo-700">Abdul Aziz</span> — Founder{" "}
                <Link
                  href="https://layanannusantara.netlify.app/"
                  target="_blank"
                  className="relative z-10 cursor-pointer text-indigo-600 hover:text-indigo-800 hover:underline inline-flex items-center gap-1 transition-colors duration-300"
                >
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  Layanan Nusantara
                </Link>{" "}
                <span className="text-gray-500">© 2025</span>
              </p>
            </div>

            <p className="mt-6 italic text-gray-500 text-sm">
              “Menyebarkan cahaya Al-Qur’an ke seluruh Nusantara 🌙”
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ornamen background shimmer lembut */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200 rounded-full blur-3xl"
      />

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
