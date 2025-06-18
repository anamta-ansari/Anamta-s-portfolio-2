"use client";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
            Hey I am
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
      <div className="w-full min-h-screen text-white bg-black mt-0 px-4">
        <div className="mx-auto 2xl:w-[1500px]">
          <div className="mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 py-16">
            {/* left div */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl font-bold text-amber-400">
                Who I am
              </h1>
              <p className="text-sm sm:text-base mt-5 leading-relaxed">
                I’m a passionate Web Developer and SEO Expert with a growing
                specialization in Data Science. My work lies at the intersection
                of technology, data, and intelligent systems, where I
                continuously explore how emerging technologies can transform
                digital experiences. Currently, I am diving deep into the world
                of cloud-applied generative AI engineering—learning how to use
                cutting-edge AI tools and cloud platforms to build smarter, more
                adaptive web solutions.
                <br />
                <br />
                From crafting responsive, user-focused websites to optimizing
                their visibility through advanced SEO strategies, I bring a
                blend of creativity and analytical thinking to every project.
                Now, with my journey into Data Science, I’m expanding my
                skillset to include data analysis, machine learning, and
                AI-driven development. My goal is to create intelligent web
                applications that are not only functional but also powered by
                meaningful insights from data.
                <br />
                <br />
                As I continue to learn and grow, I remain committed to staying
                at the forefront of modern technology—integrating innovation
                into every line of code, every design decision, and every
                digital strategy I implement.
              </p>

              <button className="bg-[#ffb703] w-40 mt-5 h-12 rounded-md font-semibold text-white hover:bg-[#fb8500]">
                Contact Us
              </button>
            </div>

            {/* right div */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                <Image
                  src="/assets/img1.jpg"
                  className="w-full h-full object-cover rounded-lg"
                  alt="Profile"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* skill section start */}
      <div className="relative w-full bg-black h-full overflow-hidden">
        {/* 🔸 Background Video
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full min-h-[400px] md:h-[700px] object-cover z-[-1]"
        >
          <source src="/assets/yellow1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        {/* Skills Section */}
        <div className="bg-transparent w-full p-8 md:p-[3rem]">
          <div className="mx-auto 2xl:w-[1500px]">
            <h1 className="text-amber-400 underline text-4xl text-center mb-6">
              SKILLS
            </h1>

            {/* Grid layout for skills */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {/* HTML */}
              <div className="bg-[#D24020] max-w-[330px] w-full h-[236px] text-center rounded-[10px] p-3 pt-5 pb-5 flex flex-col justify-center items-center text-white mx-auto">
                <div className="flex items-center justify-center w-24 h-24 rounded-full text-6xl mb-6 bg-orange-600 bg-opacity-90 border-4 border-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="bg-orange-500 rounded-full animate-pulse"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold mb-3">HTML</h1>
                <p>Creating well-organized and meaningful web layouts</p>
              </div>

              {/* CSS */}
              <div className="bg-blue-500 max-w-[330px] w-full h-[236px] text-center rounded-[10px] p-3 pt-5 pb-5 flex flex-col justify-center items-center text-white mx-auto">
                <div className="flex items-center justify-center w-24 h-24 rounded-full text-6xl mb-6 bg-blue-500 bg-opacity-90 border-4 border-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="bg-blue-300 rounded-full animate-pulse"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold mb-3">CSS</h1>
                <p>Designing visually appealing and mobile-friendly layouts</p>
              </div>

              {/* TypeScript */}
              <div className="bg-[#095859] max-w-[330px] w-full h-[236px] text-center rounded-[10px] p-3 pt-5 pb-5 flex flex-col justify-center items-center text-white mx-auto">
                <div className="flex items-center justify-center w-24 h-24 rounded-full text-6xl mb-6 bg-[#095859] bg-opacity-90 border-4 border-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    role="img"
                    viewBox="0 0 24 24"
                    className="bg-[#095859] rounded-full animate-pulse"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold mb-3">TypeScript</h1>
                <p>Bringing type safety to JavaScript development</p>
              </div>

              {/* python  */}
              <div className="bg-[#8d99ae] max-w-[330px] w-full h-[236px] text-center rounded-[10px] p-3 pt-5 pb-5 flex flex-col justify-center items-center text-white mx-auto">
                <div className="flex items-center justify-center w-24 h-24 rounded-full text-6xl mb-6 bg-[#9eadca] bg-opacity-90 border-4 border-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 255"
                    className="animate-pulse"
                    width="80"
                    height="80"
                    fill="currentColor"
                  >
                    <path
                      d="M126.9 0C57 0 63.2 28.5 63.2 28.5l.1 29.6h64.4v8.8H48.8S0 63.4 0 127.4c0 63.1 44.3 61.2 44.3 61.2h25.3v-35.8s-1.4-44.3 45.1-44.3h72.8s41.7.7 41.7-38.7V38.6S232.3 0 126.9 0zm-28 20.4c7.7 0 13.9 6.2 13.9 13.9s-6.2 13.9-13.9 13.9-13.9-6.2-13.9-13.9 6.3-13.9 13.9-13.9zM256 128c0-59.1-42.4-62.3-42.4-62.3h-26v34.6s1.2 44.3-44.3 44.3H70.5S29.3 143.9 29.3 184v35.3s-4.7 35.7 97.2 35.7c89.1 0 100.9-25.4 100.9-25.4s7.6-15.3 7.6-31.9v-36.1h-66v-8.8H208s48 3.4 48-65.8zm-63.7 92.6c7.7 0 13.9 6.2 13.9 13.9s-6.2 13.9-13.9 13.9-13.9-6.2-13.9-13.9 6.3-13.9 13.9-13.9z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold mb-3">Python</h1>
                <p>
                  Building powerful logic, automation, and intelligent
                  applications
                </p>
              </div>

              {/* Next.js */}
              <div className="bg-[#5C5F68] max-w-[330px] w-full h-[236px] text-center rounded-[10px] p-3 pt-5 pb-5 flex flex-col justify-center items-center text-white mx-auto">
                <div className="flex items-center justify-center w-24 h-24 rounded-full text-6xl mb-6 bg-[#5C5F68] bg-opacity-90 border-4 border-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    role="img"
                    viewBox="0 0 24 24"
                    className="bg-[#5C5F68] rounded-full animate-pulse"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold mb-3">Next.js</h1>
                <p>Developing high-performance and scalable apps with React</p>
              </div>

              {/* Tailwind CSS */}
              <div className="bg-teal-600 max-w-[330px] w-full h-[236px] text-center rounded-[10px] p-3 pt-5 pb-5 flex flex-col justify-center items-center text-white mx-auto">
                <div className="flex items-center justify-center w-24 h-24 rounded-full text-6xl mb-6 bg-teal-600 bg-opacity-90 border-4 border-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    role="img"
                    viewBox="0 0 24 24"
                    className="bg-teal-300 rounded-full animate-pulse"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold mb-3">Tailwind CSS</h1>
                <p>
                  Crafting responsive and scalable user interfaces with Tailwind
                  CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* project section */}
      
            <div className="bg-black w-full min-h-[500px] p-[3rem]">
              <div className="mx-auto 2xl:w-[1500px]">
                <h1 className="text-amber-400 underline text-4xl text-center mb-6">
                  My Projects
                </h1>
                {/* projects cards */}
                <div className="flex flex-wrap items-center justify-center gap-10">
                  {/* project1 */}
                  <div className="relative w-[330px] h-[236px] group overflow-hidden rounded-lg ">
                    <Image
                      src="/assets/python.jpg"
                      alt="Profile"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
      
                    {/* Semi-transparent overlay */}
                    <div className="absolute inset-0 bg-[#fcf4f1a4] bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-black p-4 text-center">
                      <h2 className="text-2xl font-bold mb-2">Python</h2>
                      <p className="text-sm mb-4">
                        A Python project demonstrating automation, data processing,
                        and smart algorithms.
                      </p>
                      <Link
                        href="https://github.com/anamta-ansari?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#ffb703] text-white px-4 py-2 rounded hover:bg-[#fb8500] transition"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
      
                  {/* project 2 */}
                  <div className="relative w-[330px] h-[236px] group overflow-hidden rounded-lg">
                    <Image
                      src="/assets/nextjs.png"
                      alt="Profile"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* semi transparent overlay */}
                    <div className="absolute inset-0 bg-[#fcf4f1a4] bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-black p-4 text-center">
                      <h2 className="text-2xl font-bold mb-2">Python</h2>
                      <p className="text-sm mb-4">
                        A Python project demonstrating automation, data processing,
                        and smart algorithms.
                      </p>
                      <Link
                        href="https://github.com/anamta-ansari?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#ffb703] text-white px-4 py-2 rounded hover:bg-[#fb8500] transition"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
      
                  {/* project 3 */}
                  <div className="relative w-[330px] h-[236px] group overflow-hidden rounded-lg">
                    <Image
                      src="/assets/typescript.png"
                      alt="Profile"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* semi transparent overlay */}
                    <div className="absolute inset-0 bg-[#fcf4f1a4] bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-black p-4 text-center">
                      <h2 className="text-2xl font-bold mb-2">Python</h2>
                      <p className="text-sm mb-4">
                        A Python project demonstrating automation, data processing,
                        and smart algorithms.
                      </p>
                      <Link
                        href="https://github.com/anamta-ansari?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#ffb703] text-white px-4 py-2 rounded hover:bg-[#fb8500] transition"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
}
