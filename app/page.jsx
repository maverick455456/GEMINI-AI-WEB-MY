"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const copyPrompt = async (e, text) => {
    await navigator.clipboard.writeText(text);
    e.target.textContent = "Copied!";
    setTimeout(() => (e.target.textContent = "Copy Prompt"), 2000);
  };

  const prompts = [
    {
      img: "https://files.catbox.moe/3i67bf.jpg",
      alt: "Green T",
      text: `A cinematic hyper-realistic photo of an 18-year-old man standing under a lamp post, looking away from the camera with a thoughtful expression. Outfit: green oversized t-shirt, black cargo pants, Adidas sneakers, Apple Watch. Slightly messy hair, soft twilight glow, warm orange streetlight. Background blurred trees, creamy bokeh, cinematic depth in 8K.`,
    },
    {
      img: "https://files.catbox.moe/4umrxv.jpg",
      alt: "sonic white T",
      text: `Full-body outdoor photoshoot featuring the same person from the given photo, keeping the original face exactly the same (do not alter facial features). He looks like an 18-year-old, wearing a clean all-white outfit including sweatshirt, jogger pants, and sneakers. He has short dark hair, light stubble, and is sitting casually with one arm resting on his knee in a relaxed pose. Next to him stands a highly detailed, realistic 3D version of Sonic the Hedgehog, with vibrant blue fur, green eyes, white gloves, and red shoes. The background is stylish and suitable for a professional outdoor photoshoot, with soft even lighting. The overall mood is modern, friendly, and stylish, blending reality with CGI while keeping the original face unchanged.`,
    },
    {
      img: "https://files.catbox.moe/bqdj91.jpg",
      alt: "17 Pro Max",
      text: `Transform this uploaded selfie into a premium-looking bathroom selfie. The bathroom should appear contemporary with polished tiles, good lighting, and mirror in the background. The person must be holding original iPhone 17 Pro Max (second picture), making the phone stand out as reflective, bold, and high end. The selfie should feel natural but with a touch of elegance, keeping the focus on the person and the iPhone while the background remaining non-distracting.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-900 shadow-lg">
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Nipu Edites
        </div>
        <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
          ☰
        </div>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent text-center`}
        >
          <a href="/" className="block px-4 py-2 hover:text-yellow-400">
            Home
          </a>
          <a href="/about" className="block px-4 py-2 hover:text-yellow-400">
            About
          </a>
          <a href="/contact" className="block px-4 py-2 hover:text-yellow-400">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Section */}
      <section className="flex-1 py-10">
        <h1 className="text-center text-3xl font-bold mb-8">
          🔥 Trending AI Prompts 🔥
        </h1>

        <div className="grid gap-8 px-6 md:px-12 max-w-5xl mx-auto">
          {prompts.map((p, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-4 flex flex-col items-center"
            >
              <img
                src={p.img}
                alt={p.alt}
                className="w-full max-h-96 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-gray-200 mb-4 text-justify">{p.text}</p>
              <button
                onClick={(e) => copyPrompt(e, p.text)}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full transition"
              >
                Copy Prompt
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-4 text-center text-sm">
        © 2025 MR NIPUN OFC | Built by MR NIPUN OFC
      </footer>
    </div>
  );
      }
