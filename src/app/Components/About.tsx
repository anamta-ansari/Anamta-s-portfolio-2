import Image from "next/image";
export default function About() {
  return (
    <>
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
    </>
  );
}
