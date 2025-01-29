import AboutPage from "./about/page";
import ExperiencePage from "./experience/page";
import ProjectsPage from "./projects/page";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-between">
        <div className="flex flex-col my-2">
          <div className="flex flex-col">
            <AboutPage />
          </div>
          <div className="flex flex-col">
            <ExperiencePage />
          </div>
          <div className="flex flex-col">
            <ProjectsPage />
          </div>
        </div>
        <div className="flex flex-col p-2 gap-y-2 text-slate-200 my-4 text-center">
          <Footer />
        </div>
      </main>
    </>
  );
}
