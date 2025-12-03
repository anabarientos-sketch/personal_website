"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1B1F] to-[#0D0D0F] text-[#E0E0E0] font-sans flex flex-col">

      {/* Header */}
      <header className="w-full py-4 px-6 flex justify-between items-center bg-[#23232B]/90 backdrop-blur-md shadow-md border-b border-[#2C2C33]">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-[#FF8C42] drop-shadow-lg">Angelika.com</h1>
        <Link
          href="/"
          className="bg-gradient-to-r from-[#FF8C42] to-[#FFB07C] text-white px-5 py-2 rounded-full font-semibold hover:from-[#FFB07C] hover:to-[#FF8C42] transition transform hover:scale-105 shadow-lg"
        >
          Back to Home
        </Link>
      </header>

      {/* Content */}
      <section className="py-16 px-6 sm:px-12 flex justify-center relative z-10">
        <Card className="max-w-4xl w-full bg-[#23232B]/80 backdrop-blur-md border border-[#2C2C33] rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2">
          <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
            
            {/* Image on the left */}
            <div className="w-52 h-52 relative rounded-2xl overflow-hidden shadow-md flex-shrink-0 hover:scale-105 transition-transform duration-300">
              <Image
                src="/stories/pic.jpg"
                alt="Angelika Abarientos"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
            </div>

            {/* Text on the right */}
            <div className="text-center md:text-left flex-1 space-y-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#FF8C42] drop-shadow-md">About Me</h1>
              <p className="text-[#B0B0B0] text-base sm:text-lg leading-relaxed">
                Hello! My name is <span className="font-semibold text-[#FFB07C]">Angelika Abarientos</span>. 
                I am 20 years old and currently a second-year BSIT student. I enjoy crafting cozy, 
                story-inspired designs, exploring literature, and sharing my personal creations.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
