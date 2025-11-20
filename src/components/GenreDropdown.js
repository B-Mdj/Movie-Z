"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import genres from "@/data/genres";
import { ChevronDown } from "lucide-react";

export default function GenreDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 text-xs md:text-sm text-gray-700 border rounded-full px-3 py-1 bg-white shadow-sm">
          <span>Genre</span>
          <ChevronDown className="w-3 h-3 text-gray-600" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[720px] p-6 rounded-xl shadow-lg"
      >
        <h3 className="text-lg font-semibold">Genres</h3>
        <p className="text-sm text-gray-500 mt-1">
          See lists of movies by genre
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3 max-h-64 overflow-auto">
          {genres.map((g) => (
            <button
              key={g}
              className="flex items-center justify-between gap-2 px-3 py-2 border rounded-full text-sm hover:bg-gray-50"
            >
              <span>{g}</span>
              <span className="text-gray-400">›</span>
            </button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
