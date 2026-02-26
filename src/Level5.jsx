import { useState } from "react";

export default function Level5() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="flex justify-center p-8 bg-gray-100 min-h-screen">
      <article className="w-[300px] h-fit bg-white rounded-xl shadow-md overflow-hidden text-center transition-transform hover:-translate-y-1 duration-200">
        <header className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-8">
          <img
            src="/vite.svg"
            alt="Profile Picture"
            className="w-20 h-20 rounded-full border-4 border-white bg-white mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Jane Doe</h1>
          <h2 className="text-sm opacity-90 font-normal">Frontend Developer</h2>
        </header>

        <section className="p-6">
          <h3 className="text-base text-gray-600 mb-2 font-semibold">
            About Me
          </h3>
          <p className="text-sm leading-relaxed text-gray-500">
            I love building beautiful, accessible, and performant web
            applications.
          </p>
        </section>

        <footer className="p-4 pt-0 pb-6 flex justify-center gap-2">
          <button
            className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-200 text-white ${
              isConnected
                ? "bg-green-500 hover:bg-green-600"
                : "bg-[#667eea] hover:bg-[#5a6fd1]"
            }`}
            onClick={() => setIsConnected(!isConnected)}
          >
            {isConnected ? "Connected" : "Connect"}
          </button>
          <button
            className="px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-200 bg-slate-200 text-slate-600 hover:bg-slate-300"
            onClick={() => alert("Message feature coming soon!")}
          >
            Message
          </button>
        </footer>
      </article>
    </div>
  );
}
