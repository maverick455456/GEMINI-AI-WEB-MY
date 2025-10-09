'use client'
import { useState } from 'react'

export default function Home() {
  const [copied, setCopied] = useState(false)
  const promptText = "This is your Gemini prompt text for AI training."

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="text-center mt-10">
      <img
        src="/logo.png"
        alt="Logo"
        className="mx-auto w-32 h-32 rounded-full shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4 text-red-300">Trening Gemini Prompt</h1>
      <p className="text-gray-200 mb-6">{promptText}</p>
      <button
        onClick={handleCopy}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl shadow-md transition"
      >
        {copied ? "Copied!" : "Copy Prompt"}
      </button>
    </div>
  )
  }
