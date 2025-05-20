'use client';

import { motion } from "framer-motion";
import ProjectsSection from "@/components/ProjectsSection";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";
import SkillsSection from "@/components/SkillsSection";
import { Mail } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
};

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const greeting = "Hi, I'm ";
  const name = "Karan";
  const description = [
    "• Full Stack Developer crafting impactful web applications",
    "• Passionate about solving real-world problems through code",
    "• Always exploring new technologies and pushing boundaries",
    "• Proficient in modern web development stack",
    "• Open to exciting opportunities and collaborations"
  ].join("\n");

  return (
    <main className="relative min-h-screen w-full">
      {/* Hero Section */}
      <section id="home" className="min-h-[70vh] w-full flex items-center">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <h1 className="relative text-3xl sm:text-5xl xl:text-6xl/none font-bold tracking-tighter">
                {greeting.split("").map((char, index) => (
                  <motion.span
                    key={`greeting-${index}`}
                    initial={{ opacity: 0, y: 50, rotate: 10 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.05,
                      type: "spring",
                      damping: 12,
                      stiffness: 100
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <span className="relative inline-block">
                  {name.split("").map((char, index) => (
                    <motion.span
                      key={`name-${index}`}
                      initial={{ opacity: 0, y: 50, rotate: 10 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: (greeting.length + index) * 0.05,
                        type: "spring",
                        damping: 12,
                        stiffness: 100
                      }}
                      className="inline-block font-['Roboto'] font-bold text-4xl sm:text-6xl xl:text-7xl text-primary"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ 
                duration: 1, 
                delay: name.length * 0.05,
                ease: [0.33, 1, 0.68, 1]
              }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl space-y-2 whitespace-pre-line leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (name.length * 0.05) + 0.2 }}
              className="flex gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="rounded-full bg-primary/90 hover:bg-primary cursor-pointer glow-button"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="rounded-full cursor-pointer glow-button"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div 
        className="container max-w-3xl mx-auto px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="mb-20"
          variants={fadeInUp}
        >
          <SkillsSection />
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="mb-20"
          variants={fadeInUp}
        >
          <ProjectsSection />
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="mb-20"
          variants={fadeInUp}
        >
          <div className="flex min-h-0 flex-col gap-y-3">
            <motion.div variants={fadeInUp}>
              <h2 className="text-xl font-bold">Contact</h2>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <a 
                href="mailto:ikarn.dev@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
                <Mail className="size-4" />
                <span>ikarn.dev@gmail.com</span>
        </a>
            </motion.div>
    </div>
        </motion.section>
      </motion.div>

      {/* Bottom Navigation */}
      <BottomNav />
    </main>
  );
}
