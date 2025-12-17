'use client'
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
