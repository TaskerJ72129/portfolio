'use client'
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
    </>
  );
}
