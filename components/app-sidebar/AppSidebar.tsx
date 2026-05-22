import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { AvatarBlock } from "@/components/avatar/avatar";
import { Badge } from "@/components/ui/badge";
import { FaCircle } from "react-icons/fa";
import { Separator } from "../ui/separator";
import { ThemeToggle } from "../theme/theme-toggle";
import Link from "next/link";
 
export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" >
      <SidebarHeader className="px-5 pt-5">
        <h2>NZAR.dev</h2>
        <div className="flex flex-col gap-1 items-start">
          <div className="flex flex-row">
            <AvatarBlock/>
          </div> 
          
          <h2 className="text-xl font-heading font-medium">Nazar Ismailov</h2>
        </div>
        <Separator orientation="horizontal"/>
          <ul className=" text-muted-foreground flex flex-col gap-1 text-sm uppercase">
        <li className="text-orange-400 ">Fullstack Developer</li>
        <li>Chef in a sushi restaurant</li>
        <li>Pedagogical student</li>
      </ul>
      <Separator orientation="horizontal"/>
      </SidebarHeader>
      <SidebarContent className="flex col px-5">
        <SidebarGroup >
          <ul className="flex flex-col gap-4">
            <Link href="/"><li className="bg-background  text-chart-1 border hover:border-orange-400 hover:text-foreground rounded-3xl transition-colors duration-300 ease-in text-base text-center p-2">Homepage</li></Link>
            <Link href="/skills"><li className="bg-background text-chart-1 border hover:border-orange-400 hover:text-foreground rounded-3xl transition-colors duration-300 ease-in text-base text-center p-2">Skills</li></Link>
            <Link href="/projects"><li className="bg-background text-chart-1 border hover:border-orange-400 hover:text-foreground rounded-3xl transition-colors duration-300 ease-in text-base text-center p-2">Projects</li></Link>
            
          </ul>
        </SidebarGroup>
        <SidebarGroup>
          
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex items-center pb-5 gap-10">
        <ThemeToggle></ThemeToggle>
        <Badge className="text-sm justify-center p-3 font-sans">
           Available for projects 
           <FaCircle  color="green"/>
          </Badge>
      </SidebarFooter>
    </Sidebar>
  )
}