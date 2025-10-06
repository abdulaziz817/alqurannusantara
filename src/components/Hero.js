import SearchBox from "./SearchBox";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
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
            Qur’an Digital
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-indigo-600 mb-6"
          >
            Baca Al-Qur’an di mana aja, kapan aja 📖
          </motion.p>

          <div className="bg-white rounded-2xl shadow-lg p-4 mb-4 border border-gray-200">
            <SearchBox />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center gap-3 mt-6 flex-wrap"
          >
            <Link
              href={"/36"}
              className="rounded-lg border-2 border-indigo-500 text-indigo-600 px-6 py-2 font-medium transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:shadow-md"
            >
              Yāsīn
            </Link>
            <Link
              href={"/2?ayat=255"}
              className="rounded-lg border-2 border-indigo-500 text-indigo-600 px-6 py-2 font-medium transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:shadow-md"
            >
              Ayat Kursi
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
