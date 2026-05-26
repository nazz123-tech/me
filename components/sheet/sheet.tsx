import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet" 
import { FormCard } from "./form"

export const SideSheet = ()=>{
    return (
        <Sheet>
            <SheetTrigger className="bg-transparent rounded-xl border p-2 border-background font-medium text-lg hover:bg-background hover:text-orange-400">
            Discuss Project
            </SheetTrigger>
            <SheetContent className="flex justify-center px-5">
                <SheetTitle className="font-heading font-bold text-2xl">Contact Form</SheetTitle>
                <FormCard/>
            </SheetContent>
          </Sheet>
    )
}