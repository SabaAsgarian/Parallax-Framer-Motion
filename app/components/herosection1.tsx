"use client";

import { useEffect, useRef, useState } from "react";


import useParallax from "../hooks/useParallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@mui/material";



const Page: React.FC = () => {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const heroOffset =useParallax(0.4);
    const floatingOrbOffset = useParallax(0.6);
  return (
    <>
     <div
        className="pointer-events-none fixed -right-24 -top-24 z-0 h-52 w-52 rounded-full bg-[#00e5ff] blur-sm md:h-100 md:w-100"
        style={{
          // Multiply scroll by bigger numbers to see the motion across the entire scroll
          transform: `translate(${floatingOrbOffset * -4}px, ${
            floatingOrbOffset * 1.5
          }px)`,
          transition: "transform 0.08s linear",
        }}
      />
         <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center md:px-10"
      >
        {/* Background gradient */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#00E5FF33,transparent_60%),radial-gradient(circle_at_bottom,#915EFF33,transparent_60%)]"
          style={{
            transform: `translateY(${heroOffset * -1}px)`,
            transition: "transform 0.1s linear",
          }}
        />

        {/* Floating blurred orb */}
        <div
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-100 w-100 rounded-full bg-[#00E5FF33] blur-lg"
          style={{
            transform: `translateY(${heroOffset * 0.6}px)`,
            transition: "transform 0.1s linear",
          }}
        />

        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 md:text-sm">
            NEXT.JS • TYPESCRIPT • TAILWIND • MUI
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
            Build a{" "}
            <span className="bg-linear-to-r from-[#00E5FF] to-[#915EFF] bg-clip-text text-transparent">
              Parallax Experience
            </span>{" "}
            for the Modern Web.
          </h1>
          <p className="mt-6 text-sm text-slate-300 md:text-lg">
            Smooth scroll effects, layered gradients, and delightful motion—
            all powered by Next.js, Tailwind CSS, and Material UI.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="rounded-full px-8 py-2 font-semibold normal-case shadow-[0_0_40px_rgba(0,229,255,0.4)]"
              >
                Get Started
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className="rounded-full border-slate-500 px-8 py-2 font-semibold normal-case"
              >
                View Code
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-xs text-slate-400">
            <span>Scroll</span>
            <div className="h-12 w-2.5 overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-8 w-full animate-bounce bg-linear-to-b from-[#00E5FF] to-transparent"
                style={{ animationDuration: "1.4s" }}
              />
            </div>
          </div>
        </div>
      </section>
        
       
     
    </>
  );
}
export default Page;