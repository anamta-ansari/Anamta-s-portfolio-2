"use client";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SkillsComponent from "./Components/Skills"
import ProjectComponent from "./Components/Project"
import AboutComponent from "./Components/About"

export default function Home() {
  const texts = [
    "Anamta Ansari",
    "Pursuing Web Development",
    "Cloud Native AI",
  ];
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[currentTextIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Wait before starting the next text
      const pause = setTimeout(() => {
        // Move to next string or loop back to first
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setDisplayText("");
        setCharIndex(0);
      }, 1000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, currentTextIndex, texts]);

  return (
    <>
      {/* hero section */}
      <div className="w-full min-h-screen text-white relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/assets/yellow-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="mx-auto flex items-center justify-center flex-col px-4 text-center w-full h-full pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-pulse">
            Hello I' am
          </h1>

          <h1 className="text-2xl sm:text-3xl md:text-4xl mt-3 font-bold text-amber-400 border-r-2 border-white pr-2 whitespace-nowrap overflow-hidden animate-blink">
            {displayText}
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-bold mt-4 max-w-2xl">
            I am a web developer and SEO expert studying DATA SCIENCE, exploring
            the intersection of data and technology through cloud-applied
            generative AI engineering. My journey is about mastering the latest
            AI tools to enhance web development and the science of data.
          </p>

          {/* social icon div start here */}
          <div className="flex gap-4 sm:gap-6 mt-6 flex-wrap justify-center">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-[#ffb703] text-3xl sm:text-[42px] hover:text-[#fb8500] animate-pulse transition" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anamta-ansari-a117552b5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#ffb703] text-3xl sm:text-[42px] hover:text-[#fb8500] animate-pulse  transition" />
            </Link>
            <Link
              href="https://github.com/anamta-ansari?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[#ffb703] text-3xl sm:text-[42px] hover:text-[#fb8500] animate-pulse  transition" />
            </Link>
            <Link href="mailto:anamtaansarii123@gmail.com">
              <FaEnvelope className="text-[#ffb703] text-3xl sm:text-[42px] hover:text-[#fb8500] animate-pulse transition" />
            </Link>
          </div>
          {/* social icon div ended */}
        </div>
      </div>

      {/* about */}
        <AboutComponent/>

      {/* skill section  */}
          <SkillsComponent/>
      



      {/* project section */}
        <ProjectComponent/>
    </>
  );
}
