"use client";

import HeroCarousel from "@/components/HeroCarousel";
import SectionRow from "@/components/SectionRow";
import { featuredSlides, upcoming, popular, topRated } from "@/data/movies";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <HeroCarousel slides={featuredSlides} />

      <div className="max-w-6xl mx-auto px-6">
        <SectionRow title="Upcoming" movies={upcoming} loading={loading} />
        <SectionRow title="Popular" movies={popular} loading={loading} />
        <SectionRow title="Top Rated" movies={topRated} loading={loading} />
      </div>
    </>
  );
}
