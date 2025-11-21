import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Hobbies() {
  const hobbies = [
    {
      name: "Reading (fiction, non-fiction, poetry, comics)",
      image: "/gifs/book-flip.gif",
    },
    {
      name: "Video gaming (PC, console, mobile)",
      image: "/gifs/game.gif",
    },
    {
      name: "Cycling",
      image: "/gifs/bike.gif",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col">
      
      <header className="w-full py-4 px-4 sm:px-6 flex justify-between items-center bg-orange-500 text-white shadow-md">
        <h1 className="text-5xl sm:text-5xl font-bold tracking-wide">Angelika's Page</h1>
        <Link
          href="/"
          className="bg-white text-orange-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-100 transition"
        >
          Back to Home
        </Link>
      </header>

      <section className="py-16 px-4 sm:px-6 md:px-10 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-6">Hobbies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full sm:max-w-5xl mx-auto">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="shadow-lg rounded-xl border border-orange-100">
              <CardContent className="text-center space-y-3">
                <div className="w-full h-40 relative rounded-lg overflow-hidden">
                  <Image
                    src={hobby.image}
                    alt={hobby.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-base sm:text-lg text-zinc-700 font-medium">{hobby.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
