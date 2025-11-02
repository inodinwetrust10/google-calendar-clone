"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useDateStore } from "@/lib/store";
import { useCallback, useState } from "react";
import { SvgIcons } from "../svg-icons";
import EventPopover from "../event-popover";

export default function Create() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleOpenPopover = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPopoverOpen(true);
  }, []);

  const handleClosePopover = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);

  const { userSelectedDate } = useDateStore();

  return (
    <>
      <Button
        variant="ghost"
        className="w-[150px] justify-start rounded-full py-6 shadow transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
        onClick={handleOpenPopover}
      >
        <SvgIcons.googleCreate className="mr-2 h-8 w-8 transition-transform duration-200 group-hover:rotate-12" /> <span> Create </span>{" "}
        <ChevronDown className="transition-transform duration-200 hover:translate-y-0.5" />
      </Button>
      {isPopoverOpen && (
        <EventPopover
          isOpen={isPopoverOpen}
          onClose={handleClosePopover}
          date={userSelectedDate.format("YYYY-MM-DD")}
        />
      )}
    </>
  );
}
