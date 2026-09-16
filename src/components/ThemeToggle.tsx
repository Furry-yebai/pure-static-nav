"use client"

import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"

export function ThemeToggle() {
  return (
    <div className="fixed top-6 right-6 z-50">
      <AnimatedThemeToggler variant="circle" duration={500} />
    </div>
  )
}
