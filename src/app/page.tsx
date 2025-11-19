import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  // Predefine the story images to ensure paths exist, removed trailing comma
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
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Header */}
      <header className="w-full py-5 px-6 flex justify-between items-center bg-orange-500 text-white shadow-md">
        <h1 className="text-3xl font-bold tracking-wide"> Angelika's Page</h1>
        <nav className="space-x-6 text-lg font-medium">
          <a href="#page" className="hover:underline">Page</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#hobbies" className="hover:underline">Hobbies</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center text-center mt-20 px-6">
        <h2 className="text-4xl font-bold mb-3 text-orange-600">Welcome to My Personal Website</h2>
        <p className="max-w-xl opacity-80 mb-6">
          A warm, cozy Wattpad-inspired home where you can explore my Website.
        </p>
        <div>
          <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 text-lg shadow">
            Start Reading
          </Button>
        </div>
      </section>

      <section id="stories" className="mt-28 px-6 text-center">
  <h3 className="text-3xl font-bold text-orange-600 mb-6">Featured Stories</h3>
  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {stories.map((story, i) => (
      <Card key={i} className="rounded-xl shadow hover:shadow-lg transition border border-orange-100">
        <CardContent className="p-6 space-y-3">
          {story.image ? (
            <div className="w-full relative rounded-lg overflow-hidden" style={{ aspectRatio: '11/16' }}>
              <Image
                src={story.image}
                alt={story.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ) : (
            <div className="w-full h-40 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-orange-400">No Image Available</span>
            </div>
          )}
          <h4 className="text-xl font-semibold">{story.title}</h4>
          <p className="text-sm opacity-70">{story.preview}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-orange-50 border-t border-orange-200 mt-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-orange-600">About Me</h1>
        <p className="text-zinc-700 max-w-2xl mx-auto leading-relaxed text-lg">
          My name is Angelika Abarientos. I am 20 years old and a second-year BSIT college student. I'm a passionate student who enjoys creating cozy, simple, and story-inspired designs.
        </p>

        <div className="flex justify-center mt-6">
  <img
    src="/gifs/happy.gif" // path is relative to public folder
    alt="About GIF"
    className="w-32 h-32 object-cover rounded-lg"
  />
</div>
      </section>

      {/* Contact Section */}
<section id="contact" className="py-20 px-6 bg-white text-center">
  <h1 className="text-4xl font-bold mb-4 text-orange-600">Contact Me</h1>
  <p className="text-zinc-700 max-w-2xl mx-auto leading-relaxed text-lg mb-4">
    Feel free to reach out anytime! I'm always open to collaboration and new ideas.
  </p>
  <p className="text-zinc-700 max-w-2xl mx-auto text-lg">
    <span className="font-semibold">Gmail:</span>{" "}
    <a
      href="mailto:anabarientos@gbox.ncf.edu.ph"
      className="text-orange-600 hover:underline"
    >
      anabarientos@gbox.ncf.edu.ph
    </a>
  </p>
  <p className="text-zinc-700 max-w-2xl mx-auto text-lg mt-2">
    <span className="font-semibold">Facebook:</span>{" "}
    <a
      href="https://www.facebook.com/AngelikaAbarientos"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-600 hover:underline"
    >
      Angelika Abarientos
    </a>
  </p>
</section>


      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-orange-50 border-t border-orange-200 text-center">
        <h1 className="text-4xl font-bold mb-6 text-orange-600">Education</h1>
        <ul className="max-w-xl mx-auto list-disc list-inside space-y-3 text-zinc-700 text-lg">
          <li><strong>High School</strong> – Camaligan National High School</li>
          <li><strong>College</strong> – Naga College Foundation</li>
        </ul>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 px-6 bg-white text-center">
        <h1 className="text-4xl font-bold mb-6 text-orange-600">Hobbies</h1>
        <ul className="max-w-xl mx-auto list-disc list-inside space-y-3 text-zinc-700 text-lg">
          <li>Reading (fiction, non-fiction, poetry, comics)</li>
          <li>Video gaming (PC, console, mobile)</li>
          <li>Cycling</li>
        </ul>
      </section>
    </div>
  );
}