import Banner from "@/components/Banner/Banner";
import Experience from "@/components/Experience/Experience";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between max-w-screen m-auto md:px-0 bg-white">
      <Banner />
      <Experience />
    </main>
  );
}
