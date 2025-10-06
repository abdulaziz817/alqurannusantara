// src/pages/index.js
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RedirectToSplash() {
  const router = useRouter();

  useEffect(() => {
    // Langsung arahkan ke /splashscreen saat halaman / dibuka
    router.replace("/splashscreen");
  }, [router]);

  return null; // kosong, karena langsung redirect
}
