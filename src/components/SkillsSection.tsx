'use client';

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "HTML5",
  "TailwindCSS",
  "Shadcn",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "SQL",
  "RDBMS",
  "DBMS",
  "Supabase",
  "Firebase",
  "Prisma",
  "REST API",
  "Ethers.js",
  "Solana Web3.js",
  "Zustand",
  "Git",
  "Github",
  "Vercel"
];

const SkillsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -6 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-bold">Skills</h2>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-1.5"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill}
            variants={item}
          >
            <Badge 
              variant="default" 
              className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary/15 hover:bg-primary/25 border border-primary/20 text-foreground shadow-sm"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection; 