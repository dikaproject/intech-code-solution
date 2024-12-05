"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CodeSnippet from "./CodeSnippet";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-[#0D0C22] pt-24"
    >
      {/* Galaxy background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0D0C22] to-[#0D0C22]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[url('/stars.png')] opacity-30"
        />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 bg-white rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.25,
              }}
              animate={{
                y: [null, "-100%"],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Solusi Digital Terpercaya
              </span>
              <br />
              <span className="text-white">Untuk Tugas dan Project</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-xl max-w-2xl"
            >
              Jasa pembuatan website & aplikasi profesional dengan source code premium siap pakai.
              Solusi lengkap untuk kebutuhan digital bisnis atau menyelasaikan tugas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full text-white font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10">Source Code Siap Pakai</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-500 rounded-full text-white font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10">Jasa Coding</span>
                <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </div>

          {/* Code Snippets Section */}
          <div className="relative min-h-[500px] lg:h-auto lg:block">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0 relative h-full">
    {/* First snippet - top right */}
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative lg:absolute lg:top-0 lg:left-20 w-full lg:w-80"
>
  <CodeSnippet className="transform rotate-0 lg:-rotate-6">
    {`function createInnovation() {
  const project = new Project();
  project.implement(latest_tech);
  return project.deploy();
}`}
  </CodeSnippet>
</motion.div>

{/* Second snippet - right middle */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="relative lg:absolute lg:top-48 lg:right-0 w-full lg:w-72"
>
  <CodeSnippet className="transform rotate-0 lg:rotate-6">
    {`const techStack = {
  frontend: ["React", "Next.js"],
  backend: ["Node", "Python"],
  database: "MongoDB",
  deployment: "Cloud"
};`}
  </CodeSnippet>
</motion.div>

{/* Third snippet - bottom left */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="relative lg:absolute lg:top-96 lg:left-32 w-full lg:w-64"
>
</motion.div>
            </div>
            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="relative lg:absolute lg:bottom-0 lg:right-10 w-full bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 mt-8 lg:mt-0"
    >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-sm text-gray-400">
                  Proyek Terselesaikan
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-sm text-gray-400">
                  Kepuasan Pelanggan
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
