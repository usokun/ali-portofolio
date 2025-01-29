import { projectsData } from "@/data/projects-data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <div className="sticky-title p-4 bg-dope-black text-md md:text-2xl md:mt-8 font-bold">
        PROJECTS
      </div>
      <section className="flex flex-col w-full h-auto">
        {projectsData.map((projects) => (
          <div
            key={projects.id}
            className="flex flex-col md:flex-row-reverse gap-4 h-auto p-3 justify-start"
          >
            <div className="p-2">
              <Link href={projects.link} target="_blank">
                <div className="flex hover:underline focus:underline hover:text-[#BA0000] justify-start w-full p-1 text-md text-slate-200 font-medium">
                  {projects.title}
                </div>
              </Link>

              <div className="flex justify-start w-full p-1 text-base text-slate-400">
                {projects.description}
              </div>
            </div>

            <div className="flex justify-center gap-2 p-1">
              <Link href={projects.link} target="_blank">
                <div className="flex self-center md:w-[288px] md:h-[144] border-2 border-[#BA0000] rounded-xl p-2">
                  {projects.thumbnail}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
