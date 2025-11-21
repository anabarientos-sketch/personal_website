import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Education() {
  return (
    <div className="min-h-screen bg-orange-50 text-zinc-900 font-sans flex flex-col">
      
      <header className="w-full py-4 px-4 sm:px-6 flex justify-between items-center bg-orange-500 text-white shadow-md">
        <h1 className="text-5xl sm:text-5xl font-bold tracking-wide">Angelika's Page</h1>
        <Link
          href="/"
          className="bg-white text-orange-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-100 transition"
        >
          Back to Home
        </Link>
      </header>
     
      <section className="py-16 px-4 sm:px-6 md:px-10 flex justify-center">
        <Card className="max-w-md w-full shadow-lg rounded-xl border border-orange-100">
          <CardContent className="space-y-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-600">Education</h1>
                        
            <div className="space-y-2">
              <p className="text-zinc-700 text-base sm:text-lg">
                <strong>High School</strong> – Camaligan National High School
              </p>
              <div className="w-25 h-25 relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/stories/logo1.png"  
                  alt="High School"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
           
            <div className="space-y-2">
              <p className="text-zinc-700 text-base sm:text-lg">
                <strong>College</strong> – Naga College Foundation
              </p>
              <div className="w-25 h-25 relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/stories/logo2.webp"  
                  alt="College"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>

          </CardContent>
        </Card>
      </section>
    </div>
  );
}
