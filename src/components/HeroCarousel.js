"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Play } from "lucide-react";

export default function HeroCarousel({ slides = [] }) {
  const [idx, setIdx] = useState(0);

  if (!slides.length) return null;

  return (
    <section className="w-screen relative overflow-hidden">
      <div className="w-full h-[460px] relative">

        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 
              ${i === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${s.backdrop})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-6xl mx-auto px-8 w-full flex">

                <div className="text-white max-w-lg">
                  <p className="text-sm text-white/80">{s.subtitle}</p>

                  <h2 className="mt-2 text-4xl md:text-5xl font-bold">
                    {s.title}
                  </h2>

                  <div className="mt-3 flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-white">{s.rating}/10</span>
                    </div>
                    <span className="text-white/80">•</span>
                    <span className="text-white/80">{s.votes} Reviews</span>
                  </div>

                  <p className="mt-4 text-sm text-white/80 leading-relaxed">
                    {s.description}
                  </p>

                  <div className="mt-6">
                    <Button className="flex items-center gap-2 h-10 rounded-full bg-white text-black">
                      <Play className="w-4 h-4" />
                      Watch Trailer
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}


        <div className="absolute inset-y-0 left-6 flex items-center">
          <Button
            className="w-10 h-10 rounded-full bg-white/90"
            onClick={() => setIdx((idx - 1 + slides.length) % slides.length)}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </div>


        <div className="absolute inset-y-0 right-6 flex items-center">
          <Button
            className="w-10 h-10 rounded-full bg-white/90"
            onClick={() => setIdx((idx + 1) % slides.length)}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 w-2 rounded-full transition-all 
                ${i === idx ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
