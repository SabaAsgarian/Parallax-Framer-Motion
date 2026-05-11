"use client";


import Image from "next/image";
import useParallax from "../hooks/useParallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import d from '../../public/4.png'
import e from '../../public/5.jpg'
import { Box } from "@mui/material";

const Page: React.FC = () => {
    const stackedRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress: stackedProgress } = useScroll({
        target: stackedRef,
        offset: ["start start", "end start"],
    });
    const stackedY = useTransform(stackedProgress, [0, 1], ["100%", "0%"]);

    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <section className="relative bg-[#050816] px-6 py-32 md:px-10 ">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.15),transparent_55%),radial-gradient(circle_at_bottom,rgba(145,94,255,0.18),transparent_60%)]" />
            <div className="mx-auto flex max-w-6xl flex-col gap-20">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                        ADVANCED MOTION LAB
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
                        More{" "}
                        <span className="bg-linear-to-r from-[#00E5FF] to-[#915EFF] bg-clip-text text-transparent">
                            Framer Motion
                        </span>{" "}
                        tricks on one long scroll.
                    </h2>
                </motion.div>

                {/* Row 1: Keyframe looping animation */}
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-50">
                            4. Keyframes + infinite loop
                        </h3>
                        <p className="text-sm text-slate-300">
                            You can pass arrays into{" "}
                            <code className="rounded bg-slate-900 px-1.5 py-0.5 text-xs">
                                animate
                            </code>{" "}
                            to create keyframe animations. Here we pulse and rotate a card
                            on a continuous loop.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <motion.div
                            className="w-full max-w-xs rounded-3xl border border-slate-800 bg-[#020617] p-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, -2, 0],
                                boxShadow: [
                                    "0 0 0 rgba(0,229,255,0.0)",
                                    "0 0 45px rgba(0,229,255,0.45)",
                                    "0 0 0 rgba(0,229,255,0.0)",
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                                KEYFRAMES
                            </p>
                            <p className="mt-3 text-base font-semibold text-slate-50">
                                Pulsing card
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                The animation goes through three steps and then repeats
                                forever.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Row 2: Drag interactions */}
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    <div className="order-2 space-y-4 md:order-1">
                        <h3 className="text-lg font-semibold text-slate-50">
                            5. Drag interactions
                        </h3>
                        <p className="text-sm text-slate-300">
                            Framer Motion lets you make any element draggable. Below, the
                            glowing orb can be dragged left/right within soft constraints.
                        </p>
                    </div>
                    <div className="order-1 flex items-center justify-center md:order-2">
                        <motion.div
                            className="relative h-40 w-full max-w-md rounded-3xl border border-slate-800 bg-linear-to-r from-[#020617] via-[#020617] to-[#020617] p-4"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="absolute inset-x-6 bottom-10 h-1 rounded-full bg-slate-800" />
                            <motion.div
                                drag="x"
                                dragConstraints={{ left: -120, right: 120 }}
                                dragElastic={0.3}
                                whileTap={{ scale: 0.9 }}
                                className="absolute bottom-4 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-[#00E5FF] shadow-[0_0_40px_rgba(0,229,255,0.8)]"
                            />
                            <p className="absolute top-4 left-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                                DRAG ME
                            </p>
                        </motion.div>
                    </div>
                </div>


            </div>
            <section className="relative bg-[#020617]  md:px-10">
                <div className="mx-auto max-w-6xl">
                    {/* Row 3: Custom Parallax Pages */}
                    <div className="grid gap-10 md:grid-cols-2 md:items-center ">
                        <div className="space-y-4 mt-20">
                            <h3 className="text-lg font-semibold text-slate-50 ">
                                6. Custom Parallax Pages
                            </h3>
                            <p className="text-sm text-slate-300">
                                Framer Motion lets you make any page parallax by using the scroll position.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            {/* Placeholder for visual element if needed */}
                        </div>
                    </div>
                </div>
                            {/* Scroll indicator */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2">
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
                <div
                    ref={stackedRef}
                    className="mx-auto h-[230vh] max-w-5xl"
                >
                    {/* Page 1: Base card with an image */}
                    <div className="sticky top-0 flex h-screen items-center justify-center">
                        <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-[#020617] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src={d}
                                    alt="First card image"
                                    className="h-56 w-full object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-slate-50">
                                Card 1 — base layer
                            </h3>
                            <p className="mt-2 text-sm text-slate-300">
                                This card stays fixed while you scroll through this section.
                            </p>
                        </div>
                    </div>

                    {/* Page 2: Second card sliding on top of the first */}
                    <motion.div
                        className="pointer-events-none sticky top-0 flex h-screen items-center justify-center"
                        style={{ y: stackedY }}
                    >
                        <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-[#020617] p-6 shadow-[0_24px_90px_rgba(0,229,255,0.6)]">
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src={e}
                                    alt="Second card image"
                                    className="h-56 w-full object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-slate-50">
                                Card 2 — slides over card 1
                            </h3>
                            <p className="mt-2 text-sm text-slate-300">
                                As you scroll, this card moves up and covers the first one like a new page.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </section>
    );
}
export default Page;