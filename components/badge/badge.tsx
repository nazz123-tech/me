import { Badge } from "@/components/ui/badge";
import { FaCircle } from "react-icons/fa";

export const CustomBadge = ()=>{
    return (
        <Badge className="text-sm justify-center p-3 font-sans">
           Available for projects 
           <FaCircle  color="green"/>
          </Badge>
    )
}