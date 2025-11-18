"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GenreDropdown from "./GenreDropdown";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("dark-mode");
    if (stored === "true") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleDark() {
    const next = !dark;
    setDark(next);
    if (next) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("dark-mode", String(next));
  }

  return (
    <header className="w-full bg-white border-b">
      <div className="mx-auto px-6 h-16 flex items-center justify-between max-w-[1800px]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-indigo-600 rounded-sm" />
            <span className="font-semibold text-sm text-indigo-700">Movie Z</span>
          </div>

          <GenreDropdown />
        </div>

        <div className="flex-1 px-6 max-w-2xl">
          <div className="relative">
            <svg className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"></path></svg>
            <Input className="pl-12 h-10 rounded-full bg-gray-50 text-sm" placeholder="Search.." />
          </div>
        </div>

<div className="flex items-center gap-4">
  <button className="h-9 w-9 rounded-full flex items-center justify-center bg-gray-100">
    <svg
      className="w-4 h-4 text-gray-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 17a7 7 0 009-4.21z"
      />
    </svg>
  </button>
</div>

      </div>
    </header>
  );
}
