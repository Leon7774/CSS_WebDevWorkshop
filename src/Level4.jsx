import { useState } from "react";
import "./Level4.css";

export default function Level4() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
    if (!isConnected) {
      console.log("You are now connected!");
    }
  };

  return (
    <div className="level4-container">
      <article className="level4-card">
        <header className="level4-header">
          <img
            src="/vite.svg"
            alt="Profile Picture"
            className="level4-avatar"
          />
          <h1 className="level4-name">Jane Doe</h1>
          <h2 className="level4-title">Frontend Developer</h2>
        </header>

        <section className="level4-body">
          <h3>About Me</h3>
          <p>
            I love building beautiful, accessible, and performant web
            applications.
          </p>
        </section>

        <footer className="level4-footer">
          <button
            className={`level4-btn ${isConnected ? "level4-btn-connected" : "level4-btn-primary"}`}
            onClick={handleConnect}
          >
            {isConnected ? "Connected" : "Connect"}
          </button>
          <button
            className="level4-btn level4-btn-secondary"
            onClick={() => alert("Message feature coming soon!")}
          >
            Message
          </button>
        </footer>
      </article>
    </div>
  );
}
