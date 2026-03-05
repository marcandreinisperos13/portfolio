import { useState } from "react";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen text-(--primary-txt) bg-(--primary-bg) font-headline">
      <nav className="w-full bg-(--primary-bg)/80 fixed top-0 left-0 z-50">
        <div className="py-3 flex items-center justify-around">
          <h3 className="font-semibold text-lg">Andrei.</h3>

          <div className="center-flex gap-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`
                  py-2 px-5 relative transition
                  ${active === link.id ? "active text-(--primary-btn)" : "hover:text-(--primary-btn)"}
                `}
              >
                {link.label}
              </a>
            ))}{" "}
          </div>
        </div>
      </nav>

      <header className="min-h-screen px-20 bg-[url('/header-bg.png')] bg-center bg-cover flex items-center">
        <div className="w-1/2 flex flex-col justify-center gap-5">
          <h1 className="font-headline text-4xl font-bold">
            Hi, I'm Marc Andrei Nisperos
          </h1>
          <h3 className="text-2xl font-semibold">Junior Frontend Developer</h3>

          <p>
            <span className="font-semibold">
              I build beautiful, functional web and mobile applications with a
              focus on user experience and modern design principles.
            </span>{" "}
            I bring UI designs to life by transforming
            <span className="font-semibold">
              mockups into responsive, interactive interfaces
            </span>{" "}
            using modern frontend technologies like React, React Native, and
            Tailwind CSS.
          </p>

          <div className="w-1/4 flex gap-3">
            <a href="mailto:marcandreinisperos13@gmail.com" className="button bg-(--primary-btn) text-(--primary-bg)">Send Email</a>
          </div>
        </div>
      </header>

      <div className="min-h-screen"></div>
    </div>
  );
}
