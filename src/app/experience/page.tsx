import Link from "next/link";
import { experienceData } from "../../data/experience-data";

export default function ExperiencePage() {
  return (
    <>
      <section className="flex flex-col w-full h-auto">
        <div className="sticky-title p-4 bg-dope-black text-md md:text-2xl md:mt-8 font-bold">
          EXPERIENCE
        </div>
        {experienceData.map((experience) => (
          <div
            key={experience.id}
            className="flex flex-col gap-y-2 h-auto p-3 border-b border-slate-700"
          >
            <div className="flex justify-start w-full p-1 text-sm text-slate-500">
              {experience.startTime} - {experience.endTime}
            </div>
            <Link href={experience.link} target="_blank">
              <div className="flex justify-start w-full p-1 text-lg text-slate-200 font-medium hover:underline focus:underline hover:text-[#BA0000]">
                {experience.title}
              </div>
            </Link>

            <div className="flex justify-start w-full p-1 text-base text-slate-400">
              {experience.description}
            </div>
            <div className="flex flex-wrap gap-2 p-1 mt-3">
              {experience.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-slate-200 px-3 py-1 text-xs font-medium rounded-xl bg-[#BA0000]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
