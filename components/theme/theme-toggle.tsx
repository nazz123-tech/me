'use client'
import * as React from "react"
import { Switch } from "../ui/switch"
import { useTheme } from "next-themes"
import { Label } from "../ui/label"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <div className="flex flex-row gap-4 items-center">
      <Switch 
        id="theme-mode" 
        checked={theme === "dark"} 
        onCheckedChange={handleThemeChange} 
      />
      <Label htmlFor="theme-mode">Theme</Label>
    </div>
  )
}