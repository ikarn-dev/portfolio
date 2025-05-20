'use client';

import { motion } from "framer-motion";
import { Home, Blocks, FolderGit2, Mail, Github, Twitter } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function BottomNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <TooltipProvider>
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1 p-1 rounded-full bg-background/50 backdrop-blur-md border border-primary/10 shadow-lg"
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => scrollToSection('home')}
              className="p-3 hover:bg-primary/5 rounded-full transition-colors"
            >
              <Home className="size-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => scrollToSection('skills')}
              className="p-3 hover:bg-primary/5 rounded-full transition-colors"
            >
              <Blocks className="size-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Skills</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => scrollToSection('projects')}
              className="p-3 hover:bg-primary/5 rounded-full transition-colors"
            >
              <FolderGit2 className="size-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Projects</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => scrollToSection('contact')}
              className="p-3 hover:bg-primary/5 rounded-full transition-colors"
            >
              <Mail className="size-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact</p>
          </TooltipContent>
        </Tooltip>

        <div className="mx-1 h-5 w-px bg-primary/10" />

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://github.com/ikarn-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-primary/5 rounded-full transition-colors"
            >
              <Github className="size-5" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>GitHub</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://x.com/iKK6600"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-primary/5 rounded-full transition-colors"
            >
              <Twitter className="size-5" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>X (Twitter)</p>
          </TooltipContent>
        </Tooltip>

        <div className="mx-1 h-5 w-px bg-primary/10" />
        
        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <ThemeToggle />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Toggle theme</p>
          </TooltipContent>
        </Tooltip>
      </motion.nav>
    </TooltipProvider>
  );
} 