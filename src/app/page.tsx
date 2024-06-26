import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between max-w-screen m-auto md:px-0 bg-white">
      <Banner />
      <Experience />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
