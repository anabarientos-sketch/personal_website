import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Education() {
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

      <section className="py-16 px-6 sm:px-12 flex flex-col items-center space-y-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#ff6b00] mb-6">Education</h1>

        {/* High School Card */}
        <Card className="max-w-md w-full bg-[#1a1a1a] border border-[#262626] rounded-xl shadow-lg">
          <CardContent className="text-center space-y-4">
            <p className="text-zinc-300 text-lg"><strong>High School:</strong> Camaligan National High School</p>
            <p className="text-zinc-400 text-sm">
              Completed secondary education with a focus on academics and extracurricular activities.
            </p>
            <div className="w-32 h-32 relative mx-auto rounded-lg overflow-hidden">
              <Image src="/stories/logo1.png" alt="High School" fill style={{ objectFit: "cover" }} className="rounded-lg"/>
            </div>
          </CardContent>
        </Card>

        {/* College Card */}
        <Card className="max-w-md w-full bg-[#1a1a1a] border border-[#262626] rounded-xl shadow-lg">
          <CardContent className="text-center space-y-4">
            <p className="text-zinc-300 text-lg"><strong>College:</strong> Naga College Foundation</p>
            <p className="text-zinc-400 text-sm">
              Pursued higher education, gaining knowledge and skills in chosen field, with active involvement in campus activities.
            </p>
            <div className="w-32 h-32 relative mx-auto rounded-lg overflow-hidden">
              <Image src="/stories/logo2.webp" alt="College" fill style={{ objectFit: "cover" }} className="rounded-lg"/>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
