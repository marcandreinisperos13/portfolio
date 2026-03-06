import { useState } from "react";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("home");
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen text-(--primary-txt) bg-(--primary-bg) font-headline">
      <nav className="w-full bg-(--primary-bg)/80 fixed top-0 left-0 z-50">
        <div className="py-5 flex items-center justify-around">
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

      <header className="min-h-screen px-30 bg-[url('/header-bg.png')] bg-center bg-cover flex items-center">
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
            <a
              href="mailto:marcandreinisperos13@gmail.com"
              className="button bg-(--primary-btn) text-(--primary-bg)"
            >
              Send Email
            </a>
          </div>
        </div>
      </header>

      <div className="p-30 center-flex gap-30">
        <div className="w-1/4 h-[500px] bg-gray-200 rounded-lg center-flex">
          <img
            src="me.png"
            alt="Marc Andrei Nisperos"
            className="object-contain"
          />
        </div>

        <div className="flex-1 space-y-3">
          <h1 className="text-4xl font-bold">ABOUT ME</h1>

          <h3 className="text-2xl font-semibold text-(--primary-btn)">
            Junior Frontend Developer
          </h3>

          <p className="my-10">
            I'm a passionate and dedicated junior frontend developer with a
            strong foundation in web development. I specialize in creating
            responsive and user-friendly interfaces using modern technologies
            like React, React Native, and Tailwind CSS. With a keen eye for
            design and a commitment to delivering high-quality work, I strive to
            bring UI designs to life by transforming mockups into functional and
            visually appealing applications. I'm eager to contribute my skills
            and creativity to build beautiful, functional web and mobile
            applications that provide an exceptional user experience.
          </p>

          <div className="grid grid-cols-3 gap-5">
            <div className="text-center rounded-md shadow-[0_0_5px_rgba(0,0,0,0.3)] p-5">
              <h2 className="text-3xl font-bold text-(--primary-btn)">0+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="text-center rounded-md shadow-[0_0_5px_rgba(0,0,0,0.3)] p-5">
              <h2 className="text-3xl font-bold text-(--primary-btn)">0+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="text-center rounded-md shadow-[0_0_5px_rgba(0,0,0,0.3)] p-5">
              <h2 className="text-3xl font-bold text-(--primary-btn)">0+</h2>
              <p>Satisfied Client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
