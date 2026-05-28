import { Separator } from "@/components/ui/separator";
import Image from "next/image";
export const EducationList = ()=>{
    return (
        <ul className="flex flex-col gap-8 px-5">
              
              <li className="flex flex-row gap-5">
                <Separator orientation="vertical" className="bg-orange-400 "></Separator>
                <div>
                <h2 className="text-base">
                  National University of Life and Envirommental Sciences of
                  Ukraine
                </h2>
                <p className="text-muted-foreground text-sm">
                  Degree of Bachelor of Science in Engineering, Computer
                  Engineering
                </p>
                <span className="text-sm">2020 - 2024</span>
                </div>
                
              </li>
              <li className="flex flex-row gap-5">
                <Separator orientation="vertical" className="bg-gray-400" ></Separator>
                <div>
<h2 className="flex flex-row gap-2 items-center text-base text-muted-foreground">IT School <Image alt="goit" width={60} height={60} className="bg-background dark:bg-orange-400 p-1" src={'/logo.svg'}></Image></h2>
                <p className="text-gray-600 text-sm">Fullstack Course</p>
                <span className="text-sm text-muted-foreground">2025-2026</span>
                </div>
                
              </li>
            </ul>
    )
}