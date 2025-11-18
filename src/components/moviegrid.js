"use client";

import MovieCard from "./moviecard";
import { Skeleton } from "@/components/ui/skeleton";

export default function MovieGrid({ movies = [], loading = false }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="w-full h-48 rounded" />
            <Skeleton className="w-3/4 h-4 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {movies.map((m) => <MovieCard key={m.id} movie={m} />)}
    </div>
  );
}
