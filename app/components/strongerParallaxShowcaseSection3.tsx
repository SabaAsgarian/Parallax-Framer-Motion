"use client";

import useParallax from "../hooks/useParallax";
import { motion } from "framer-motion";

const Page: React.FC = () => {
  const showcaseOffset = useParallax(0.25);

  // Derived values for nicer motion tuning (tweak numbers to taste)
  const backGradientY = showcaseOffset * -0.4;
  const backCardY = showcaseOffset * -0.3;
  const middleCardY = showcaseOffset * 0.1;
  const foregroundY = showcaseOffset * 0.40; // <- bigger multiplier = more noticeable
  const foregroundRotate = showcaseOffset * 0.01; // small rotation for parallax richness
  const foregroundBrightness = 1 + Math.min(0.18, Math.abs(showcaseOffset) / 800); // subtle brighten

  return (
    <>
      {/* Stronger Parallax Showcase Section */}
      <section className="relative overflow-hidden bg-[#050816] px-6 py-20 pb-55 md:px-10 md:py-28 md:pb-0 min-h-screen max-h-auto">
        {/* Back parallax gradient */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(0,229,255,0.18), transparent 60%), radial-gradient(circle at bottom right, rgba(145,94,255,0.25), transparent 60%)",
            transform: `translateY(${backGradientY}px)`,
            transition: "transform 0.12s linear",
          }}
        />

        <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center md:gap-16">
          {/* Text column */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400 md:text-sm">
              PARALLAX SHOWCASE
            </p>
            <h3 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
              Stronger{" "}
              <span className="bg-linear-to-r from-[#00E5FF] to-[#915EFF] bg-clip-text text-transparent">
                depth effect
              </span>{" "}
              with layered imagery.
            </h3>
            <p className="mt-4 text-sm text-slate-300 md:text-base">
              By offsetting each visual layer at a different speed, your
              sections feel alive as the user scrolls. You can apply this to
              hero illustrations, screenshots, or product cards.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300 md:text-base">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
                <span>Foreground cards move slightly faster than the page.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#915EFF]" />
                <span>Background glows move slower to feel far away.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>Entrance animations guide the eye and feel polished.</span>
              </li>
            </ul>
          </motion.div>

          {/* Image / card stack column */}
          <motion.div
            className="relative flex justify-center md:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Back card */}
            <motion.div
              className="absolute -left-4 top-6 hidden h-64 w-56 rounded-3xl border border-slate-800 bg-linear-to-br from-[#0b1020] to-[#141b2f] shadow-[0_0_40px_rgba(145,94,255,0.2)] sm:block md:h-72 md:w-60"
              style={{
                y: backCardY,
                transition: "transform 0.12s linear",
              }}
            />

            {/* Middle card */}
            <motion.div
              className="absolute right-0 top-0 hidden h-64 w-56 rounded-3xl border border-slate-800 bg-linear-to-tr from-[#050816] via-[#10172f] to-[#00E5FF26] shadow-[0_0_40px_rgba(0,229,255,0.18)] sm:block md:h-72 md:w-60"
              style={{
                y: middleCardY,
                transition: "transform 0.12s linear",
              }}
            />

            {/* Foreground main card (ENHANCED) */}
            <motion.div
              className="relative z-10 h-64 w-full max-w-xs rounded-3xl border border-slate-700/80 bg-[#050816] sm:h-72 sm:max-w-sm"
              // use numeric motion props for GPU-friendly transforms
              style={{
                y: foregroundY,
                rotate: foregroundRotate,
                filter: `brightness(${foregroundBrightness})`,
                transition: "filter 0.12s linear",
              }}
              whileHover={{
                y: foregroundY - 10,
                scale: 1.05,
                rotate: foregroundRotate - 0.9,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
            >
              {/* animated subtle glow behind foreground card */}
              <motion.div
                aria-hidden
                className="absolute -inset-3 rounded-3xl -z-10"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,229,255,0.06), rgba(145,94,255,0.06))",
                  filter: `blur(${Math.min(24, Math.abs(foregroundY) / 6)}px)`,
                  transform: `translateY(${foregroundY * -0.25}px)`,
                  opacity: Math.min(0.95, 0.35 + Math.abs(foregroundY) / 700),
                }}
              />

              <div className=" relative h-full w-full overflow-hidden rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.7)]">
                {/* Simulated "screenshot" */}
                <div className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#020617] to-[#020617]" />
                <div className="relative flex h-full flex-col justify-between p-5">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.23em] text-slate-400">
                      LIVE PREVIEW
                    </p>
                    <h4 className="mt-2 text-lg font-semibold text-slate-50">
                      Parallax site section
                    </h4>
                    <p className="mt-2 text-xs text-slate-300/90">
                      Stronger movement in this slice of the page, similar to
                      what you see on premium SaaS landing pages.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="h-1.5 w-8 rounded-full bg-linear-to-r from-[#00E5FF] to-[#915EFF]" />
                      <span className="h-1.5 w-5 rounded-full bg-slate-600" />
                    </div>
                    <span className="rounded-full border border-slate-700/80 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300">
                      Scroll to feel it
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Page;
