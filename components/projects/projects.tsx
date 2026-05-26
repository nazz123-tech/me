import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,

} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react"
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    title: "Notehub",
    description: "A web application for creating, organizing, and managing personal notes, built using Next.js and hosted on Vercel.",
    tags: ["Next.js", "TypeScript", "Module CSS"],
    github: "https://github.com/nazz123-tech/06-notehub-nextjs",
    demo: "https://06-notehub-nextjs-theta-nine.vercel.app/",
    codeSnippet: `const query = useQuery({\n  queryKey: ['notes', debouncedSearch, currentPage, perPage],\n  queryFn: () => fetchNotes(debouncedSearch, currentPage, perPage),\n  placeholderData: keepPreviousData\n});`
  },
  {
    title: "Leleka",
    description: "A modern pregnancy tracking web application for expecting parents, focused on weekly pregnancy progress, personalized dashboard data, diary entries, task management, and user profile customization.",
    tags: ["Next.js", "TypeScript", "Module CSS", "Node.js", "MongoDB"],
    github: "https://github.com/ValeriiBrykalov7/little_steps_frontend_final_project",
    demo: "https://little-steps-leleka.com/",
    codeSnippet: `export const getBabyWeekInfo = async (weekNumber: number) => {\n  return requestWithAuthRefresh(async () => {\n    const { data } = await nextServer.get<Baby>(\`/weeks/baby/\${weekNumber}\`);\n    return data;\n  });\n};`
  },
  {
    title: "Portfolio Landing Page",
    description: "Personal playground and living portfolio. It is built with Next.js 15 (App Router) and Tailwind v4 for styling and Shadcn UI components.",
    tags: ["React", "Next.js", "Shadcn UI", "Tailwind"],
    github: "https://github.com/nazz123-tech/me",
    demo: "#",
    codeSnippet: `const toggleTheme = () => {\n  if (theme === "light") setTheme("dark");\n  else if (theme === "dark") setTheme("light");\n};\n\nreturn (\n  <div className="flex flex-row gap-4">\n    <Switch onClick={toggleTheme} id="theme-mode" />\n    <Label htmlFor="theme-mode">Theme</Label>\n  </div>\n);`
  }
]

const Projects = () => {
  return (
    <section className="">
      <h1 className="font-heading text-3xl font-semibold mb-10">Projects</h1>
      <div className="grid grid-cols-4 gap-2">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden w-[500] h-[500] bg-card/40 border border-border/80 hover:border-orange-400 transition-all hover:-translate-y-3 duration-300 flex flex-col group">
            
            <div className="relative w-full aspect-video overflow-hidden border-b border-border/80 bg-background p-4 select-none font-mono text-[11px] leading-relaxed text-zinc-400">
              
              
              <div className="flex space-x-1.5 mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>

     
              <pre className="overflow-hidden whitespace-pre font-mono  text-zinc-500 group-hover:text-card-foreground transition-colors duration-300">
                <code>{project.codeSnippet}</code>
              </pre>
              
            </div>
            <CardHeader className="pb-3 pt-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-heading text-foreground">{project.title}</CardTitle>
                <div className="flex space-x-3 text-muted-foreground">
                  <a href={project.github} className="hover:text-foreground transition-colors"><AiFillGithub className="w-5 h-5" /></a>
                  <a href={project.demo} className="hover:text-foreground transition-colors"><ExternalLink className="w-5 h-5" /></a>
                </div>
              </div>
              <CardDescription className="font-mono pt-1 text-muted-foreground/90">{project.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-foreground text-background text-xs font-sans">
                  {tag}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Projects;