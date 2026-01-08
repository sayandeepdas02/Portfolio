import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
        <Navbar />
        <Hero />
        <Separator />

        <Experience />
        <Separator />

        <Projects />
        <Separator />

        <Skills />
        <Separator />

        <Education />
        <Separator />

        <Certifications />
        <Separator />

        <Footer />
      </div>
    </main>
  );
}
