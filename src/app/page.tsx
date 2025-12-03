"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";

export default function Home() {
  const stories = [
    {
      title: 'The Seven Husbands of Evelyn Hugo',
      preview: 'A captivating story about love, fame, and the secrets behind the glamorous life of Evelyn Hugo. Each chapter takes you deeper into her world.',
      image: '/stories/book1.jpg'
    },
    {
      title: 'Mafia Outfit Theme',
      preview: 'A photo series of me wearing a Mafia-inspired outfit. Dark tones, sharp lines, and elegance capture a dramatic aesthetic.',
      image: '/stories/suit.jpg'
    },
    {
      title: 'Spaghetti',
      preview: 'My favorite food! Delicious, cheesy, and comforting. A story about my love for spaghetti and sharing it with friends and family.',
      image: '/stories/spag.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1B1F] to-[#0D0D0F] text-[#E0E0E0] font-sans flex flex-col">
      
      {/* Header */}
      <header className="w-full py-4 px-6 flex flex-col sm:flex-row justify-between items-center bg-[#23232B]/90 backdrop-blur-md shadow-md border-b border-[#2C2C33]">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-2 sm:mb-0 text-[#FF8C42] drop-shadow-lg">Angelika.com</h1>
        <nav className="space-x-0 sm:space-x-6 flex flex-col sm:flex-row items-center text-base sm:text-lg">
          {['About','Contact','Education','Hobbies'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="hover:underline mb-1 sm:mb-0 text-[#FF8C42] transition-colors duration-300 hover:text-[#FFB07C]"
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16 px-6 sm:px-12 relative z-10">
        <div className="absolute -top-16 w-60 h-60 bg-gradient-to-r from-[#FF8C42]/50 to-[#FFB07C]/30 rounded-full blur-3xl animate-pulse opacity-40"></div>

        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-[#FF8C42] drop-shadow-lg">
          Welcome to My Personal Space
        </h2>

        <p className="max-w-xl opacity-80 mb-8 text-base sm:text-lg leading-relaxed text-[#E0E0E0]">
          Explore my favorite reads, personal projects, and hobbies in a cozy, dark-themed interface designed for smooth and aesthetic browsing.
        </p>

        {/* POPUP MENU */}
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-[#FF8C42] to-[#FFB07C] hover:from-[#FFB07C] hover:to-[#FF8C42] text-white px-10 py-4 text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Start Exploring
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-48 bg-[#1F1F23] border border-[#2C2C33] shadow-xl rounded-2xl text-center p-4 space-y-3">
            {["About", "Contact", "Education", "Hobbies"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-[#FF8C42] hover:text-[#FFB07C] transition text-base font-medium"
              >
                {item}
              </Link>
            ))}
          </PopoverContent>
        </Popover>
      </section>

      {/* Featured Stories */}
      <section className="mt-20 px-6 sm:px-12 text-center relative z-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#FF8C42] mb-8 drop-shadow-md">
          Featured Stories
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {stories.map((story, i) => (
            <Card 
              key={i} 
              className="group bg-[#23232B]/80 backdrop-blur-md border border-[#2C2C33] rounded-3xl shadow-lg transition-transform duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105"
            >
              <CardContent className="p-4 sm:p-6 space-y-4">
                <div className="w-full relative rounded-2xl overflow-hidden aspect-[11/16] shadow-inner">
                  <Image 
                    src={story.image} 
                    alt={story.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    className="rounded-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110" 
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#FF8C42] drop-shadow-md">
                  {story.title}
                </h4>
                <p className="text-sm sm:text-base text-[#B0B0B0] text-left leading-relaxed">
                  {story.preview}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="h-20"></div>
    </div>
  );
}
