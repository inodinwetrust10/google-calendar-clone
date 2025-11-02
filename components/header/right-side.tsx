"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useViewStore } from "@/lib/store";

export default function HeaderRight() {
  const { setView } = useViewStore();

  return (
    <div className="flex items-center space-x-4">
      <Select onValueChange={(v) => setView(v)}>
        <SelectTrigger className="w-24 transition-all duration-200 hover:scale-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0">
          <SelectValue placeholder="Month" />
        </SelectTrigger>
        <SelectContent className="animate-scale-in">
          <SelectItem value="month" className="transition-colors duration-150 hover:bg-blue-50">Month</SelectItem>
          <SelectItem value="week" className="transition-colors duration-150 hover:bg-blue-50">Week</SelectItem>
          <SelectItem value="day" className="transition-colors duration-150 hover:bg-blue-50">Day</SelectItem>
        </SelectContent>
      </Select>

      <Avatar className="transition-all duration-200 hover:scale-110 hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 cursor-pointer">
        <AvatarFallback>AD</AvatarFallback>
      </Avatar>
    </div>
  )
}
