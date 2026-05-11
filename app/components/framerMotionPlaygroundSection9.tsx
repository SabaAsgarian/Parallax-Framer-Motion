"use client";
import { useState } from "react";
import useParallax from "../hooks/useParallax";
import { motion } from "framer-motion";

const Page: React.FC = () => {
  return (
    <section className='relative bg-[#020617] px-6 py-28 md:px-10 md:py-32'>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(15,23,42,1),transparent_65%)]" />
      <div className="mx-auto max-w-6xl space-y-12">
        <motion.div className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">FRAMER MOTION PLAYGROUND</p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">Learn the{" "}
            <span className="bg-linear-to-r from-[#00E5FF] to-[#915EFF] bg-clip-text text-transparent">core animation patterns</span>{" "}
            used on this page.


          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="">1. Variants + staggered children</h3>
            <p className="text-sm text-slate-300">Variants let you define named animation states for a group. You animate the parent once and{" "}
              <span className="font-semibold text-slate-100">
                all children follow with a stagger.</span></p>
          </div>
          <motion.ul
            // Parent variants: defines "hidden" and "show" states for the whole list
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  // Stagger each child by 0.12s
                  staggerChildren: 0.12,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-3"
          >
            {[
              "Parent controls all children", "Each child has its own variant", "StaggerChildren animates them in order"
            ].map((item) => (

              <motion.li key={item}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  show: { opacity: 1, x: 0 }
                }}
                className="rounded-xl border border-slate-800 bg-[#020617]/90 px-4 py-3 text-sm text-slate-200"
              >
                {item}
              </motion.li>
            ))}

          </motion.ul>
        </div>
        {/* Example 2: Hover / tap interactions */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="order-2 space-y-4 md:order-1">
            <h3>2. Hover & tap states</h3>
            <p className="text-sm text-slate-300">
              <code className="rounded bg-slate-900 px-1.5 py-0.5 text-xs">
                whileHover
              </code>{" "}
              and{" "}
              <code className="rounded bg-slate-900 px-1.5 py-0.5 text-xs">
                whileTap
              </code>{" "}
              are the easiest way to add microinteractions to buttons and
              cards.
            </p>
          </div>
          <div className="order-1 flex items-center justify-center md:order-2">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.97, rotate: 5 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="w-full max-w-xs rounded-3xl border border-slate-800 bg-linear-to-tr from-[#020617] via-[#020617] to-[#00E5FF22] p-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.7)]"

            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                INTERACTION
              </p>
              <p className="mt-3 text-base font-semibold text-slate-50">
                Hover and press me
              </p>
              <p className="mt-2 text-sm text-slate-300">
                This is the same pattern used on your main CTAs in the hero
                section.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Example 3: Layout animation on toggle */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-10">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-semibold text-slate-50">
              3. Layout animations
            </h3>
            <p className="text-sm text-slate-300">
              When you add the{" "}
              <code className="rounded bg-slate-900 px-1.5 py-0.5 text-xs">
                layout
              </code>{" "}
              prop, Framer Motion smoothly animates between size and position
              changes, instead of jumping.
            </p>
            <p className="text-sm text-slate-300">
              This is great for FAQs opening/closing, tabs, or cards moving
              around.
            </p>
          </motion.div>
          <LayoutExample />
        </div>

      </div>



    </section>
  );
}
export default Page;
function LayoutExample() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      // layout tells Framer Motion to animate between size/position changes
      layout
      className="rounded-3xl border border-slate-800 bg-[#020617]/95 p-5 text-sm text-slate-200 shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
    >
      <motion.button
        layout
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-base font-semibold text-slate-50">
          Click to {open ? "collapse" : "expand"}
        </span>
        <motion.span
          // Animate rotation of the chevron when we toggle
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-lg"
        >
          &gt;
        </motion.span>
      </motion.button>
      {open && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mt-3 text-xs text-slate-300 md:text-sm"
        >
          This content smoothly expands and collapses because the parent and
          child use the <code>layout</code> prop, so size changes are animated
          instead of jumping.
        </motion.div>
      )}
    </motion.div>
  );
}