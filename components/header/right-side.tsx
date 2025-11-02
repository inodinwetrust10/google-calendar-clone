"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useViewStore, useThemeStore } from "@/lib/store";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export default function HeaderRight() {
  const { setView } = useViewStore();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="flex items-center space-x-4">
      <Select onValueChange={(v) => setView(v)}>
        <SelectTrigger className="w-24 transition-all duration-200 hover:scale-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0">
          <SelectValue placeholder="Month" />
        </SelectTrigger>
        <SelectContent className="animate-scale-in">
          <SelectItem value="month" className="transition-colors duration-150 hover:bg-blue-50 dark:hover:bg-blue-950">Month</SelectItem>
          <SelectItem value="week" className="transition-colors duration-150 hover:bg-blue-50 dark:hover:bg-blue-950">Week</SelectItem>
          <SelectItem value="day" className="transition-colors duration-150 hover:bg-blue-50 dark:hover:bg-blue-950">Day</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative h-9 w-9 rounded-full transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900 active:scale-95"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
      </Button>

      <Avatar className="transition-all duration-200 hover:scale-110 hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 cursor-pointer dark:hover:ring-blue-600">
        <AvatarFallback>AD</AvatarFallback>
      </Avatar>
    </div>
  )
}
