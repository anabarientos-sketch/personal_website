"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const stories = [
    {
      title: 'The Seven Husbands of Evelyn Hugo',
      preview: 'My current read. A captivating story about love, fame, and the secrets behind the glamorous life of Evelyn Hugo. Every chapter takes you deeper into her world, full of emotion, drama, and unforgettable moments.',
      image: '/stories/book1.jpg'
    },
    {
      title: 'Mafia Outfit Theme',
      preview: 'A photo series of me wearing a Mafia-inspired outfit for my graduation photoshoot. Dark tones, sharp lines, and a touch of elegance capture the dramatic aesthetic perfectly.',
      image: '/stories/suit.jpg'
    },
    {
      title: 'Spaghetti',
      preview: 'My favorite food! Delicious, cheesy, and comforting. A small story about my love for spaghetti and the joy of sharing it with friends and family.',
      image: '/stories/spag.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      
      {/* Header */}
      <header className="w-full py-4 px-6 flex flex-col sm:flex-row justify-between items-center bg-[#1a1a1a] text-white shadow-md border-b border-[#262626]">
        <h1 className="text-5xl font-bold tracking-wide mb-2 sm:mb-0 text-[#ff6b00]">Angelika's Page</h1>
        <nav className="space-x-0 sm:space-x-6 flex flex-col sm:flex-row items-center text-base sm:text-lg">
          <Link href="/about" className="hover:underline mb-1 sm:mb-0 text-[#ff6b00]">About</Link>
          <Link href="/contact" className="hover:underline mb-1 sm:mb-0 text-[#ff6b00]">Contact</Link>
          <Link href="/education" className="hover:underline mb-1 sm:mb-0 text-[#ff6b00]">Education</Link>
          <Link href="/hobbies" className="hover:underline mb-1 sm:mb-0 text-[#ff6b00]">Hobbies</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16 px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#ff6b00]">Welcome to My Personal Space</h2>
        <p className="max-w-xl opacity-70 mb-6 text-base sm:text-lg">
          Explore my favorite reads, personal projects, and hobbies in a cozy, dark-themed interface designed for a smooth browsing experience.
        </p>
        <Button size="lg" className="rounded-full bg-[#ff6b00] hover:bg-[#e86400] text-white px-8 py-4 text-lg shadow-lg">
          Start Exploring
        </Button>
      </section>

      {/* Featured Stories */}
      <section className="mt-16 px-6 sm:px-12 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#ff6b00] mb-6">Featured Stories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stories.map((story, i) => (
            <Card 
              key={i} 
              className="group bg-[#1a1a1a] border border-[#262626] rounded-xl shadow transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <CardContent className="p-4 sm:p-6 space-y-3">
                <div className="w-full relative rounded-lg overflow-hidden aspect-[11/16]">
                  <Image 
                    src={story.image} 
                    alt={story.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    className="rounded-lg transform transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#ff6b00]">{story.title}</h4>
                <p className="text-sm sm:text-base text-white text-left">{story.preview}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
