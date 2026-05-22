import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconType } from "react-icons";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiFigma, 
  SiPostman,
  SiGithub,
  SiJavascript,
  SiCss 
} from "react-icons/si";

interface Skill{
    name:string;
    icon:IconType;
}
interface SkillsCategory{
    title:string;
    skills:Skill[];
}
const skillCategories : SkillsCategory[] = [
  {
    title: "Development",
    skills: [
      { name: "React", icon: SiReact},
      { name: "Next.js", icon:SiNextdotjs },
      { name: "TypeScript", icon:SiTypescript },
      { name: "Node.js", icon: SiNodedotjs},
      { name: "Tailwind CSS",  icon: SiTailwindcss},
      { name: "MongoDB", icon: SiMongodb },
      { name: "Module CSS", icon: SiCss},
      { name: "JavaScript", icon: SiJavascript}
    ]
  },
  {
    title: "Design & Tools",
    skills: [
      { name: "Figma" , icon:SiFigma},
      { name: "Git & GitHub" , icon:SiGithub},
      { name: "Postman", icon: SiPostman}
    ]
  }
]

function Skills() {
  return (
    <section className="py-20 px-16">
      <h1 className="font-heading text-3xl font-semibold mb-10 ">
        Skills
      </h1>
        
      <Tabs defaultValue="Development" className="w-full">
        <TabsList variant="line" className="mb-6">
          {skillCategories.map((category) => (
            <TabsTrigger 
              key={category.title} 
              value={category.title}
              className="font-sans cursor-pointer"
            >
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {skillCategories.map((category) => (
  <TabsContent key={category.title} value={category.title}>
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 pt-4">
      {category.skills.map((skill, i) => {
        const Icon = skill.icon 
        
        return (
          <div 
            key={i} 
            className="group flex flex-col items-center justify-center text-center py-15 px-30 gap-4 bg-card/40 border border-border/80 rounded-xl hover:border-orange-400   transition-all hover:-translate-y-3 duration-300 l"
          >
           
            <Icon className="w-10 h-10 text-muted-foreground group-hover:text-foreground " />
            
              
            <h3 className="font-mono text-lg font-medium text-muted-foreground group-hover:text-foreground mb-1">
              {skill.name}
            </h3>
            
          </div>
        )
      })}
    </div>
  </TabsContent>
))}
      </Tabs>
    </section>
  )
}

export default Skills;