"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jessica Smith",
    role: "Nutritionist",
    quote:
      "Using this service has transformed my understanding of gut health. The insights I received were invaluable, and the process was seamless. I feel more in control of my wellbeing than ever.",
    image: "/images/placeholder/avatar-placeholder.svg",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Gastroenterologist",
    quote:
      "VAMS Biome makes it far easier to translate microbiome data into conversations patients can actually act on.",
    image: "/images/placeholder/avatar-placeholder.svg",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "BiomeWell Member",
    quote:
      "The reports were clear, friendly, and empowering. I finally understand how my gut health connects to how I feel day to day.",
    image: "/images/placeholder/avatar-placeholder.svg",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="mt-2 sm:mt-3 pt-8 pb-1 sm:pt-10 sm:pb-2 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#003554] via-[#005f73] to-[#0EA5E9] text-white px-6 py-8 sm:px-10 sm:py-10 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            What Our Clients Say
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Avatar + arrows */}
            <div className="flex items-center gap-4 md:w-1/3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
              >
                <span className="text-xl">&#8249;</span>
              </button>
              <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </div>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
              >
                <span className="text-xl">&#8250;</span>
              </button>
            </div>

            {/* Quote */}
            <div className="md:w-2/3 mt-6 md:mt-0">
              <p className="text-xl sm:text-2xl font-medium leading-relaxed">
                "{current.quote}"
              </p>
              <p className="mt-4 text-base font-semibold">
                {current.name}, {current.role}
              </p>

              {/* Mobile controls */}
              <div className="mt-6 flex md:hidden justify-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
                >
                  <span className="text-xl">&#8249;</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
                >
                  <span className="text-xl">&#8250;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
