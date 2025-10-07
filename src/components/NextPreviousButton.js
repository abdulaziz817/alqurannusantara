import { MdHome, MdArrowBack } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function NextPreviousButton({ data, homeButton = false }) {
  const router = useRouter();

  // Animasi masuk untuk tombol navigasi surah
  const fadeSlide = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Tombol Melayang - Modern Glass Style */}
      <div className="fixed bottom-6 right-5 flex flex-col gap-3 z-50">
        {/* Tombol Kembali */}
        <motion.button
          onClick={() => router.back()}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative p-3 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-black dark:text-white"
        >
          <MdArrowBack size={22} />
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Kembali
          </span>
        </motion.button>

        {/* Tombol Halaman Awal */}
        {homeButton && (
          <motion.div
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <Link
              href="/home"
              className="p-3 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-black dark:text-white"
            >
              <MdHome size={22} />
            </Link>
            <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Halaman Awal
            </span>
          </motion.div>
        )}
      </div>

      {/* Navigasi Surah */}
      <motion.div
        variants={fadeSlide}
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 py-8 mt-10 text-center px-4 sm:px-8"
      >
        {data?.surah_sebelumnya && (
          <motion.div whileHover={{ scale: 1.05, x: -5 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href={`/${data.surah_sebelumnya.nomor}`}
              className="block w-full text-center px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white font-medium shadow-md hover:shadow-xl transition-all duration-300"
            >
              ← Surah Sebelumnya ({data.surah_sebelumnya.nama.latin})
            </Link>
          </motion.div>
        )}

        {data?.surah_selanjutnya && (
          <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href={`/${data.surah_selanjutnya.nomor}`}
              className="block w-full text-center px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white font-medium shadow-md hover:shadow-xl transition-all duration-300"
            >
              Surah Selanjutnya ({data.surah_selanjutnya.nama.latin}) →
            </Link>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
