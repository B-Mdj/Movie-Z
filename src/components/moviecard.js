"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function MovieCard({ movie }) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition rounded-xl overflow-hidden bg-white">
      <CardContent className="p-0">
        <div className="w-full aspect-[2/3] bg-gray-200 overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-3 pb-3 pt-2">
          <div className="flex items-center text-[11px] text-gray-500 gap-1">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span>{movie.rating}</span>
          </div>
          <p className="mt-1 text-[12px] font-medium text-gray-900 leading-tight">
            {movie.title}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
