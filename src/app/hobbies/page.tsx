import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Hobbies() {
  const hobbies = [
    { 
      name: "Reading (fiction, non-fiction, poetry, comics)", 
      image: "/gifs/book-flip.gif",
      description: "Exploring various genres to gain knowledge, improve imagination, and enjoy storytelling."
    },
    { 
      name: "Video gaming (PC, console, mobile)", 
      image: "/gifs/game.gif",
      description: "Engaging in immersive games to challenge skills, strategy, and creativity."
    },
    { 
      name: "Cycling", 
      image: "/gifs/bike.gif",
      description: "Staying active and exploring outdoors while enjoying the thrill of cycling."
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">

      {/* Header */}
      <header className="w-full py-4 px-6 flex justify-between items-center bg-[#1a1a1a] text-white shadow-md border-b border-[#262626]">
        <h1 className="text-5xl font-bold tracking-wide text-[#ff6b00]">Angelika.com</h1>
        <Link
          href="/"
          className="bg-[#ff6b00] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#e86400] transition"
        >
          Back to Home
        </Link>
      </header>

      {/* Content */}
      <section className="py-16 px-6 sm:px-12 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#ff6b00] mb-10">Hobbies</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, i) => (
            <Card
              key={i}
              className="bg-[#1a1a1a] border border-[#262626] rounded-xl shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="text-center space-y-4 p-6">
                
                <div className="w-full h-44 relative rounded-lg overflow-hidden">
                  <Image
                    src={hobby.image}
                    alt={hobby.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>

                <p className="text-zinc-200 text-lg font-semibold">{hobby.name}</p>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
