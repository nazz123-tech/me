import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,

} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Sushi Delivery App",
    description: "Интерактивное приложение для заказа суши с корзиной, выбором роллов и интеграцией онлайн-оплаты.",
    tags: ["Next.js", "TypeScript", "Tailwind v4", "Prisma"],
    github: "#",
    demo: "#",
    codeSnippet: `const cart = useCart();\n\nexport function addToCart(item) {\n  return cart.add({\n    id: item.id,\n    name: item.name,\n    price: item.price\n  });\n}`
  },
  {
    title: "Educational Platform",
    description: "Система управления обучением (LMS) для студентов педагогических вузов с тестами и курсами.",
    tags: ["React", "Node.js", "MongoDB", "Shadcn UI"],
    github: "#",
    demo: "#",

    codeSnippet: `import { db } from "@/lib/db";\n\nexport async function getCourses() {\n  return await db.course.findMany({\n    where: { isPublished: true },\n    orderBy: { createdAt: "desc" }\n  });\n}`
  }
]

const Projects = () => {
  return (
    <section className="py-20 px-16">
      <h1 className="font-heading text-3xl font-semibold mb-10">Projects</h1>
      <div className="grid grid-cols-2 gap-10">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden bg-card/40 border border-border/80 hover:border-orange-400 transition-all hover:-translate-y-3 duration-300 flex flex-col h-full group">
            
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
                  <a href={project.github} className="hover:text-foreground transition-colors"><ExternalLink className="w-5 h-5" /></a>
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