"use client"

import * as React from "react"
import { Switch } from "../ui/switch"
import { useTheme } from "next-themes"
import { Label } from "../ui/label"


export function  ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)


  React.useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)
    
    return () => clearTimeout(timer)
  }, [])


  const toggleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("light");
  }

  return (
  <div className="flex flex-row gap-4">
    <Switch onClick={toggleTheme} id="theme-mode" />
      <Label htmlFor="theme-mode">Theme</Label>
  </div>
    
  );
}