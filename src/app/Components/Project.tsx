import Image from "next/image";
export default function Project() {
  return (
    <>
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
                <a
                  href="https://github.com/anamta-ansari?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffb703] text-white px-4 py-2 rounded hover:bg-[#fb8500] transition"
                >
                  View Project
                </a>
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
                <a
                  href="https://github.com/anamta-ansari?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffb703] text-white px-4 py-2 rounded hover:bg-[#fb8500] transition"
                >
                  View Project
                </a>
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
                <a
                  href="https://github.com/anamta-ansari?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffb703] text-white px-4 py-2 rounded hover:bg-[#fb8500] transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
