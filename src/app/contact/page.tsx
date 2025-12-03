"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Contact() {
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
        <Card className="max-w-md w-full bg-[#23232B]/80 backdrop-blur-md border border-[#2C2C33] rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2">
          <CardContent className="space-y-6 text-center">

            <h1 className="text-2xl sm:text-3xl font-bold text-[#FF8C42] drop-shadow-md">Contact Me</h1>

            <p className="text-[#B0B0B0] text-base sm:text-lg leading-relaxed">
              Feel free to reach out! I’m always open to collaboration, sharing ideas, or simply connecting.
            </p>

            <p className="text-[#B0B0B0] text-base sm:text-lg">
              <span className="font-semibold text-[#FF8C42]">Gmail:</span>{" "}
              <a href="mailto:anabarientos@gbox.ncf.edu.ph" className="hover:underline text-[#FFB07C] break-all">
                anabarientos@gbox.ncf.edu.ph
              </a>
            </p>

            <p className="text-[#B0B0B0] text-base sm:text-lg">
              <span className="font-semibold text-[#FF8C42]">Github:</span>{" "}
              <a href="https://github.com/anabarientos-sketch" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#FFB07C] break-all">
                anabarientos-sketch
              </a>
            </p>

            <div className="w-48 h-48 relative mx-auto mt-4 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
              <Image
                src="/gifs/happy.gif"
                alt="Contact GIF"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
            </div>

            <p className="text-[#B0B0B0] text-sm mt-2">
              I look forward to connecting with you and sharing experiences!
            </p>

          </CardContent>
        </Card>
      </section>
    </div>
  );
}
