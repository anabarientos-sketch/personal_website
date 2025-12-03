import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Education() {
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
      <section className="py-16 px-6 sm:px-12 flex flex-col items-center space-y-10 relative z-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#FF8C42] mb-6 drop-shadow-md">Education</h1>

        {/* Two Cards Side by Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl w-full">

          {/* High School Card */}
          <Card className="bg-[#23232B]/80 backdrop-blur-md border border-[#2C2C33] rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2">
            <CardContent className="text-center space-y-4 p-6">
              <p className="text-[#B0B0B0] text-lg">
                <strong className="text-[#FF8C42]">High School:</strong> Camaligan National High School
              </p>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">
                Completed secondary education with strong academic involvement and active participation in school activities.
              </p>
              <div className="w-32 h-32 relative mx-auto rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/stories/logo1.png" 
                  alt="High School" 
                  fill 
                  style={{ objectFit: "cover" }} 
                  className="rounded-xl" 
                />
              </div>
            </CardContent>
          </Card>

          {/* College Card */}
          <Card className="bg-[#23232B]/80 backdrop-blur-md border border-[#2C2C33] rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2">
            <CardContent className="text-center space-y-4 p-6">
              <p className="text-[#B0B0B0] text-lg">
                <strong className="text-[#FF8C42]">College:</strong> Naga College Foundation
              </p>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">
                Currently pursuing higher education while gaining strong technical skills and engaging in college communities.
              </p>
              <div className="w-32 h-32 relative mx-auto rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/stories/logo2.webp" 
                  alt="College" 
                  fill 
                  style={{ objectFit: "cover" }} 
                  className="rounded-xl" 
                />
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
}
