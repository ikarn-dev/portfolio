'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://picsum.photos/800/400?random=1",
  },
  {
    title: "Project 2",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://picsum.photos/800/400?random=2",
  },
  {
    title: "Project 3",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://picsum.photos/800/400?random=3",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  ref: (el: HTMLDivElement | null) => void;
}

const ProjectCard = ({ project, index, ref }: ProjectCardProps) => {
  return (
    <Card
      ref={ref}
      className="group relative overflow-hidden transition-all duration-500 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20"
    >      
      <div className="relative h-[300px] overflow-hidden rounded-t-2xl">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
      </div>

      <CardHeader className="relative p-4 -mt-12">
        <CardTitle className="text-xl font-semibold mb-2 relative z-10">
          {project.title}
        </CardTitle>
        
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary/15 hover:bg-primary/25 border border-primary/20 text-foreground shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-8 px-3 bg-primary/15 hover:bg-primary/25 border border-primary/20 text-foreground shadow-sm rounded-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
              <Github className="size-3.5" />
              <span className="text-xs font-semibold">Github</span>
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-8 px-3 bg-primary/15 hover:bg-primary/25 border border-primary/20 text-foreground shadow-sm rounded-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
              <ExternalLink className="size-3.5" />
              <span className="text-xs font-semibold">Live</span>
            </a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

const ProjectsSection = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectRefs.current.forEach((project, index) => {
        if (!project) return;

        gsap.from(project, {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: [0.33, 1, 0.68, 1],
        duration: 1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        ease: [0.33, 1, 0.68, 1],
        duration: 1
      }
    }
  };

  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-bold">Projects</h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 gap-8 auto-rows-fr"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={item}
            className="w-full max-w-3xl mx-auto"
          >
            <ProjectCard
              project={project}
              index={index}
              ref={el => {
                projectRefs.current[index] = el;
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection; 