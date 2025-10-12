"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Kata-kata tema Al-Qur'an Digital
  const words = [
    "Baca Al-Qur’an di mana saja",
    "Kapan saja tanpa ribet",
    "Tersedia di genggamanmu"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Ganti kata setiap 1,5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (!searchValue.trim()) return;
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  };

  return (
    <div className="font-sans">
      <div className="pt-32 pb-20 bg-white text-gray-800 sm:pt-36 md:pt-40">
        <div className="text-center max-w-3xl mx-auto px-6">

          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900"
          >
            Al-Qur’an Digital
          </motion.h1>

          {/* TEKS BERGANTI */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentWordIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-lg text-indigo-600 mb-6"
            >
              {words[currentWordIndex]} 📖
            </motion.p>
          </AnimatePresence>

          {/* SEARCH BOX */}
          <div className="bg-white rounded-2xl shadow-lg p-2 mb-4 border border-gray-200">
            <div className="flex">
              <input
                type="text"
                placeholder="Ketik surah yang ingin dicari..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 px-4 py-3 rounded-l-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 text-black placeholder-gray-400 transition-all duration-300 bg-white"
              />
              <motion.button
                onClick={handleSearch}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-500 text-white px-5 py-3 rounded-r-2xl hover:bg-indigo-600 shadow-md transition-all duration-300"
              >
                Cari
              </motion.button>
            </div>
          </div>

          {/* LINK CEPAT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center gap-3 mt-6 flex-wrap"
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

          {/* POPUP */}
          <AnimatePresence>
            {showPopup && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20 backdrop-blur-sm"
              >
                <motion.div
                  className="bg-white text-black px-6 py-4 rounded-xl shadow-2xl border border-gray-300 max-w-sm text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.4 }}
                >
                  <p className="text-lg font-medium">
                    ⚠️ Maaf, fitur pencarian masih dalam perbaikan.
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Silakan coba lagi nanti. Terima kasih atas kesabaranmu!
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
