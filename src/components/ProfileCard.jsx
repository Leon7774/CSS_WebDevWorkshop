import { useState } from "react";
import { User } from "lucide-react"; // import the icon

export default function ProfileCard({
  name,
  role,
  image,
  initialIsConnected = false,
}) {
  const [isConnected, setIsConnected] = useState(initialIsConnected);

  return (
    <article className="w-[300px] bg-white rounded-xl shadow-md overflow-hidden text-center transition-transform hover:-translate-y-1 duration-200 flex flex-col">
      <header className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-6 flex flex-col items-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full border-4 border-white bg-white mb-3 object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full border-4 border-white bg-white flex items-center justify-center mb-3">
            <User className="w-10 h-10 text-gray-400" />
          </div>
        )}
        <h1 className="text-xl font-bold">{name}</h1>
        <h2 className="text-sm opacity-90 font-normal">{role}</h2>
      </header>

      <div className="p-6 flex-grow">
        <p className="text-sm leading-relaxed text-gray-500">
          I love building beautiful, accessible, and performant web
          applications.
        </p>
      </div>

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
          onClick={() => alert(`Messaging ${name}...`)}
        >
          Message
        </button>
      </footer>
    </article>
  );
}
