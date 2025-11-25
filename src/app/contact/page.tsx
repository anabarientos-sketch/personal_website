"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Contact() {
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
            <h1 className="text-2xl sm:text-3xl font-bold text-[#ff6b00]">Contact Me</h1>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Feel free to reach out! I’m always open to collaboration, sharing ideas, or simply connecting.
            </p>

            <p className="text-zinc-300 text-base sm:text-lg">
              <span className="font-semibold text-[#ff6b00]">Gmail:</span>{" "}
              <a href="mailto:anabarientos@gbox.ncf.edu.ph" className="hover:underline text-[#ff6b00] break-all">
                anabarientos@gbox.ncf.edu.ph
              </a>
            </p>

            <p className="text-zinc-300 text-base sm:text-lg">
              <span className="font-semibold text-[#ff6b00]">Github:</span>{" "}
              <a href="https://github.com/anabarientos-sketch" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ff6b00] break-all">
                anabarientos-sketch
              </a>
            </p>

            <div className="w-48 h-48 relative mx-auto mt-4 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
              <Image
                src="/gifs/happy.gif"
                alt="Contact GIF"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>

            <p className="text-zinc-400 text-sm mt-2">
              I look forward to connecting with you and sharing experiences!
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
