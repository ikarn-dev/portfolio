'use client';

import { useEffect, useRef, useState } from "react";
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
  video: string;
}

const projects: Project[] = [
  {
    title: "LeadBlaze",
    tech: ["React", "TailwindCSS", "Firebase Auth", "GroqCloud API", "Framer Motion"],
    github: "https://github.com/ikarn-dev/LeadBlaze",
    live: "https://www.leadblaze.site",
    video: "/assets/project-videos/LeadBlaze-video.webm"
  },
  {
    title: "Omniverse",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "Solana Web3.js", "Framer Motion","Zustand","GSAP"],
    github: "https://github.com/ikarn-dev/omniverse",
    live: "https://omniverse-ten.vercel.app/",
    video: "/assets/project-videos/omniverse-video.webm"
  },
  {
    title: "Solana Staking Dashboard",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "SolanaBeach API"],
    github: "https://github.com/ikarn-dev/Solana-dashboard",
    live: "https://solana-dashboard-ikarn-devs-projects.vercel.app",
    video: "/assets/project-videos/solDashboard-video.webm"
  },
  {
    title: "Dexpro",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/ikarn-dev/dexpro",
    live: "https://dexprov1.vercel.app/",
    video: "/assets/project-videos/Dexpro-video.webm"
  }
];

interface ProjectCardProps {
  project: Project;
  ref: (el: HTMLDivElement | null) => void;
}

const ProjectCard = ({ project, ref }: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {
            // Handle autoplay failure silently
          });
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Card
      ref={ref}
      className="group relative overflow-hidden transition-all duration-500 rounded-2xl border-2 border-primary hover:border-primary p-0 hover:scale-[1.02] hover:shadow-lg bg-background"
    >      
      <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-background">
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <video 
          ref={videoRef}
          autoPlay={false}
          loop
          muted
          playsInline
          preload="none"
          controlsList="nodownload"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center z-10 transition-opacity duration-300 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={project.video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <CardHeader className="relative p-6 bg-background border-t-2 border-primary">
        <CardTitle className="text-xl font-semibold mb-2">
          {project.title}
        </CardTitle>
        
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-primary text-background border-2 border-primary"
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
            className="h-8 px-3 bg-primary text-background border-2 border-primary shadow-sm rounded-md transition-all duration-300 hover:-translate-y-0.5"
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
            className="h-8 px-3 bg-primary text-background border-2 border-primary shadow-sm rounded-md transition-all duration-300 hover:-translate-y-0.5"
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