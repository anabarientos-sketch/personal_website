import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const stories = [
    {
      title: 'The Seven Husbands of Evelyn Hugo',
      preview: 'My Current Read',
      image: '/stories/book1.jpg',  
    },
    {
      title: 'Me :)',
      preview: 'Wearing a wig.',
      image: '/stories/meh.jpg',
    },
    {
      title: 'Spaghetti',
      preview: 'Favorite Food',
      image: '/stories/spag.jpg',
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col">
      
      <header className="w-full py-4 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center bg-orange-500 text-white shadow-md">
        <h1 className="text-5xl sm:text-5xl font-bold tracking-wide mb-2 sm:mb-0">Angelika's Page</h1>
        <nav className="space-x-0 sm:space-x-6 flex flex-col sm:flex-row items-center text-base sm:text-lg">
          <Link href="/" className="hidden">Home</Link>
         <Link href="/about" className="hover:underline mb-1 sm:mb-0">About</Link>
          <Link href="/contact" className="hover:underline mb-1 sm:mb-0">Contact</Link>
          <Link href="/education" className="hover:underline mb-1 sm:mb-0">Education</Link>
          <Link href="/hobbies" className="hover:underline">Hobbies</Link>
        </nav>

      </header>

      <section className="w-full flex flex-col items-center text-center mt-16 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-orange-600">Welcome to My Personal Website</h2>
        <p className="max-w-full sm:max-w-xl opacity-80 mb-6 text-base sm:text-lg">
          A warm, cozy Wattpad-inspired home where you can explore my Website.
        </p>
        <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-5 text-base sm:text-lg shadow">
          Start Reading
        </Button>
      </section>

      <section className="mt-16 px-4 sm:px-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-6">Featured Stories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-full sm:max-w-5xl mx-auto">
          {stories.map((story, i) => (
            <Card key={i} className="rounded-xl shadow hover:shadow-lg transition border border-orange-100">
              <CardContent className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                {story.image ? (
                  <div className="w-full relative rounded-lg overflow-hidden aspect-[11/16]">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-40 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400">Image</span>
                  </div>
                )}
                <h4 className="text-lg sm:text-xl font-semibold">{story.title}</h4>
                <p className="text-sm sm:text-base opacity-70">{story.preview}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
