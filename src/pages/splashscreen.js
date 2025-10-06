import { useEffect } from "react";
import { useRouter } from "next/router";
import SplashScreen from "@/components/SplashScreen";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home"); // pindah ke halaman utama
    }, 2500); // 2.5 detik

    return () => clearTimeout(timer);
  }, [router]);

  return <SplashScreen />;
}
