"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const words = [
    "Baca Al-Qur’an di mana saja",
    "Kapan saja tanpa ribet",
    "Tersedia di genggamanmu",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (!searchValue.trim()) return;
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="font-sans relative overflow-hidden">
      {/* Background lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />

      {/* Konten utama */}
      <div className="relative z-10 pt-32 pb-24 text-gray-800 sm:pt-36 md:pt-44">
        <div className="text-center max-w-3xl mx-auto px-6">
          
          {/* Judul utama */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight"
          >
            Al-Qur’an <span className="text-gray-900">Digital</span>
          </motion.h1>

          {/* Teks berganti */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentWordIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-lg sm:text-xl text-indigo-600 mb-8 font-medium"
            >
              {words[currentWordIndex]} 📖
            </motion.p>
          </AnimatePresence>

          {/* Kotak pencarian */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-3 mb-8 border border-gray-100 hover:shadow-lg transition-all duration-500"
          >
            <div className="flex items-center gap-2">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="🔍  Ketik surah yang ingin dicari..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-gray-800 placeholder-gray-400 transition-all duration-300 bg-white shadow-sm"
              />

              <motion.button
                onClick={handleSearch}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="bg-indigo-500 text-white px-5 py-3 rounded-xl font-medium shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all duration-300"
              >
                Cari
              </motion.button>
            </div>
          </motion.div>

          {/* Link cepat */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            className="flex justify-center gap-3 mt-4 flex-wrap"
          >
            <Link
              href={"/36"}
              className="rounded-lg border-2 border-indigo-500 text-indigo-600 px-6 py-2 font-medium transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:shadow-lg"
            >
              Yāsīn
            </Link>
            <Link
              href={"/2?ayat=255"}
              className="rounded-lg border-2 border-indigo-500 text-indigo-600 px-6 py-2 font-medium transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:shadow-lg"
            >
              Ayat Kursi
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            key="popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-sm w-full p-6 text-center"
            >
              {/* Tombol Close */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Tutup popup"
              >
                ✕
              </button>

              {/* Isi Popup */}
              <div className="flex flex-col items-center space-y-3">
                <motion.div
                  initial={{ rotate: -8 }}
                  animate={{ rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <span className="text-4xl">⚠️</span>
                </motion.div>

                <h3 className="text-lg font-semibold text-gray-800">
                  Fitur Pencarian Sedang Diperbaiki
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Silakan coba lagi nanti. Terima kasih atas kesabaranmu! 🙏
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
