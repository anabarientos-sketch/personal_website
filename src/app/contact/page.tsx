import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Contact() {
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
     
      <section className="py-16 px-4 sm:px-6 md:px-10 flex flex-col items-center">
        <Card className="max-w-md w-full shadow-lg rounded-xl border border-orange-100">
          <CardContent className="space-y-4 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-600">Contact Me</h1>
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
              Feel free to reach out anytime! I'm always open to collaboration and new ideas.
            </p>
            <p className="text-zinc-700 text-base sm:text-lg">
              <span className="font-semibold">Gmail:</span>{" "}
              <a href="mailto:anabarientos@gbox.ncf.edu.ph" className="text-orange-600 hover:underline break-all">
                anabarientos@gbox.ncf.edu.ph
              </a>
            </p>
            <p className="text-zinc-700 text-base sm:text-lg">
              <span className="font-semibold">Facebook:</span>{" "}
              <a href="https://www.facebook.com/AngelikaAbarientos" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline break-all">
                Angelika Abarientos
              </a>
            </p>

            <div className="w-32 h-32 relative mx-auto mt-4">
              <Image
                src="/gifs/happy.gif"
                alt="Contact GIF"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-md"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
