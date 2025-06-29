export default function Skills() {
  type Skill = {
        name : string,
        level : number
    };

    const skills: Skill[] = [
        { name: "HTML",          level: 100 },
        { name: "CSS",           level: 90  },
        { name: "TYPESCRIPT",    level: 70  },
        { name: "PYTHON",           level: 80  },
        { name: "WORDPRESS/CMS", level: 90  },
        { name: "NEXTJS",     level: 75  },
    ]
  return (
    <>
       {/* Skills Section */}
    <div className = " h-screen bg-black text-white  w-auto ">
            <div className = "mx-auto flex flex-col items-center justify-center py-[5rem]  2xl:w-[1500px]">
                <h1 className="text-[38px] font-sans  text-amber-400 underline">Skills</h1>
                <section className="w-full max-w-5xl mx-auto py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {skills.map(({ name, level }) => (
          <div key={name}>
            <header className="flex justify-between mb-2">
              <h3 className="font-semibold tracking-wide">{name}</h3>
              <span className="font-medium">{level}%</span>
            </header>

            {/* background track */}
            <div className="h-2 rounded bg-gray-200">
              {/* filled part */}
              <div
                role="progressbar"
                aria-valuenow={level}
                aria-valuemin={0}
                aria-valuemax={100}
                className="h-full rounded bg-primary"
                style={{ width: `${level}%`, backgroundColor: "#ffb703" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
            </div>
    </div>
    </>
  );
}
