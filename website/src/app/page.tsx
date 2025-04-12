import Image from "next/image";
import SplineScene from "@/components/Animation.tsx"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Elevance</h1>
      <p className="mt-4 text-lg">Elevate your skills. Advance your career.</p>
      <SplineScene />
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
