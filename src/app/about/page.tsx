"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">

      {/* Header */}
      <header className="w-full py-4 px-6 flex justify-between items-center bg-[#1a1a1a] text-white shadow-md border-b border-[#262626]">
        <h1 className="text-5xl font-bold tracking-wide text-[#ff6b00]">Angelika's Page</h1>
        <Link
          href="/"
          className="bg-[#ff6b00] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#e86400] transition"
        >
          Back to Home
        </Link>
      </header>

      {/* Content */}
      <section className="py-16 px-6 sm:px-12 flex justify-center">
        <Card className="max-w-md w-full bg-[#1a1a1a] border border-[#262626] rounded-xl shadow-lg hover:shadow-xl transition">
          <CardContent className="space-y-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#ff6b00]">About Me</h1>
            
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Hello! My name is <span className="font-semibold">Angelika Abarientos</span>. 
              I am 20 years old and currently a second-year BSIT student. I enjoy crafting cozy, 
              story-inspired designs, exploring literature, and sharing my personal creations.
            </p>

            <div className="w-52 h-52 relative mx-auto rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
              <Image
                src="/stories/pic.jpg"
                alt="Angelika Abarientos"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
