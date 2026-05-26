import { Button } from "@/components/ui/button"; 
import { FiExternalLink } from "react-icons/fi";


import { SideSheet } from "@/components/sheet/sheet";
import { EducationList } from "@/components/education/list";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col justify-between items-center p-16 bg-background sm:items-start">
      <div className="flex flex-col gap-10">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col  items-center gap-10 text-center w-300  sm:items-start sm:text-left">
            <div className="flex flex-col  items-center gap-10 text-center w-300 border rounded-3xl p-5 hover:border-orange-400 sm:items-start sm:text-left">
              <h1 className="max-w-xs text-3xl font-semibold font-heading leading-10 tracking-tight">
                Welcome,
              </h1>
              <p>
                I am a full-stack developer who loves transforming complex tasks
                into clean, efficient, and understandable code. My primary stack
                is Next.js, TypeScript, and Tailwind CSS. My path is unique: my
                experience as a chef at a sushi restaurant taught me impeccable
                discipline, time management, and working under tight deadlines.
                My teaching background helps me easily connect with my team and
                clients, as well as structure project architectures so that
                anyone can understand them.
              </p>
            </div>
            <div className="flex flex-col gap-10 border rounded-3xl p-5 hover:border-orange-400">
              <h2 className="font-heading text-2xl font-semibold text-orange-400">
                What is this site?
              </h2>
              <p>
                This site is my personal playground and living portfolio. It is
                built with Next.js 15 (App Router) and Tailwind v4 for styling
                and Shadcn UI components. No unnecessary bloat—just clean design
                and high performance.
              </p>
            </div>
          </div>
          <div className="flex flex-col border rounded-3xl gap-5 p-5 w-200  hover:border-orange-400">
            <h1 className="max-w-xs text-2xl font-semibold font-heading leading-10 tracking-tight text-orange-400">
              Education
            </h1>
            <EducationList/>
          </div>
        </div>
          <Projects/>
          <Skills/>
        <section className="flex flex-row items-center justify-between min-w-500 gap-10 text-left bg-orange-400 text-white rounded-2xl dark:bg-orange-400 dark:text-black px-5 py-5">
          <div className="flex flex-col gap-5 justify-between">
            <h1 className="text-2xl font-semibold font-mono leading-10 text-left">
              Any exciting project?
            </h1>
            <p>Contact me on social media</p>
            <div className="flex flex-row gap-5">
              <Button
                variant="link"
                className="font-mono text-background hover:-translate-y-1"
              >
                LinkedIn<FiExternalLink className="w-10 h-10"></FiExternalLink>
              </Button>
              <Button
                variant="link"
                className="font-mono text-background hover:-translate-y-1"
              >
                Github<FiExternalLink className="w-10 h-10"></FiExternalLink>
              </Button>
            </div>
          </div>
          <SideSheet/>
        </section>
      </div>
    </main>
  );
}
