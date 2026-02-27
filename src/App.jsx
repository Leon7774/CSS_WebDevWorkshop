import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Level4 from "./Level4";
import Level5 from "./Level5";
import Level6 from "./Level6";
import Level7 from "./Level7";

function Home() {
  const [score, setScore] = useState(0);
  const [showEmojis, setShowEmojis] = useState([]);

  const handleHeaderClick = (e) => {
    setScore((s) => s + 1);

    // Create a new floating emoji at click location
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const emojis = ["🚀", "💻", "✨", "🔥", "⚡️", "🎉", "👾"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const newEmoji = {
      id: Date.now(),
      x,
      y,
      emoji: randomEmoji,
    };

    setShowEmojis((prev) => [...prev, newEmoji]);

    // Remove emoji after animation
    setTimeout(() => {
      setShowEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans text-gray-800">
      <div className="max-w-4xl w-full text-center">
        <div className="relative inline-block cursor-pointer select-none group w-full h-full min-h-[100px]">
          {score === 0 ? (
            <h1
              onClick={handleHeaderClick}
              className="text-4xl font-extrabold mb-2 mt-8 text-orange-600 transition-transform active:scale-95 hover:text-orange-500"
            >
              CSS WebDev Workshop
            </h1>
          ) : (
            <h1
              onClick={handleHeaderClick}
              className="text-4xl font-extrabold text-orange-600 transition-all fixed active:scale-95 hover:text-orange-500 z-50 whitespace-nowrap"
              style={{
                left: `${Math.max(10, Math.min(80, Math.random() * 100))}%`, // stay within 10-80% of width
                top: `${Math.max(10, Math.min(90, Math.random() * 100))}vh`, // strict viewport height bounds, 10% to 90%
                transform: "translate(-50%, -50%)", // center on both X and Y
              }}
            >
              CSS WebDev Workshop
            </h1>
          )}

          {/* Floating Emojis */}
          {showEmojis.map((item) => (
            <div
              key={item.id}
              className="absolute text-2xl pointer-events-none animate-ping z-0"
              style={{
                left: item.x,
                top: item.y - 20,
              }}
            >
              {item.emoji}
            </div>
          ))}
        </div>

        <div
          className={`h-6 mb-4 transition-opacity duration-300 ${score > 0 ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-orange-500 font-bold bg-orange-100 px-3 py-1 rounded-full text-sm">
            Combo: {score} 🔥
            {score >= 10 && " (Unstoppable!)"}
            {score >= 50 && " (Godlike!)"}
          </span>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          A progression from pure HTML to React + Tailwind.
        </p>

        <div className="grid gap-6 md:grid-cols-3 text-left">
          {/* Static Examples */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-gray-700 border-b pb-2">
              Static Examples
            </h2>
            <div className="space-y-3">
              <a
                href="/01-html/index.html"
                className="block p-3 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
              >
                <span className="font-semibold">Level 1: Pure HTML</span>
                <p className="text-sm text-gray-500 mt-1">
                  Structure and semantics only.
                </p>
              </a>
              <a
                href="/02-css/index.html"
                className="block p-3 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <span className="font-semibold">Level 2: HTML + CSS</span>
                <p className="text-sm text-gray-500 mt-1">
                  Styling and layout.
                </p>
              </a>
              <a
                href="/03-js/index.html"
                className="block p-3 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <span className="font-semibold">Level 3: HTML + CSS + JS</span>
                <p className="text-sm text-gray-500 mt-1">
                  Adding interactivity.
                </p>
              </a>
            </div>
          </div>

          {/* React Examples */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-gray-700 border-b pb-2">
              React Examples
            </h2>
            <div className="space-y-3">
              <Link
                to="/react-basic"
                className="block p-3 rounded-lg bg-gray-50 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <span className="font-semibold">Level 4: Basic React</span>
                <p className="text-sm text-gray-500 mt-1">
                  Component-based architecture.
                </p>
              </Link>
              <Link
                to="/react-tailwind"
                className="block p-3 rounded-lg bg-gray-50 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <span className="font-semibold">Level 5: React + Tailwind</span>
                <p className="text-sm text-gray-500 mt-1">
                  Utility-first styling.
                </p>
              </Link>
            </div>
          </div>

          {/* Reusability Demo */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ring-2 ring-purple-100">
            <h2 className="text-xl font-bold mb-4 text-purple-700 border-b pb-2">
              Why React?
            </h2>
            <div className="space-y-3">
              <a
                href="/06-reusability/index.html"
                className="block p-3 rounded-lg bg-red-50 hover:bg-red-100 hover:text-red-700 transition-colors"
              >
                <span className="font-semibold">
                  Level 6: HTML (The Bad Way)
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  Copy-pasting code 3 times.
                </p>
              </a>
              <Link
                to="/react-reusability"
                className="block p-3 rounded-lg bg-green-50 hover:bg-green-100 hover:text-green-700 transition-colors"
              >
                <span className="font-semibold">
                  Level 6: React (The Good Way)
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  One component, data driven.
                </p>
              </Link>
            </div>
          </div>

          {/* Full Page Example */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ring-2 ring-indigo-50">
            <h2 className="text-xl font-bold mb-4 text-indigo-700 border-b pb-2">
              Putting It All Together
            </h2>
            <div className="space-y-3">
              <Link
                to="/react-landing"
                className="block p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700 transition-colors group"
              >
                <span className="font-semibold group-hover:underline">
                  Level 7: Landing Page
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  A complete modern web page.
                </p>
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ring-2 ring-emerald-50">
            <h2 className="text-xl font-bold mb-4 text-emerald-700 border-b pb-2">
              Resources
            </h2>
            <div className="space-y-3">
              <a
                href="https://github.com/Leon7774/webdevexercises.git"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-700 transition-colors group"
              >
                <span className="font-semibold group-hover:underline">
                  Exercises Link
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  Repository for workshop exercises.
                </p>
              </a>
              <a
                href="https://github.com/Leon7774/ReactTailwindTemplate.git"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-700 transition-colors group"
              >
                <span className="font-semibold group-hover:underline">
                  React Template Link
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  Get started with React!
                </p>
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex items-center justify-center text-gray-400 text-sm">
          <div className="flex items-center justify-center">
            <img src="/logo.svg" alt="" className="w-8 h-8 mr-2" />
            <p>Computer Science Society</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/react-basic"
        element={
          <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
            <Link to="/" className="mb-8 text-blue-500 hover:underline">
              ← Back to Home
            </Link>
            <Level4 />
          </div>
        }
      />
      <Route
        path="/react-tailwind"
        element={
          <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
            <Link to="/" className="mb-8 text-blue-500 hover:underline">
              ← Back to Home
            </Link>
            <Level5 />
          </div>
        }
      />
      <Route
        path="/react-reusability"
        element={
          <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
            <Link to="/" className="mb-8 text-blue-500 hover:underline">
              ← Back to Home
            </Link>
            <Level6 />
          </div>
        }
      />
      <Route
        path="/react-landing"
        element={
          <div className="min-h-screen bg-gray-50 flex flex-col relative w-full">
            <div className="w-full bg-white/80 backdrop-blur-md border-b py-4 px-8 flex items-center justify-between sticky top-0 z-50">
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-1.5 rounded-md font-medium transition-colors"
              >
                ← Back to Workshop Home
              </Link>
              <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Level 7
              </span>
            </div>
            <Level7 />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
