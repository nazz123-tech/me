import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { AvatarBlock } from "@/components/avatar/avatar";
import { Separator } from "../ui/separator";
import { ThemeToggle } from "../theme/theme-toggle";
import { CustomBadge } from "../badge/badge";
 
export function AppSidebar() {
  return (
    <Sidebar className="sticky top-0 w-full" variant="sidebar" >
      <SidebarHeader className="px-5 pt-5">
        <h2>NZAR.dev</h2>
        <div className="flex flex-col gap-1 items-start">
          <div className="flex flex-row items-center gap-2">
            <AvatarBlock/>
            <CustomBadge/>
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
      </SidebarContent>
      <SidebarFooter className="flex items-center pb-5 gap-10">
        <ThemeToggle></ThemeToggle>
      </SidebarFooter>
    </Sidebar>
  )
}