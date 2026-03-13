import { useState } from "react";

import { SiGmail } from "react-icons/si";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaRegCopyright,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { educWork, links, mobileSkills, projects, webSkills } from "./data";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import "./App.css";
import FadeUp from "./FadeUp";

export default function App() {
  const [openNavDropdown, setOpenNavDropdown] = useState(false);
  const [active, setActive] = useState("home");

  const [openProject, setOpenProject] = useState(null);
  const [openViewDetails, setOpenViewDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const viewDetails = (project) => {
    setSelectedProject(project);
    setCurrent(0);
    setOpenViewDetails(true);
  };

  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    if (!selectedProject?.images) return;

    setCurrent((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
    );
  };
  const nextSlide = () => {
    if (!selectedProject?.images) return;

    setCurrent((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="min-h-screen text-(--primary-txt) bg-(--primary-bg) font-body">
      <nav className="w-full bg-(--primary-bg)/80 fixed top-0 left-0 z-50">
        <div className="py-5 px-5 flex items-center lg:justify-around justify-between">
          <h3 className="font-semibold text-lg">Andrei.</h3>

          <div
            className={`
            lg:w-auto w-full lg:h-auto lg:py-0 lg:bg-transparent bg-(--primary-bg)/80 lg:center-flex lg:flex-row gap-3 lg:relative lg:opacity-100 absolute top-full left-0 flex items-start justify-between flex-col py-3 overflow-hidden transition
            ${openNavDropdown ? "h-[230px] opacity-100" : "h-0 opacity-0"}
          `}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`
                  w-full py-2 px-5 relative transition
                  ${active === link.id ? "active text-(--primary-btn)" : "hover:text-(--primary-btn)"}
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="lg:hidden"
            onClick={() => setOpenNavDropdown((prev) => !prev)}
          >
            {openNavDropdown ? <IoClose size={25} /> : <HiMenu size={25} />}
          </button>
        </div>
      </nav>

      <header
        id="home"
        className="min-h-screen px-10 lg:px-20 xl:px-30 bg-[#6CCFF9] lg:bg-[url('/header-bg.png')] bg-right lg:bg-center bg-contain flex items-center"
      >
        <div className="lg:w-1/2 flex flex-col justify-center gap-5">
          <FadeUp>
            <h1 className="font-headline text-4xl font-bold">
              Hi, I'm Marc Andrei Nisperos
            </h1>
          </FadeUp>

          <FadeUp>
            <h3 className="text-2xl font-semibold">
              Junior Frontend Developer
            </h3>
          </FadeUp>

          <FadeUp>
            <p>
              <span className="font-semibold">
                I build beautiful, functional web and mobile applications with a
                focus on user experience and modern design principles.
              </span>{" "}
              I bring UI designs to life by transforming{" "}
              <span className="font-semibold">
                mockups into responsive, interactive interfaces
              </span>{" "}
              using modern frontend technologies like React, React Native, and
              Tailwind CSS.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="w-1/2 xl:w-1/4 flex gap-3">
              <a
                href="mailto:marcandreinisperos13@gmail.com"
                className="button bg-(--primary-btn) text-(--primary-bg)"
              >
                Send Email
              </a>
            </div>
          </FadeUp>
        </div>
      </header>

      <section id="about" className="p-10 lg:p-20 xl:p-30 space-y-30">
        <div className="center-flex gap-10 xl:gap-30 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 xl:w-1/4 h-auto lg:h-[500px] bg-gray-200 rounded-lg center-flex">
            <FadeUp>
              <img
                src="me.png"
                alt="Marc Andrei Nisperos"
                className="object-contain"
              />
            </FadeUp>
          </div>

          <div className="flex-1 space-y-3">
            <FadeUp>
              <h1 className="text-4xl font-bold font-headline">ABOUT ME</h1>
            </FadeUp>

            <FadeUp>
              <h3 className="text-2xl font-semibold text-(--primary-btn) font-headline">
                Junior Frontend Developer
              </h3>
            </FadeUp>

            <FadeUp>
              <p className="my-10">
                I'm a passionate and dedicated junior frontend developer with a
                strong foundation in web and app development. I specialize in
                creating responsive and user-friendly interfaces using{" "}
                <span className="font-semibold">
                  React, React Native, and Tailwind CSS
                </span>
                . With a keen eye for design and a commitment to delivering
                high-quality work, I strive to bring UI designs to life by
                transforming mockups into functional and visually appealing
                applications. I'm eager to contribute my skills and creativity
                to{" "}
                <span className="font-semibold">
                  build beautiful, functional web and mobile applications that
                  provide an exceptional user experience
                </span>
                .
              </p>
            </FadeUp>

            <FadeUp>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="min-h-[130px] text-center rounded-md shadow-[0_0_5px_rgba(0,0,0,0.3)] p-5 center-flex flex-col">
                  <h2 className="text-3xl font-bold text-(--primary-btn)">
                    0+
                  </h2>
                  <p>Years of Experience</p>
                </div>
                <div className="min-h-[130px] text-center rounded-md shadow-[0_0_5px_rgba(0,0,0,0.3)] p-5 center-flex flex-col">
                  <h2 className="text-3xl font-bold text-(--primary-btn)">
                    0+
                  </h2>
                  <p>Projects Completed</p>
                </div>
                <div className="min-h-[130px] text-center rounded-md shadow-[0_0_5px_rgba(0,0,0,0.3)] p-5 center-flex flex-col">
                  <h2 className="text-3xl font-bold text-(--primary-btn)">
                    0+
                  </h2>
                  <p>Satisfied Client</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="space-y-10">
          <FadeUp>
            <h1 className="text-4xl font-bold text-center font-headline">
              EDUCATION & WORK EXPERIENCE
            </h1>
          </FadeUp>

          <div>
            {educWork.map((work, index) => (
              <FadeUp key={index}>
                <div className="min-h-[200px] flex" key={index}>
                  <div className="flex-1 space-y-2">
                    <h2 className="text-2xl font-bold text-(--primary-btn)">
                      {work.where}
                    </h2>
                    <p className="text-gray-500">{work.date}</p>
                  </div>

                  <div className="mx-5 flex justify-center">
                    <div
                      className={`
                      w-1 h-full relative
                      ${index !== educWork.length - 1 ? "bg-gray-700" : ""}
                    `}
                    >
                      <div className="w-7 h-7 rounded-full bg-gray-700 absolute top-0 left-1/2 -translate-x-1/2"></div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <h2 className="text-2xl font-bold text-(--primary-btn)">
                      {work.title}
                    </h2>

                    {work.description.map((desc, index) => (
                      <li
                        key={index}
                        className="ml-5 mb-5 text-gray-500"
                        dangerouslySetInnerHTML={{ __html: desc }}
                      />
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <FadeUp>
            <h1 className="text-4xl font-bold text-center font-headline">
              MY SKILLS
            </h1>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              <FadeUp>
                <h3 className="text-2xl font-medium">Web Development</h3>
              </FadeUp>
              {webSkills.map((skill, index) => (
                <FadeUp key={index}>
                  <div className="w-full mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-medium">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-(--primary-btn) transition"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <div className="space-y-5">
              <FadeUp>
                <h3 className="text-2xl font-medium">Mobile Development</h3>
              </FadeUp>
              {mobileSkills.map((skill, index) => (
                <FadeUp key={index}>
                  <div className="w-full mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-medium">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-(--primary-btn) transition"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="p-10 lg:p-20 xl:p-30 space-y-10 lg:space-y-20 xl:space-y-30 bg-gray-100"
      >
        <FadeUp>
          <h1 className="text-4xl font-bold text-center font-headline">
            PROJECTS
          </h1>
        </FadeUp>
        <FadeUp>
          {projects.length === 0 ? (
            <FadeUp>
              <h1 className="text-xl text-center text-gray-500">
                No Project Yet
              </h1>
            </FadeUp>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setOpenProject((prev) => (prev === index ? null : index))
                  }
                  className="aspect-square relative group"
                >
                  <div className="p-3 rounded-lg bg-gray-200 absolute inset-0 z-10 overflow-hidden">
                    <img
                      src={project.image}
                      alt="Project Image"
                      className={`
                          w-full h-full object-cover transition group-hover:scale-[1.2]
                          ${openProject === index ? "scale-[1.2]" : "scale-100"}
                        `}
                    />
                  </div>

                  <div
                    className={`
                        w-full h-full space-y-3 bg-black/50 text-center text-(--primary-bg) z-20 absolute inset-0 opacity-0 invisible transition group-hover:opacity-100 group-hover:visible overflow-hidden rounded-lg
                        ${openProject === index ? "opacity-100 visible" : "opacity-0 invisible"}              
                      `}
                  >
                    <div className="space-y-3 h-full center-flex">
                      <div className="flex-1">
                        <h2 className="text-(--primary-btn) text-2xl font-bold">
                          {project.name}
                        </h2>
                        <p>{project.position}</p>
                        <button
                          className="button w-1/3 mt-5 bg-(--primary-btn) cursor-pointer"
                          onClick={() => viewDetails(project)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-shadow rounded-lg"></div>
                </div>
              ))}
            </div>
          )}
        </FadeUp>
        {openViewDetails && selectedProject && (
          <div className="p-5 fixed inset-0 center-flex bg-black/50 z-50">
            <div className="p-5 w-full lg:w-3/4 min-h-auto lg:min-h-1/2 bg-(--primary-bg) rounded-lg">
              <h1 className="text-2xl font-bold relative font-headline">
                {selectedProject.name}
                <IoClose
                  size={20}
                  className="absolute top-0 right-0 cursor-pointer"
                  onClick={() => setOpenViewDetails(false)}
                />
              </h1>
              <p className="text-gray-500">{selectedProject.date}</p>
              <div className="mt-8 flex flex-col lg:flex-row gap-5">
                <div className="lg:w-1/2 overflow-hidden rounded-lg relative">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                  >
                    {selectedProject.images?.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        className="w-full md:aspect-[16/9] lg:aspect-auto flex-shrink-0 object-cover"
                        alt={`slide-${index}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full cursor-pointer"
                  >
                    <BiChevronLeft size={24} />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full cursor-pointer"
                  >
                    <BiChevronRight size={24} />
                  </button>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 w-3 rounded-full cursor-pointer ${
                          current === index
                            ? "bg-(--primary-btn)"
                            : "bg-gray-500/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex-1 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      Project Description
                    </h3>
                    <p className="text-gray-500">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Technologies Used</h3>
                    <div className="ml-5 text-gray-500">
                      {selectedProject.tech.map((tech, i) => (
                        <p key={i}>{tech}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section id="contact" className="p-10 lg:p-20 xl:p-30 space-y-20">
        <div className="space-y-10 mt-5 flex flex-col lg:flex-row justify-between">
          <div className="lg:max-w-1/2 flex-1 space-y-5">
            <FadeUp>
              <h1 className="text-4xl font-bold font-headline">
                Let’s Work Together
              </h1>
            </FadeUp>
            <FadeUp>
              <h3 className="text-2xl">
                I'm currently open to opportunities, collaborations, or
                freelance projects. If you'd like to work with me or just want
                to say hello, feel free to reach out!
              </h3>
            </FadeUp>
          </div>

          <div className="space-y-5">
            <FadeUp>
              <div className="flex items-center gap-5">
                <div className="p-3 bg-(--primary-btn)/30 rounded-full">
                  <SiGmail size={25} color="var(--primary-btn)" />
                </div>
                <a
                  href="mailto:marcandreinisperos13@gmail.com"
                  className="underline"
                >
                  marcandreinisperos13@gmail.com
                </a>
              </div>
            </FadeUp>
            <FadeUp>
              <div className="flex items-center gap-5">
                <div className="p-3 bg-(--primary-btn)/30 rounded-full">
                  <FaGithub size={25} color="var(--primary-btn)" />
                </div>
                <a
                  href="https://github.com/marcandreinisperos13"
                  className="underline"
                >
                  marcandreinisperos13
                </a>
              </div>
            </FadeUp>
            <FadeUp>
              <div className="flex items-center gap-5">
                <div className="p-3 bg-(--primary-btn)/30 rounded-full">
                  <FaLinkedin size={25} color="var(--primary-btn)" />
                </div>
                <a
                  href="https://www.linkedin.com/in/marc-andrei-nisperos-2382133b7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  className="underline"
                >
                  Marc Andrei Nisperos
                </a>
              </div>
            </FadeUp>
            <FadeUp>
              <div className="flex items-center gap-5">
                <div className="p-3 bg-(--primary-btn)/30 rounded-full">
                  <FaLocationDot size={25} color="var(--primary-btn)" />
                </div>
                <p>Imus City, Cavite, Philippines</p>
              </div>
            </FadeUp>
            <FadeUp>
              <div className="flex items-center gap-5">
                <div className="p-3 bg-(--primary-btn)/30 rounded-full">
                  <FaPhoneAlt size={25} color="var(--primary-btn)" />
                </div>
                <p>+639065039826</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <footer className="px-10 lg:px-20 xl:px-30 py-10 lg:py-20 bg-gray-700 text-(--primary-bg) flex items-center justify-between flex-col md:flex-row gap-10">
        <div className="flex items-center gap-10 lg:gap-20 flex-col md:flex-row">
          <FadeUp>
            <h1 className="text-2xl font-bold">Andrei. </h1>
          </FadeUp>
          <FadeUp>
            <p className="flex items-center gap-3">
              <FaRegCopyright /> 2026. All rights reserved.
            </p>
          </FadeUp>
        </div>
        <FadeUp>
          <div className="flex items-center gap-5">
            <a href="https://www.facebook.com/annndreeei">
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/marc-andrei-nisperos-2382133b7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/marcandreinisperos13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a href="mailto:marcandreinisperos13@gmail.com">
              <SiGmail size={20} />
            </a>
          </div>
        </FadeUp>
      </footer>
    </div>
  );
}
