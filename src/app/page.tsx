"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import { Menu, X, Mail, Terminal, ExternalLink, Moon, Sun } from "lucide-react"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import type React from "react"

const Portfolio = () => {
  const [activeWindow, setActiveWindow] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const aboutMe = {
    intro: "Hi,I'm Karan!👋",
    description: `I'm a full-stack developer with a passion for building innovative web applications.`,
    highlights: [
      "🚀 Currently working on AI-powered web applications",
      "📚 Always learning and sharing knowledge with the community",
      "🤝 Open to collaborations and interesting projects",
      "🌟 Passionate about clean code and best practices",
    ],
  }

  const skills = [
    { name: "FRONTEND", items: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND" ,"GSAP"] },
    { name: "BACKEND", items: ["NODE.JS", "GRAPHQL", "EXPRESS"] },
    { name: "DATABASE", items: ["MONGODB", "POSTGRESQL", "REDIS", "PRISMA"] },
    { name: "DEVOPS", items: ["AWS", "DOCKER", "GIT", "CI/CD"] },
  ]

  const projects = [
    {
      id: 1,
      title: "Leadblaze",
      desc: "An AI-powered platform for lead generation",
      github: "https://github.com/ikarn-dev/LeadBlaze",
      demo: "https://www.leadblaze.site",
      videoUrl: "/videos/leadblaze.mp4",
      tech: ["React", "Tailwind","Firebase","GroqCloud Api"],
    },
    {
      id: 2,
      title: "DexPro Landing Page",
      desc: "Landing page for a decentralized exchange platform",
      github: "https://github.com/ikarn-dev/dexpro",
      demo: "https://dexprov1.vercel.app/",
      videoUrl: "/videos/dexpro.mp4",
      tech: ["React", "Tailwind", "Framer-motion", "Gsap"],
    },
    {
      id: 3,
      title: "Amazon Clone",
      desc: "A clone of the Amazon website (front-end only)",
      github: "https://github.com/i-k6/amazon-clone",
      demo: "https://karnn.netlify.app/",
      videoUrl: "/videos/amazon.mp4",
      tech: ["React", "Tailwind", "Framer-motion"],
    },
  ]

  const Window = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="border-4 border-gray-800 shadow-xl bg-white dark:bg-gray-800 animate-fade-in">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-white" />
          <span className="text-white font-press-start text-sm">{title}</span>
        </div>
        <div className="flex space-x-2">
          <button className="w-4 h-4 bg-green-400 rounded-full border-2 border-gray-800"></button>
          <button className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-gray-800"></button>
          <button className="w-4 h-4 bg-red-400 rounded-full border-2 border-gray-800"></button>
        </div>
      </div>
      <div className="p-4 bg-gray-100 dark:bg-gray-700">{children}</div>
    </div>
  )

  interface Project {
    id: number
    title: string
    desc: string
    github: string
    demo: string
    videoUrl: string
    tech: string[]
  }

  const ProjectCard = ({ project }: { project: Project }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    return (
      <div
        className="border-2 border-gray-800 p-4 bg-white dark:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-slide-in"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video bg-gray-800 mb-3 overflow-hidden rounded-lg">
          {isHovered ? (
            <video
              src={project.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            <div className="absolute inset-0 w-full h-full bg-gray-700 flex items-center justify-center">
              <span className="text-white font-press-start text-xs">Hover to play demo</span>
            </div>
          )}
        </div>
        <h3 className="font-bold text-base text-indigo-600 dark:text-indigo-400 font-press-start">{project.title}</h3>
        <p className="mt-2 mb-3 text-sm text-gray-600 dark:text-gray-400">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-2 py-1 bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-indigo-400 text-xs font-press-start border border-gray-800 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-1 bg-indigo-600 dark:bg-indigo-500 text-white dark:text-gray-900 border-2 border-gray-800 hover:bg-indigo-500 dark:hover:bg-indigo-600 font-press-start rounded transition-colors text-xs"
          >
            <span>RUN</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-1 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-300 border-2 border-gray-800 hover:bg-gray-700 dark:hover:bg-gray-600 font-press-start rounded transition-colors text-xs"
          >
            <BsGithub className="w-3 h-3" />
            <span>CODE</span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 font-mono text-gray-900 dark:text-gray-100">
      <Head>
        <title>Karan&#39;s Portfolio</title>
      </Head>

      <div className="flex-grow p-4 sm:p-6">
        <div className="max-w-6xl mx-auto">
          <nav className="flex justify-between items-center mb-6 relative z-50">
            <h1 className="text-2xl font-press-start bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              KARAN.DEV
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 border-2 border-gray-800 dark:border-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <div className="sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 border-2 border-gray-800 dark:border-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-200 shadow-xl rounded-lg overflow-hidden">
                    {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setActiveWindow(item.toLowerCase())
                          setIsMenuOpen(false)
                        }}
                        className={`block w-full text-left px-4 py-2 font-press-start text-sm
                        ${activeWindow === item.toLowerCase() ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-gray-700"}
                        hover:bg-indigo-500 hover:text-white transition-all duration-200`}
                      >
                        {item}.EXE
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="hidden sm:flex sm:space-x-4">
                {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveWindow(item.toLowerCase())}
                    className={`px-4 py-2 font-press-start text-sm border-2 border-gray-800 dark:border-gray-200 rounded
                    ${activeWindow === item.toLowerCase() ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-gray-700"}
                    hover:bg-indigo-500 hover:text-white transition-all duration-200`}
                  >
                    {item}.EXE
                  </button>
                ))}
              </div>
            </div>
          </nav>

          <main className="relative z-0 space-y-6">
            {activeWindow === "about" && (
              <Window title="ABOUT.EXE">
                <div className="space-y-6">
                  <div className="border-2 border-gray-800 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h2 className="text-xl font-press-start text-indigo-600 dark:text-indigo-400 mb-3 overflow-hidden whitespace-nowrap animate-type">
                      {aboutMe.intro}
                      <span className="inline-block w-1 h-5 ml-1 bg-indigo-600 dark:bg-indigo-400 animate-blink"></span>
                    </h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {aboutMe.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {aboutMe.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="p-2 bg-indigo-50 dark:bg-indigo-900 border border-gray-800 dark:border-gray-200 rounded text-xs"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((category) => (
                      <div
                        key={category.name}
                        className="border-2 border-gray-800 dark:border-gray-200 p-2 bg-white dark:bg-gray-800 rounded-lg"
                      >
                        <h3 className="font-press-start text-sm mb-2 text-indigo-600 dark:text-indigo-400">
                          {category.name}
                        </h3>
                        <div className="grid grid-cols-2 gap-1">
                          {category.items.map((skill) => (
                            <div
                              key={skill}
                              className="p-1 border border-gray-800 dark:border-gray-200 rounded bg-gray-50 dark:bg-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors duration-200 font-press-start text-[10px] text-center"
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Window>
            )}

            {activeWindow === "projects" && (
              <Window title="PROJECTS.EXE">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </Window>
            )}

            {activeWindow === "contact" && (
              <Window title="CONTACT.EXE">
                <div className="bg-white dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-200 p-4 rounded-lg">
                  <div className="space-y-3">
                    {[
                      { icon: <Mail className="w-4 h-4" />, title: "EMAIL", link: "mailto:ikarn.dev@gmail.com" },
                      {
                        icon: <BsLinkedin className="w-4 h-4" />,
                        title: "LINKEDIN",
                        link: "https://www.linkedin.com/in/karan-kumar-487a8a260",
                      },
                      { icon: <BsGithub className="w-4 h-4" />, title: "GITHUB", link: "https://github.com/ikarn-dev" },
                    ].map((item) => (
                      <a
                        key={item.title}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 p-3 border-2 border-gray-800 dark:border-gray-200 rounded hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors"
                      >
                        {item.icon}
                        <span className="font-press-start text-xs">{item.title}.EXE</span>
                      </a>
                    ))}
                  </div>
                </div>
              </Window>
            )}
          </main>
        </div>
      </div>

      <footer className="mt-8 border-t-2 border-gray-800 dark:border-gray-200 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="font-press-start text-xs text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} KARAN.DEV
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ikarn-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <BsGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/karan-kumar-487a8a260/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <BsLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ikarn.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio

